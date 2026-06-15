# Arti AI Commit

**Arti AI Commit**은 Google의 **Gemini API**를 활용하여 Git 변경 사항(Diff)을 분석하고, 실무적인 **Conventional Commits** 형식의 **한국어 커밋 메시지**를 자동으로 생성해 주는 VS Code 확장 프로그램입니다.

"커밋 메시지를 한국어로 쉽고 정확하게 작성한다"는 핵심 목표에 맞춰 설계되었습니다.

## 기능 (Features)

- **🇰🇷 한국어 커밋 메시지 자동 생성**: Git Staging 영역에 추가된 변경 사항을 바탕으로, 의미 있고 읽기 쉬운 한국어 커밋 메시지를 분석하여 소스 제어(Source Control) 입력창에 자동 반영합니다.
- **🔒 안전한 키 보관 (SecretStorage)**: 사용자의 Gemini API Key를 VS Code의 안전한 빌트인 시크릿 저장소에 암호화하여 저장합니다.

## 요구 사항 (Requirements)

- **VS Code 버전**: `1.107.0` 이상 (Antigravity 호환성 충족)
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

### 0.0.6
- **사용자 정의 설정 기능**: 사용자 지정 분석 프롬프트 및 단 한 줄 요약 커밋 생성 옵션 추가
- **ESLint 경고 제거**: 정적 분석을 통해 잠재적 결함 가능성이 있는 구문 정제 및 빌드 최적화

### 0.0.5
- 패키지 빌드 버전 일치화 (`package-lock.json` 수정)

### 0.0.4
- **다중 저장소(Worktree 등) 환경 인식 개선**: 작업 영역 내 다중 Git 저장소가 있는 경우, 활성 파일 경로/SCM 포커스 기준으로 타겟 저장소를 오동작 없이 식별하도록 로직 개선

### 0.0.3
- **구버전 VS Code 호환 패치**: 엔진 요구 사항을 `1.107.0` 이상으로 완화하여 하위 호환성 강화

### 0.0.2
- **프로페셔널 앱 아이콘 적용**: `git-ai-commit` 목적에 부합하는 아이콘 적용
- **다중 마켓플레이스 배포 최적화**: VS Code Marketplace와 Open VSX 동시 배포 스크립트 추가

### 0.0.1
- 초기 릴리스 (Gemini API 연동 자동 커밋 메시지 생성 및 SecretStorage 기반 API Key 보안 관리)

