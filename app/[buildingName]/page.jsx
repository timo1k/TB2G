"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
// components
import Accordion from "../_components/Accordion";
import Rating from "../_components/Rating"; // Import the Rating component
import Tabs from "../_components/Tabs";

import { BarChart } from "@mui/x-charts/BarChart";

const Building = ({ params }) => {
  // Accessing the id from params
  const id = params.buildingName;

  //fetch data for dynamic stuff
  const [users, setUsers] = useState([]);
  const [floorData, setFloorData] = useState({});
  const [msg, setMsg] = useState();
  const [data, setData] = useState();

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
        console.log(filteredData);

        const floorDataMap = filteredData.reduce((acc, item) => {
          const floor = item.floor;
          if (!acc[floor]) {
            acc[floor] = [];
          }
          acc[floor].push(item);
          return acc;
        }, {});
        setFloorData(floorDataMap);
        console.log(floorDataMap);

        // Define the time intervals and their corresponding hour values
        const timeIntervals = {
          "12AM": 0, // Midnight
          "1AM": 1,
          "2AM": 2,
          "3AM": 3,
          "4AM": 4,
          "5AM": 5,
          "6AM": 6,
          "7AM": 7,
          "8AM": 8,
          "9AM": 9,
          "10AM": 10,
          "11AM": 11,
          "12PM": 12,
          "1PM": 13,
          "2PM": 14,
          "3PM": 15,
          "4PM": 16,
          "5PM": 17,
          "6PM": 18,
          "7PM": 19,
          "8PM": 20,
          "9PM": 21,
          "10PM": 22,
          "11PM": 23, // 11PM
        };

        // Function to get the hour value for a given time interval
        function getHourValue(timeInterval) {
          return timeIntervals[timeInterval];
        }

        const hourCounts = new Array(24).fill(0);

        // Iterate through each item in the floor data
        for (const floor in floorDataMap) {
          const floorItems = floorDataMap[floor];
          floorItems.forEach((item) => {
            // Access the createdAt field and convert it to a Date object
            const timestamp = item.createdAt.toDate().toLocaleString();

            // Get the time part of the timestamp
            const timePart = timestamp.split(", ")[1];

            // Extract the hour component from the time
            var hour = parseInt(timePart.split(":")[0]);

            // Adjust the hour for PM times
            if (timePart.includes("PM") && hour !== 12) {
              hour += 12;
            }

            // Increment the corresponding slot in the array by 1
            hourCounts[hour]++;
          });
        }

        console.log(hourCounts); // This will contain the counts for each hour slot

        setMsg(
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: [
                  "12AM", // Midnight
                  "1AM",
                  "2AM",
                  "3AM",
                  "4AM",
                  "5AM",
                  "6AM",
                  "7AM",
                  "8AM",
                  "9AM",
                  "10AM",
                  "11AM",
                  "12PM",
                  "1PM",
                  "2PM",
                  "3PM",
                  "4PM",
                  "5PM",
                  "6PM",
                  "7PM",
                  "8PM",
                  "9PM",
                  "10PM",
                  "11PM",
                ],
              },
            ]}
            series={[{ data: hourCounts, label: "Activity" }]}
            width={600}
            height={350}
          />
        );

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

        console.log("clean: " + cleanValues);
        console.log("amen: " + amenValues);
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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchItems();
  }, []);

  return (
    <div
      className="min-w-full max-w-full min-h-full h-screen
    bg-white
    p-5"
    >
      <div
        className="flex flex-col items-center
      w-full
      text-center
      font-bold text-6xl justify-center bg-white"
      >
        TB2G
      </div>

      <div className="mx-10 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80">
        <h1 className="py-10 text-black text-3xl md:text-4xl lg:text-4xl xl:text-4xl">
          {id}
        </h1>

        <div className="flex flex-col justify-center text-center items-center ">
          <div className="">
            <Tabs
              tabsArray={floorArray(users)}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {activeTab && <Rating rating={users[activeTab - 1]} />}
          </div>

          <br></br>
          <br></br>
          {msg}

          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default Building;
