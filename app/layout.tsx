import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Arvin Fathi - Software Engineer",
  description: "Portfolio of Arvin Fathi, Software Engineer specializing in Event-Driven Architecture, microservices, and distributed systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
