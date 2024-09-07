import Image from 'next/image';
import Link from 'next/link';

const SkillCard = ({ logo, linkEsp, linkIng, isSpanish, title, description }) => {
  return (
    <div className="grid gap-1">
      <div className="flex items-end justify-center pt-8 mb-4 h-40">
        <Link href={isSpanish ? linkEsp : linkIng} target="_blank" passHref>
            <Image
              src={logo}
              width={100}
              height={100}
              alt={`${title} logo`}
              loading="lazy"
              className="transition-transform transform hover:scale-125 mb-4"
            />
        </Link>
      </div>
      <h3 className="text-xl font-bold text-[#7291be]">{title}</h3>
      <p className="text-[#9dacc0] h-32">
        {description}
      </p>
    </div>
  );
};

export default SkillCard;
