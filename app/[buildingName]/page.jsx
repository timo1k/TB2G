"use client"
import React, { useState, useEffect } from "react";
import { collection, getDocs, db, orderBy, query } from "firebase/firestore";

// components
import Accordion from "../_components/Accordion";
import Rating from "../_components/Rating"; // Import the Rating component


const Building = ({ params }) => {
  // Accessing the id from params
  const id = params.buildingName;

  //fetch data for dynamicc stuff
  const [users, setUsers] = useState([]);
  const [floorData, setFloorData] = useState([]);

  const [clean, setClean] = useState([]);
  const [amen, setAmen] = useState([]);
  const [rating, setRating] = useState([]);
  const [privacy, setPrivacy] = useState([]);

  const [cleanAvg, setCleanAvg] = useState();
  const [amenAvg, setAmenAvg] = useState();
  const [privacyAvg, setPrivacyAvg] = useState();

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

        const filteredData = data.filter((item) => item.Building === id);

        setUsers(filteredData);
        console.log(filteredData);

        const ratingValues = filteredData.map((item) => parseInt(item.rating));

        const cleanValues = filteredData.map((item) =>
          parseInt(item.cleanliness)
        );
        const amenValues = filteredData.map((item) => parseInt(item.amenities));
        const privacyValues = filteredData.map((item) =>
          parseInt(item.privacy)
        );

        setClean(cleanValues);
        setAmen(amenValues);
        setRating(ratingValues);
        setPrivacy(privacyValues);

        console.log("clean: " + cleanValues);
        console.log("amen: " + amenValues);
        console.log("rating: " + ratingValues);
        console.log("privacy: " + privacyValues);

        // Calculate average values
        const cleanAvg =
          cleanValues.reduce((acc, val) => acc + val, 0) / cleanValues.length;
        const amenAvg =
          amenValues.reduce((acc, val) => acc + val, 0) / amenValues.length;
        const privacyAvg =
          privacyValues.reduce((acc, val) => acc + val, 0) /
          privacyValues.length;

        setCleanAvg(cleanAvg);
        setAmenAvg(amenAvg);
        setPrivacyAvg(privacyAvg);

        console.log("cleanAvg: " + cleanAvg);
        console.log("amenAvg: " + amenAvg);
        console.log("privacyAvg: " + privacyAvg);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchItems();
    console.log(users);
  }, []);

  return (
    <div className="min-w-full max-w-full min-h-full h-screen
    bg-white
    p-5">
      <div className="flex flex-col items-center
      w-full
      text-center
      font-bold text-6xl justify-center bg-white">
        TB2G
      </div>

      <div className="">

        <h1 className="text-black text-3xl md:text-4xl lg:text-4xl xl:text-4xl">'
          {id}
        </h1>

        <div className="flex justify-center">

        </div>

      </div>

      {/* floors to shit on */}
      <div className="flex justify-center text-center items-center mx-10 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80">
        <div className="mr-4 mt-6">
          <Rating question="1st floor" answer="get shit on" />
        </div>
      </div>
    </div>
  );
};

export default Building;
