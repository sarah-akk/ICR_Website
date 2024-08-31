import { useState } from "react";

interface ProjectProps {
  name: string;
  img: string;
}

const Project = ({ name, img }: ProjectProps) => {
  const [showName, setShowName] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowName(true)}
      onMouseLeave={() => setShowName(false)}
      className="relative rounded-xl cursor-pointer w-1/4 max-lg:w-[45%] max-md:w-full"
    >
      <img src={img} alt="" className="w-full" />
      {showName && (
        <>
          <div className="bg-black/60 absolute top-0 left-0 w-full h-full rounded-xl" />
          <h1 className="absolute text-white text-2xl font-semibold top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 text-center">
            {name}
          </h1>
        </>
      )}
    </div>
  );
};

export default Project;
