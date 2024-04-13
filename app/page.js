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
      <div
        className="flex flex-col items-center w-full p-5 text-center
      font-bold text-6xl justify-center"
      >
        TB2G
      </div>

      <div
        className="flex flex-col
      justify-center
      text-center
      items-center
      mx-10"
      >
        <Link href={"/insert"}>
          {" "}
          <Button>CREATE ME</Button>
        </Link>
        <Link href={"/about"}>
          {" "}
          <Button>ABOUT ME</Button>
        </Link>

        <Marquee
          items={[
            "Recently View",
            "Recently View",
            "Recently View",
            "Recently View",
          ]}
        ></Marquee>

        <Accordion question="is your mom ?" answer="maybe" />

        <div className="flex justify-center text-center items-center mx-10 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80">
          <a href="/bathroom">
            <div className="mr-4 mt-6">
              <ImageCard imageUrl="https://media.licdn.com/dms/image/D5603AQGbxja6F1WDhg/profile-displayphoto-shrink_400_400/0/1665499408876?e=1718236800&v=beta&t=EKw8fFiXYtpMEhqKsAGOFBI113FklJI3w3d_WkIKzG4" />
            </div>
          </a>
          <div className="mr-4 mt-6">
            <ImageCard imageUrl="https://media.licdn.com/dms/image/D5603AQGbxja6F1WDhg/profile-displayphoto-shrink_400_400/0/1665499408876?e=1718236800&v=beta&t=EKw8fFiXYtpMEhqKsAGOFBI113FklJI3w3d_WkIKzG4" />
          </div>
          <div className="mr-4 mt-6">
            <ImageCard imageUrl="https://media.licdn.com/dms/image/D5603AQGbxja6F1WDhg/profile-displayphoto-shrink_400_400/0/1665499408876?e=1718236800&v=beta&t=EKw8fFiXYtpMEhqKsAGOFBI113FklJI3w3d_WkIKzG4" />
          </div>
        </div>
        <br></br>
        <h2>Reviews</h2>
        <BuildingInfo data={users} />
      </div>
    </main>
  );
}

const BuildingInfo = ({ data }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            width: "1000px",
            marginBottom: "10px",
          }}
        >
          <span>
            <strong>Building:</strong> {item.Building}
          </span>
          <span>
            <strong> Floor:</strong> {item.floor}
          </span>
          <span>
            <strong> Rating:</strong> {item.rating}
          </span>
        </div>
      ))}
    </div>
  );
};
