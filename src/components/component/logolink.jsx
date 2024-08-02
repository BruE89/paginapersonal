import React from "react";
import Link from "next/link";
import Image from "next/image";

const LogoLink = ({ logo, linkesp, linking, isSpanish }) => {
  return (
    <Link href={isSpanish ? linkesp : linking} target="_blank" passHref>
      <Image
        src={logo}
        width={100}
        height={100}
        alt="logo"
        className="transition-transform transform hover:scale-125 mb-4"
      />
    </Link>
  );
};

export default LogoLink;
