"use client"
import React, { useState, useEffect } from "react";
import { collection, getDocs,  orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
// components
import Accordion from "../_components/Accordion";
import Rating from "../_components/Rating"; // Import the Rating component
import Tabs from "../_components/Tabs";

const Building = ({ params }) => {
  // Accessing the id from params
  const id = params.buildingName;

  //fetch data for dynamic stuff
  const [users, setUsers] = useState([]);
  const [floorData, setFloorData] = useState([]);

  const [clean, setClean] = useState([]);
  const [amen, setAmen] = useState([]);
  const [privacy, setPrivacy] = useState([]);

  const [cleanAvg, setCleanAvg] = useState();
  const [amenAvg, setAmenAvg] = useState();
  const [privacyAvg, setPrivacyAvg] = useState();

  const [activeTab, setActiveTab] = useState(1);

  const floorArray = (users) => {

    if (users.length === 0) return [];
    let floorArray = [];
    for (let i = 0; i < users.length; i++) {
      floorArray.push(i + 1);
    }
    return floorArray;
  };

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
        // console.log(filteredData);


        const cleanValues = filteredData.map((item) =>
          parseInt(item.cleanliness)
        );
        const amenValues = filteredData.map((item) => parseInt(item.amenities));
        const privacyValues = filteredData.map((item) =>
          parseInt(item.privacy)
        );

        setClean(cleanValues);
        setAmen(amenValues);
        setPrivacy(privacyValues);


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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchItems();

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

      <div className="mx-10 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80">

        <h1 className="py-10 text-black text-3xl md:text-4xl lg:text-4xl xl:text-4xl">'
          {id}
        </h1>

        <div className="flex flex-col justify-center text-center items-center ">

          <div className="">
            <Tabs tabsArray={floorArray(users)}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            />

              {activeTab && (
                  <Rating rating={users[activeTab - 1]}/>)}

          </div>

        </div>

      </div>
    </div>
  );
};

export default Building;
