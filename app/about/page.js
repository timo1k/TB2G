"use client";
import React from "react";
import { AnimatedTooltip } from "../_components/animated-tooltip";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Temple Bathroom 2 Go (TB2G)</h1>
      <p className="text-lg text-gray-700 mb-8">
        Welcome to Temple Bathroom 2 Go (TB2G) - your ultimate solution for
        finding the best bathrooms on Temple University's campus!
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">What is TB2G?</h2>
        <p className="text-lg text-gray-700">
          TB2G is a revolutionary app designed to enhance your restroom
          experience at Temple University. Whether you're a student, faculty
          member, or visitor, TB2G provides you with the tools to locate, rate,
          and discover the cleanest and most convenient bathrooms on campus.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>
            <strong>Rating System:</strong> Users can rate and review bathrooms
            based on cleanliness, accessibility, and amenities.
          </li>
          <li>
            <strong>Search Functionality:</strong> Easily find bathrooms near
            your current location or within a specific building.
          </li>
          <li>
            <strong>Machine Learning Prediction:</strong> Our advanced ML
            classifier analyzes user ratings and predicts the best bathrooms to
            use at any given moment.
          </li>
          <li>
            <strong>User Posts:</strong> Share your bathroom experiences with
            the TB2G community by creating posts and leaving helpful tips for
            fellow users.
          </li>
          <li>
            <strong>Interactive Map:</strong> Visualize bathroom locations on a
            campus map and navigate to your desired restroom with ease.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <p className="text-lg text-gray-700 mb-4">Using TB2G is simple:</p>
        <ol className="list-decimal list-inside text-lg text-gray-700">
          <li>
            Sign up for an account or log in with your existing credentials.
          </li>
          <li>
            Browse through the list of available bathrooms or search for a
            specific location.
          </li>
          <li>Rate and review bathrooms based on your experience.</li>
          <li>
            Explore user-generated posts and recommendations to discover hidden
            gems.
          </li>
          <li>
            Utilize the ML prediction feature to find the optimal restroom for
            your needs.
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Join the Community</h2>
        <p className="text-lg text-gray-700">
          Download TB2G today and become part of the Temple Bathroom 2 Go
          community! Whether you're rushing to class or taking a leisurely
          stroll through campus, TB2G ensures that your restroom breaks are
          comfortable, convenient, and stress-free.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Ready to experience Temple's bathrooms like never before? Get started
          with TB2G now!
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
        <p className="text-lg text-gray-700">Frontend:</p>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>
            Next.js - A React framework for building server-rendered and
            statically generated web applications.
          </li>
          <li>
            Tailwind CSS - A utility-first CSS framework for rapidly building
            custom designs.
          </li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">Backend:</p>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>
            Firebase - A comprehensive platform provided by Google for building
            web and mobile applications, including real-time databases and
            authentication services.
          </li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">Machine Learning:</p>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>
            Say X Model - A machine learning model (replace "Say X Model" with
            the actual model name) trained to predict the best bathrooms based
            on user ratings and other factors.
          </li>
          <li>
            Python Server - A backend server implemented in Python to handle
            machine learning predictions and other server-side operations.
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Future Capabilities</h2>
        <p className="text-lg text-gray-700">
          make mobile app + get acquired by temple uni.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">GitHub Repositories</h2>
        <p className="text-lg text-gray-700">
          Explore our GitHub repositories to view the source code:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>
            <a
              href="https://github.com/timo1k/TB2G"
              className="underline hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              TB2G Repository
            </a>{" "}
            this repo contains frontend code
          </li>
          <li>
            <a
              href="https://github.com/timo1k/TB2G_2"
              className="underline hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              TB2G_2 Repository
            </a>{" "}
            this repo has the python code and the TB2G repo as a submodule
          </li>
        </ul>
        <br></br>
        <p>p.s. i dont know why we have two repos</p>
      </div>
      <AnimatedTooltipPreview />
    </div>
  );
};

export default AboutPage;

const people = [
  {
    id: 1,
    name: "Elle Nguyen",
    designation: "",
    image:
      "https://media.licdn.com/dms/image/D4E03AQGUWi0QJysBiA/profile-displayphoto-shrink_400_400/0/1689784752348?e=1718236800&v=beta&t=93onPTQIfLLlW22bk4zsa4pQGlwHiSuVITuzXATZYXs",
  },
  {
    id: 2,
    name: "Timothy Khumpan",
    designation: "",
    image:
      "https://media.licdn.com/dms/image/D5603AQGbxja6F1WDhg/profile-displayphoto-shrink_400_400/0/1665499408876?e=1718236800&v=beta&t=EKw8fFiXYtpMEhqKsAGOFBI113FklJI3w3d_WkIKzG4",
  },
  {
    id: 3,
    name: "Alex Li",
    designation: "",
    image:
      "https://media.licdn.com/dms/image/D4D03AQFtCLiye4vJQg/profile-displayphoto-shrink_400_400/0/1698715909939?e=1718236800&v=beta&t=qKFwZEj5rk6tqqXaXjvyhK-4tRYNqPj0bM29lYkvSVA",
  },
  {
    id: 4,
    name: "Phuykong Meng",
    designation: "",
    image:
      "https://media.licdn.com/dms/image/D4E35AQGaypPpsmxkkA/profile-framedphoto-shrink_400_400/0/1701241667112?e=1713603600&v=beta&t=rxa939ZdU3Oqhj8vMqivrGtNgxG2YfOjTrxZi07blcE",
  },
  {
    id: 5,
    name: "Bryan Li",
    designation: "",
    image:
      "https://media.licdn.com/dms/image/D4E03AQFLv54xOgjLuw/profile-displayphoto-shrink_400_400/0/1675457099898?e=1718236800&v=beta&t=Ve0RFVKOOa4Sg_6T7MGPCI_5RDufj0GdxMshRGMDjwM",
  },
];

function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
