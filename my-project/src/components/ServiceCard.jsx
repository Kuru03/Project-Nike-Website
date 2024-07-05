import React from "react";
import PropTypes from "prop-types";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className=" px-10 py-16 flex-1 sm:w-[350px] sm:min-w-[350px] w-full  rounded-[20px] shadow-3xl ">
      <div className="flex w-11 h-11 justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} width={24} height={24} />
      </div>
      <h1 className="text-3xl text-palanquin mt-5 font-bold leading-normal">{label}</h1>
      <p className="info-text break-words">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
