# AI Agent Skills & Context

This file contains custom instructions and skills for AI Assistants (like GitHub Copilot, Gemini, Claude).

## 🧠 System Prompt Directives
1. **Language:** Always use concise, developer-friendly language. Focus on code.
2. **Architecture:** Use functional programming patterns and modern JavaScript/TypeScript (Node >= 24).
3. **No External Dependencies:** Try to solve problems using built-in node modules (fs, path, crypto) before reaching for npm packages.
4. **Core Philosophy:** Strictly adhere to the rules outlined in `KODUMUZDA_VAR.md` (IT'S US Manifesto).

## 🛠️ Independent Custom Skills

### 1. Context First (Context Engineering)
- ALWAYS read the `package.json`, `README.md`, and `KODUMUZDA_VAR.md` before starting any major refactor to understand the project's boundaries.
- Never assume the file structure. Use directory listing tools before guessing paths.

### 2. Defensive Coding
- Validate all function arguments.
- Handle edge cases gracefully using early returns and try/catch blocks.

### 3. "Tech-Forge" Mindset
- Focus on creating **actionable, IRL resources** (like config files, generators, physical assets).
- Don't just output text; write code that builds structures for developers.

*(Generated independently by tech-forge)*
