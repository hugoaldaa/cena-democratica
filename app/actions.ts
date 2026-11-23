"use server";
import { revalidatePath } from "next/cache";
import { getSupabase } from "@/lib/supabase";
import { validateIdea } from "@/lib/validate";

export async function addIdea(formData: FormData) {
  const parsed = validateIdea({ title: formData.get("title"), author: formData.get("author") });
  if (!parsed.ok) return;
  const db = getSupabase();
  if (!db) return;
  await db.from("ideas").insert(parsed.value);
  revalidatePath("/");
}

export async function voteIdea(formData: FormData) {
  const id = Number(formData.get("id"));
  if (!Number.isInteger(id) || id <= 0) return;
  const db = getSupabase();
  if (!db) return;
  await db.rpc("vote_idea", { idea_id: id });
  revalidatePath("/");
}
