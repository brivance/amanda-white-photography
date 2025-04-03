import * as React from "react"

import { FC } from "react"
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import { ImageHoverBlur } from "@src/components/sections/ImageHoverBlur";
import Page from "../components/navigation/Page";
import Title from "@components/sections/Title";
import { getSession } from "next-auth/react";

// import noiseLight from '@images/noise-light.png';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const session = await getSession({ req: context.req });
  const isAuthenticated = !session ? false : true;

  return {
    props: { isAuthenticated },
  };
};

const PortfolioPage: FC = () => {
  return (
    <Page>
      <div className="font-gotu font-medium text-black flex flex-col items-center">
        <div className="w-full gap-10">
          <Title title="Portfolio" />
          <div className="my-11 text-black py-4 px-[20%] text-4xl grid grid-cols-3 grid-rows-2 gap-y-10 gap-x-24 text-center"
          >
            <ImageHoverBlur
              src="/images/amanda.jpg"
              alt="Graduation"
              width={300}
              height={300}
              title="GRADUATION"
            />
            <ImageHoverBlur
              src="/images/amanda.jpg"
              alt="Newborn"
              width={300}
              height={300}
              title="NEWBORN"
            />
            <ImageHoverBlur
              src="/images/amanda.jpg"
              alt="Newborn"
              width={300}
              height={300}
              title="PORTRAITS"
            />
            <ImageHoverBlur
              src="/images/amanda.jpg"
              alt="Newborn"
              width={300}
              height={300}
              title="LANDSCAPES"
            />
            <ImageHoverBlur
              src="/images/amanda.jpg"
              alt="Newborn"
              width={300}
              height={300}
              title="ENGAGEMENTS"
            />
            <ImageHoverBlur
              src="/images/amanda.jpg"
              alt="Newborn"
              width={300}
              height={300}
              title="SENIORS"
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1>Newborn</h1>
        </div>
        <h1>Portraits</h1>
        <h1>Landscapes</h1>
        <h1>Engagements</h1>
        <h1>Seniors</h1>
        <div>
          <h1>Graduation</h1>
          {/* <Image
              src="https://photos.app.goo.gl/REzmSZJ6o3t14Lvz7"
              alt="Google Photo"
              width={500}
              height={300}
            /> */}
        </div>
      </div>
    </Page>
  )
}

export default PortfolioPage;