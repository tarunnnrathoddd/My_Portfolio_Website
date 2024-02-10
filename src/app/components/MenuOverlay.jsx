import React from 'react'
import NavLink from './NavLink'

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

const MenuOverlay = () => {
  return (
    <ul className='flex flex-col items-center container py-4 md:flex-row md:justify-end md:py-0'>
      {navLinks.map((link, index) => {
        return (
          <li key={index} className='mb-4 md:mb-0 md:ml-4'>
            <NavLink href={link.path} title={link.title} />
          </li>
        );
      })}
    </ul>
  );
}

export default MenuOverlay;
