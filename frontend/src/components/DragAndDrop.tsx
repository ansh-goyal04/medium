import React, { useCallback } from 'react';
import { useDropzone, DropzoneOptions } from 'react-dropzone';

interface DragAndDropProps {
  onDrop: (acceptedFiles: File[]) => void;
}

const DragAndDrop: React.FC<DragAndDropProps> = ({ onDrop }) => {
    //@ts-ignore
  const onDropCallback = useCallback<DropzoneOptions['onDrop']>((acceptedFiles) => {
    onDrop(acceptedFiles);
  }, [onDrop]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropCallback,
    //@ts-ignore
    accept: 'image/*'
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed p-4 rounded-md ${
        isDragActive ? 'bg-green-100' : 'bg-gray-100'
      }`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <p>Drag & drop the images here, or click to select images</p>
      )}
    </div>
  );
};

export default DragAndDrop;
