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
    <nav className="w-1/6 md:w-full md:h-1/2 flex md:block items-center text-gray-500">
      <div
        className="md:hidden border-2 rounded-md border-gray-500 px-0.5 cursor-pointer"
        onClick={() => setShowHamburger((prev) => !prev)}
        ref={ref}
      >
        {showHamburger ? <CloseIcon /> : <MenuIcon />}
      </div>
      <ul
        className={`${
          showHamburger ? "" : "hidden"
        } fixed md:static md:flex md:flex-row top-16 left-0 h-36 w-dvw flex flex-col items-start justify-center md:gap-x-6 bg-slate-100 md:h-full md:items-center`}
      >
        <li className="h-1/3 md:h-full md:border-0 flex items-center border-b-2 border-yellow-500 w-full md:w-auto hover:bg-yellow-500 md:hover:bg-inherit">
          <Link
            href={"/products"}
            className="w-full md:w-auto px-6 md:px-0 h-full flex items-center md:hover:text-yellow-500"
          >
            Products
          </Link>
        </li>
        <li className="h-1/3 md:h-full md:border-0 flex items-center border-b-2 border-yellow-500 w-full md:w-auto hover:bg-yellow-500 md:hover:bg-inherit">
          <Link
            href={"/categories"}
            className="w-full md:w-auto md:px-0 px-6 h-full flex items-center md:hover:text-yellow-500"
          >
            Categories
          </Link>
        </li>
        <li className="h-1/3 md:h-full md:border-0 flex items-center border-b-2 border-yellow-500 w-full md:w-auto hover:bg-yellow-500 md:hover:bg-inherit">
          <Link
            href={"tracking"}
            className="w-full md:w-auto md:px-0 px-6 h-full flex items-center md:hover:text-yellow-500"
          >
            Tracking
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
