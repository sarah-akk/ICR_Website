interface MessageProps {
  text: string;
  isSendByMe: boolean;
}

const Message = ({ text, isSendByMe }: MessageProps) => {
  return (
    <div
      className={` w-fit px-5 py-2 rounded-2xl ${
        isSendByMe
          ? "rounded-ee-none bg-[#a5a1a1f8] self-end"
          : "rounded-es-none bg-[#e8cb91]"
      }  font-semibold relative`}
    >
      {text}
    </div>
  );
};

export default Message;
