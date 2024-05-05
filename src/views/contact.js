import React from "react";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Styles/contact.css";
import GMap from "../components/GoogleMaps.jsx";
import Contactimage from "./Images/IMG_1696.jpg";
import NGOICON from "./../components/Images/GCAHF.png";
const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      className="tw-px-4 tw-py-2 lg:tw-self-start  tw-self-center tw-bg-green-200 hover:tw-rounded-lg tw-transition-all tw-duration-300 hover:tw-shadow-2xl hover:-tw-translate-y-3 hover:tw-scale-105"
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};
const Contact = (props) => {
  return (
    <>
      <Helmet>
        <title>Geriatric Care and Health Foundation</title>
        <link rel="icon" href={NGOICON} />

        <meta name="title" content="Geriatric Care and Health Foundation" />
        <meta
          name="description"
          content="Dedicated to improving the health and well-being of older adults through high-quality, compassionate care."
        />
        <meta
          name="keywords"
          content="Geriatric Care, Health Foundation, Elderly Care, Senior Health"
        />
        <meta
          property="og:title"
          content="Geriatric Care and Health Foundation"
        />
        <meta
          property="og:description"
          content="Dedicated to improving the health and well-being of older adults through high-quality, compassionate care."
        />

        <meta property="og:url" content="https://geriatrichcf.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="contact-container">
        <Helmet>
          <title>Contact - GCAHF</title>
          <meta
            property="og:title"
            content="Contact - Agitated Brisk Chicken"
          />
        </Helmet>
        <div className="contact-container01">
          <div className="contact-container02">
            <img alt="image" src={Contactimage} className="contact-image" />
          </div>
          <div className="contact-container03">
            <div className=" tw-flex tw-flex-col lg:tw-text-left ">
              <h1 className=" tw-font-bold ">Contact Us</h1>
              <span className="contact-text01">+91-9869166157</span>
            </div>
            <div className=" tw-flex tw-flex-col     lg:tw-text-left">
              <h1 className=" tw-font-bold ">Address</h1>
              <span className="contact-text01">
                Fiza Apartment, B-001, Plot No 195, near MSEB OFFICE, Sector
                12B, Bonkode, Kopar Khairane, Navi Mumbai, Maharashtra 400709
              </span>
            </div>
            {/* <div className=" tw-flex tw-flex-col tw-text-center  md:tw-text-center lg:tw-text-left">
            <h1 className=" tw-font-bold ">Call US</h1>
            <span className="contact-text01">
              Erat netus est hendrerit, nullam et quis ad cras porttitor
              iaculis. Bibendum vulputate cras aenean.
            </span>
          </div> */}
            <div className=" tw-flex tw-flex-col group    lg:tw-text-left">
              <h1 className=" tw-font-bold  group-hover:-tw-translate-y-4 tw-transition-all tw-duration-200 ">
                Mail
              </h1>
              <ButtonMailto
                label="Write us an E-Mail"
                mailto="mailto:vijaykumarsgaikwad@gmail.com"
              />
              <span className="contact-text01">
                vijaykumarsgaikwad@gmail.com
              </span>
            </div>
            {/* <div className="contact-container05">
            <h1 className="contact-text02">Address</h1>
            <span className="contact-text03">
              Erat netus est hendrerit, nullam et quis ad cras porttitor
              iaculis. Bibendum vulputate cras aenean.
            </span>
          </div>
          <div className="contact-container06">
            <h1 className="contact-text04">
              <span>Mail</span>
              <br></br>
            </h1>
            <span className="contact-text07">
              Erat netus est hendrerit, nullam et quis ad cras porttitor
              iaculis. Bibendum vulputate cras aenean.
            </span>
          </div>
          <div className="contact-container07">
            <h1 className="contact-text08">
              <span>Call us</span>
              <br></br>
            </h1>
            <span className="contact-text11">
              Erat netus est hendrerit, nullam et quis ad cras porttitor
              iaculis. Bibendum vulputate cras aenean.
            </span>
          </div> */}
          </div>
        </div>
        <div className="contact-container08 ">
          <div className="contact-container09">
            <GMap />
          </div>
          <div className="tw-flex tw-flex-col tw-justify-center tw-w-1/2 tw-mx-4 tw-shadow-lg tw-mx-12">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              enctype="multipart/form-data"
              className="tw-flex tw-flex-col tw-items-center tw-mx-4"
            >
              <span className="contact-text12 lg:tw-self-center">
                Have a Query
              </span>
              <span className="contact-text13"></span>
              
              
                <div className="tw-w-full tw-mx-3 tw-my-2">
                  <label className="">Name</label>
                  <input
                    type="text"
                    className=" input tw-w-full tw-peer tw-border-b-2 tw-border-0 tw-appearance-none tw-border-gray-300 focus:tw-outline-none focus:tw-border-blue-400"
                  />
                </div>
                <div className="tw-w-full tw-mx-3 tw-my-2">
                  <label className="">Name</label>
                  <input
                    type="text"
                    className=" input tw-w-full tw-peer tw-border-b-2 tw-border-0 tw-appearance-none tw-border-gray-300 focus:tw-outline-none focus:tw-border-blue-400"
                  />
                </div>
                <div className="tw-w-full tw-mx-3 tw-my-2">
                  <label className="">Email</label>
                  <input
                    type="email"
                    className=" input tw-w-full tw-peer tw-border-b-2 tw-border-0 tw-appearance-none tw-border-gray-300 focus:tw-outline-none focus:tw-border-blue-400"
                  />
                </div>
                <span className="contact-text19">Message</span>
                <textarea className="tw-block tw-p-2.5 tw-w-full tw-text-sm tw-text-gray-900 tw-bg-gray-50 tw-rounded-lg tw-border tw-border-gray-300 tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-dark:bg-gray-700 tw-dark:border-gray-600 tw-dark:placeholder-gray-400 tw-dark:text-white tw-dark:focus:ring-blue-500 tw-dark:focus:border-blue-500"></textarea>
                <button
                  type="submit"
                  className="tw-bg-[#bbf7d0]  tw-w-full tw-px-4 tw-py-2 tw-my-4 tw-rounded-lg hover:tw-scale-105 hover:-tw-translate-y-2 hover:tw-shadow-xl tw-transition-all tw-duration-150"
                >
                  <span>
                    <span>Submit</span>
                    <br></br>
                  </span>
                </button>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
