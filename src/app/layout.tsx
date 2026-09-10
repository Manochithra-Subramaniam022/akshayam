import type { Metadata } from "next";
import { Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";

const notoSansTamil = Noto_Sans_Tamil({
  variable: "--font-noto-sans-tamil",
  subsets: ["tamil", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "அக்‌ஷயம் திருமணத் தகவல் மையம்",
  description: "உங்கள் இல்லத்தின் இனிய உறவுக்கு நம்பிக்கையான துணை. சிறந்த வாழ்க்கைத்துணையை இணைத்து வருகிறோம்.",
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ta" className="scroll-smooth">
      <body className={`${notoSansTamil.className} min-h-screen flex flex-col bg-background text-foreground`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

// Trigger Vercel redeployment
