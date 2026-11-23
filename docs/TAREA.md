# Tarea pendiente para el equipo

**Mostrar la fecha de cada propuesta** en la lista, bajo el nombre del autor.

Criterios de aceptación:
- Se obtiene `created_at` de Supabase en la consulta.
- Formato español legible (ej. "23 nov 2026, 15:30") mediante una función pura en `lib/format.ts`.
- Si la fecha es inválida o falta, no se muestra nada (sin romper la página).
- La función tiene tests (caso válido, inválido, borde) en `tests/`.
- Cumple todo `DIRECTRICES.md`.
