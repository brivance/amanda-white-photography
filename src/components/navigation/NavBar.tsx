import React, { FC, useState } from 'react';

import Link from 'next/link';
import LogoutButton from '../buttons/LogoutButton';

interface NavItem {
  name: string;
  link: string;
}

const navItems: NavItem[] = [
  { name: 'HOME', link: '/' },
  { name: 'PORTFOLIO', link: '/portfolio' },
  { name: 'PRICES', link: '/' },
  { name: 'REVIEWS', link: '/' },
  { name: 'CONTACT', link: '/contact' },
  { name: 'LOGOUT', link: '/api/auth/signout' },
];

const NavBar: FC = () => {
  return (
    <nav className="text-black p-7 flex justify-between sticky top-0 z-10 px-10">
      <Link href="/" className="font-unbounded font-normal text-2xl">
        amanda white photography
      </Link>
      <ul className="flex list-none justify-end gap-10 p-0">
        {navItems.map((item, index) => (
          item.name === 'LOGOUT' ? (
            <LogoutButton key={index} />
          ) : (
            <li key={index}>
              <a href={item.link} className="font-gotu text-black no-underline text-lg font-normal">
                {item.name}
              </a>
            </li>
          )
        ))}
      </ul>
    </nav>
  );
};

export const HomeNavBar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white p-7 sticky top-0 z-10">

      <button
        className="block md:hidden text-black"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <ul className={`list-none gap-20 flex flex-col md:flex-row justify-center m-0 p-0 ${isMenuOpen ? "block" : "hidden"
        } md:flex`}>
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="font-gotu text-black no-underline text-lg font-normal">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
