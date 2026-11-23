import { describe, it, expect } from "vitest";
import { formatDateES } from "../lib/format";

describe("formatDateES", () => {
  it("formatea una fecha válida en español (día mes año, HH:mm)", () => {
    expect(formatDateES("2026-11-23T15:30:00")).toBe("23 nov 2026, 15:30");
  });
  it("devuelve null para una fecha inválida", () => {
    expect(formatDateES("no-es-una-fecha")).toBe(null);
  });
  it("devuelve null para null, undefined y cadena vacía", () => {
    expect(formatDateES(null)).toBe(null);
    expect(formatDateES(undefined)).toBe(null);
    expect(formatDateES("")).toBe(null);
  });
});
