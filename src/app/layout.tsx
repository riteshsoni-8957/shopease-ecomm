import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Shop Ease",
  description:
    "Shop online at Shop Ease for men's and women's fashion, stylish clothing, and lifestyle products. Explore the latest trends at great prices with a seamless shopping experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
