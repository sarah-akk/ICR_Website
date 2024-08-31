import SectionTitle from "../../../components/SectionTitle";
import img from "../../../assets/seo.png";
import Store from "./Store";
import Button from "../../../components/Button";

interface Store {
  id: number;
  title?: string;
  content: string;
  img: string;
}

const stores: Store[] = [
  {
    id: 1,
    content: "Search Engine Optimization SEO | The 6 most important techniques",
    img,
  },
  {
    id: 2,
    content: "Search Engine Optimization SEO | The 6 most important techniques",
    img,
  },
];

const storeWithTitle: Store = {
  id: 3,
  content:
    "How to make money from application programming and the best ways to make money from mobile applications. If you are a beginner in the world of programming, and have never had experience learning it, and want to develop yourself and your skills in programming technology, then there is no need to worry at all. Here at the Marhaba Foundation, we will explain everything. Steps to make money...",
  img,
  title:
    "How to make money from application programming and the best ways to make money from mobile applications",
};

const StoresSEO = () => {
  return (
    <div className="flex flex-col gap-10">
      <SectionTitle title="Stores SEO" />
      <div className="flex gap-5 justify-between max-lg:flex-col">
        <div className="flex flex-col justify-around gap-y-5">
          <div className="flex flex-col gap-y-5">
            {stores.map((s) => (
              <Store img={s.img} text={s.content} />
            ))}
          </div>
          <div className="flex justify-center max-lg:hidden">
            <Button text="More SEO Stores" shadow={true} color="secondary" />
          </div>
        </div>
        <div className="flex w-1/2 max-lg:w-full">
          <Store
            img={storeWithTitle.img}
            text={storeWithTitle.content}
            title={storeWithTitle.title}
          />
        </div>
        <div className="flex justify-center lg:hidden">
          <Button text="More SEO Stores" shadow={true} color="secondary" />
        </div>
      </div>
    </div>
  );
};

export default StoresSEO;
