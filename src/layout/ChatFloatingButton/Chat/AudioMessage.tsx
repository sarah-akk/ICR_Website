interface AudioMessageProps {
  audioBlob: Blob;
  isSendByMe: boolean;
}

const AudioMessage = ({ audioBlob, isSendByMe }: AudioMessageProps) => {
  const audioUrl = URL.createObjectURL(audioBlob);

  return (
    <div className={`flex ${isSendByMe ? "justify-end" : "justify-start"}`}>
      <audio controls>
        <source src={audioUrl} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioMessage;
