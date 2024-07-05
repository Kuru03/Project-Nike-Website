import React from "react";
import { star } from "../assets/icons";
const CustomerReviewCard = ({ feedback, rating, customerName, imgURL }) => {
  return (
    <section>
      <div className="flex flex-1 flex-col sm:max-w-md justify-center items-center text-center	">
        <img src={imgURL} className="rounded-full" width={120} height={120} />
        <p className="mt-6 info-text  text-slate-gray lg:max-w-md justify-center items-center text-xl leading-normal">
          {feedback}
        </p>
        <div className='mt-4 flex justify-center gap-2.5 font-palanquin text-xl text-normal'>
            <img src={star} width={24} height={24} alt='rating'></img>
            <p className='text-slate-gray font-montserrat '>({rating})</p>
        </div>
        <h1 className='mt-2 font-bold text-3xl font-montserrat'>{customerName}</h1>
      </div>
    </section>
  );
};

export default CustomerReviewCard;
