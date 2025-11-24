import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "IMEM Lifts Norway | Heisløsninger av høy kvalitet",
    template: "%s | IMEM Lifts Norway",
  },
  description: "IMEM Lifts Norway er en totalleverandør innen heis - installasjon, service, vedlikehold og modernisering. Europeisk kvalitet med lokal ekspertise.",
  keywords: ["heis", "heisservice", "heisinstallasjon", "vedlikehold", "modernisering", "IMEM", "Norge", "elevator"],
  authors: [{ name: "IMEM Lifts Norway AS" }],
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://imemlifts.no",
    siteName: "IMEM Lifts Norway",
    title: "IMEM Lifts Norway | Heisløsninger av høy kvalitet",
    description: "IMEM Lifts Norway er en totalleverandør innen heis - installasjon, service, vedlikehold og modernisering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
