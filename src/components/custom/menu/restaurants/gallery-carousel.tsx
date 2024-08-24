import Image from "next/image";
import React from "react";

const GalleryCarousel = ({ restaurantId }: { restaurantId: string }) => {
  return (
    <div className="carousel w-full h-full mx-auto  bg-red-500">
      <div className="carousel__item carousel__item--left">
        <Image width={300} height={400} src={"/food1.png"} alt="dog" />
        <div className="carousel__text">
          <h3>Cute Puppy</h3>
          <p> it is cute?!</p>
        </div>
      </div>
      <div className="carousel__item carousel__item--main">
        <Image width={300} height={400} src={"/food1.png"} alt="dog" />
        <div className="carousel__text">
          <h3>Cute Puppy</h3>
          <p> it is cute?!</p>
        </div>
      </div>
      <div className="carousel__item carousel__item--right">
        <Image width={300} height={400} src={"/food1.png"} alt="dog" />
        <div className="carousel__text">
          <h3>Cute Puppy</h3>
          <p> it is cute?!</p>
        </div>
      </div>
      <div className="carousel__item">
        <Image width={300} height={400} src={"/food1.png"} alt="dog" />
        <div className="carousel__text">
          <h3>Cute Puppy</h3>
          <p> it is cute?!</p>
        </div>
      </div>
      <div className="carousel__item">
        <Image width={300} height={400} src={"/food1.png"} alt="dog" />
        <div className="carousel__text">
          <h3>Cute Puppy</h3>
          <p> it is cute?!</p>
        </div>
      </div>
      <div className="carousel__item">
        <Image width={300} height={400} src={"/food1.png"} alt="dog" />
        <div className="carousel__text">
          <h3>Cute Puppy</h3>
          <p> it is cute?!</p>
        </div>
      </div>
      <div className="carousel__btns">
        <button className="carousel__btn" id="leftBtn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z"
            />
          </svg>
        </button>
        <button className="carousel__btn" id="rightBtn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GalleryCarousel;
