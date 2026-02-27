# CLAUDE.md Report

## Finding

**No CLAUDE.md file exists in this repository.**

A search of the entire repository (`pedagogue-site`) found no `CLAUDE.md`, `.claude`, or similarly named file in any directory.

## What This Means

A `CLAUDE.md` file is used to provide persistent instructions to Claude Code when working within a repository. It can contain:

- **Project context** — description of the project, tech stack, architecture
- **Build & test commands** — how to build, lint, and test the project
- **Code style preferences** — formatting conventions, naming rules, patterns to follow or avoid
- **Workflow instructions** — branching strategy, commit message format, PR conventions
- **File structure guidance** — where to find key code, what directories are for
- **Constraints** — things Claude should never do, files to avoid modifying, etc.

Since no `CLAUDE.md` is present, there are **no project-specific instructions** guiding Claude Code's behavior in this repository beyond the defaults.

## Recommendation

Consider adding a `CLAUDE.md` to the project root to help Claude Code work more effectively with this Next.js/Tailwind CSS codebase. At minimum it could document:

- How to install dependencies (`npm install` or `pnpm install`)
- How to run the dev server, build, and lint
- Any architectural decisions or conventions specific to this project
