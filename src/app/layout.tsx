import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " main-body"
        }
      >
        <header className="header-main">
          <div className="header-1">
            <div>
              <Link
                href={"/"}
                className="header-logo"
              >
                <ShoppingBagIcon />
                <h1>AllCart</h1>
              </Link>
            </div>
            <div>
              <Link href={"/cart"}>
                <ShoppingCartIcon />
                <p></p>
              </Link>
            </div>
          </div>
          <NavBar />
        </header>
        <main className="h-full">{children}</main>
        <footer className="footer-main">
          <div className="flex justify-center">
            <Link href={"/"} className="flex leading-none items-end text-xl">
              <ShoppingBagIcon />
              <h1>AllCart</h1>
            </Link>
          </div>
          <div className="flex justify-center">
            &copy; {new Date().getFullYear()} — AllCart Inc.
          </div>
          <div className="flex justify-center">
            <p>
              Built with <FavoriteIcon type="" /> and {` `}
              <a href="https://nextjs.org" target="_blank">
                Next.js
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
