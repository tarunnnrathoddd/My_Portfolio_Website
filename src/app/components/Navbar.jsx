"use client";
import React, { useState } from "react";
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
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gradient-to-r from-primary-500 to-secondary-600 opacity-90">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href={"/"} className="text-2xl md:text-4xl lg:text-6xl text-white font-bold">
          PORTFOLIO
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-white text-white hover:bg-white hover:text-black transition duration-300"
            >
              <Image
                src="/images/menu.png"
                alt="menu"
                width={30}
                height={20}
              />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-white text-white hover:bg-white hover:text-black transition duration-300"
            >
              <Image
                src="/images/cross.png"
                alt="close"
                width={20}
                height={20}
              />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} className="text-white text-lg hover:text-gray-300 transition duration-300" />
              </li>
            ))}
          </ul>
        </div>
        {navbarOpen ? <MenuOverlay /> : null}
      </div>
    </nav>
  );
};

export default Navbar;
