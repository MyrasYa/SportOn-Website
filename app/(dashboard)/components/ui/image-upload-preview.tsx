import Image from "next/image";
import { useRef } from "react";
import { FiUploadCloud } from "react-icons/fi";

type TImageUploadProps = {
  label?: string;
  value?: string | null;
  onChange: (file: File) => void;
  className?: string;
};

const ImagePreview = ({
  className,
  value,
  onChange,
  label,
}: TImageUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleImageClick = () => {
    fileInputRef?.current?.click();
  };
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0]
        onChange(file)
    }
  }

  return (
    <div className={className}>
        <h3 className="font-medium text-lg mb-2">Product Image</h3>
      <div
        onClick={handleImageClick}
        className="h-[238px] border-2 border-dashed border-primary bg-primary/5 rounded-lg flex flex-col justify-center items-center"
      >
        {value ? (
          <Image
            src={value}
            alt="preview product"
            className="w-full h-full object-cover"
            width={190}
            height={190}
          />
        ) : (
          <>
            <FiUploadCloud className="text-primary" size={24} />
            <span className="text-sm font-medium">Click to Upload</span>
          </>
        )}
        <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange}  />
      </div>
    </div>
  );
};

export default ImagePreview;
