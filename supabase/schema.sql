-- Ejecutar en Supabase > SQL Editor
create table if not exists public.ideas (
  id bigint generated always as identity primary key,
  title text not null check (char_length(title) between 3 and 80),
  author text not null check (char_length(author) between 1 and 30),
  votes int not null default 0,
  created_at timestamptz not null default now()
);

alter table public.ideas enable row level security;

create policy "lectura publica" on public.ideas for select using (true);
create policy "insertar sin votos" on public.ideas for insert with check (votes = 0);
-- No hay policy de UPDATE/DELETE: los votos solo suben vía la función.

create or replace function public.vote_idea(idea_id bigint) returns void
language sql security definer set search_path = public as $$
  update public.ideas set votes = votes + 1 where id = idea_id;
$$;
grant execute on function public.vote_idea(bigint) to anon;
