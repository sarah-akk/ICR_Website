import { Dispatch, SetStateAction } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface FaqProps {
  id: number;
  question: string;
  answer: string;
  setFaqsIds: Dispatch<SetStateAction<number[]>>;
  faqsIds: number[];
}

const Faq = ({ id, question, answer, setFaqsIds, faqsIds }: FaqProps) => {
  return (
    <div
      onClick={() =>
        setFaqsIds((prev) =>
          prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
        )
      }
      className="p-5 rounded-xl bg-slate-200 flex flex-col gap-3 cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{question}</h2>
        <IoIosArrowDown
          size={30}
          className={`${
            faqsIds.includes(id) ? "rotate-180" : ""
          } transition-all duration-300`}
        />
      </div>
      {faqsIds.includes(id) && <p className="text-lg">{answer}</p>}
    </div>
  );
};

export default Faq;
