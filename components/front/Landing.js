import React from 'react';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className="flex items-center justify-between px-4 md:px-20">
      <div id="heading" className="flex-1">
        <div id="bounding">
          <h1 className="boundingelem">POWER</h1>
        </div>
        <div className="blocktext">
          <div id="bounding">
            <h1 className="boundingelem ml-56" id="secondh1">HOUSE</h1>
          </div>
          <div id="bounding">
            <h4 className="boundingelem font-bold">STRONGER EVERY SINGLE DAY</h4>
          </div>
        </div>
      </div>

      <div className="relative w-[500px] h-[500px] hidden md:block">
        <Image
          src="/fitbg.png"
          alt="Fitness"
          fill
          className="object-contain rounded-lg"
          priority
        />
      </div>
    </div>
  );
};

export default Landing;