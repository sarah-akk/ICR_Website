interface WebsiteCardProps {
  img: string;
  title: string;
  description: string;
}

const WebsiteCard = ({ img, title, description }: WebsiteCardProps) => {
  return (
    <div className="w-1/4 max-lg:w-[40%] max-md:w-[90%] flex flex-col gap-3 cursor-pointer bg-slate-200 rounded-lg shadow-lg shadow-gray-400 mx-auto">
      <img src={img} alt="" className="max-md:w-full object-cover" />
      <div className="flex flex-col w-full p-5 gap-3">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default WebsiteCard;
