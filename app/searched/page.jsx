"use client";
import React, { useState, useEffect } from "react";

const Searched = ({ params }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

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
    const locations = [
      ["Charles", 39.982220, -75.155350],
      ["Turtle", 39.9803572, -75.1541994],
      ['Wachman',39.98079, -75.15739],
    ];

    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: { lat: lat, lng: lon },
      mapTypeId: window.google.maps.MapTypeId.ROADMAP
    });

    const infowindow = new window.google.maps.InfoWindow();

    // Add a marker for the current location
    const userMarker = new window.google.maps.Marker({
      position: new window.google.maps.LatLng(lat, lon),
      map: map,
      title: "Your Location"
    });

    userMarker.addListener('click', () => {
      infowindow.setContent("Your Location");
      infowindow.open(map, userMarker);
    });

    locations.forEach(location => {
      const marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(location[1], location[2]),
        map: map,
        title: location[0]
      });

      marker.addListener('mouseover', () => {
        infowindow.setContent(location[0]);
        infowindow.open(map, marker);
      });

      marker.addListener('mouseout', () => {
        infowindow.close();
      });

      marker.addListener('click', () => {
        infowindow.setContent(location[0]);
        infowindow.open(map, marker);
        // Navigate to the destination
        navigateToDestination(lat, lon, location[1], location[2]);
      });
    });
  }

  // Function to navigate to the destination
  function navigateToDestination(userLat, userLng, destLat, destLng) {
    window.open(`https://www.google.com/maps/dir/${userLat},${userLng}/${destLat},${destLng}`);
  }

  return (
    <div className="min-w-full max-w-full min-h-full h-screen bg-white p-5">
      
      <div className="flex flex-col items-center w-full text-center font-bold text-6xl justify-center bg-white">
        TB2G
      </div>
      

      <div className="mx-10 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80">
        <div className="flex flex-col items-center w-full text-center font-bold text-4xl justify-center bg-white">
          Best Bathroom to shit near YOU
        </div>
        

        <div className="flex justify-center mt-6">
          <div id="map" style={{ width: "600px", height: "450px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Searched;
