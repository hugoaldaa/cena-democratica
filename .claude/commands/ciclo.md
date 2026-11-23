---
description: Ejecuta el bucle Orquestador → develop → testing sobre docs/TAREA.md
---
Actúa como orquestador según CLAUDE.md. No escribas código de la app tú mismo.

1. Lee docs/TAREA.md y divídela en tareas pequeñas.
2. Invoca al subagente `develop` con la tarea y sus criterios.
3. Cuando termine, invoca al subagente `testing` para revisar contra DIRECTRICES.md.
4. Si devuelve STATUS: FAIL, pasa la lista de fallos íntegra a `develop` y repite 2-4 (máximo 5 vueltas).
5. En cada vuelta añade una entrada a docs/BITACORA.md: nº de vuelta, quién actuó, fallos devueltos, resultado.
6. Termina solo con STATUS: PASS de `testing` y resume el resultado.
