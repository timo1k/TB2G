"use client";
import React, { useState, useEffect } from "react";
import Button from "./_components/Button";
import Accordion from "./_components/Accordion";
import ImageCard from "./_components/ImageCard";
import Link from "next/link";
import Marquee from "./_components/Marquee";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { orderBy } from "firebase/firestore";
import { query } from "firebase/firestore";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        // Query Firestore collection "Item" and order by createdAt in descending order
        const q = query(
          collection(db, "Reviews"),
          orderBy("createdAt", "desc")
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchItems();
  }, []);

  return (
    <main className="min-w-full max-w-full min-h-full h-screen bg-white">
      <div className="flex items-center justify-between w-full p-5 text-center font-bold text-6xl">
        <Link href={"/insert"}>
          <Button>CREATE ME</Button>
        </Link>
        <span>TB2G</span>
        <Link href={"/about"}>
          <Button>ABOUT ME</Button>
        </Link>
      </div>

      <Marquee
        items={[
          "Recently View",
          "Recently View",
          "Recently View",
          "Recently View",
          "Recently View",
          "Recently View",
          "Recently View",
        ]}
      />

      <div
        className=" flex flex-col justify-center text-center
        items-center m-10"
      >
        <Link href={"/searched"}>
          <Button>I Need to SHIT FAST</Button>
        </Link>
        <br></br>

        <Link href={"/ml"}>
          <Button>Have the Best Shit!</Button>
        </Link>

        <div className="flex justify-center text-center items-center mx-10 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80">
          <Link href={"/Wachman"}>
            <div className="mr-4 mt-6">
              <ImageCard
                imageUrl="https://live.staticflickr.com/3679/12726907403_b2182559c8_b.jpg"
                children={<div>Wachman</div>}
              />
            </div>
          </Link>
          <Link href={"/Tuttleman"}>
            <div className="mr-4 mt-6">
              <ImageCard
                imageUrl="https://pbs.twimg.com/media/EyFEwFdXAAYSuhr.jpg:large"
                children={<div>Tuttleman</div>}
              />
            </div>
          </Link>
          <Link href={"/SERC"}>
            <div className="mr-4 mt-6">
              <ImageCard
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0k9SKvgfsoRgGrMYjB8SuU_MDEf3BUjA0Yv_rS0utg&s"
                children={<div>SERC</div>}
              />
            </div>
          </Link>
        </div>
        <br></br>

        <h2 className="font-bold">Reviews</h2>

        <BuildingInfo data={users} />
      </div>
    </main>
  );
}

const BuildingInfo = ({ data }) => {
  const rating = (item) => {
    let sum =
      (parseInt(item.amenities) +
        parseInt(item.cleanliness) +
        parseInt(item.privacy)) /
      3;

    return Math.round(sum * 10) / 10;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data.map((item, index) => (
        <div>
          <br></br>
          <figure className="w-[1000px] justify-between text-start overflow-hidden rounded-base border-2 border-black bg-main shadow-base text-white">
            <figcaption className="border-t-2 border-black p-4">
              <span>
                <strong>Building:</strong> {item.Building}
              </span>
              <span>
                <strong> Floor:</strong> {item.floor}
              </span>
              <span>
                <strong> Rating:</strong> {rating(item)}
              </span>
            </figcaption>
          </figure>
        </div>
        // <div
        //   key={index}
        //   style={{
        //     border: "1px solid #ccc",
        //     borderRadius: "5px",
        //     padding: "10px",
        //     width: "1000px",
        //     marginBottom: "10px",
        //   }}
        // >
        //   <span>
        //     <strong>Building:</strong> {item.Building}
        //   </span>
        //   <span>
        //     <strong> Floor:</strong> {item.floor}
        //   </span>
        //   <span>
        //     <strong> Rating:</strong> {item.rating}
        //   </span>
        // </div>
      ))}
      <br></br>
      <br></br>
    </div>
  );
};

const CustomLink = ({ href, children }) => <Link href={href}>{children}</Link>;
