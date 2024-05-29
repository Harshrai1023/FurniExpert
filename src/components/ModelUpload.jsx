import { XMarkIcon } from "@heroicons/react/24/solid";
import { IconButton, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

function ModelUpload({ base64Model, setBase64Model }) {
  // const [base64Model, setBase64Model] = useState("");
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "3D/.glb": [".gltf", ".glb"],
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        convertToBase64(acceptedFiles[0])
          .then((base64) => {
            setBase64Model(base64);
            console.log(base64);
          })
          .catch((error) => {
            console.error("Error converting file to Base64:", error);
          });
      }
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

  const handleRemoveModel = () => {
    setBase64Model("");
  };

  return (
    <section className="">
      <div className={`${base64Model == "" ? "block" : "hidden"}`}>
        <div
          {...getRootProps({
            className:
              "dropzone flex flex-col justify-center items-center border-2 border-dashed border-gray-300 rounded-lg pb-6 mb-5 cursor-pointer hover:border-gray-500 transition duration-300 ease-in-out",
          })}
        >
          <input {...getInputProps()} />
          <img className="py-5" src="/assets/icon3d.svg" alt="3D icon" />
          <Typography className="h-6 font-bold">
            Drop or Select 3D Model (.glb/.gltf)
          </Typography>
          <Typography className="text-center">
            Drop 3D Model file here or click to{" "}
            <span className="underline text-red-400">browse</span> through your
            machine
          </Typography>
        </div>
      </div>
      <div
        className={`w-full h-80 border-2 rounded-lg 
        ${base64Model == "" ? "hidden" : "block"}`}
      >
        <div className="top-0 right-0 px-4 pt-2">
          <IconButton
            variant="text"
            className="rounded-full"
            onClick={handleRemoveModel}
          >
            <XMarkIcon className="h-6 w-6" />
          </IconButton>
        </div>
        <model-viewer
          src={base64Model}
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          tone-mapping="neutral"
          poster="assets/icon3d.svg"
          shadow-intensity="1"
          auto-rotate
          camera-orbit="69.12deg 79.18deg 377.8m"
          field-of-view="30deg"
          style={{ width: "100%", height: "85%" }}
        />
      </div>
    </section>
  );
}

export default ModelUpload;
