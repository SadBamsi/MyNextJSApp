import Link from "next/link";
import React from "react";

interface IProps {
  href: string;
}

export const CustomLink: React.FC<IProps> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      {children}
    </Link>
  );
};
