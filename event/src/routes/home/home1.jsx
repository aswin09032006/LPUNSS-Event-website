import React, { useEffect } from 'react';
import feedingbellies from '../../assets/FEEDING BELLIES/img7.png';
import joyofgiving from '../../assets/JOY OF GIVING/img4.png';
import nari from '../../assets/NARI/img1.png';
import physio from '../../assets/PHYSIO/img1.png';
import placeholder from '../../assets/placeholder.png';
import rfe1 from '../../assets/RUN FOR EQUALITY/img1.jpg';
import rfe2 from '../../assets/RUN FOR EQUALITY/img2.jpg';
import rfe3 from '../../assets/RUN FOR EQUALITY/img3.jpg';
import rfe4 from '../../assets/RUN FOR EQUALITY/img4.jpg';
import rfe5 from '../../assets/RUN FOR EQUALITY/img5.jpg';
import rfe6 from '../../assets/RUN FOR EQUALITY/img6.jpg';
import rfe from '../../assets/runforequality.png';
import swachhbharat from '../../assets/SWACHH BHARAT/img3.png';
import bg from '../../assets/Untitled (1).png';
import Card from '../../components/card/card';
import './home1.css';

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById('register-now').scrollIntoView({ behavior: 'smooth' });
    }, 3000);
  }, []);

  return (
    <div className="home-page1-container">
      <section className="home-page1-hero-section">
        <img src={bg} alt="Hero Background" className="home-page1-hero-image" />
      </section>

      <section id="register-now" className="register-now">
        <p className="register-content">
          <span style={{ color: "gray", fontSize: "35px" }}>"</span>
          Registration for the Run for Equality 2 - 2024 is open now!
          <a href="/registration" style={{ color: "#ff4500", textDecoration: "none" }}>Click here to register</a>
          <span style={{ color: "gray", fontSize: "35px" }}>"</span>
        </p>
      </section>

      <section className="home-page1-sub-header">
        <h1 className="motto1">
          <span style={{ color: "#ff4500" }}>Our Motto </span>
          <span style={{ color: "gray", fontSize: "30px" }}>"</span>
          Not me, Not you, But we
          <span style={{ color: "gray", fontSize: "30px" }}>"</span>
        </h1>
      </section>

      <section className="home-page1-about-section">
        <div className="home-page1-about-contents">
          <h1 className="about-section-header1">About us</h1>
          <p className="about-section-para1">
            Welcome to the National Service Scheme (NSS) at Lovely Professional University (LPUNSS)!
          </p>
        </div>
        <div className="home-page1-mission-contents">
          <h1 className="mission1">Our Mission</h1>
          <p className="mission-para1">
            The National Service Scheme (NSS) at Lovely Professional University, known as LPUNSS, is dedicated to fostering social responsibility and community service among students. Established with the motto "Not Me, Not You, But We" LPUNSS aims to inculcate the spirit of selfless service, leadership, and community engagement in our student volunteers.
          </p>
        </div>
      </section>

      <section className="events-section1">
        <p className="events-title1">~Upcoming Events</p>
        <div className="events-card-container1">
          <Card
            title="Run for equality 2"
            img={rfe}
            navlink={{ pathname: '/details', state: { title: 'Run for equality 2', body_content: '"Run for Equality" is a marathon dedicated to promoting gender equality and raising awareness about the importance of equal opportunities for all genders. Our first event in 2023 was a tremendous success, attracting over 600+ participants, including enthusiastic staff members who joined the cause. This event aims to bring together individuals from all walks of life to support the movement towards a more inclusive and equitable society. By participating in "Run for Equality," we not only emphasize the need for gender equality but also demonstrate our commitment to creating a world where everyone has the same opportunities and rights, regardless of gender. Join us in this movement and make a difference by supporting gender equality through action and solidarity.', src_images: [rfe1, rfe2, rfe3, rfe4, rfe5, rfe6] } }}
          />
        </div>
      </section>

      <section className="events-section1">
        <p className="events-title1">~Social Events</p>
        <div className="events-card-container1">
          <Card title="Plantation Drive" img={placeholder} navlink={{ pathname: '/' }} />
          <Card title="Physiotherapy" img={physio} navlink={{ pathname: '/' }} />
          <Card title="Feeding Bellies" img={feedingbellies} navlink={{ pathname: '/' }} />
          <Card title="Nari: Her Right Her Prides" img={nari} navlink={{ pathname: '/' }} />
          <Card title="Joy of giving" img={joyofgiving} navlink={{ pathname: '/' }} />
          <Card title="Cancer Awareness" img={placeholder} navlink={{ pathname: '/' }} />
          <Card title="Voter Awareness" img={placeholder} navlink={{ pathname: '/' }} />
          <Card title="Samarpan" img={placeholder} navlink={{ pathname: '/' }} />
          <Card title="Swachh Bharat" img={swachhbharat} navlink={{ pathname: '/' }} />
        </div>
      </section>

      <section className="events-section1">
        <p className="events-title1">~Fundraising Events</p>
        <div className="events-card-container1">
          <Card title="Rivals on the pitch" img={placeholder} navlink={{ pathname: '/' }} />
          <Card title="Smash it" img={placeholder} navlink={{ pathname: '/' }} />
          <Card title="Run for equality 2023" img={placeholder} navlink={{ pathname: '/' }} />
        </div>
      </section>
    </div>
  );
};

export default Home;
