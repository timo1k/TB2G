"use client";
import "../globals.css";
import { useEffect, useRef, useState } from "react";

export default function Rating({ question, answer }) {
  const [showContent, setShowContent] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      // Get the actual height of the content
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [showContent]);

  return (
    <div className="w-[500px] rounded-base border-2 border-black shadow-base">
      <button
        role="button"
        aria-expanded={showContent}
        style={{ borderBottom: showContent ? "solid 2px" : "0px" }}
        className="flex w-full items-center justify-between rounded-base border-black bg-main p-5 font-bold"
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        {question}
        <span className="ml-4">{showContent ? "-" : "+"}</span>
      </button>
      <div
        ref={contentRef}
        style={{ height: showContent ? `${contentHeight}` : "0", overflow: "hidden" }} // Set overflow to hidden
        className="overflow-hidden rounded-base bg-white font-bold transition-[height] ease-in-out"
      >
        <p className="p-5">
          {/* rating */}
          <div class="flex flex-col">
            <div class="flex items-center">
              <div class="mr-2 inline-block">Cleanliness </div>
              <div class="rectangle-box inline-block">
                <div
                  class="bg-main"
                  style={{ width: `${(3 / 5) * 100}%`, height: "100%" }}
                ></div>
              </div>
              <div class="ml-2 inline-block">3</div>
            </div>
            
          </div>
            <br></br>
          <div class="flex flex-col">
            <div class="flex items-center">
              <div class="mr-2 inline-block">Amenities </div>
              <div class="rectangle-box inline-block">
                <div
                  class="bg-main"
                  style={{ width: `${(4 / 5) * 100}%`, height: "100%" }}
                ></div>
              </div>
              <div class="ml-2 inline-block">4</div>
            </div>
            

          </div>
          <br></br>
          <div class="flex flex-col">
            <div class="flex items-center">
              <div class="mr-2 inline-block">Privacies </div>
              <div class="rectangle-box inline-block">
                <div
                  class="bg-main"
                  style={{ width: `${(1 / 5) * 100}%`, height: "100%" }}
                ></div>
              </div>
              <div class="ml-2 inline-block">1</div>
            </div>
            

          </div>
        </p>
      </div>
    </div>
  );
}

