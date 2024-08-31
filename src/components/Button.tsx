interface ButtonProps {
  text: string;
  shadow?: boolean;
  color: string;
}

const Button = ({ text, shadow = false, color }: ButtonProps) => {
  return (
    <button
      className={`px-10 py-2 ${
        color === "primary"
          ? "bg-primary text-white"
          : "bg-secondary text-gray-900"
      }  rounded-lg text-lg w-fit max-md:w-full text-center ${
        shadow ? "shadow-lg shadow-gray-400" : ""
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
