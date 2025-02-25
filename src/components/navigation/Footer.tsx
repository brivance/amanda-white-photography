import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <div className="w-full bg-light-brown bg-[url('../images/noise-light.png')] py-8 text-center text-sans">
        <p>Email <a
          href="mailto:amandawhitephotography@example.com"
          className="underline text-blue-500 hover:text-blue-700"
        >
          amandawhitephotography@example.com
        </a> with any questions or inquiries.</p>
      </div>
    </footer>
  );
};

export default Footer;
