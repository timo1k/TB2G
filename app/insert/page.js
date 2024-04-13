"use client";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase";

const CreateListing = () => {
  const [title, setTitle] = useState("Male");
  const [description, setDescription] = useState("Johnson Hall");
  const [selectedTag, setSelectedTag] = useState("1");
  const [error, setError] = useState("");

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
        // floor: ,
        // section: ,
        // cleanliness: ,
        // amenities: ,
        // privacy: ,
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
        <h1>Create a Review</h1>
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
        <h1>Rating</h1>
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
        <button
          type="button"
          onClick={uploadImage}
          style={{
            padding: "10px 20px",
            background: "red",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default CreateListing;
