import SectionTitle from "../../../components/SectionTitle";
import ArticleCard from "./ArticleCard";
import blog from "../../../assets/blog-image.png";

interface Article {
  id: number;
  img: string;
  title: string;
}

const blogs: Article[] = [
  {
    id: 1,
    img: blog,
    title: "Multi-merchant store design",
  },
  {
    id: 1,
    img: blog,
    title: "Multi-merchant store design",
  },
  {
    id: 1,
    img: blog,
    title: "Multi-merchant store design",
  },
  {
    id: 1,
    img: blog,
    title: "Multi-merchant store design",
  },
  {
    id: 1,
    img: blog,
    title: "Multi-merchant store design",
  },
  {
    id: 1,
    img: blog,
    title: "Multi-merchant store design",
  },
];

const Articles = () => {
  return (
    <div className="flex flex-col gap-10">
      <SectionTitle title="Latest articles" />
      <div className="background-squares">
        <div className="w-[90%] mx-auto flex justify-between gap-x-5 gap-y-10 flex-wrap">
          {blogs.map((b) => (
            <ArticleCard img={b.img} title={b.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
