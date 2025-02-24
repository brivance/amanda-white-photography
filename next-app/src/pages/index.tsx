import * as React from "react"

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import { FC } from "react"
import Footer from "../components/navigation/Footer"
import { HomeNavBar } from "../components/navigation/NavBar"
import Image from 'next/image';
import Location from "../components/sections/Location"
import amandaImage from '../images/amanda.jpg';
import landingImage from '../images/home-image.jpeg';
import { useSession } from "next-auth/react";

// import landingImage from '../images/home-image.jpeg';

const IndexPage: FC = () => {

  const { data: session } = useSession();
  console.log("session", session);
  return (
    <div className="font-gotu">
      {/* you may want to use react-scroll-parallax instead here */}
      <ParallaxBanner style={{ aspectRatio: '7/3', backgroundImage: `url(${landingImage})` }}>
        <ParallaxBannerLayer speed={-20} >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="font-unbounded text-black text-5xl lg:text-7xl text-ellipsis opacity-80 font-raleway font-thin text-center mx-3">
              amanda white photography
            </h1>
            <p className="font-unbounded text-black text-lg lg:text-3xl text-ellipsis opacity-80 font-raleway font-thin text-center mx-3">
              her cute little logo that she&apos;ll be thinking of soon</p>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
      <HomeNavBar />
      <div className="flex flex-wrap justify-center gap-20 my-[10%] mx-[5%]">
        <div className="min-w-[300px] flex-shrink-0 items-center align-middle">
          <Image
            src={amandaImage}
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
    </div>
  )
}

export default IndexPage;