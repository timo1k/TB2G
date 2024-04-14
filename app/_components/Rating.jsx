"use client";
import "../globals.css";
import { useEffect, useRef, useState } from "react";

export default function Rating({ rating }) {

  if (!rating) return null;


  function calcOverallScore() {
    let sum = 0;

    sum += parseInt(rating.cleanliness);
    sum += parseInt(rating.privacy);
    sum += parseInt(rating.amenities);

    let avg = sum / 3;
    return Math.round(avg * 10) / 10;
  }

  return (
    <div className="flex h-fit gap-5 w-full p-5 border-2 border-black border-solid">

      {/* Overall Score */}
      <div className="flex h-full min-w-60 text-center">
        <div className="inline-block font-bold text-9xl">
          {calcOverallScore()}
        </div>
        <div className="inline-block font-bold text-4xl">
          &nbsp;/ 5
        </div>
      </div>

      {/* Rating Bar */}

      <div className="flex h-full gap-3">
        <div className="flex flex-col gap-3 text-end">
          <p className="font-bold text-xl"> Amenities </p>
          <p className="font-bold text-xl"> Cleanliness </p>
          <p className="font-bold text-xl"> Privacies </p>
        </div>

        <div className="flex flex-col gap-3 justify-evenly text-end">
          <div className="bg-black w-80">a</div>
          <div className="bg-black w-80">a</div>
          <div className="bg-black w-80">a</div>
        </div>

        <div className="flex flex-col gap-3 justify-evenly text-end">
          <p className="font-bold">{rating.amenities}</p>
          <p className="font-bold">{rating.cleanliness}</p>
          <p className="font-bold">{rating.privacy}</p>
        </div>
      </div>


    </div>
  );
}

