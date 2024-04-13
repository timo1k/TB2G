"use client";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase";
import Image from "next/image";

const CreateListing = () => {
  const [title, setTitle] = useState("Male");
  const [description, setDescription] = useState("Johnson Hall");
  const [selectedTag, setSelectedTag] = useState("1");
  const [floor, setFloor] = useState("1");
  const [error, setError] = useState("");
  const [section, setSection] = useState("Main");
  const [clean, setClean] = useState("1");
  const [amen, setAmen] = useState("1");
  const [privacy, setPrivacy] = useState("1");

  const handleCleanChange = (event) => {
    setClean(event.target.value);
  };
  const handleAmenChange = (event) => {
    setAmen(event.target.value);
  };
  const handlePrivacyChange = (event) => {
    setPrivacy(event.target.value);
  };

  const handleSectionChange = (event) => {
    setSection(event.target.value);
  };

  const handleFloorChange = (event) => {
    setFloor(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  const uploadImage = async () => {
    try {
      // Save data to Firestore
      const docRef = await addDoc(collection(firestore, "Reviews"), {
        Gender: title,
        Building: description,
        createdAt: new Date(),
        floor: floor,
        section: section,
        cleanliness: clean,
        amenities: amen,
        privacy: privacy,
        // accesibility: ,
        // size: ,
        // ambiance: ,
        // technology: ,
        // maintenence: ,
        rating: selectedTag,
      });
      console.log("Document written with ID: ", docRef.id);

      alert("Thanks 4 ur shit review!");
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Error uploading review. Please try again.");
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <div
        className="card"
        style={{
          width: "400px",
          margin: "auto",
          textAlign: "",
          padding: "20px",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          borderRadius: "10px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Create a Review
        </h1>
        <br></br>
        <Image
          src="/images.png"
          width={100}
          height={100}
          style={{ display: "block", margin: "auto", marginBottom: "20px" }}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <br></br>
        <h1>Gender</h1>
        <select
          value={title}
          onChange={handleTitleChange}
          className="input-field"
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid black", // Set the border color to black
          }}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br />
        <h1>Building</h1>
        <select
          value={description}
          onChange={handleDescriptionChange}
          className="input-field"
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid black", // Set the border color to black
          }}
        >
          <option value="Johnson Hall">Johnson Hall</option>
          <option value="Smith Building">Smith Building</option>
          <option value="Anderson Tower">Anderson Tower</option>
          <option value="Tuttleman">Tuttleman</option>
          <option value="Serc">Serc</option>
        </select>
        <br />
        <h1>Section</h1>
        <select
          value={section}
          onChange={handleSectionChange}
          className="input-field"
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid black", // Set the border color to black
          }}
        >
          <option value="Main">Main</option>
          <option value="East">East</option>
          <option value="West">West</option>
          <option value="South">South</option>
        </select>
        <br></br>
        <h1>Floor</h1>
        <select
          value={floor}
          onChange={handleFloorChange}
          className="input-field"
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid black", // Set the border color to black
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br></br>
        <h1>Amenities (1-5 : worst-best)</h1>
        <select
          value={amen}
          onChange={handleAmenChange}
          className="input-field"
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid black", // Set the border color to black
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br></br>
        <h1>Privacy (1-5 : worst-best)</h1>
        <select
          value={privacy}
          onChange={handlePrivacyChange}
          className="input-field"
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid black", // Set the border color to black
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br></br>
        <h1>Cleanliness (1-5 : worst-best)</h1>
        <select
          value={clean}
          onChange={handleCleanChange}
          className="input-field"
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid black", // Set the border color to black
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br></br>
        <h1>Rating (1-5 : worst-best)</h1>
        <select
          value={selectedTag}
          onChange={handleTagChange}
          className="input-field"
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid black", // Set the border color to black
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <br></br>
        <button
          type="button"
          onClick={uploadImage}
          style={{
            padding: "10px 20px",
            background: "red",
            color: "#fff",
            border: "none",
            display: "block",
            margin: "auto",
            marginBottom: "20px",

            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Upload
        </button>
      </div>
      {/* <Image
        height="300"
        width="300"
        src={
          "https://chart.googleapis.com/chart?cht=qr&chl=http%3A%2F%2Flocalhost%3A3000%2Finsert&chs=180x180&choe=UTF-8&chld=L|2"
        }
      /> */}
    </div>
  );
};

export default CreateListing;
