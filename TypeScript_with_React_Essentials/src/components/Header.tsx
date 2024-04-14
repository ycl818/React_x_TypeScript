import React from "react";

interface HeaderProps {
  image: { src: string; alt: string };
  children: React.ReactNode;
}

const Header = ({ image, children }: HeaderProps) => {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
