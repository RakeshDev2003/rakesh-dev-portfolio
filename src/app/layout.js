import { Manrope } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: portfolioData.seo.title,
  description: portfolioData.seo.description,
  keywords: portfolioData.seo.keywords,
  openGraph: {
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans antialiased text-slate-900">
        {children}
      </body>
    </html>
  );
}
