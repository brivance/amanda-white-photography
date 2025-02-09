import { FC } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import React from 'react';
import locationImageOne from '../../src/images/amanda.jpg';
import locationImageTwo from '../../images/amanda.jpg';

const Location: FC = () => {
  return (
    <div className="flex flex-col py-28 gap-8 bg-black text-white">
      <div className="mx-[10%]">
        <div className="flex gap-5">
          <IoLocationSharp
            size={40}
            color="white"
          />
          <h1 className="text-4xl align-center font-bold">UTAH | IDAHO</h1>
        </div>
        <p className="text-xl mt-3">This text can explain some stuff about conditions about where
          someone is located. for example, would you be open to travel?
          Extra travel fees?</p>
        <div className="flex flex-col md:flex-row gap-8 mt-10 min-w-[50%] max-w-[100%]">
          <img src={locationImageOne} alt="Utah image" className="w-[700px] h-[400px] object-cover" />
          <img src={locationImageTwo} alt="Utah image" className="w-[700px] h-[400px] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Location;
