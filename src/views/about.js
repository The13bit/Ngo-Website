import React from "react";

import { Helmet } from "react-helmet";

import TeamBanner from "../components/team-banner";
import "./Styles/about.css";

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - NGO</title>
        <meta property="og:title" content="About - Agitated Brisk Chicken" />
      </Helmet>
      <div className="about-container01">
        <span className="about-text">
          <span>BIBEN DUM</span>
          <br></br>
          <span>FRINGI DICTUM, AUGUE PURUS</span>
        </span>
        <span className="about-text04">
          Welcome to Geriatric Care and Health Foundation, a non-profit
          organization dedicated to improving the lives of elderly individuals
          and promoting their health and well-being. Our foundation was
          established with a vision to create a society where senior citizens
          receive the care, support, and respect they deserve.
        </span>
      </div>
      <div className=" tw-m-14 about-container02 ">
        <h1 className="about-text05">Mission</h1>
        <span className="about-text06">
          Our mission is to provide comprehensive care and support services to
          elderly individuals, focusing on their physical, mental, and emotional
          well-being. We aim to enhance their quality of life and empower them
          to live with dignity and independence.
        </span>
      </div>
      {/* <div className="about-container03">
        <h1 className="about-text07">Biben dum fringi dictum, augue purus</h1>
        <span className="about-text08">
          Lmcdfnue frjbr vjvj vjrngrfenfuef leifje ekfneif efkenfe kenfm fwndof
          fif fjebfu fmeffe fewfuef mfbewuidfne
        </span>
      </div> */}
      
      {/* <div className="about-container04">
        <h1>Mission</h1>
        <div className="about-container05">
          <div className="about-container06">
            <div className="about-container07">
              <h1>Mission</h1>
              <span>Text</span>
            </div>
            <div className="about-container08">
              <h1>Mission</h1>
              <span>Text</span>
            </div>
          </div>
          <div className="about-container09">
            <h1>Mission</h1>
            <span>Text</span>
          </div>
        </div>
      </div> */}
      <div className="about-container10">
        <h1>Our Team</h1>
        <span className="about-text17">
          Our dedicated team comprises healthcare professionals, social workers,
          volunteers, and advocates who are committed to serving the elderly
          community with compassion, empathy, and expertise.
        </span>
        <div className="about-container11">
          <TeamBanner rootClassName="team-banner-root-class-name"></TeamBanner>
          <TeamBanner rootClassName="team-banner-root-class-name1"></TeamBanner>
          <TeamBanner rootClassName="team-banner-root-class-name2"></TeamBanner>
          <TeamBanner rootClassName="team-banner-root-class-name3"></TeamBanner>
        </div>
      </div>
    </div>
  );
};

export default About;
