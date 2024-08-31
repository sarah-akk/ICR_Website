import { GrEmoji } from "react-icons/gr";
import { PiImageSquareFill } from "react-icons/pi";
import { FaMicrophone } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import {
  Dispatch,
  SetStateAction,
  useState,
  ChangeEvent,
  KeyboardEvent,
  useRef,
} from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

// Define the type for a message
interface Message {
  content: string | File | Blob;
  isSender: boolean;
}

// Define the props type for the ChatInput component
interface ChatInputProps {
  setMessages: Dispatch<SetStateAction<Message[]>>;
}

const ChatInput: React.FC<ChatInputProps> = ({ setMessages }) => {
  const [inputText, setInputText] = useState<string>("");
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const audioChunks = useRef<Blob[]>([]); // Store recorded audio chunks

  // Handle sending the message
  const handleSendMessage = (): void => {
    if (!inputText) return;
    setMessages((prev) => [...prev, { content: inputText, isSender: true }]);
    setInputText("");
    setShowEmojiPicker(false);
  };

  // Handle emoji click
  const handleEmojiClick = (emojiData: EmojiClickData): void => {
    setInputText((prev) => prev + emojiData.emoji);
  };

  // Handle file input change
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      setMessages((prev) => [...prev, { content: file, isSender: true }]);
      event.target.value = "";
    }
  };

  // Handle key down event for Enter key
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  // Start recording audio
  const startRecording = async () => {
    setIsRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);

    // Push audio chunks to the ref
    recorder.ondataavailable = (event) => {
      audioChunks.current.push(event.data);
    };

    // Handle when the recording stops
    recorder.onstop = () => {
      const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
      setMessages((prev) => [...prev, { content: audioBlob, isSender: true }]);
      audioChunks.current = []; // Clear chunks
    };

    recorder.start();
    setMediaRecorder(recorder);
  };

  // Stop recording audio
  const stopRecording = () => {
    setIsRecording(false);
    mediaRecorder?.stop();
  };

  return (
    <div className="flex gap-2 items-center">
      <FaMicrophone
        size={20}
        cursor={"pointer"}
        color={isRecording ? "#FF0000" : "#505050"}
        onClick={isRecording ? stopRecording : startRecording}
      />
      <PiImageSquareFill
        size={20}
        cursor={"pointer"}
        color="#505050"
        onClick={() => document.getElementById("file")?.click()}
      />
      <GrEmoji
        size={20}
        cursor={"pointer"}
        color="#505050"
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
      />
      <input
        id="file"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
      <input
        type="text"
        className="rounded-xl bg-slate-200 p-2 flex-1 outline-none border-none"
        placeholder="Type here"
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
        value={inputText}
        onFocus={() => setShowEmojiPicker(false)}
      />
      <IoSend
        size={25}
        cursor={"pointer"}
        color="#505050"
        onClick={handleSendMessage}
      />
      {showEmojiPicker && (
        <div className="absolute bottom-12">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </div>
  );
};

export default ChatInput;
