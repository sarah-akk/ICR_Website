import { useState } from "react";
import { BiSolidMessageRounded } from "react-icons/bi";
import Chat from "./Chat/Chat";

const ChatButton = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-10">
      {showChat && <Chat setShow={setShowChat} />}
      <BiSolidMessageRounded
        onClick={() => setShowChat(!showChat)}
        size={75}
        color="#37539C"
        cursor={"pointer"}
        className="rounded-full bg-slate-100 p-2"
      />
    </div>
  );
};

export default ChatButton;
