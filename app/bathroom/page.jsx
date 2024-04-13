import React from 'react'
import Accordion from '../_components/Accordion'

const bathroom = () => {
  return (
    <div className="min-w-full max-w-full min-h-full h-screen bg-white border-black border-2">

        <div
            className="flex flex-col items-center w-full p-5 text-center
        font-bold text-6xl justify-center bg-white"
        >
            TB2G
        </div>

        <h1 className="text-white text-3xl md:text-4xl lg:text-4xl xl:text-4xl pl-12 pt-7">
            Charles Library
        </h1>

        {/* floors to shit on */}
        <div className="flex justify-center text-center items-center mx-10 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80 h-5">
            <div className="mr-4 mt-6">
                <Accordion question="1st floor" answer="get shit on" />
            </div>
            
            <div className="mr-4 mt-6">
                <Accordion question="1st floor" answer="get shit on" />
            </div>
        </div>
        
    </div>

  )
}

export default bathroom