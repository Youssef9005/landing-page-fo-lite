import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

const UserImage = ({ src, alt }: Props) => {
  return <Image src={src} alt={alt} width={70} height={70} />;
};

export default UserImage;
