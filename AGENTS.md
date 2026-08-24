# AGENTS.md

## Project purpose

This repository hosts the enterprise R&D–patent development and patent-market platform. Preserve traceability between business requirements, R&D projects, intellectual-property assets, approvals, and marketplace activity.

## Working rules

1. Read `README.md` and the relevant specification before changing code.
2. Work on a feature branch; do not commit directly to `main`.
3. Keep changes focused and avoid unrelated refactoring.
4. Never commit credentials, personal data, unpublished inventions, or confidential patent material.
5. Prefer typed interfaces, explicit validation, and auditable state transitions.
6. Add or update tests for behavior changes.
7. Run available checks before completion:
   - `npm run lint`
   - `npm run test`
   - `npm run build`
8. If a command is unavailable because the application has not been scaffolded, state that clearly instead of inventing results.
9. Summarize changed files, validation results, assumptions, and remaining risks.
10. For schema, authentication, authorization, deployment, or data-retention changes, propose the design before implementing it.

## Architecture guardrails

- Keep UI, application logic, domain logic, and persistence boundaries separate.
- Treat role-based access control and audit logging as core requirements.
- Do not expose server-side secrets to browser code.
- Use migrations for database changes.
- Preserve backward compatibility unless an approved specification says otherwise.
