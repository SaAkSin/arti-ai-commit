import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    // 1. API 키 저장 명령어 등록
    let setKeyDisposable = vscode.commands.registerCommand('arti-ai-commit.setApiKey', async () => {
        const apiKey = await vscode.window.showInputBox({
            prompt: 'Gemini API Key를 입력하세요. (OS의 안전한 키 체인에 암호화되어 저장됩니다)',
            password: true, // 화면에 입력값이 노출되지 않도록 마스킹 처리
            ignoreFocusOut: true
        });

        if (apiKey) {
            await context.secrets.store('geminiApiKey', apiKey);
            vscode.window.showInformationMessage('Gemini API Key가 안전하게 저장되었습니다.');
        }
    });

    // 2. 커밋 메시지 생성 명령어
    let generateDisposable = vscode.commands.registerCommand('arti-ai-commit.generateMessage', async (...args: any[]) => {
        try {
            const gitExtension = vscode.extensions.getExtension('vscode.git');
            if (!gitExtension) throw new Error('Git 익스텐션을 찾을 수 없습니다.');

            const git = gitExtension.exports.getAPI(1);
            if (git.repositories.length === 0) {
                vscode.window.showErrorMessage('열려있는 Git 레포지토리가 없습니다.');
                return;
            }

            let repository = git.repositories[0];

            // 다중 레포지토리(Worktree 등) 처리
            if (git.repositories.length > 1) {
                // 1. SCM 뷰에서 클릭한 경우 인자(SourceControl)로 넘어온 URI 확인
                const scm = args && args[0];
                if (scm && scm.rootUri) {
                    const found = git.repositories.find((r: any) => r.rootUri.toString() === scm.rootUri.toString());
                    if (found) repository = found;
                } else {
                    // 2. 인자가 없으면 포커스된(선택된) 레포지토리 찾기
                    const selected = git.repositories.find((r: any) => r.ui && r.ui.selected);
                    if (selected) {
                        repository = selected;
                    } else {
                        // 3. 현재 활성화된 에디터의 파일 경로를 기준으로 판별
                        const activeEditor = vscode.window.activeTextEditor;
                        if (activeEditor) {
                            const activeUri = activeEditor.document.uri.toString();
                            const found = git.repositories.find((r: any) => activeUri.startsWith(r.rootUri.toString()));
                            if (found) repository = found;
                        }
                    }
                }
            }

            const diff = await repository.diff(true);

            if (!diff) {
                vscode.window.showInformationMessage('Staging 영역에 변경사항이 없습니다. 먼저 파일을 Stage(+) 해주세요.');
                return;
            }

            // [변경점] SecretStorage에서 API Key 가져오기
            const apiKey = await context.secrets.get('geminiApiKey');

            if (!apiKey) {
                // 키가 없으면 설정 명령어를 실행하도록 안내
                const action = await vscode.window.showErrorMessage(
                    'Gemini API Key가 설정되지 않았습니다.',
                    'API Key 설정하기'
                );
                if (action === 'API Key 설정하기') {
                    vscode.commands.executeCommand('arti-ai-commit.setApiKey');
                }
                return;
            }

            await vscode.window.withProgress({
                location: vscode.ProgressLocation.SourceControl,
                title: "Gemini가 커밋 메시지를 생성 중입니다...",
                cancellable: false
            }, async () => {
                // [이 부분 추가] 동적 임포트로 모듈 불러오기
                const { GoogleGenAI } = await import('@google/genai');

                const ai = new GoogleGenAI({ apiKey: apiKey });
                const prompt = `
다음은 Git diff의 변경사항입니다. 이 코드를 분석하여 실무적인 Git 커밋 메시지를 작성해주세요.
Conventional Commits 형식(예: feat: 기능 추가, fix: 버그 수정 등)을 따르고, 반드시 한국어로 간결하고 명확하게 작성해주세요.
마크다운 코드 블록이나 부연 설명 없이, 바로 복사해서 쓸 수 있는 커밋 메시지만 출력해주세요.

Diff:
${diff}
                `;

                const response = await ai.models.generateContent({
                    model: 'gemini-flash-latest',
                    contents: prompt,
                });

                const commitMessage = response.text;

                if (commitMessage) {
                    repository.inputBox.value = commitMessage.trim();
                } else {
                    throw new Error('Gemini API로부터 빈 응답을 받았습니다.');
                }
            });

        } catch (error: any) {
            vscode.window.showErrorMessage(`오류 발생: ${error.message}`);
        }
    });

    context.subscriptions.push(setKeyDisposable);
    context.subscriptions.push(generateDisposable);
}

export function deactivate() { }