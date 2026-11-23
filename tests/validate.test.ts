import { describe, it, expect } from "vitest";
import { validateIdea } from "../lib/validate";

describe("validateIdea", () => {
  it("acepta datos válidos y recorta espacios", () => {
    expect(validateIdea({ title: "  Tortilla  ", author: " Ana " })).toEqual({ ok: true, value: { title: "Tortilla", author: "Ana" } });
  });
  it("rechaza título corto", () => expect(validateIdea({ title: "ab", author: "Ana" }).ok).toBe(false));
  it("rechaza título largo", () => expect(validateIdea({ title: "x".repeat(81), author: "Ana" }).ok).toBe(false));
  it("rechaza autor vacío", () => expect(validateIdea({ title: "Paella", author: "  " }).ok).toBe(false));
  it("rechaza tipos no string", () => expect(validateIdea({ title: 5, author: null }).ok).toBe(false));
});
