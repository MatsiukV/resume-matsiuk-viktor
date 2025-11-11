import React from "react";
import Image from "next/image";
import "./styleAboutMe.css";

const AboutMe: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-hero-part">
        <div className="hero-overlay"></div>
        <h1 className="hero-title">Full-stack Developer</h1>
        <div className="hero-image-container">
          <Image
            src="/MyPhoto.jpg"
            alt="Мацюк Віктор"
            width={150}
            height={150}
            className="hero-profile-pic"
            priority
          />
        </div>
        <h2 className="hero-name">Мацюк Віктор</h2>
      </div>
    </section>
  );
};

export default AboutMe;