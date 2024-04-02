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
      <ul className={`${showHamburger ? "" : "hidden"} nav-ul-1`}>
        <li>
          <Link
            href={"/products"}
            className="nav-one-links"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href={"/categories"}
            className="nav-one-links"
          >
            Categories
          </Link>
        </li>
        <li>
          <Link
            href={"tracking"}
            className="nav-one-links"
          >
            Tracking
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
