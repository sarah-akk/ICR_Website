interface FileImageProps {
  file: File;
  isSendByMe: boolean;
}
const FileImage = ({ file, isSendByMe }: FileImageProps) => {
  return (
    <div
      className={`max-w-2/3 px-5 py-2 rounded-2xl ${
        isSendByMe
          ? "rounded-ee-none bg-[#a5a1a1f8] self-end"
          : "rounded-es-none bg-[#e8cb91]"
      }  font-semibold relative`}
    >
      <img src={URL.createObjectURL(file)} alt="" className="rounded-lg" />
    </div>
  );
};

export default FileImage;
