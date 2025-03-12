'use client';

import Link from "next/link";
import style from './ActiveLink.module.css';
import { usePathname } from "next/navigation";


interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {

   const pathName = usePathname();
   console.log('pathName', pathName)

  return (
    <Link className={`${style.link} ${style['active-link']}`} href={path}>
      {text}
    </Link>
  );

};
