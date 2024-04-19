import React from "react";

import { Player } from "@lottiefiles/react-lottie-player";
import { Helmet } from "react-helmet";
import axios from "../Axios/axios";
import "./Styles/home.css";
import bkimg from "./Images/test.jpeg";
import giftimg from "./Images/IMG_1698.jpg";
import outimg from "./Images/IMG_1694.jpg";
import NGOICON from "./../components/Images/GCAHF.png";
const Home = (props) => {
  const test = async () => {
    const res = await axios.get("/data");
    console.log(res);
  };
  return (
    <div className="home-container">
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
      <div>
        <h1 className=" tw-font-bold tw-text-xl">
          Welcome to Geriatic Care and Health Foundation
        </h1>
      </div>
      <div className="home-container01">
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="home-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="home-slider-slide swiper-slide"
              style={{ backgroundImage: `url(${giftimg})` }}
            >
              {/* <span>Text</span> */}
            </div>
            <div
              data-thq="slider-slide"
              className="home-slider-slide1 swiper-slide"
              style={{ backgroundImage: `url(${outimg})` }}
            >
              {/* <span>Lorem</span> */}
            </div>
            <div
              data-thq="slider-slide"
              className="home-slider-slide2 swiper-slide"
              style={{ backgroundImage: `url(${bkimg})` }}
            >
              {/* <span className="home-text02">Text</span> */}
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="home-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
      </div>
      {/* <div className="home-container02">
        <span className="home-text03">
          <span>Projects</span>
          <br></br>
          <br></br>
        </span>
        <span className="home-text07">
          Curae hendrerit donec commodo hendrerit egestas tempus, turpis
          facilisis nostra nunc. Vestibulum dui eget ultrices.
        </span>
      </div>
      <div className="home-container03">
        <div className="home-container04">
          <Player
            src="https://presentation-website-assets.teleporthq.io/features/lottie.json"
            speed="1"
            autoplay="true"
            background="transparent"
            className="home-lottie-node"
          ></Player>
          <span className="home-text08">
            <span className="home-text09">Title</span>
            <br></br>
          </span>
          <span className="home-text11">
            Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis.
            Bibendum vulputate cras aenean.
          </span>
        </div>
        <div className="home-container05">
          <Player
            src="https://presentation-website-assets.teleporthq.io/features/lottie.json"
            speed="1"
            autoplay="true"
            background="transparent"
            className="home-lottie-node1"
          ></Player>
          <span className="home-text12">
            <span className="home-text13">Title</span>
            <br></br>
          </span>
          <span className="home-text15">
            Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis.
            Bibendum vulputate cras aenean.
          </span>
        </div>
      </div>
      <div className="home-container06">
        <div className="home-container07">
          <Player
            src="https://presentation-website-assets.teleporthq.io/features/lottie.json"
            speed="1"
            autoplay="true"
            background="transparent"
            className="home-lottie-node2"
          ></Player>
          <span className="home-text16">
            <span className="home-text17">Title</span>
            <br></br>
          </span>
          <span className="home-text19">
            Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis.
            Bibendum vulputate cras aenean.
          </span>
        </div>
        <div className="home-container08">
          <Player
            src="https://presentation-website-assets.teleporthq.io/features/lottie.json"
            speed="1"
            autoplay="true"
            background="transparent"
            className="home-lottie-node3"
          ></Player>
          <span className="home-text20">
            <span className="home-text21">Title</span>
            <br></br>
          </span>
          <span className="home-text23">
            Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis.
            Bibendum vulputate cras aenean.
          </span>
        </div>
      </div> */}
      {/* <div className="home-container09">
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="home-image"
        />
        <div className="home-container10">
          <div className="home-container11">
            <div className="home-container12">
              <span className="home-text24">
                <span>BIBEN DUM</span>
                <br></br>
                <span>FRINGI DICTUM, AUGUE PURUS</span>
              </span>
              <span className="home-text28">
                Etiam a rutrum, mauris lectus aptent convallis. Fusce vulputate
                aliquam, sagittis odio metus. Nulla porttitor vivamus viverra
                laoreet, aliquam netus.
              </span>
              <button type="button" className="home-button button">
                <span>
                  <span>Donate</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
          <div className="home-container13">
            <div className="home-container14">
              <span className="home-text32">
                <span>BIBEN DUM</span>
                <br></br>
                <span>FRINGI DICTUM, AUGUE PURUS</span>
              </span>
              <span className="home-text36">
                Etiam a rutrum, mauris lectus aptent convallis. Fusce vulputate
                aliquam, sagittis odio metus. Nulla porttitor vivamus viverra
                laoreet, aliquam netus.
              </span>
              <button type="button" className="home-button1 button" onClick={test}>
                <span>
                  <span>TEST</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="tw-text-center">
        <h1 className=" tw-font-bold tw-text-xl">Our Mission</h1>
        <p className="tw-text-xl">
          At Geriatric Care and Health Foundation, we are dedicated to enhancing
          the quality of life for elderly individuals by providing comprehensive
          healthcare services, promoting healthy aging, and supporting research
          in geriatrics.
        </p>
      </div>
    </div>
  );
};

export default Home;
