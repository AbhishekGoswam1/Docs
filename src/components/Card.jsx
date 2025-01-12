import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";

const Card = ({ data, reference }) => {
  //{data} - destructuring of props.data

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.05 }}
      className="relative w-44 h-52 bg-gray-900 rounded-[40px] py-7 px-6 overflow-hidden flex-shrink-0"
    >
      <FaRegFileAlt color="#fff" />
      <p className="text-sm mt-4 leading-tight text-slate-100">
        {data.description}
      </p>
      <div className="cardFooter absolute bottom-0 left-0 w-full">
        <div className="flex justify-between items-center px-6 text-slate-100 mb-4">
          <h5 className="text-sm">{data.fileSize}</h5>
          <span className="w-5 h-5 bg-gray-50 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose size="1.2em" color="#000" />
            ) : (
              <FiDownload size="0.8em" color="#000" />
            )}
          </span>
        </div>
        {data.tagDetails.isOpen && (
          <div
            className={`tag w-full py-3 flex items-center justify-center ${data.tagDetails.tagColor}`}
          >
            <h3 className="text-sm">{data.tagDetails.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
