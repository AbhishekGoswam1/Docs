import React from "react";
import Card from "./Card";
import { useRef } from "react";

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      description: "This is the description about the card",
      fileSize: "1.2 Mb",
      close: true,
      tagDetails: {
        isOpen: true,
        tagTitle: "Delete now",
        tagColor: "bg-red-300",
      },
    },
    {
      description: "This is the description about the card",
      fileSize: "2.4 Mb",
      close: true,
      tagDetails: {
        isOpen: true,
        tagTitle: "Downloaded",
        tagColor: "bg-green-400",
      },
    },
    {
      description: "This is the description about the card",
      fileSize: "1.6 Mb",
      close: false,
      tagDetails: {
        isOpen: true,
        tagTitle: "Download now",
        tagColor: "bg-blue-400",
      },
    },
    {
      description: "This is the description about the card",
      fileSize: "1.4 Mb",
      close: false,
      tagDetails: {
        isOpen: false,
        tagTitle: "Upload now",
        tagColor: "bg-yellow-400",
      },
    },
  ];

  return (
    <div
      ref={ref}
      className="w-full h-full z-[3] top-0 left-0 fixed flex gap-5 flex-wrap p-14 justify-center"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
