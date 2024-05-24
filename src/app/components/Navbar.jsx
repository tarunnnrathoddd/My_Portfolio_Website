"use client";
import React from "react";
import { useState } from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import Image from "next/image";
import MenuOverlay from "./MenuOverlay";
const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed mx-auto top-0 right-0 bg-[#121212] bg-opacity-100 left-0 opacity-80 z-10 ">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
         className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold dark:text-gray text-white"
        >
          PORTFOLIO
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center  px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Image
                src="/images/menu.png"
                alt="menu image"
                width={30}
                height={20}
              />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center  px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Image
                src="/images/cross.png"
                alt="cross image"
                width={20}
                height={20}
              />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 gap-3 ">
            {navLinks.map((link, index) => {
              return (
                <li className="text-center mx-auto" key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              );
            })}
          </ul>
        </div>
        {navbarOpen ? <MenuOverlay /> : null}
      </div>
    </nav>
  );
};

export default Navbar;
