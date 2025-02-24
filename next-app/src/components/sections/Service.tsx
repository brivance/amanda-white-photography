import { FC } from 'react';
import Image from 'next/image';
import { IoLocationSharp } from "react-icons/io5";
import React from 'react';
import amandaImage from '@images/amanda.jpg';

const Service: FC = () => {
  return (
    <div className="flex flex-col py-28 px-40 gap-8 bg-black text-white">
      <div className="flex gap-5">
        <IoLocationSharp
          size={50}
          color="white"
        />
        <h1 className="text-4xl align-center font-bold">UTAH | IDAHO</h1>
      </div>
      <p className="text-xl mx-16">This text can explain some stuff about conditions about where
        someone is located. for example, would you be open to travel?
        Extra travel fees?</p>
      <div className="flex gap-8 mt-10">
        <Image
          src={amandaImage}
          alt="Utah image"
          height={400}
          width={700}
        />
        <Image
          src={amandaImage}
          alt="Utah image"
          height={400}
          width={700}
        />
      </div>
    </div>
  );
};

export default Service;
