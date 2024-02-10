"use client";
import Link from "next/link";
import { useState } from "react";
const NavLink = ({ href, title }) => {
  const [navbarOpen, setNavbarOpen] = useState(true);

  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      onClick={() => setNavbarOpen(false)}
    >
      {title}
    </Link>
  );
};

export default NavLink;