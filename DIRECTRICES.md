# DIRECTRICES (las exige `testing`, las cumple `develop`)

- **D1 Build verde**: `npm run typecheck`, `npm test` y `npm run build` terminan sin errores.
- **D2 TypeScript estricto**: sin `any`, sin `@ts-ignore`.
- **D3 Validación**: toda entrada de usuario pasa por `lib/validate.ts` antes de llegar a Supabase.
- **D4 Tests**: toda función de `lib/` tiene tests de caso válido, inválido y borde.
- **D5 Secretos**: ninguna clave en el repo; `.env*` ignorado; solo `.env.example`. Solo se usa la anon key pública.
- **D6 Seguridad de BD**: RLS activado; sin policies de UPDATE/DELETE para anon; votos solo por función `vote_idea`.
- **D7 Errores**: la UI muestra un mensaje si falla la carga o falta configuración; nunca pantalla en blanco.
- **D8 Accesibilidad**: inputs con `label`, botones con texto o `aria-label`, foco visible, `lang="es"`.
- **D9 Responsive**: usable a 360px de ancho sin scroll horizontal.
- **D10 Mutaciones**: solo con Server Actions; ninguna consulta a BD desde el cliente.
- **D11 Bitácora**: `docs/BITACORA.md` registra cada iteración.
