# Bitácora del bucle Orquestador → Develop → Testing
(Se rellena en cada iteración. Ver README para ejecutar el bucle real con Claude Code.)

## Iteración 1 — Mostrar fecha de cada propuesta bajo el autor (TAREA.md)
- Fecha: 2026-11-23
- Cambios:
  - Creado `lib/format.ts` con `formatDateES(iso: string | null | undefined): string | null` (puro, sin `any`): devuelve "dd mmm aaaa, HH:mm" en español o null si la fecha es inválida/faltante.
  - Creado `tests/format.test.ts` con caso válido, caso inválido y caso borde (null/undefined/"").
  - Modificado `app/page.tsx`: se selecciona `created_at` en la consulta de ideas; bajo el autor de cada tarjeta se muestra la fecha formateada solo si existe.
- Comandos: `npm run typecheck` ✓, `npm test` ✓ (8 tests), `npm run build` ✓.
- Revisión `testing` (DIRECTRICES D1–D11): fuente sin `any`, sin `@ts-ignore`, sin secretos; RLS y función `vote_idea` en `supabase/schema.sql`; validación en `lib/validate.ts`; mutaciones vía Server Actions; accesibilidad y responsive OK.
- Resultado: STATUS: PASS. Tarea de TAREA.md cerrada.
