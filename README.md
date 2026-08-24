# zehoss-cmd-pat-market

전사 R&D–특허개발 연계 및 특허거래 플랫폼 프로젝트입니다.

## Cloud development

이 저장소는 GitHub Codespaces와 Codex Cloud에서 동일한 기준으로 작업하도록 설정되어 있습니다.

### GitHub Codespaces

1. 저장소의 **Code → Codespaces → Create codespace on main**을 선택합니다.
2. 컨테이너 생성 후 브라우저 VS Code에서 작업합니다.
3. 애플리케이션이 구현되면 `3000`, `5173`, `8000` 포트를 자동 전달할 수 있습니다.
4. 모든 작업은 기능 브랜치와 Pull Request를 통해 반영합니다.

### Local setup inside the codespace

```bash
cp .env.example .env
```

실제 키와 접속정보는 `.env`에 입력하되 GitHub에 커밋하지 않습니다.

## Branch policy

- `main`: 검토·배포 가능한 안정 버전
- `develop`: 필요 시 통합 개발 브랜치
- `feature/<name>`: 기능 개발
- `fix/<name>`: 오류 수정
- `chore/<name>`: 설정·유지보수

## Codex Cloud

Codex에서 GitHub 저장소를 연결한 뒤 이 저장소용 Cloud Environment를 생성합니다.

권장 setup script:

```bash
if [ -f pnpm-lock.yaml ]; then
  corepack enable
  pnpm install --frozen-lockfile
elif [ -f package-lock.json ]; then
  npm ci
elif [ -f package.json ]; then
  npm install
fi

if [ -f requirements.txt ]; then
  python -m pip install -r requirements.txt
fi
```

환경변수는 Environment settings에서 관리합니다. 실제 비밀값은 저장소 파일에 기록하지 않습니다.

## Current status

현재 저장소는 개발환경 표준화 단계이며 애플리케이션 소스는 아직 구성되지 않았습니다.
