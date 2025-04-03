import { FC } from 'react';
import React from 'react';

type TitleProps = {
  title: string;
  className?: string;
};

const Title: FC<TitleProps> = ({
  title,
  className,
}) => {
  return (
    <div className={`text-center mt-24 mb-12 font-gotu font-semibold text-black text-6xl ${className}`}>
      <p>{title}</p>
    </div>
  );
};

export default Title;
