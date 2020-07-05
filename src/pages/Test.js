import React, { Component } from "react";
import Members from '../components/members'
import Posts from "../components/posts";
import Support from "../components/support";
import Features from "../components/features";
import NewsLetter from "../components/newsletter";
import Contact from "../components/contact";

export const Main=()=> <main id="main">
      <section id="hero">
    <div className="hero-container" data-aos="fade-in">
      <h1>The Leading Arabic Custom Search Technology</h1>
      <h2>With Arabic NLP {"&"} Artificial intellegence Capabilities</h2>
      <img src="assets/img/hero-img.png" alt="Hero Imgs" data-aos="zoom-out" data-aos-delay="100"/>
      <a href="#get-started" className="btn-get-started scrollto">Get Started</a>
      {/* <div className="btns">
        <a href="#"><i className="fa fa-apple fa-3x"></i> App Store</a>
        <a href="#"><i className="fa fa-play fa-3x"></i> Google Play</a>
        <a href="#"><i className="fa fa-windows fa-3x"></i> windows</a>
      </div> */}
    </div>
  </section>
  
<Support></Support>

<section id="about-us" className="about-us padd-section">
  <div className="container" data-aos="fade-up">
    <div className="row justify-content-center">

      <div className="col-md-5 col-lg-3">
        <img src="assets/img/svg/api-svgrepo-com.svg" alt="About" data-aos="zoom-in" data-aos-delay="100" style={{marginTop:"65px"}}/>
      </div>

      <div className="col-md-7 col-lg-5">
        <div className="about-content" data-aos="fade-left" data-aos-delay="100">

          <h2><span>Advanced</span> Programmable Interface </h2>
          <p>
          Lableb Search API
            Integrate Lableb Search with your software or application using the fully documented API.

          </p>

          <ul className="list-unstyled">
            <li><i className="fa fa-angle-right"></i>various features that are built with highest standards.</li>
            <li><i className="fa fa-angle-right"></i>deep understanding of the Arabic language.</li>

          </ul>
          <a href="#" className="btn-get-started scrollto">Learn More</a>
        </div>
      </div>

    </div>
  </div>
</section>

<Features/>


{/* <Customers/> */}


<section id="video" className="text-center">
  <div className="overlay">
    <div className="container-fluid container-full" data-aos="zoom-in">

      <div className="row">
        <a href="" className="js-modal-btn play-btn" data-video-id="0cCg7UVNfEQ"></a>
      </div>

    </div>
  </div>
</section>


<Members ></Members>
<Posts/>

<NewsLetter/>
<Contact/>


</main>
