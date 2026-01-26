import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";
import ImagePreview from "../ui/image-upload-preview";
import { useState } from "react";

type TCategoryModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CategoryModal = ({ isOpen, onClose }: TCategoryModalProps) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Category">
      <div className="flex flex-col gap-6">
        <div className="flex gap-8">
          <div className="min-w-60 max-w-60">
            <ImagePreview
              label="Category Image"
              value={imagePreview}
              onChange={(file) => {
                setImageFile(file);
                setImagePreview(URL.createObjectURL(file));
              }}
              className=""
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <div className="input-group-admin">
              <label htmlFor="CategoryName">Category Name</label>
              <input
                type="text"
                id="CategoryName"
                name="CategoryName"
                placeholder="e. g. Running Shoes"
                className="mt-1"
              />
            </div>
            <div className="input-group-admin">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                rows={4}
                placeholder="Category Details ..."
                className="mt-1"
              ></textarea>
            </div>
          </div>
        </div>
        <Button className="ml-auto mt-3 rounded-lg">Create Category</Button>
      </div>
    </Modal>
  );
};

export default CategoryModal;

// 1.15
