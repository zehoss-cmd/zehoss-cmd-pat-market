#!/usr/bin/env bash
set -euo pipefail

if [ -f pnpm-lock.yaml ]; then
  corepack enable
  pnpm install --frozen-lockfile
elif [ -f yarn.lock ]; then
  corepack enable
  yarn install --frozen-lockfile
elif [ -f package-lock.json ]; then
  npm ci
elif [ -f package.json ]; then
  npm install
fi

if [ -f requirements.txt ]; then
  python -m pip install --user -r requirements.txt
fi

echo "Cloud development environment is ready."
