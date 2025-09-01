import { Outfit, Ovo } from "next/font/google";

import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload your background image */}
        <link rel="preload" as="image" href="/dark_bg.png" />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-6 overflow-x-hidden bg-gray-300 dark:bg-[var(--color-darkTheme)] dark:[background-image:var(--bg-darkTheme)] dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}