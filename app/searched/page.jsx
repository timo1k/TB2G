"use client";
import React, { useState, useEffect } from "react";
import Select from "../_components/Select";
import Image from "next/image";
import MoonLoader from "react-spinners/MoonLoader";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import BarLoader from "react-spinners/BarLoader";
import ClipLoader from "react-spinners/ClipLoader";
import HashLoader from "react-spinners/HashLoader";
import axios from "axios"; // Don't forget to import axios

const Searched = ({ params }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [load, setLoad] = useState(true);
  const [msg, setMsg] = useState();
  const [data, setData] = useState(null); // New state to hold endpoint data

  const items = ["recomendations", "distance"];

  useEffect(() => {
    if (load === true) {
      setMsg(
        // <Image
        // src="/loading.gif"
        // width={400}
        // height={400}
        // />
        <div className="flex justify-center h-400 w-640 mt-48">
          <br></br>
          <MoonLoader color="#9E1B34" />
          {/* <HashLoader color="#9E1B34" /> */}
          {/* <ClimbingBoxLoader color="#9E1B34" /> */}
          {/* <BarLoader color="#9E1B34" /> */}
          {/* <ClipLoader color="#9E1B34" /> */}
        </div>
      );
    }

    getLocation();
    dataAzure();
  }, []);

  const dataAzure = async () => {
    try {
      const response = await axios.get(
        "https://tb2g.azurewebsites.net/startFunction"
      );

      //TODO make server side and not expose endpoint

      setData(response.data); // Set data from endpoint to state
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // get current location
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        loadMapScript(position.coords.latitude, position.coords.longitude);
      });
    }
  }

  function loadMapScript(lat, lon) {
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCWGP2yhBJIGzkCJzLUIUfRTrYvTKoxKlk&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onload = () => initializeMap(lat, lon);
      document.head.appendChild(script);
    } else {
      initializeMap(lat, lon);
    }
  }

  function initializeMap(lat, lon) {
    setLoad(false);
    if (load === false) {
      setMsg(<div></div>);
    }

    const locations = [
      ["Charles", 39.98222, -75.15535],
      ["Tuttleman", 39.9803572, -75.1541994],
      ["Wachman", 39.98079, -75.15739],
      ["SERC", 39.981991, -75.153053],
    ];

    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat: lat, lng: lon },
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      // Apply custom style to set z-index
      styles: [{ zIndex: 0 }],
    });

    const infowindow = new window.google.maps.InfoWindow();

    // Add a marker for the current location
    const userMarker = new window.google.maps.Marker({
      position: new window.google.maps.LatLng(lat, lon),
      map: map,
      title: "Your Location",
    });

    userMarker.addListener("click", () => {
      infowindow.setContent("Your Location");
      infowindow.open(map, userMarker);
    });

    locations.forEach((location) => {
      const marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(location[1], location[2]),
        map: map,
        title: location[0],
      });

      marker.addListener("mouseover", () => {
        infowindow.setContent(location[0]);
        infowindow.open(map, marker);
      });

      marker.addListener("mouseout", () => {
        infowindow.close();
      });

      marker.addListener("click", () => {
        infowindow.setContent(location[0]);
        infowindow.open(map, marker);
        // Navigate to the destination
        navigateToDestination(lat, lon, location[1], location[2]);
      });
    });
  }

  // Function to navigate to the destination
  function navigateToDestination(userLat, userLng, destLat, destLng) {
    window.open(
      `https://www.google.com/maps/dir/${userLat},${userLng}/${destLat},${destLng}`
    );
  }

  return (
    <main className="min-w-full max-w-full min-h-full h-screen bg-white">
      <div className="flex flex-col items-center w-full text-center p-5 font-bold text-6xl justify-center">
        <span>TB2G</span>
      </div>
      <div className="bg-main w-full min-h-24 border-2 border-black"></div>

      <div className="mx-10 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80">
        <div className="flex justify-center mt-6">
          <div className="flex flex-col items-center w-full text-center font-bold text-4xl justify-center bg-white">
            Best Bathroom to 💩 near YOU
          </div>
          <Select items={items} />
        </div>

        <div className="flex justify-center mt-4">
          <div id="map" style={{ width: "600px", height: "450px", zIndex: 0 }}>
            {msg}
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
          {data ? (
            <div>
              <div className="text-center font-bold">
                <h1>Top Bathrooms - Recommended by our AI</h1>
                <br></br>
              </div>
              {data.map((item, index) => (
                <div>
                  <div key={index} className="flex justify-center">
                    <figure className="relative w-[1000px] justify-between text-start overflow-hidden rounded-base border-2 border-black bg-main shadow-base text-white">
                      <figcaption className="border-t-2 border-black p-4 flex justify-between">
                        <span>
                          <strong>Building:</strong> {item[0]}
                        </span>
                        <span>
                          <strong> Floor:</strong> {item[1]}
                        </span>
                        <span>
                          <strong> Rating:</strong> {Math.round(item[3] * 100) / 100};
                        </span>
                      </figcaption>
                    </figure>
                  </div>
                  <br></br>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center h-400 w-640 mt-48">
              <br></br>
              <MoonLoader color="#9E1B34" />
            </div>
          )}
          <br></br>
        </div>
      </div>
    </main>
  );
};

export default Searched;
