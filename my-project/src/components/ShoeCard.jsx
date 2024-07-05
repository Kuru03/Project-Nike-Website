import React from "react";
import PropTypes from "prop-types";

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };

  return (
    <div
    className={`border-2 rounded-xl ${
      bigShoeImg === imgUrl.bigShoe
        ? "border-coral-red"
        : "border-transparent"
    } cursor-pointer max-sm:flex-1 m-4`}
    onClick={handleClick}
    >
      <div className=" flex justify-center bg-card bg-center items-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          className=" object-contain"
          src={imgUrl.thumbnail}
          alt="Shoe Collection"
          width={127}
          height={103}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
