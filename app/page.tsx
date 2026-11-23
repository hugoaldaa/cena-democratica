import { getSupabase } from "@/lib/supabase";
import { formatDateES } from "@/lib/format";
import { addIdea, voteIdea } from "./actions";

export const dynamic = "force-dynamic";

type Idea = {
  id: number;
  title: string;
  author: string;
  votes: number;
  created_at: string | null;
};

export default async function Home() {
  const db = getSupabase();
  let ideas: Idea[] = [];
  let error: string | null = null;

  if (!db) {
    error = "Falta configurar Supabase (variables de entorno).";
  } else {
    const { data, error: e } = await db
      .from("ideas")
      .select("id,title,author,votes,created_at")
      .order("votes", { ascending: false }).order("id", { ascending: true });
    if (e) error = "No se pudieron cargar los platos.";
    else ideas = (data ?? []) as Idea[];
  }

  return (
    <main>
      <h1>🍽️ Cena Democrática</h1>
      <p className="sub">Propón un plato y vota. Gana el más votado.</p>

      <form action={addIdea} className="card">
        <label>Plato
          <input name="title" required minLength={3} maxLength={80} placeholder="Tortilla de patatas" />
        </label>
        <label>Tu nombre
          <input name="author" required maxLength={30} placeholder="Ana" />
        </label>
        <button type="submit">Proponer</button>
      </form>

      {error && <p role="alert" className="error">{error}</p>}
      {!error && ideas.length === 0 && <p className="sub">Aún no hay propuestas. ¡Sé el primero!</p>}

      <ul>
        {ideas.map((i, idx) => (
          <li key={i.id} className="card row">
            <div>
              <strong>{idx === 0 && i.votes > 0 ? "🏆 " : ""}{i.title}</strong>
              <small>por {i.author}</small>
              {(() => {
                const fecha = formatDateES(i.created_at);
                return fecha ? <small aria-label="Fecha de la propuesta">{fecha}</small> : null;
              })()}
            </div>
            <form action={voteIdea}>
              <input type="hidden" name="id" value={i.id} />
              <button type="submit" aria-label={`Votar ${i.title}`}>👍 {i.votes}</button>
            </form>
          </li>
        ))}
      </ul>
    </main>
  );
}
