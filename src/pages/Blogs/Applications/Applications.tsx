import SectionTitle from "../../../components/SectionTitle";
import img from "../../../assets/blog-image.png";
import ApplicationCard from "./ApplicationCard";
import Button from "../../../components/Button";

interface Application {
  id: number;
  img: string;
  title: string;
  designer: string;
  description: string;
}

const applications: Application[] = [
  {
    id: 1,
    img,
    designer: "By Marhaba Foundation | 05/16/2022 | Design applications",
    title: "Decoration application design",
    description:
      "Designing a decoration application... making life many times easier. As for life now it has become very difficult in all practical aspects; This is due to various factors that control our lives and the extent to which individuals coexist with them, but what we can be certain of is that life has become many times faster than it was before;...",
  },
  {
    id: 2,
    img,
    designer: "By Marhaba Foundation | 05/16/2022 | Design applications",
    title: "Decoration application design",
    description:
      "Designing a decoration application... making life many times easier. As for life now it has become very difficult in all practical aspects; This is due to various factors that control our lives and the extent to which individuals coexist with them, but what we can be certain of is that life has become many times faster than it was before;...",
  },
  {
    id: 3,
    img,
    designer: "By Marhaba Foundation | 05/16/2022 | Design applications",
    title: "Decoration application design",
    description:
      "Designing a decoration application... making life many times easier. As for life now it has become very difficult in all practical aspects; This is due to various factors that control our lives and the extent to which individuals coexist with them, but what we can be certain of is that life has become many times faster than it was before;...",
  },
  {
    id: 4,
    img,
    designer: "By Marhaba Foundation | 05/16/2022 | Design applications",
    title: "Decoration application design",
    description:
      "Designing a decoration application... making life many times easier. As for life now it has become very difficult in all practical aspects; This is due to various factors that control our lives and the extent to which individuals coexist with them, but what we can be certain of is that life has become many times faster than it was before;...",
  },
];

const Applications = () => {
  return (
    <div className="flex flex-col gap-10">
      <SectionTitle title="Applications Designs" />
      <div className="flex flex-col gap-5">
        {applications.map((app) => (
          <ApplicationCard
            title={app.title}
            img={app.img}
            designer={app.designer}
            description={app.description}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          text="More Design Applications"
          shadow={true}
          color="secondary"
        />
      </div>
    </div>
  );
};

export default Applications;
