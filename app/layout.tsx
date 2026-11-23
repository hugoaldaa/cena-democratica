import "./globals.css";
import type { ReactNode } from "react";

export const metadata = { title: "Cena Democrática", description: "Propón y vota qué cenamos hoy" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
