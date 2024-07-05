import React from "react";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const NikeSuperQuality = () => {
  return (
    <section className="flex justify-between item-center w-full max-container gap-10 max-lg:flex-col">
      <div className="flex flex-1 flex-col justify-start ">
        <h1 className=" sm:max-w-lg text-4xl font-bold leading-snug  text-montserrat">
          We Provide You <span className=" mt-3 text-coral-red">Super Quality</span>{" "}
          Shoes
        </h1>
        <p className="mt-10 text-xl text-slate-gray sm:max-w-lg leading-normal">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.<br></br><br></br>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-8"><Button text="View Details"></Button></div>
      </div>
      <div className=" justify-center item-center flex flex-1">
        <img className=" object-contain" src={shoe8} alt="Shoe Collection" width={570} height={522} />
      </div>
    </section>
  );
};

export default NikeSuperQuality;
