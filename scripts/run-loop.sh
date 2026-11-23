#!/usr/bin/env bash
# Ejecuta el bucle de agentes en modo no interactivo. Requiere: npm i -g @anthropic-ai/claude-code y haber hecho login.
set -euo pipefail
cd "$(dirname "$0")/.."
[ -d node_modules ] || npm install
claude -p "$(sed '1,/^---$/{/^---$/!d}; 1,/^---$/d' .claude/commands/ciclo.md)" \
  --permission-mode acceptEdits \
  --allowedTools "Task Read Write Edit Bash Glob Grep"
echo "Revisa docs/BITACORA.md y haz git log para ver las iteraciones."
