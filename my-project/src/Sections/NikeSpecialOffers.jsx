import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const NikeSpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div>
        <img
          src={offer}
          alt="offers"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col justify-start ">
        <h1 className=" sm:max-w-lg text-4xl font-bold leading-snug  text-montserrat">
          <span className=" mt-3 text-coral-red">Special </span> Offer
        </h1>
        <p className="mt-10 text-xl text-slate-gray sm:max-w-lg leading-normal">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
          <br></br>
          <br></br>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-8 flex flex-1 justify-start items-center gap-10">
          <Button text="Shop now" src={arrowRight}></Button>
          <Button text="Learn more" BackgroundColor="bg-white" TextColor="text-slate-gray" BorderColor='border-slate-gray' ShadowColor='shadow-slate-gray'/>
        </div>
      </div>
    </section>
  );
};

export default NikeSpecialOffers;
