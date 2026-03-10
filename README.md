# Arti AI Commit

**Arti AI Commit**은 Google의 **Gemini API**를 활용하여 Git 변경 사항(Diff)을 분석하고, 실무적인 **Conventional Commits** 형식의 **한국어 커밋 메시지**를 자동으로 생성해 주는 VS Code 확장 프로그램입니다.

"커밋 메시지를 한국어로 쉽고 정확하게 작성한다"는 핵심 목표에 맞춰 설계되었습니다.

## 기능 (Features)

- **🇰🇷 한국어 커밋 메시지 자동 생성**: Git Staging 영역에 추가된 변경 사항을 바탕으로, 의미 있고 읽기 쉬운 한국어 커밋 메시지를 분석하여 소스 제어(Source Control) 입력창에 자동 반영합니다.
- **🔒 안전한 키 보관 (SecretStorage)**: 사용자의 Gemini API Key를 VS Code의 안전한 빌트인 시크릿 저장소에 암호화하여 저장합니다.

## 요구 사항 (Requirements)

- **VS Code 버전**: `1.110.0` 이상
- **API Key**: [Google AI Studio](https://aistudio.google.com/app/apikey)에서 발급받은 **Gemini API Key**가 필요합니다.

## 사용 방법 (Usage)

1. **API 키 설정**:
   - 명령어 팔레트(`Cmd+Shift+P` 또는 `Ctrl+Shift+P` (Windows/Linux))를 엽니다.
   - `Arti AI Commit: Set Gemini API Key` 명령어를 실행하고, 발급받은 Gemini API Key를 입력합니다.
2. **커밋 메시지 생성**:
   - 커밋할 파일들을 Git Staging 영역에 추가(`git add` 또는 소스 제어 뷰에서 `+` 버튼 클릭)합니다.
   - 소스 제어(Source Control) 뷰 상단의 메뉴에서 **`✨` 아이콘**을 클릭하거나, 명령어 팔레트에서 `Generate Commit Message (Gemini)`를 실행합니다.
   - 잠시 기다리면 분석된 커밋 메시지가 소스 제어 입력창에 자동으로 채워집니다!

## 릴리스 노트 (Release Notes)

### 0.0.1

- 초기 릴리스 (Initial release)
- Gemini API 연동 및 자동 커밋 메시지 생성 기능 추가
- VS Code SecretStorage를 활용한 API 키 보안 강화
