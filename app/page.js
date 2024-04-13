import Button from "./_components/Button";
import Accordion from "./_components/Accordion";
import ImageCard from "./_components/ImageCard";

import Marquee from "./_components/Marquee";

export default function Home() {
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
        <Button>Click me!</Button>

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
      </div>
    </main>
  );
}
