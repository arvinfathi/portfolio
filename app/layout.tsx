import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Arvin Fathi - Full-Stack Software Engineer",
  description: "Portfolio of Arvin Fathi, a London-based Full-Stack Software Engineer specializing in scalable microservices, Event-Driven Architecture, and enterprise integration.",
  keywords: ["Full-Stack Software Engineer", "Python", "Django", "Rust", "TypeScript", "React", "Vue.js", "Laravel", "PostgreSQL", "AWS", "Kafka", "Terraform", "Microservices", "Event-Driven Architecture"],
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
