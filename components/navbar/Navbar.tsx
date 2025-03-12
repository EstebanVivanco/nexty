import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

export const Navbar = async() => {
    console.log("navbar created");

    const navItems = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" },
    ];

    return (
      <nav className="flex bg-indigo-900 bg-opacity-30 p-2 m-2 rounded text-white gap-2 font-medium justify-between">
        <Link href={'/'} className="flex items-center gap-2">
        <HomeIcon size={20} />
        Home
        </Link>
        <div className="flex gap-4">
          {navItems.map((item, index) => (
            <ActiveLink key={index} path={item.href} text={item.name} />
          ))}
        </div>
      </nav>
    );
  };
   