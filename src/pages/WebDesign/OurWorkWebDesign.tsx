import project from "../../assets/project.svg";
import SectionTitle from "../../components/SectionTitle";
import Project from "./Project";

const projects = [
  {
    name: "Project Name",
    img: project,
  },
  {
    name: "Project Name",
    img: project,
  },
  {
    name: "Project Name",
    img: project,
  },
  {
    name: "Project Name",
    img: project,
  },
  {
    name: "Project Name",
    img: project,
  },
  {
    name: "Project Name",
    img: project,
  },
];

const OurWorkWebDesign = () => {
  return (
    <div className="flex flex-col gap-10 w-[90%] mx-auto">
      <SectionTitle title="Our work in stores" />
      <div className="flex justify-evenly gap-5 flex-wrap">
        {projects.map((p) => (
          <Project name={p.name} img={p.img} />
        ))}
      </div>
    </div>
  );
};

export default OurWorkWebDesign;
