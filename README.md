# 🍽️ Cena Democrática

App de Next.js + Supabase donde se proponen y votan platos para la cena. Construida con 3 agentes de Claude Code.

## Agentes
| Agente | Archivo | Rol |
|---|---|---|
| Orquestador | `CLAUDE.md` (copia en `AGENTS.md` para Codex) | Reparte tareas y gestiona el bucle |
| Develop | `.claude/agents/develop.md` | Programa |
| Testing | `.claude/agents/testing.md` + `DIRECTRICES.md` | Revisa y devuelve fallos hasta PASS |

## Ejecutar el bucle (Claude Code)
Forma rápida: dentro de `claude`, escribe `/ciclo` (lee `docs/TAREA.md`).
Sin interfaz: `./scripts/run-loop.sh`. Comprueba con `/agents` que aparecen `develop` y `testing`.

Forma manual:
```bash
cd cena-democratica && claude
```
Prompt inicial:
> Lee CLAUDE.md. Revisa la app con el bucle develop → testing: lanza `testing` sobre el estado actual, pasa los fallos a `develop`, y repite hasta STATUS: PASS. Anota cada iteración en docs/BITACORA.md. Después añade la tarea: "mostrar fecha de cada propuesta".

## Puesta en marcha
1. Crea proyecto gratis en supabase.com → SQL Editor → pega `supabase/schema.sql` → Run.
2. `cp .env.example .env.local` y rellena URL y anon key (Settings › API).
3. `npm install && npm run dev`.

## Despliegue en Vercel (público)
1. Sube a GitHub (`.env.local` está ignorado).
2. vercel.com › Add New Project › importa el repo.
3. Environment Variables: `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Deploy. Luego **Settings › Deployment Protection › Vercel Authentication → Disabled** y guarda.
5. Comprueba la URL de producción (no la de preview) en ventana de incógnito.
