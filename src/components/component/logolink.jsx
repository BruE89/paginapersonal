import Link from "next/link";
import Image from "next/image";

const LogoLink = ({ logo, linkEsp, linkIng, isSpanish }) => {
  return (
    <Link href={isSpanish ? linkEsp : linkIng} target="_blank" passHref>
      <Image
        src={logo}
        width={100}
        height={100}
        alt="logo"
        loading="lazy"
        className="transition-transform transform hover:scale-125 mb-4 "
      />
    </Link>
  );
};

export default LogoLink;
