interface OnlineSectionProps {
  img: string;
  text: string;
}

const OnlineStoresSection = ({ img, text }: OnlineSectionProps) => {
  return (
    <div className="flex gap-5 items-center lg:w-[45%] max-md:flex-col justify-center">
      <img src={img} alt="" className="max-md:w-full max-md:h-60" />
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default OnlineStoresSection;
