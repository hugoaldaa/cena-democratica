export type IdeaInput = { title: string; author: string };
export type Result =
  | { ok: true; value: IdeaInput }
  | { ok: false; error: string };

export function validateIdea(input: { title?: unknown; author?: unknown }): Result {
  const title = typeof input.title === "string" ? input.title.trim() : "";
  const author = typeof input.author === "string" ? input.author.trim() : "";
  if (title.length < 3 || title.length > 80) return { ok: false, error: "El plato debe tener entre 3 y 80 caracteres." };
  if (author.length < 1 || author.length > 30) return { ok: false, error: "El nombre debe tener entre 1 y 30 caracteres." };
  return { ok: true, value: { title, author } };
}
