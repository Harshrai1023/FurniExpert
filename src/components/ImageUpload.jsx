import { CloudArrowUpIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import { useDropzone } from "react-dropzone";

const ImageUpload = forwardRef(({ files, setFiles}, ref) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) =>
        prevFiles.concat(
          acceptedFiles
            .filter(
              (file) =>
                !prevFiles.some((prevFile) => prevFile.name === file.name)
            )
            .map((file) =>
              Object.assign(file, { preview: URL.createObjectURL(file) })
            )
        )
      );
    },
  });

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const uploadImages = async () => {
    try {
      const base64Files = await Promise.all(
        files.map((file) => convertToBase64(file))
      );
      const result = await axios.post("http://localhost:5000/", {
        images: base64Files,
      });
      // setImageURL(result.data);  // Update imageURL after successful upload
      console.log(result.data + " Image URL");
      return result.data;  // Return result for clarity, although not strictly necessary
    } catch (err) {
      console.error(err);
      return null;
    }
  };
  

  useImperativeHandle(ref, () => ({
    uploadImages,
  }));

  const removeFile = (fileName) => {
    setFiles(files.filter((file) => file.name !== fileName));
  };

  const removeAll = () => {
    setFiles([]);
  };

  const thumbs = files.map((file) => (
    <div className="w-20 h-20 relative " key={file.name}>
      <img
        className="object-cover w-full h-full rounded-lg"
        src={file.preview}
      />
      <div className="absolute top-0 right-0 p-1">
        <IconButton
          className="rounded-full w-5 h-5"
          onClick={() => removeFile(file.name)}
        >
          <XMarkIcon className="h-4 w-4" />
        </IconButton>
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section>
      <div
        {...getRootProps({
          className:
            "dropzone flex flex-col justify-center items-center border-2 border-dashed border-gray-300 rounded-lg pb-6 mb-5 cursor-pointer hover:border-gray-500 transition duration-300 ease-in-out",
        })}
      >
        <input {...getInputProps()} />
        <img
          className="h-40"
          src="/assets/images/upload.svg"
          alt="upload-img"
        />
        <Typography className="h-6 font-bold">Drop or Select Images</Typography>
        <Typography className="text-center">
          Drop images here or click to{" "}
          <span className="underline text-red-400">browse</span> thorough your
          machine
        </Typography>
      </div>
      <aside className="flex flex-wrap gap-2">{thumbs}</aside>
      <div
        className={`flex mt-4 justify-end gap-2 ${
          files.length === 0 ? "hidden" : "flex"
        }`}
      >
        <Button onClick={removeAll}>Remove All</Button>
        <Button
          className="flex items-center justify-center gap-2"
          onClick={uploadImages}
        >
          <CloudArrowUpIcon className="h-5 w-5" /> Upload
        </Button>
      </div>
    </section>
  );
});

export default ImageUpload;
