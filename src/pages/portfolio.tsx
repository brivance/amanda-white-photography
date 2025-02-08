import * as React from "react"

import { FC } from "react"
import Page from "../components/navigation/Page";
import { StaticImage } from "gatsby-plugin-image";
import Title from "../components/sections/Title";

const PortfolioPage: FC = () => {
  return (
    <Page>
      <div className="font-mulish text-black flex flex-col items-center gap-10">
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
            <img src="https://photos.app.goo.gl/REzmSZJ6o3t14Lvz7" alt="Google Photo" />

          </div>
        </div>
      </div>
    </Page>
  )
}

export default PortfolioPage;