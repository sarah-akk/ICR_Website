interface MarketingSectionProps {
  title: string;
  description: string;
  img: string;
  reverse?: boolean;
}

const ElectronicMarketingSection = ({
  title,
  description,
  img,
  reverse,
}: MarketingSectionProps) => {
  return (
    <div
      className={`flex gap-10 w-[90%] mx-auto max-lg:flex-col justify-center ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <img src={img} alt="" className="" />
      <hr className="border-t-4 border-t-primary" />
      <div className={`flex gap-3 lg:w-1/3 mr-auto`}>
        <div className="w-2 h-full bg-primary max-lg:hidden" />
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ElectronicMarketingSection;
