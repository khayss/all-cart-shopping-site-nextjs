"use client";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (ref.current?.contains(e.target as Node)) return;
      setShowHamburger(false);
    };
    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="nav-main">
      <div
        className="nav-hamburger"
        onClick={() => setShowHamburger((prev) => !prev)}
        ref={ref}
      >
        {showHamburger ? <CloseIcon /> : <MenuIcon />}
      </div>
      <ul
        className={`${
          showHamburger ? "" : "hidden"
        } fixed md:static md:flex md:flex-row top-16 left-0 h-36 w-dvw flex flex-col items-start justify-center md:gap-x-16 bg-slate-100 md:h-full md:items-center
`}
      >
        <li className="nav-one-ul-li">
          <Link href={"/products"} className="nav-one-links">
            Products
          </Link>
        </li>
        <li className="nav-one-ul-li">
          <Link href={"/categories"} className="nav-one-links">
            Categories
          </Link>
        </li>
        <li className="nav-one-ul-li">
          <Link href={"tracking"} className="nav-one-links">
            Tracking
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
