interface ArticleCardProps {
  img: string;
  title: string;
}

const ArticleCard = ({ img, title }: ArticleCardProps) => {
  return (
    <div className="mx-auto flex flex-col shadow-lg shadow-gray-400 bg-slate-100 rounded-lg cursor-pointer">
      <img src={img} alt="" />
      <h2 className="p-3 text-gray-800 text-lg text-center">{title}</h2>
    </div>
  );
};

export default ArticleCard;
