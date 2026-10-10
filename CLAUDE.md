# CLAUDE.md

## Stack

- Vue 3 + Vue Router, built with Vite. Node version from `.nvmrc` (24).
- Tests: Vitest (`npm test`). Lint: ESLint (`npm run lint`). Build: `npm run build`.
- No Supabase, no environment variables.

## Deployment

- Hosted on **GitHub Pages**, not Netlify: https://jeroenoomsnl.github.io/recruitment-ipsum/
- `.github/workflows/ci.yml` runs lint, test and build on every PR and push; pushes to `master` deploy.
- PRs get no deploy preview. Check changes locally with `npm run dev` (or `npm run build && npm run preview`).
- Production `base` is `/recruitment-ipsum/` (see `vite.config.js`).

## Dependency updates

- Dependabot (`.github/dependabot.yml`) opens weekly PRs: minor/patch grouped, security updates in their own group, majors as separate PRs. New releases wait 3 days (14 for majors).
- The `dependabot-merge` job in `ci.yml` squash merges minor/patch Dependabot PRs after `build` passes, then dispatches CI on `master` to deploy (a `GITHUB_TOKEN` merge does not trigger the push workflow). Major PRs stay open for review at the ready gate.
- Dependabot PRs are not the active PR. Leave them alone unless CI fails or asked.
- Merge or rebase `master` into the active branch before marking it ready, since Dependabot merges can cause lockfile conflicts.

## Branching and PRs

- Trunk is `master`. Short-lived branches named `type/short-description` (e.g. `fix/footer-wrap`).
- One active PR per work session: later requests add one commit each to the same branch. Update the PR title and description only when the PR is declared ready.
- Squash merge only; GitHub deletes the branch after merge.
- Claude may branch, commit, push and open PRs. Merging is the owner's call unless asked.
- No Claude attribution anywhere: no `Co-Authored-By` trailers, no "Generated with Claude Code" footers.
- Developer-facing text (code comments, docs, commits, PRs) is in English. UI copy is also English.
- Never use em dashes in written content (UI copy, docs, commits, PRs).

## When a PR is declared ready

1. Dependency check: `npm outdated`, `npm audit --json`. Fix moderate+ vulnerabilities, apply patch/minor updates, defer non-essential majors. Commit as `chore(deps): ...`.
2. Run lint, full test suite and build once.
3. Run the `web-design-guidelines` audit on UI files touched by the PR.
4. Bump `package.json` version (semver, based on the whole PR diff).
5. Update PR title/description, do a single `gh pr checks`.

## Token efficiency

- Run scoped tests per request; full suite only at the ready gate.
- Don't poll CI, dev servers or long-running processes. Use quiet flags and summarize output.
- Never search `node_modules`, `dist` or `package-lock.json`.
- Prefer Sonnet for routine work; suggest Haiku for trivial tasks and a bigger model only for genuinely hard problems.
