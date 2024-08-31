import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import ChatInput from "./ChatInput";
import Message from "./Message";
import FileImage from "./FileImage";
import AudioMessage from "./AudioMessage"; // Import the AudioMessage component

const Chat = ({ setShow }: { setShow: Dispatch<SetStateAction<boolean>> }) => {
  const [messages, setMessages] = useState<
    { content: string | File | Blob; isSender: boolean }[]
  >([]);
  const scrollRef = useRef<any>(null);

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages.length]);

  return (
    <div className="p-2 rounded-lg flex flex-col gap-2 bg-slate-300 absolute bottom-10 right-20 h-[70vh] w-[30vw] max-lg:w-[40vw] max-md:w-[50vw] max-sm:w-[70vw]">
      <IoCloseSharp
        size={25}
        className="self-end"
        onClick={() => setShow(false)}
        cursor={"pointer"}
      />
      <div
        ref={scrollRef}
        className="flex-1 flex flex-col gap-2 overflow-y-auto p-2"
      >
        {messages.map((m, index) =>
          typeof m.content === "string" ? (
            <Message key={index} isSendByMe={m.isSender} text={m.content} />
          ) : m.content instanceof File ? (
            <FileImage key={index} isSendByMe={m.isSender} file={m.content} />
          ) : (
            <AudioMessage
              key={index}
              isSendByMe={m.isSender}
              audioBlob={m.content}
            />
          )
        )}
      </div>
      <ChatInput setMessages={setMessages} />
    </div>
  );
};

export default Chat;
