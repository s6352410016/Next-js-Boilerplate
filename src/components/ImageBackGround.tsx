import Image from "next/image";

const ImageBackGround = () => {
  return (
    <div className="w-full h-[220px] relative">
      <Image
        src="/assets/images/bg-image.png"
        fill
        alt="bg-image"
        className="absolute"
      />
    </div>
  );
}

export default ImageBackGround;