interface CostCardProps {
  img: string;
  title: string;
  text: string;
}

const CostCard = ({ img, title, text }: CostCardProps) => {
  return (
    <div className="bg-slate-100 rounded-lg p-2 flex flex-col gap-3 w-[30%] max-lg:w-[40%] max-md:w-full mx-auto">
      <img src={img} alt="" className="mx-auto" />
      <h1 className="font-bold text-xl text-center">{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default CostCard;
