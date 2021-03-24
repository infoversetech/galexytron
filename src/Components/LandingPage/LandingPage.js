import React from 'react'
import AboutUs from './AboutUs';
import Header from './Header'
import JoinUs from './JoinUs';
import Welcome from './Welcome';
import './LandingPage.scss'
import logo from '../../assets/TronGalaxyPower.png'

const LandingPage = () => {
  return (
    <div>
      <Header />
      {/* ##### Header Area End ##### */}
      {/* ##### Welcome Area Start ##### */}
      <Welcome />
      {/* ##### Welcome Area End ##### */}
      <div className="clearfix" />
      {/* ##### About Us Area Start ##### */}

      {/* ##### About Us Area End ##### */}
      <AboutUs />
      {/* ##### Our Services Area Start ##### */}
      <JoinUs />
      {/* ##### About Us Area Start ##### */}
      <section className="about-us-area section-padding-0-100 clearfix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 offset-lg-0">
              <div className="who-we-contant">
                <div
                  className="dream-dots text-left fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <span className="gradient-text ">
                    Decentralized Trading Platform
                     </span>
                </div>
                <h4 className="fadeInUp" data-wow-delay="0.3s">
                  Connect blockchain to the real world and start crypto
                  tading.
                   </h4>
                <p className="fadeInUp" data-wow-delay="0.4s">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Duis at dictum risus, non suscipit arcu. Quisque aliquam
                  posuere tortor, sit amet convallis nunc scelerisque in.
                   </p>
                <p className="fadeInUp" data-wow-delay="0.5s">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit ipsa ut quasi adipisci voluptates, voluptatibus
                  aliquid alias beatae reprehenderit incidunt iusto
                  laboriosam.
                   </p>
                <a
                  className="btn more-btn mt-30 fadeInUp"
                  data-wow-delay="0.6s"
                  href="index.html#"
                >
                  Read More
                   </a>
              </div>
            </div>
            <img
              className="supportImg"
              src="img/svg/trading-strokes.svg"
              alt="image"
            />
            <div className="col-12 col-lg-6 offset-lg-0 col-md-12 mt-30 no-padding-left">
              <div
                className="welcome-meter floating-anim fadeInUp"
                data-wow-delay="0.7s"
              >
                <img src="img/core-img/computer.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### About Us Area End ##### */}
      <div className="trust-section section-padding-0-70">
        <div className="section-heading text-center">
          {/* Dream Dots */}
          <div
            className="dream-dots justify-content-center wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <span>ICO Rating</span>
          </div>
          <h2 className="wow fadeInUp" data-wow-delay="0.3s">
            We are trusted
             </h2>
          <p className="wow fadeInUp" data-wow-delay="0.4s">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
             </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3 col-lg-2">
              {/* Single Cool Fact */}
              <div
                className="trust-item text-center wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="ico-platform-logo">
                  <img src="img/ico-platforms/1.png" alt="" />
                </div>
                {/* Single Cool Detail */}
                <div className="check">
                  {/* <div class="value">8.9</div> */}
                  <div className="check-icon" />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-2">
              {/* Single Cool Fact */}
              <div
                className="trust-item text-center wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="ico-platform-logo">
                  <img src="img/ico-platforms/2.png" alt="" />
                </div>
                {/* Single Cool Detail */}
                <div className="check">
                  <div className="value">8.9</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-2">
              {/* Single Cool Fact */}
              <div
                className="trust-item text-center wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="ico-platform-logo">
                  <img src="img/ico-platforms/3.png" alt="" />
                </div>
                {/* Single Cool Detail */}
                <div className="check">
                  {/* <div class="value">8.9</div> */}
                  <div className="check-icon" />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-2">
              {/* Single Cool Fact */}
              <div
                className="trust-item text-center wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="ico-platform-logo">
                  <img src="img/ico-platforms/4.png" alt="" />
                </div>
                {/* Single Cool Detail */}
                <div className="check">
                  {/* <div class="value">8.9</div> */}
                  <div className="check-icon" />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-2">
              {/* Single Cool Fact */}
              <div
                className="trust-item text-center wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="ico-platform-logo">
                  <img src="img/ico-platforms/5.png" alt="" />
                </div>
                {/* Single Cool Detail */}
                <div className="check">
                  <div className="value">7.4</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-2">
              {/* Single Cool Fact */}
              <div
                className="trust-item text-center wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="ico-platform-logo">
                  <img src="img/ico-platforms/6.png" alt="" />
                </div>
                {/* Single Cool Detail */}
                <div className="check">
                  {/* <div class="value">8.9</div> */}
                  <div className="check-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ##### Our Services Area Start ##### */}
      <section className="our_services_area section-padding-0-0 clearfix">
        <div className="container">
          <div className="section-heading text-center">
            {/* Dream Dots */}
            <div
              className="dream-dots justify-content-center fadeInUp"
              data-wow-delay="0.2s"
            >
              <span>Why choose us</span>
            </div>
            <h2 className="fadeInUp" data-wow-delay="0.3s">
              Our Main Features
               </h2>
            <p className="fadeInUp" data-wow-delay="0.4s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
               </p>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              {/* Content */}
              <div
                className="service_single_content text-center mb-100 fadeInUp"
                data-wow-delay="0.2s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img src="img/features/feature-1.svg" alt="" />
                </div>
                <h6>Instant settlement</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem
                  ipsu.
                   </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              {/* Content */}
              <div
                className="service_single_content text-center mb-100 fadeInUp"
                data-wow-delay="0.3s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img src="img/features/feature-2.svg" alt="" />
                </div>
                <h6>Flexibility</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem
                  ipsu.
                   </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              {/* Content */}
              <div
                className="service_single_content text-center mb-100 fadeInUp"
                data-wow-delay="0.4s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img src="img/features/feature-3.svg" alt="" />
                </div>
                <h6>Blockchain technology</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem
                  ipsu.
                   </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              {/* Content */}
              <div
                className="service_single_content text-center mb-100 fadeInUp"
                data-wow-delay="0.5s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img src="img/features/feature-4.svg" alt="" />
                </div>
                <h6>Experienced team</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem
                  ipsu.
                   </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              {/* Content */}
              <div
                className="service_single_content text-center mb-100 fadeInUp"
                data-wow-delay="0.6s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img src="img/features/feature-5.svg" alt="" />
                </div>
                <h6>Connect free</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem
                  ipsu.
                   </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              {/* Content */}
              <div
                className="service_single_content text-center mb-100 fadeInUp"
                data-wow-delay="0.7s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img src="img/features/feature-6.svg" alt="" />
                </div>
                <h6>AI matching</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem
                  ipsu.
                   </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              {/* Content */}
              <div
                className="service_single_content text-center mb-100 fadeInUp"
                data-wow-delay="0.7s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img src="img/features/feature-7.svg" alt="" />
                </div>
                <h6>Low cost</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem
                  ipsu.
                   </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              {/* Content */}
              <div
                className="service_single_content text-center mb-100 fadeInUp"
                data-wow-delay="0.7s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img src="img/features/feature-8.svg" alt="" />
                </div>
                <h6>Digital personas</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem
                  ipsu.
                   </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### About Us Area Start ##### */}
      <section className="smart-contract section-padding-0-70 clearfix">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-6 offset-lg-0">
              <div className="who-we-contant">
                <div
                  className="dream-dots text-left fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <span className="gradient-text ">Smart Contract</span>
                </div>
                <h4 className="fadeInUp" data-wow-delay="0.3s">
                  Comprehensive smart contracts.
                   </h4>
                <p className="fadeInUp" data-wow-delay="0.4s">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Duis at dictum risus, non suscipit arcu. Quisque aliquam
                  posuere tortor, sit amet convallis nunc scelerisque in.
                   </p>
                <p className="fadeInUp" data-wow-delay="0.5s">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit ipsa ut quasi adipisci voluptates, voluptatibus
                  aliquid alias beatae reprehenderit incidunt iusto
                  laboriosam.
                   </p>
                <a
                  className="btn more-btn mt-30 fadeInUp"
                  data-wow-delay="0.6s"
                  href="index.html#"
                >
                  Read More
                   </a>
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-0 mt-s">
              <div className="services-block-four v3">
                <div className="inner-box">
                  <div className="icon-img-box">
                    <img src="img/features/s1.svg" alt="" />
                  </div>
                  <h3>
                    <a href="index.html#">Cycles and schedules</a>
                  </h3>
                  <div className="text">
                    Lorem ipsum dolor sit amet, conse ctetur dolor
                    adipisicing elit.
                     </div>
                </div>
              </div>
              <div className="services-block-four v3">
                <div className="inner-box">
                  <div className="icon-img-box">
                    <img src="img/features/s2.svg" alt="" />
                  </div>
                  <h3>
                    <a href="index.html#">
                      Advanced application interface (API)
                       </a>
                  </h3>
                  <div className="text">
                    Lorem ipsum dolor sit amet, conse ctetur dolor
                    adipisicing elit.
                     </div>
                </div>
              </div>
              <div className="services-block-four v3">
                <div className="inner-box">
                  <div className="icon-img-box">
                    <img src="img/features/s3.svg" alt="" />
                  </div>
                  <h3>
                    <a href="index.html#">Software development kit (SDK)</a>
                  </h3>
                  <div className="text">
                    Lorem ipsum dolor sit amet, conse ctetur dolor
                    adipisicing elit.
                     </div>
                </div>
              </div>
              <div className="services-block-four v3">
                <div className="inner-box">
                  <div className="icon-img-box">
                    <img src="img/features/s4.svg" alt="" />
                  </div>
                  <h3>
                    <a href="index.html#">Java virtual machine (JVM)</a>
                  </h3>
                  <div className="text">
                    Lorem ipsum dolor sit amet, conse ctetur dolor
                    adipisicing elit.
                     </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### About Us Area End ##### */}
      <section className="features section-padding-0-100 ">
        <div className="container">
          <div className="section-heading text-center">
            {/* Dream Dots */}
            <div
              className="dream-dots justify-content-center fadeInUp"
              data-wow-delay="0.2s"
            >
              <span>Try our Platform</span>
            </div>
            <h2 className="fadeInUp" data-wow-delay="0.3s">
              Our Trading Platform
               </h2>
            <p className="fadeInUp" data-wow-delay="0.4s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
               </p>
          </div>
          <div className="row align-items-center">
            <div className="service-img-wrapper col-lg-5 col-md-12 col-sm-12 no-padding-right">
              <div className="features-list">
                <div className="who-we-contant">
                  <h4 className="w-text fadeInUp" data-wow-delay="0.3s">
                    Powerful platform.
                     </h4>
                  <p className="w-text fadeInUp" data-wow-delay="0.4s">
                    We are dedicated to providing professional service with
                    the highest degree of honesty and integrity, and strive
                    to add value to our tax and consulting services.
                     </p>
                </div>
                <ul className="list-marked">
                  <li className="text-white">
                    <i className="fa fa-check" />
                       Competent Professionals
                     </li>
                  <li className="text-white">
                    <i className="fa fa-check" />
                       Affordable Prices
                     </li>
                  <li className="text-white">
                    <i className="fa fa-check" />
                       High Successful Recovery
                     </li>
                  <li className="text-white">
                    <i className="fa fa-check" />
                       Creative Layout
                     </li>
                </ul>
                <a
                  className="btn more-btn mt-30 fadeInUp"
                  data-wow-delay="0.6s"
                  href="index.html#"
                >
                  Read More
                   </a>
              </div>
            </div>
            <div className="service-img-wrapper col-lg-7 col-md-12 col-sm-12 mt-s">
              <div className="image-box">
                <img
                  src="img/core-img/platform.png"
                  className="center-block img-responsive phone-img"
                  alt=""
                />
                <img
                  src="img/core-img/rings.png"
                  className="center-block img-responsive rings "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="features section-padding-0-70 ">
           <div className="container">
             <div className="section-heading text-center">
               
               <div
                 className="dream-dots justify-content-center fadeInUp"
                 data-wow-delay="0.2s"
               >
                 <span>Token Prices</span>
               </div>
               <h2 className="fadeInUp" data-wow-delay="0.3s">
                 Our Token Prices
               </h2>
               <p className="fadeInUp" data-wow-delay="0.4s">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                 quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
               </p>
             </div>
             <div className="row align-items-center">
               <div className="col-lg-3 col-sm-6 col-xs-12">
                 <div className="pricing-item ">
                   <h4>Round 1</h4>
                   <h3>
                     <strong className="xzc-1-month">0.96$</strong>
                   </h3>
                   <span>1 ETH = 500 Token</span>
                   <div className="pricing">15,000,000 Token</div>
                   <label>
                     <strong>42% bonus</strong>
                   </label>
                 </div>
               </div>
               <div className="col-lg-3 col-sm-6 col-xs-12">
                 <div className="pricing-item ">
                   <h4>Round 2</h4>
                   <h3>
                     <strong className="xzc-1-month">1.25$</strong>
                   </h3>
                   <span>1 ETH = 500 Token</span>
                   <div className="pricing">15,000,000 Token</div>
                   <label>
                     <strong>35% bonus</strong>
                   </label>
                 </div>
               </div>
               <div className="col-lg-3 col-sm-6 col-xs-12">
                 <div className="pricing-item ">
                   <h4>Round 3</h4>
                   <h3>
                     <strong className="xzc-1-month">1.50$</strong>
                   </h3>
                   <span>1 ETH = 500 Token</span>
                   <div className="pricing">15,000,000 Token</div>
                   <label>
                     <strong>25% bonus</strong>
                   </label>
                 </div>
               </div>
               <div className="col-lg-3 col-sm-6 col-xs-12">
                 <div className="pricing-item ">
                   <h4>Round 4</h4>
                   <h3>
                     <strong className="xzc-1-month">1.96$</strong>
                   </h3>
                   <span>1 ETH = 500 Token</span>
                   <div className="pricing">15,000,000 Token</div>
                   <label>
                     <strong>15% bonus</strong>
                   </label>
                 </div>
               </div>
             </div>
           </div>
         </section>
          */}
      <div className="clearfix" />
      <section className="token-distribution section-padding-0-70">
        <div className="container">
          <div className="section-heading text-center">
            {/* Dream Dots */}
            <div
              className="dream-dots justify-content-center fadeInUp"
              data-wow-delay="0.2s"
            >
              <span>ICO Distribution</span>
            </div>
            <h2 className="fadeInUp" data-wow-delay="0.3s">
              Our ICO Distribution
               </h2>
            <p className="fadeInUp" data-wow-delay="0.4s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
               </p>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12">
              <div className=" ">
                <h2
                  className="text-center mb-30 fadeInUp"
                  data-wow-delay="0.3s"
                >
                  Funds Allocation
                   </h2>
                <img
                  src="img/core-img/distribution.png"
                  className="center-block"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 mt-s">
              <h2
                className="text-center mb-30 fadeInUp"
                data-wow-delay="0.3s"
              >
                Token Distribution
                 </h2>
              <div className="row">
                <div className="col-sm-4">
                  <div className>
                    <img
                      src="img/core-img/graph-11.png"
                      className="center-block"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="token-info">
                    <div className="info-wrapper one">
                      <div className="token-icon">12</div>
                      <div className="token-descr">
                        Overhead Token Distribution
                         </div>
                    </div>
                  </div>
                  <div className="token-info">
                    <div className="info-wrapper two">
                      <div className="token-icon">23</div>
                      <div className="token-descr">
                        Supporting Blockchain{" "}
                      </div>
                    </div>
                  </div>
                  <div className="token-info">
                    <div className="info-wrapper four">
                      <div className="token-icon">08</div>
                      <div className="token-descr">
                        Engineers and R&amp;D
                         </div>
                    </div>
                  </div>
                  <div className="token-info">
                    <div className="info-wrapper five">
                      <div className="token-icon">07</div>
                      <div className="token-descr"> Paltform Operations</div>
                    </div>
                  </div>
                  <div className="token-info">
                    <div className="info-wrapper three">
                      <div className="token-icon">05</div>
                      <div className="token-descr">
                        Network Growth Marketing
                         </div>
                    </div>
                  </div>
                  <div className="token-info">
                    <div className="info-wrapper six">
                      <div className="token-icon">08</div>
                      <div className="token-descr">
                        Oracle Network Developers
                         </div>
                    </div>
                  </div>
                  <div className="token-info">
                    <div className="info-wrapper seven">
                      <div className="token-icon">05</div>
                      <div className="token-descr">
                        Engineers and R&amp;D
                         </div>
                    </div>
                  </div>
                  <div className="token-info">
                    <div className="info-wrapper eight">
                      <div className="token-icon">27</div>
                      <div className="token-descr"> Paltform Operations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="roadmap section-padding-0-0" id="roadmap">
        <div className="section-heading text-center">
          {/* Dream Dots */}
          <div
            className="dream-dots justify-content-center fadeInUp"
            data-wow-delay="0.2s"
          >
            <span>ICO Roadmap</span>
          </div>
          <h2 className="fadeInUp" data-wow-delay="0.3s">
            Our ICO Roadmap
             </h2>
          <p className="fadeInUp" data-wow-delay="0.4s">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
             </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline">
                <div className="timeline">
                  <div className="icon" />
                  <div className="date-content">
                    <div className="date-outer">
                      {" "}
                      <span className="date">
                        {" "}
                        <span className="month">22 Sept</span>{" "}
                        <span className="year">2018</span>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <h5 className="title">Listing to the major exchanges</h5>
                    <p className="description text-light-gray">
                      {" "}
                         Lorem ipsum dolor sit amet, consectetur adipiscing
                         elit. Sed efficitur ex sit amet massa scelerisque
                         scelerisque. Aliquam erat volutpat. Aenean interdum
                         finibus efficitur. Praesent dapibus dolor felis, eu
                         ultrices elit molestie.
                       </p>
                  </div>
                </div>
                <div className="timeline">
                  <div className="icon" />
                  <div className="date-content">
                    <div className="date-outer">
                      {" "}
                      <span className="date">
                        {" "}
                        <span className="month">27 Nov</span>{" "}
                        <span className="year">2018</span>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <h5 className="title">
                      Platform integration to marketplaces
                       </h5>
                    <p className="description text-light-gray">
                      {" "}
                         Lorem ipsum dolor sit amet, consectetur adipiscing
                         elit. Sed efficitur ex sit amet massa scelerisque
                         scelerisque. Aliquam erat volutpat. Aenean interdum
                         finibus efficitur. Praesent dapibus dolor felis, eu
                         ultrices elit molestie.
                       </p>
                  </div>
                </div>
                <div className="timeline">
                  <div className="icon" />
                  <div className="date-content">
                    <div className="date-outer">
                      {" "}
                      <span className="date">
                        {" "}
                        <span className="month">19 Dec</span>{" "}
                        <span className="year">2018</span>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <h5 className="title">Crypto Wallet version release</h5>
                    <p className="description text-light-gray">
                      {" "}
                         Lorem ipsum dolor sit amet, consectetur adipiscing
                         elit. Sed efficitur ex sit amet massa scelerisque
                         scelerisque. Aliquam erat volutpat. Aenean interdum
                         finibus efficitur. Praesent dapibus dolor felis, eu
                         ultrices elit molestie.
                       </p>
                  </div>
                </div>
                <div className="timeline">
                  <div className="icon" />
                  <div className="date-content">
                    <div className="date-outer">
                      {" "}
                      <span className="date">
                        {" "}
                        <span className="month">25 Jan</span>{" "}
                        <span className="year">2019</span>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <h5 className="title">
                      Platform ealier version development
                       </h5>
                    <p className="description text-light-gray">
                      {" "}
                         Lorem ipsum dolor sit amet, consectetur adipiscing
                         elit. Sed efficitur ex sit amet massa scelerisque
                         scelerisque. Aliquam erat volutpat. Aenean interdum
                         finibus efficitur. Praesent dapibus dolor felis, eu
                         ultrices elit molestie.
                       </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### Token Info Start ##### */}
      <div className="features2 section-padding-100-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5 offset-lg-0 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
              <div className="ico-counter dotted-bg mb-30">
                <div className="counter-down">
                  <div className="content">
                    <div className="conuter-header">
                      <h3 className="w-text text-center">
                        TOKEN SALE ENDS IN
                         </h3>
                    </div>
                    <div className="counterdown-content">
                      {/* Countdown  */}
                      <div className="count-down titled circled text-center">
                        <div className="simple_timer" />
                      </div>
                      <div className="ico-progress">
                        <ul className="list-unstyled list-inline clearfix mb-10">
                          <li className="title">33m</li>
                          <li className="strength">75m</li>
                        </ul>
                        {/* skill strength */}
                        <div className="current-progress">
                          <div
                            className="progress-bar has-gradient"
                            style={{ width: "75%" }}
                          />
                        </div>
                        <span className="pull-left">
                          Softcap in 103 days
                           </span>
                        <span className="pull-right">Token Hardcap</span>
                      </div>
                      <div className="text-center">
                        <a
                          className="btn dream-btn mt-30 fadeInUp"
                          data-wow-delay="0.6s"
                          href="index.html#"
                        >
                          Buy More tokens
                           </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7 col-sm-12">
              <div className="col-lg-6 col-md-6 col-sm-12 mt-md-30">
                <div className="services-block-four v2">
                  <div className="inner-box">
                    <div className="icon-img-box">
                      <img src="img/features/f1.svg" alt="" />
                    </div>
                    <h3>
                      <a href="index.html#">Delivery Reports</a>
                    </h3>
                    <div className="text">
                      Lorem ipsum dolor sit amet, conse ctetur.
                       </div>
                  </div>
                </div>
                <div className="services-block-four v2">
                  <div className="inner-box">
                    <div className="icon-img-box">
                      <img src="img/features/f2.svg" alt="" />
                    </div>
                    <h3>
                      <a href="index.html#">Branded Sender</a>
                    </h3>
                    <div className="text">
                      Lorem ipsum dolor sit amet, conse ctetur.
                       </div>
                  </div>
                </div>
                <div className="services-block-four v2">
                  <div className="inner-box">
                    <div className="icon-img-box">
                      <img src="img/features/f3.svg" alt="" />
                    </div>
                    <h3>
                      <a href="index.html#">SMS Messaging</a>
                    </h3>
                    <div className="text">
                      Lorem ipsum dolor sit amet, conse ctetur.
                       </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mt-md-30 mt-smy-0">
                <div className="services-block-four v2">
                  <div className="inner-box">
                    <div className="icon-img-box">
                      <img src="img/features/f4.svg" alt="" />
                    </div>
                    <h3>
                      <a href="index.html#">Marketing Plans</a>
                    </h3>
                    <div className="text">
                      Lorem ipsum dolor sit amet, conse ctetur.
                       </div>
                  </div>
                </div>
                <div className="services-block-four v2">
                  <div className="inner-box">
                    <div className="icon-img-box">
                      <img src="img/features/f5.svg" alt="" />
                    </div>
                    <h3>
                      <a href="index.html#">Seed Routing</a>
                    </h3>
                    <div className="text">
                      Lorem ipsum dolor sit amet, conse ctetur.
                       </div>
                  </div>
                </div>
                <div className="services-block-four v2">
                  <div className="inner-box">
                    <div className="icon-img-box">
                      <img src="img/features/f6.svg" alt="" />
                    </div>
                    <h3>
                      <a href="index.html#">Traking API</a>
                    </h3>
                    <div className="text">
                      Lorem ipsum dolor sit amet, conse ctetur.
                       </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ##### FAQ & Timeline Area Start ##### */}
      <div className="faq-timeline-area section-padding-0-85" id="faq">
        <div className="container">
          <div className="section-heading text-center">
            {/* Dream Dots */}
            <div
              className="dream-dots justify-content-center fadeInUp"
              data-wow-delay="0.2s"
            >
              <span>Token FAQ</span>
            </div>
            <h2 className="fadeInUp" data-wow-delay="0.3s">
              {" "}
                 Frequently Questions
               </h2>
            <p className="fadeInUp" data-wow-delay="0.4s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
               </p>
          </div>
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-sm-12">
              <img
                src="img/svg/faq.svg"
                alt=""
                className="center-block img-responsive"
              />
            </div>
            <div className="col-12 col-lg-6 col-md-12">
              <div className="dream-faq-area mt-s ">
                <dl style={{ marginBottom: 0 }}>
                  {/* Single FAQ Area */}
                  <dt className="wave fadeInUp" data-wow-delay="0.2s">
                    What are the objectives of this Token?
                     </dt>
                  <dd className="fadeInUp" data-wow-delay="0.3s">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt
                      accusamus enim necessitatibus est fugiat, assumenda
                      dolorem, deleniti corrupti cupiditate ipsum, dolorum
                      voluptatum esse error?
                       </p>
                  </dd>
                  {/* Single FAQ Area */}
                  <dt className="wave fadeInUp" data-wow-delay="0.3s">
                    What is the best features and services we deiver?
                     </dt>
                  <dd>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt
                      accusamus enim necessitatibus est fugiat, assumenda
                      dolorem, deleniti corrupti cupiditate ipsum, dolorum
                      voluptatum esse error?
                       </p>
                  </dd>
                  {/* Single FAQ Area */}
                  <dt className="wave fadeInUp" data-wow-delay="0.4s">
                    Why this ICO important to me?
                     </dt>
                  <dd>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt
                      accusamus enim necessitatibus est fugiat, assumenda
                      dolorem, deleniti corrupti cupiditate ipsum, dolorum
                      voluptatum esse error?
                       </p>
                  </dd>
                  {/* Single FAQ Area */}
                  <dt className="wave fadeInUp" data-wow-delay="0.5s">
                    how may I take part in and purchase this Token?
                     </dt>
                  <dd>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt
                      accusamus enim necessitatibus est fugiat, assumenda
                      dolorem, deleniti corrupti cupiditate ipsum, dolorum
                      voluptatum esse error?
                       </p>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ##### FAQ & Timeline Area End ##### */}
      {/* ##### Team Area Start ##### */}
      <section
        className="our_team_area section-padding-100-0 clearfix"
        id="team"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading text-center">
                {/* Dream Dots */}
                <div
                  className="dream-dots justify-content-center fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <span>Our Team</span>
                </div>
                <h2 className="fadeInUp" data-wow-delay="0.3s">
                  Awesome Team
                   </h2>
                <p className="fadeInUp" data-wow-delay="0.4s">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed quis accumsan nisi Ut ut felis congue nisl hendrerit
                     commodo.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Single Team Member */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div
                className="single-team-member fadeInUp"
                data-wow-delay="0.2s"
              >
                {/* Image */}
                <div className="team-member-thumb">
                  <img
                    src="img/team-img/1.png"
                    className="center-block"
                    alt=""
                  />
                </div>
                {/* Team Info */}
                <div className="team-info">
                  <h5 className="w-text">Joman Helal</h5>
                  <p className="g-text">Executive Officer</p>
                </div>
                {/* Social Icon */}
                <div className="team-social-icon">
                  <a href="index.html#">
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            {/* Single Team Member */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div
                className="single-team-member fadeInUp"
                data-wow-delay="0.3s"
              >
                {/* Image */}
                <div className="team-member-thumb">
                  <img
                    src="img/team-img/2.png"
                    className="center-block"
                    alt=""
                  />
                </div>
                {/* Team Info */}
                <div className="team-info">
                  <h5 className="w-text">Slans Alons</h5>
                  <p className="g-text">Business Development</p>
                </div>
                {/* Social Icon */}
                <div className="team-social-icon">
                  <a href="index.html#">
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            {/* Single Team Member */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div
                className="single-team-member fadeInUp"
                data-wow-delay="0.4s"
              >
                {/* Image */}
                <div className="team-member-thumb">
                  <img
                    src="img/team-img/3.png"
                    className="center-block"
                    alt=""
                  />
                </div>
                {/* Team Info */}
                <div className="team-info">
                  <h5 className="w-text">Josha Michal</h5>
                  <p className="g-text">UX/UI Designer</p>
                </div>
                {/* Social Icon */}
                <div className="team-social-icon">
                  <a href="index.html#">
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            {/* Single Team Member */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div
                className="single-team-member fadeInUp"
                data-wow-delay="0.5s"
              >
                {/* Image */}
                <div className="team-member-thumb">
                  <img
                    src="img/team-img/4.png"
                    className="center-block"
                    alt=""
                  />
                </div>
                {/* Team Info */}
                <div className="team-info">
                  <h5 className="w-text">Johan Wright</h5>
                  <p className="g-text">Head of Marketing</p>
                </div>
                {/* Icon */}
                <div className="team-social-icon">
                  <a href="index.html#">
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### Team Area End ##### */}
      <section className="container">
        <div className="subscribe section-padding-0-0">
          <div className="row">
            <div className="col-sm-12">
              <div className="subscribe-wrapper">
                <div className="section-heading text-center">
                  <h2 className="wow fadeInUp" data-wow-delay="0.3s">
                    Don’t Miss ICO News And Updates!
                     </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed quis accumsan nisi Ut ut felis congue nisl hendrerit
                    commodo.
                     </p>
                </div>
                <div className="service-text text-center">
                  <div className="subscribe-section has-shadow">
                    <div className="input-wrapper">
                      <i className="fa fa-home" />
                      <input type="email" placeholder="Enter your Email" />
                    </div>
                    <button className="btn more-btn">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### Blog Area Start ##### */}
      <section
        className="our_blog_area clearfix section-padding-100-0"
        id="blog"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading text-center">
                {/* Dream Dots */}
                <div
                  className="dream-dots justify-content-center fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <span>Blog Posts</span>
                </div>
                <h2 className="fadeInUp" data-wow-delay="0.3s">
                  Latest News
                   </h2>
                <p className="fadeInUp" data-wow-delay="0.4s">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed quis accumsan nisi Ut ut felis congue nisl hendrerit
                     commodo.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* Single Blog Post */}
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="single-blog-area fadeInUp"
                data-wow-delay="0.2s"
              >
                {/* Post Thumbnail */}
                <div className="blog_thumbnail">
                  <img src="img/blog-img/1.jpg" alt="" />
                </div>
                {/* Post Content */}
                <div className="blog-content">
                  {/* Dream Dots */}
                  <div className="post-meta mt-20">
                    <p>
                      By{" "}
                      <a href="index.html#" className="post-author">
                        ADMIN
                         </a>{" "}
                      <a href="index.html#">Apr 10, 2018</a>{" "}
                      <a href="index.html#" className="post-comments">
                        7 comments
                         </a>
                    </p>
                  </div>
                  <a href="index.html#" className="post-title">
                    <h4>What is this Token for?.</h4>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus fugiat at vitae, ratione sapiente repellat.
                     </p>
                  <a href="index.html#" className="btn more-btn mt-15">
                    Read Details
                     </a>
                </div>
              </div>
            </div>
            {/* Single Blog Post */}
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="single-blog-area fadeInUp"
                data-wow-delay="0.3s"
              >
                {/* Post Thumbnail */}
                <div className="blog_thumbnail">
                  <img src="img/blog-img/2.jpg" alt="" />
                </div>
                {/* Post Content */}
                <div className="blog-content">
                  {/* Dream Dots */}
                  <div className="post-meta mt-20">
                    <p>
                      By{" "}
                      <a href="index.html#" className="post-author">
                        ADMIN
                         </a>{" "}
                      <a href="index.html#">Apr 10, 2018</a>{" "}
                      <a href="index.html#" className="post-comments">
                        7 comments
                         </a>
                    </p>
                  </div>
                  <a href="index.html#" className="post-title">
                    <h4>The most powerful Token</h4>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus fugiat at vitae, ratione sapiente repellat.
                     </p>
                  <a href="index.html#" className="btn more-btn mt-15">
                    Read Details
                     </a>
                </div>
              </div>
            </div>
            {/* Single Blog Post */}
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="single-blog-area fadeInUp"
                data-wow-delay="0.4s"
              >
                {/* Post Thumbnail */}
                <div className="blog_thumbnail">
                  <img src="img/blog-img/3.jpg" alt="" />
                </div>
                {/* Post Content */}
                <div className="blog-content">
                  {/* Dream Dots */}
                  <div className="post-meta mt-20">
                    <p>
                      By{" "}
                      <a href="index.html#" className="post-author">
                        ADMIN
                         </a>{" "}
                      <a href="index.html#">Apr 10, 2018</a>{" "}
                      <a href="index.html#" className="post-comments">
                        7 comments
                         </a>
                    </p>
                  </div>
                  <a href="index.html#" className="post-title">
                    <h4>How to get trial version</h4>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus fugiat at vitae, ratione sapiente repellat.
                     </p>
                  <a href="index.html#" className="btn more-btn mt-15">
                    Read Details
                     </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### Blog Area End ##### */}
      {/* ##### Footer Area Start ##### */}
      <footer
        className="footer-area bg-img"
        style={{ backgroundImage: "url(img/core-img/pattern.png)" }}
      >
        {/* ##### Contact Area Start ##### */}
        <div className="contact_us_area section-padding-0-0" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading text-center">
                  {/* Dream Dots */}
                  <div
                    className="dream-dots justify-content-center fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <span className="gradient-text">Contact us</span>
                  </div>
                  <h2 className="fadeInUp" data-wow-delay="0.3s">
                    Contact With Us
                     </h2>
                  <p className="fadeInUp" data-wow-delay="0.4s">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed quis accumsan nisi Ut ut felis congue nisl hendrerit
                    commodo.
                     </p>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <div className="contact_form">
                  <form
                    action="index.html#"
                    method="post"
                    id="main_contact_form"
                    noValidate
                  >
                    <div className="row">
                      <div className="col-12">
                        <div id="success_fail_info" />
                      </div>
                      <div className="col-12 col-md-6">
                        <div
                          className="group fadeInUp"
                          data-wow-delay="0.2s"
                        >
                          <input
                            type="text"
                            name="name"
                            id="name"
                            required
                          />
                          <span className="highlight" />
                          <span className="bar" />
                          <label>Name</label>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div
                          className="group fadeInUp"
                          data-wow-delay="0.3s"
                        >
                          <input
                            type="text"
                            name="email"
                            id="email"
                            required
                          />
                          <span className="highlight" />
                          <span className="bar" />
                          <label>Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div
                          className="group fadeInUp"
                          data-wow-delay="0.4s"
                        >
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            required
                          />
                          <span className="highlight" />
                          <span className="bar" />
                          <label>Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div
                          className="group fadeInUp"
                          data-wow-delay="0.5s"
                        >
                          <textarea
                            name="message"
                            id="message"
                            required
                            defaultValue={""}
                          />
                          <span className="highlight" />
                          <span className="bar" />
                          <label>Message</label>
                        </div>
                      </div>
                      <div
                        className="col-12 text-center fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        <button type="submit" className="btn more-btn">
                          Send Message
                           </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Contact Area End ##### */}
        <div className="footer-content-area ">
          <div className="container">
            <div className="row ">
              <div className="col-12 col-lg-4 col-md-6">
                <div className="footer-copywrite-info">
                  {/* Copywrite */}
                  <div
                    className="copywrite_text fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="footer-logo">
                      <a href="index.html#">
                        <img src={logo} alt="logo" className="logo" />
                      </a>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Velit ducimus voluptatibus neque illo id repellat
                      quisquam? Autem expedita earum quae laborum ipsum ad.
                       </p>
                  </div>
                  {/* Social Icon */}
                  <div
                    className="footer-social-info fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <a href="index.html#">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                    <a href="index.html#">
                      {" "}
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                    <a href="index.html#">
                      <i className="fa fa-google-plus" aria-hidden="true" />
                    </a>
                    <a href="index.html#">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                    <a href="index.html#">
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-md-6">
                <div className="contact_info_area d-sm-flex justify-content-between">
                  {/* Content Info */}
                  <div
                    className="contact_info mt-x text-center fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <h5>PRIVACY &amp; TOS</h5>
                    <a href="index.html">
                      <p>Advertiser Agreement</p>
                    </a>
                    <a href="index.html">
                      <p>Acceptable Use Policy</p>
                    </a>
                    <a href="index.html">
                      <p>Privacy Policy</p>
                    </a>
                    <a href="index.html">
                      <p>Technology Privacy</p>
                    </a>
                    <a href="index.html">
                      <p>Developer Agreement</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-2 col-md-6 ">
                {/* Content Info */}
                <div className="contact_info_area d-sm-flex justify-content-between">
                  <div
                    className="contact_info mt-s text-center fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <h5>NAVIGATE</h5>
                    <a href="index.html">
                      <p>Advertisers</p>
                    </a>
                    <a href="index.html">
                      <p>Developers</p>
                    </a>
                    <a href="index.html">
                      <p>Resources</p>
                    </a>
                    <a href="index.html">
                      <p>Company</p>
                    </a>
                    <a href="index.html">
                      <p>Connect</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-md-6 ">
                <div className="contact_info_area d-sm-flex justify-content-between">
                  {/* Content Info */}
                  <div
                    className="contact_info mt-s text-center fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <h5>CONTACT US</h5>
                    <p>Mailing Address:xx00 E. Union Ave</p>
                    <p>Suite 1100. Denver, CO 80237</p>
                    <p>+999 90932 627</p>
                    <p>support@yourdomain.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

}

export default LandingPage