import React from 'react';

const useUpload = (fileValidator: (file: File) => boolean) => {
  const uploadBtnRef = React.useRef<{
    uploadEl: HTMLInputElement | null;
  }>({ uploadEl: null });

  const [uploadedFile, setUploadedFile] = React.useState<File | null>(null);
  const [_filePreview, setFilePreview] = React.useState<any>(undefined);
  const [isDragActive, setIsDragActive] = React.useState(false);

  const uploadChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [file] = Array.from(e.target.files as FileList);

    if (fileValidator(file)) {
      setFilePreview(URL.createObjectURL(e.target.files![0]));
      setUploadedFile(file);
    }
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = (e: ProgressEvent) => {
    //     const image = (e.target as FileReader).result as string;
    //     setImage(image);
    //   }
    //   reader.readAsDataURL(file);
    // }
  };

  const dragFileInHandler = (_e: React.DragEvent<HTMLLabelElement>) => {
    setIsDragActive(true);
  };

  const dragFileOutHandler = (_e: React.DragEvent<HTMLLabelElement>) => {
    setIsDragActive(false);
  };

  const dropFileHandler = (e: React.DragEvent<HTMLLabelElement>) => {
    const [file] = Array.from(e.dataTransfer.files as FileList);

    if (fileValidator(file)) {
      setUploadedFile(file);
    }

    setIsDragActive(false);
  };

  return {
    uploadedFile,
    isDragActive,
    uploadBtnRef,
    uploadChangeHandler,
    dragFileInHandler,
    dragFileOutHandler,
    dropFileHandler
  };
};

export default useUpload;
