# Change Log

All notable changes to the "arti-ai-commit" extension will be documented in this file.

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
