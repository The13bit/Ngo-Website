import React from 'react'

import { Helmet } from 'react-helmet'

import DonateSLD from '../components/donate-sld'
import './Styles/donation.css'

const Donation = (props) => {
  return (
    <div className="donation-container">
      <Helmet>
        <title>Donation - TEST</title>
        <meta property="og:title" content="Donation - TEST" />
      </Helmet>
      {/* <div className="donation-container1">
        <div
          data-thq="slider"
          data-autoplay="false"
          data-navigation="true"
          data-pagination="true"
          className="donation-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="donation-slider-slide swiper-slide"
            >
              <span>Text</span>
            </div>
            <div
              data-thq="slider-slide"
              className="donation-slider-slide1 swiper-slide"
            >
              <span>Lorem</span>
            </div>
            <div
              data-thq="slider-slide"
              className="donation-slider-slide2 swiper-slide"
            >
              <span className="donation-text2">Text</span>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="donation-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
      </div> */}
      <div className="donation-container2">
        <DonateSLD rootClassName="donate-sld-root-class-name"></DonateSLD>
      </div>
    </div>
  )
}

export default Donation