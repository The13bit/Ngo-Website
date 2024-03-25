import React from 'react'

import { Helmet } from 'react-helmet'

import './Styles/contact.css'
import GMap from '../components/GoogleMaps.jsx'
import Contactimage from './Images/IMG_1696.jpg'
const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - GCAHF</title>
        <meta property="og:title" content="Contact - Agitated Brisk Chicken" />
      </Helmet>
      <div className="contact-container01">
        <div className="contact-container02">
          <img
            alt="image"
            src={Contactimage}
            className="contact-image"
          />
        </div>
        <div className="contact-container03">
          <div className=" tw-flex tw-flex-col tw-text-center md:tw-text-center lg:tw-text-left ">
            <h1 className=" tw-font-bold ">Contact Us</h1>
            <span className="contact-text01">
              Erat netus est hendrerit, nullam et quis ad cras porttitor
              iaculis. Bibendum vulputate cras aenean.
            </span>
          </div>
          <div className=" tw-flex tw-flex-col tw-text-center  md:tw-text-center lg:tw-text-left">
            <h1 className=" tw-font-bold ">Address</h1>
            <span className="contact-text01">
            Fiza Apartment, B-001, Plot No 195, near MSEB OFFICE, Sector 12B, Bonkode, Kopar Khairane, Navi Mumbai, Maharashtra 400709
            </span>
          </div>
          <div className=" tw-flex tw-flex-col tw-text-center  md:tw-text-center lg:tw-text-left">
            <h1 className=" tw-font-bold ">Call US</h1>
            <span className="contact-text01">
              Erat netus est hendrerit, nullam et quis ad cras porttitor
              iaculis. Bibendum vulputate cras aenean.
            </span>
          </div>
          <div className=" tw-flex tw-flex-col tw-text-center  md:tw-text-center lg:tw-text-left">
            <h1 className=" tw-font-bold ">Mail</h1>
            <span className="contact-text01">
              Erat netus est hendrerit, nullam et quis ad cras porttitor
              iaculis. Bibendum vulputate cras aenean.
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
      <div className="contact-container08 tw-my-10">
        <div className="contact-container09">
          <GMap/>
        </div>
        <div className="contact-container10">
          <form enctype="multipart/form-data" className="contact-form ">
            <span className="contact-text12">Have a Query</span>
            <span className="contact-text13">
              
            </span>
            <span className="contact-text14">
              <span>Name</span>
              <br></br>
            </span>
            <input type="text" className="contact-textinput input" />
            <span className="contact-text17">Email</span>
            <input type="email" className="contact-textinput1 input" />
            <span className="contact-text18">Mobile</span>
            <input type="text" className="contact-textinput2 input" />
            <span className="contact-text19">Message</span>
            <textarea className="contact-textarea textarea"></textarea>
            <button type="submit" className="contact-button button">
              <span>
                <span>Submit</span>
                <br></br>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
