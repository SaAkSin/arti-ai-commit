# Change Log

All notable changes to the "arti-ai-commit" extension will be documented in this file.

## [0.0.7] - 2026-06-15

### Added
- **설정 기능 고도화**:
  - 사용자 정의 프롬프트(`customPrompt`) 입력란에 멀티라인 텍스트 지원을 추가하여 긴 프롬프트 작성을 용이하게 개선.
  - 메시지 분석/생성에 사용할 Gemini 모델 선택 설정 옵션(`model`) 추가 (Gemini Pro Latest, Gemini Flash Latest, Gemini Flash-Lite Latest 지원).

## [0.0.6] - 2026-06-15

### Added
- **사용자 정의 설정 기능**: VS Code 설정 UI를 통해 사용자 정의 프롬프트(`arti-ai-commit.customPrompt`) 및 단 한 줄의 커밋 메시지만 생성하는 단순 모드(`arti-ai-commit.simpleMode`) 기능 도입.
- **코드 품질 정제**: ESLint의 조건절 중괄호 누락 경고를 완벽히 해결하여 정적 분석 결과 신뢰성 확보.

## [0.0.5] - 2026-04-20

### Changed
- **패키지 빌드 동기화**: `package-lock.json` 및 `package.json` 릴리스 버전 불일치 수정 및 0.0.5 빌드 동기화.

## [0.0.4] - 2026-04-20

### Added
- **다중 저장소(Worktree 등) 환경 인식 개선**: 작업 영역 내 다중 Git 저장소가 존재할 때 활성 에디터 경로 및 SCM 포커스를 추적하여 올바른 레포지토리의 Diff를 추출하는 로직 구현.

## [0.0.3] - 2026-03-10

### Fixed
- **하위 호환성 개선**: Antigravity 및 구버전 VS Code(`1.107.0` 이상)에서도 사용할 수 있도록 엔진 요구 버전을 `^1.110.0`에서 `^1.107.0`으로 하향 조정.

## [0.0.2] - 2026-03-10

### Added
- **전문적인 아이콘 적용**: `git-ai-commit` 목적에 부합하는 프로페셔널한 모양의 새 앱 아이콘 교체 적용.
- **마켓플레이스 통합 배포 스크립트**: VS Code Marketplace와 Open VSX를 동시에 배포할 수 있는 단축 스크립트 추가.

## [0.0.1] - 2026-03-10

### Added

- **한국어 커밋 메시지 자동 생성**: Git Staging 영역의 Diff를 분석하여 Conventional Commits 형식의 실무적인 한국어 커밋 메시지를 생성하는 기능 도입.
- **안전한 API Key 관리**: VS Code의 내장 `SecretStorage`를 활용하여 Gemini API Key를 OS 키 체인에 암호화하여 저장 및 관리하는 명령어(`arti-ai-commit.setApiKey`) 추가.
- **동적 임포트 적용**: 확장이 처음 로드될 때 무거운 의존성(`@google/genai`)을 함께 불러오지 않고, 실제 커밋 생성 시점에 동적으로 임포트하여 성능 최적화.
