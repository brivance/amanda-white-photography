import * as React from "react"

import { AiOutlineInstagram } from "react-icons/ai";
import { FC } from "react"
import { GetServerSidePropsContext } from "next";
import { GoMail } from "react-icons/go";
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

const ContactPage: FC = () => {
  return (
    <Page>
      <div className="font-gotu text-black flex flex-col items-center gap-10">
        <Title
          title="Contact Me"
        />
        <div>
          <div className="flex gap-20 justify-center text-lg">
            <div className="flex gap-5">
              <AiOutlineInstagram
                size={50}
              />
              <div className="flex flex-col text-center">
                <p>Follow me on instagram</p>
                <p>@amandawhitephotography</p>
              </div>
            </div>
            <div className="flex gap-5">
              <GoMail
                size={50}
              />
              <div className="flex flex-col text-center">
                <p>Have other questions? Email me at</p>
                <p>amandawhitephotography@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default ContactPage;
