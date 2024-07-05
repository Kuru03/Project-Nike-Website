import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1, thumbnailShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

import { useState } from "react";

const NikeHero = () => {
  const[bigShoeImg,setbigShoeImg]=useState(bigShoe1)

  return (
    <section
      id="home"
      className="w-full max-container p-1 min-h-screen flex flex-col xl:flex-row gap-10"
    >
      <div className="relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-coral-red text-xl  leading-8 ">
          Our Summer Collection
        </p>
        <h1 className=" xl:bg-white xl:whitespace-nowrap relative pr-10 z-10 text-black text-8xl font-palanquin font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="inherit xl:bg-white pr-10 rounded-3xl">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
        </h1>
        <p className="font-medium font-montserrat pt-8 leading-8 text-slate-gray text-lg mb-14 sm:max-w-sm">
          Discover Stylish Nike arrival,quality comfort and innovation for your
          active life.
        </p>
        <Button text="Shop Now" src={arrowRight} />
        <div className="flex justify-items-center items-start gap-16 my-4 flex-wrap mt-20">
          {statistics.map((stats, index) => (
            <div key={index} className="stats">
              <h1 className="font-bold text-4xl font-palanquin text-black ">
                {stats.value}
              </h1>
              <p className=" font-montserrat lead` text-slate-gray">
                {stats.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-hero bg-cover w-full relative xl:min-h-screen max-xl:py-40 flex-1 flex justify-center items-center bg-primary bg-center ">
        <img
          src={bigShoeImg}
          className="object-contain relative z-10"
          width={610}
          height={500}
          alt="shoeDisplay"
        ></img>
        <div className="cards gap-4 sm:gap-6 max-sm:px-6 flex absolute bottom-[-6%] sm:left-[10%] ">
          {shoes.map((shoeRec,index) => (
            <div key={index}>
              <ShoeCard
                imgUrl={shoeRec}
                changeBigShoeImage={(shoeq) => setbigShoeImg(shoeq)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NikeHero;
