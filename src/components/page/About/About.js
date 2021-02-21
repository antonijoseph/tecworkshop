import React from "react";
import { Footer, Header, Image, TitleGroup } from "../..";
import { Images, Strings } from "../../../constants";
import "./About.scss";

const About = () => {
  const _renderEthos = () => {
    let ethics = [];
    Strings.APPLICATION.ABOUT_US_PAGE.ETHICS.forEach((item, index) => {
      ethics.push(
        <div className="ethics-item" key={index}>
          <div className="image-wrapper">
            {/* <Image source={item.IMAGE} altText={item.TITLE} /> */}
            <div
              className="image"
              style={{
                backgroundImage: `url(${item.IMAGE})`,
              }}
            ></div>
          </div>
          <div className="ethics-title">{item.TITLE}</div>
          <div className="description">{item.DESCRIPTION}</div>
        </div>
      );
    });
    return ethics;
  };

  const _renderClientLogos = () => {
    let logo = [];
    Strings.APPLICATION.ABOUT_US_PAGE.OUR_CLIENTS.CLIENT_LOGOS.forEach(
      (item, index) => {
        logo.push(
          <div className="logo-wrapper" key={index}>
            <Image source={item} />
          </div>
        );
      }
    );
    return logo;
  };

  return (
    <div className="about-wrapper">
      <Header theme="light" />
      <section className="about intro">
        <div className="left-section">
          <div className="image-wrapper">
            {/* <Image source={Images.COMING_SOON} altText="Anil Tiwari" /> */}
            <div
              className="image"
              style={{
                backgroundImage: `url(${Images.COMING_SOON})`,
              }}
            ></div>
          </div>
          {/* <div className="image-title">Anil Tiwari, Managing Director</div> */}
        </div>
        <div className="right-section">
          <div className="title">FOREWORD</div>
          <div className="subtitle">Quality that builds trust.</div>
          <p className="description">
            We are an interior contracting business venture from Chennai engaged in offering an extensive spectrum of handling turnkey projects, interior decoration, and other development work. Our decade-old expertise and service in the industry is highly demanded among prestigious clients for our incomparable quality standards.
          </p>
          <p className="description">
            At TEC Workshop, we believe in an open working environment and team effort. Our execution team consists of the most well-deserving Carpenters, Painters, Supervisors, Tile layers and a talented design team of Architects, Interior Designers and Allied Operators.
          </p>
          <p className="description">
            With the support of our esteemed workforce, we ensure that the project is executed to perfection on time. We aim to satisfy our clients with our committed work, meticulous attention to detail, and diversified competence. Our strength lies in providing a unique solution to all our projects that resonates with our client’s heritage, culture, and environment.  
          </p>
          <p className="description">
            Currently, our portfolio includes a number of prestigious Indian and foreign brands like ITC Hotels, The Oberoi Group, Taj Group of Hotels, GRT Hotels, Chalet Hotels, M FAR Group, LBR Group, Triguna Group, and TCI Group. 
          </p>
        </div>
      </section>
      <section className="ethos-section">
        <div className="title">OUR ETHOS</div>
        <div className="image-text-wrapper">{_renderEthos()}</div>
      </section>
      <section className="our-plant-section">
        <div className="left-section">
          <div className="title">OUR PLANT</div>
          <p className="description">
            Our manufacturing plant is situated in a 25,000 sq. ft captive facility in Chennai, with state-of-the-art manufacturing equipment from the European Union. Our team ensures that your project is monitored for success at every stage.
          </p>
          <ul>
            <li>Hot & Cold Press </li>
            <li>Multi Boring</li>
            <li>Mortiser</li>
            <li>Dust Collectors</li>
            <li>Vertical Band Saw</li>
            <li>Panel Saw</li>
            <li>Spindle Moulder </li>
            <li>Edge Banding</li>
            <li>Thickness Planer</li>
            <li>Coating and Finishing lines</li>
          </ul>
        </div>
        <div className="right-section">
          <div className="image-wrapper">
            {/* <Image source={Images.COMING_SOON} altText="Our Plant" /> */}
            <div
              className="image"
              style={{
                backgroundImage: `url(${Images.COMING_SOON})`,
              }}
            ></div>
          </div>
        </div>
      </section>
      <TitleGroup
        title={Strings.APPLICATION.ABOUT_US_PAGE.OUR_CLIENTS.TITLE}
        subtitle={Strings.APPLICATION.ABOUT_US_PAGE.OUR_CLIENTS.SUB_TITLE}
        description={Strings.APPLICATION.ABOUT_US_PAGE.OUR_CLIENTS.DESCRIPTION}
      />
      <div className="client-logo-section">{_renderClientLogos()}</div>
      <Footer />
    </div>
  );
};

export default React.memo(About);
