import * as React from "react"

import { FC } from "react"
import { Footer } from "../components/navigation/Footer"
import { HomeNavBar } from "../components/navigation/NavBar"
import Location from "../components/sections/Location"
import { Parallax } from 'react-parallax';
import amandaImage from '../images/amanda.jpg';
import landingImage from '../images/home-image.jpg';

const IndexPage: FC = () => {
  return (
    <>
      <Parallax
        bgImage={landingImage}
        bgImageAlt="main photo"
        strength={400}
        className="grid place-items-center"
        bgImageStyle={{
          position: 'relative',
          height: '100%',
        }}
        bgClassName="row-start-1 col-start-1"
        contentClassName="text-wrap row-start-1 col-start-1"
      >
        <h1 className="font-gotu text-white text-5xl lg:text-7xl text-ellipsis opacity-80 font-raleway font-thin text-center mx-3">
          AMANDA WHITE PHOTOGRAPHY
        </h1>
        <p className="font-gotu text-white text-lg lg:text-3xl text-ellipsis opacity-80 font-raleway font-thin text-center mx-3">
          her cute little logo that she'll be thinking of soon</p>
      </Parallax>
      <HomeNavBar />
      <div className="flex flex-wrap justify-center gap-20 my-[10%] mx-[5%]">
        <div className="min-w-[300px] flex-shrink-0 items-center align-middle">
          <img
            src={amandaImage}
            alt="photo of the lovely amanda"
            className="aspect-[3/4] object-cover rounded-[50%] max-w-[400px]"
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
    </>
  )
}

export default IndexPage;