import Image from "next/image";

interface HightLightItemProps {
  imgSrc: string;
  content: string;
  href: string;
}

const HightLightItem: React.FC<HightLightItemProps> = ({
  imgSrc,
  content,
  href
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="mx-3 rounded-lg overflow-hidden shadow-xl flex flex-col items-center bg-[#3c3963] hover:bg-[#38346b] transition cursor-pointer"
    >
      <div className="w-full min-h-52 h-full relative">
        <Image
          src={imgSrc}
          fill
          className="absolute"
          alt="hightlightImage"
        />
      </div>
      <p className="p-4 font-semibold text-yellow-300 text-lg">
        {content}
      </p>
    </a>
  );
}

export default HightLightItem;