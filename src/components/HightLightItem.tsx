import Image from "next/image";

interface HightLightItemProps {
  name: string;
  image_url: string;
  post_url: string;
}

const HightLightItem: React.FC<HightLightItemProps> = ({
  name,
  image_url,
  post_url
}) => {
  return (
    <a
      href={post_url}
      target="_blank"
      className="rounded-lg overflow-hidden flex flex-col cursor-pointer"
    >
      <div className="w-full min-h-52 h-full relative">
        <Image
          src={image_url}
          fill
          className="absolute"
          alt="hightlightImage"
        />
      </div>
      <p className="font-semibold text-gray-600 text-lg">
        {name}
      </p>
    </a>
  );
}

export default HightLightItem;