import React from 'react';
import { Helmet } from 'react-helmet';
import { FaUser, FaEye, FaHistory, FaTools, FaUserFriends, FaUsers } from 'react-icons/fa';
import "./Styles/info.css";

const Info = () => {
  return (
    <>
      <Helmet>
        <title>Info-GCAHF</title>
        <meta name="description" content="Dedicated to improving the health and well-being of older adults through high-quality, compassionate care." />
        <meta name="keywords" content="Geriatric Care, Health Foundation, Elderly Care, Senior Health" />
        <meta property="og:title" content="Geriatric Care and Health Foundation" />
        <meta property="og:description" content="Dedicated to improving the health and well-being of older adults through high-quality, compassionate care." />
        <meta property="og:url" content="https://geriatrichcf.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className='info-container'>
        <section className="info-section">
          <div className="info-heading">
            <FaUser className="info-icon" />
            <h2>About Us</h2>
          </div>
          <div className="info-content">
            <p>The Geriatric Care and Health Foundation (GCHF) is a non-profit organization established in November 2018. We strive to provide quality care and health services to elderly people in need. We believe every senior deserves dignity, respect, and compassion in their golden years.</p>
          </div>
        </section>

        <section className="info-section">
          <div className="info-heading">
            <FaEye className="info-icon" />
            <h2>Vision Statement</h2>
          </div>
          <div className="info-content">
            <p>Our vision is to create a society where elderly people are valued, empowered, and integrated. We aim to enhance the well-being of our seniors by addressing their physical, mental, and social needs. We also advocate for their rights and raise awareness about the challenges faced by the elderly population.</p>
          </div>
        </section>

        <section className="info-section">
          <div className="info-heading">
            <FaHistory className="info-icon" />
            <h2>History of Services</h2>
          </div>
          <div className="info-content">
            <h3>RACSC - The Precursor</h3>
            <p>GCHF's foundation lies in the Residential Aged Clinical Service Center (RACSC), a nursing home established in 2013 by our founder, Late Shri Vijaykumar S Gaikwad. RACSC provided clinical care and a comfortable environment for elderly people needing medical attention.</p>
            <h3>Transformation into an Old Age Home</h3>
            <p>Due to challenges posed by the COVID-19 pandemic, RACSC transitioned into an old age home. GCHF now offers shelter, food, and basic care to elderly individuals with no family support.</p>
          </div>
        </section>

        <section className="info-section">
          <div className="info-heading">
            <FaTools className="info-icon" />
            <h2>Current Services</h2>
          </div>
          <div className="info-content">
            <p>GCHF provides a safe and supportive environment for elderly people. Our services include:</p>
            <ul>
              <li>Shelter and nutritious meals</li>
              <li>Daily care and assistance by trained caregivers</li>
              <li>Recreational and social activities</li>
            </ul>
          </div>
        </section>

        <section className="info-section">
          <div className="info-heading">
            <FaUserFriends className="info-icon" />
            <h2>Other Envisioned Possibilities</h2>
          </div>
          <div className="info-content">
            <p>GCHF aspires to expand its services in the future, including:</p>
            <ul>
              <li>Counseling and emotional support for seniors</li>
              <li>Health camps and awareness sessions</li>
              <li>Collaboration for access to transportation, legal, and financial services</li>
              <li>Volunteer and donor opportunities</li>
              <li>Creating a network for senior citizens to connect</li>
            </ul>
          </div>
        </section>

        <section className="info-section">
          <div className="info-heading">
            <FaUsers className="info-icon" />
            <h2>Trustee Board</h2>
          </div>
          <div className="info-content">
            <p>GCHF is governed by a dedicated management committee:</p>
            <ul>
              <li><strong>Dr. Pankaj Khangal (Secretary)</strong> - Doctor Specializing in Geriatric Care </li>
              {/* Add more members if needed */}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Info;
