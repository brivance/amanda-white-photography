import { FC } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

type TitleProps = {
  title: string;
};

const Title: FC<TitleProps> = ({
  title,
}) => {
  return (
    <div className="text-center mt-24 mb-12 font-mulish font-light text-5xl">
      <p>{title}</p>
    </div>
  );
};

export default Title;
