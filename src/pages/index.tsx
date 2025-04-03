import * as React from "react"

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import Footer from "../components/navigation/Footer"
import { GetServerSidePropsContext } from "next";
import { HomeNavBar } from "../components/navigation/NavBar"
import Image from 'next/image';
import Location from "../components/sections/Location"
// import amandaImage from '@images/amanda.jpg';
import { getSession } from "next-auth/react";

// import landingImage from '@images/home-image.jpg';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const session = await getSession({ req: context.req });
  const isAuthenticated = !session ? false : true;

  return {
    props: { isAuthenticated },
  };
};


const IndexPage = ({ isAuthenticated }: { isAuthenticated: boolean }) => {

  return (
    <div className="font-gotu">

      <ParallaxBanner style={{ aspectRatio: '16 / 9' }}>
        <ParallaxBannerLayer image="/images/flower-field.jpeg" speed={-40} />
        <ParallaxBannerLayer>
          <div className="flex flex-col items-center justify-center h-full w-full font-raleway font-thin text-center opacity-80 mx-3 text-ellipsis text-off-white">
            <h1 className=" text-5xl lg:text-7xl text-ellipsis">
              amanda white photography
            </h1>
            <p className="font-unbounded text-lg lg:text-3xl text-ellipsis">
              her cute little logo that she&apos;ll be thinking of soon</p>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
      <HomeNavBar
        isAuthenticated={isAuthenticated}
      />
      <div className="flex flex-wrap justify-center gap-20 my-[10%] mx-[5%]">
        <div className="min-w-[300px] flex-shrink-0 items-center align-middle">
          <Image
            src="/images/amanda.jpg"
            alt="photo of the lovely amanda"
            className="aspect-[3/4] object-cover rounded-[50%]"
            width={400}
            height={533}
            priority
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-3 max-w-[500px] min-w-[300px]">
          <h1 className="text-4xl">About Me</h1>
          <p className="text-lg text-center">
            Plandor ventic safrid ulbore tasvene. Crivane follim dastren mouras pilfer
            acklen. Lormet quaste midral somivre plenstav grethin. Varnith elnor pristal
            veruim talbroc flinter. Torsil vanture marnet crivest uniplor darvite. Prancle
            flotem berisque navol clendric. Amvith torcen stipare caltoric jendril rastove.
            Quarven dimplit vorance fostem viqual senran. Torsil vanture marnet crivest
            uniplor darvite. Prancle flotem berisque navol clendric. Amvith torcen stipare
            caltoric jendril rastove. Quarven dimplit vorance fostem viqual senran. Torsil
            vanture marnet crivest uniplor darvite. Prancle flotem berisque navol clendric.
            Amvith torcen stipare caltoric jendril rastove. Quarven dimplit vorance fostem
            viqual senran.
          </p>
        </div>
      </div>
      <Location />
      <Footer />
    </div >
  );
};

export default IndexPage;