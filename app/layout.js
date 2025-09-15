import { Outfit, Ovo } from "next/font/google";

import "./globals.css";
import PageTransition from "./components/PageTransition";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-6 overflow-x-hidden bg-[#f7f3ed] dark:bg-[var(--color-darkTheme)] dark:[background-image:var(--bg-darkTheme)] dark:text-white`}
      >
        <PageTransition>
          <Navbar />
         {children}
         <Footer />
        </PageTransition>
      </body>
    </html>
  );
}