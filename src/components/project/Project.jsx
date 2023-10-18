import React from "react";
import { Box } from "./Box";
import "./project.css";

export const Project = () => {
  return (
    <div>
      <div id="Projects" className="">
        <h2 className="section__title">My Projects</h2>
        <span className="section__subtitle">What I Did</span>
      </div>

      <div className="Box__container">
        <Box
          imageSrc="https://res.cloudinary.com/practicaldev/image/fetch/s--R2BFz1Bx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/9v8y8okfwddraw55zg82.jpg"
          title="Shopping-Page"
          content="ReactJS Shipping Page Learning Project: Enhance your skills in ReactJS, HTML, and CSS with this web app. Select, manage products, view details, and calculate total amount."
          shareLink="https://github.com/mahdivaez/shoppingpage"
          learnMoreLink="https://example.com/learn-more"
          imageClassName="project-image"
        />
        <Box
          imageSrc="https://chat-engine-assets.s3.amazonaws.com/customize_ui/chat_feed-min-min.png"
          title="Chat-engine"
          content="Transforming User Interactions: Empowering Secure and Real-Time Conversations with Firebase Authentication and ChatEngine Integration"
          shareLink="https://github.com/mahdivaez/ChatEngine"
          learnMoreLink="https://example.com/learn-more"
          imageClassName="project-image"
        />
        <Box
          imageSrc="https://repository-images.githubusercontent.com/339179575/14ebec80-722e-11eb-9896-80c5bb056986"
          title="CryptoPriceWatch"
          content="Unveiling the World of Cryptocurrencies: CryptoPriceWatch - A Dynamic React Web Application for Real-Time Cryptocurrency Price Tracking and Data Visualization"
          shareLink="https://github.com/mahdivaez/CryptoPriceWatch"
          learnMoreLink="https://example.com/learn-more"
          imageClassName="project-image"
        />
        <Box
          imageSrc="https://www.ronvangorp.com/wp-content/uploads/2019/04/about-rv-imagefinder.png"
          title="ImageFinder"
          content="ImageFinder is a user-friendly image search project with a vast collection of high-quality photographs. Say goodbye to endless scrolling - find the perfect picture effortlessly."
          shareLink="https://github.com/mahdivaez/ImageFinder"
          learnMoreLink="https://example.com/learn-more"
          imageClassName="project-image"
        />
       
      </div>
    </div>
  );
};