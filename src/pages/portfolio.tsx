import * as React from "react"

import { FC } from "react"
import { GetServerSidePropsContext } from "next";
import Image from 'next/image';
import Page from "../components/navigation/Page";
import Title from "../components/sections/Title";
import { requireAuth } from "@lib/auth";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const authResult = await requireAuth(context);

  if (authResult.redirect) {
    return authResult; // Redirect the user if not authenticated
  }

  // Any additional data for the page can be fetched here (right now nothing is in props)
  return {
    props: {},
  };
};

const PortfolioPage: FC = () => {
  return (
    <Page>
      <div className="font-gotu font-medium text-black flex flex-col items-center gap-10">
        <Title
          title="All Services"
        />
        <div>
          <div className="bg-light-brown bg-[url('../images/noise-light.png')] text-white p-4 text-4xl grid grid-cols-2 grid-rows-3 gap-x-20 gap-y-5 mb-24 text-center">
            <div>NEWBORN</div>
            <div>PORTRAITS</div>
            <div>LANDSCAPES</div>
            <div>ENGAGEMENTS</div>
            <div>SENIORS</div>
            <div>GRADUATION</div>
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
      </div>
    </Page>
  )
}

export default PortfolioPage;