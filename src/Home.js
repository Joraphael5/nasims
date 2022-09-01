import React from "react";
import { Link, NavLink } from "react-router-dom";

import img0 from "./images/nassim4.jpg";
import img1 from "./images/nassim3.jpg";
import img2 from "./images/nassim1.jpg";
import img3 from "./images/nassim2.jpg";
import img4 from "./images/nassim5.webp";
import img5 from "./images/nassim6.webp";
import img6 from "./images/nassim7.jpg";
import img7 from "./images/nassim8.jpg";
import img8 from "./images/nassim9.WEBP";
import img9 from "./images/nassim10.jpg";
import img10 from "./images/nassim11.jpg";

const Home = () => {
  return (
    <div className="">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="nas13">
          <div className="carousel-inner">
            <div class="carousel-item active">
              <div className="">
                <div class="nas1">
                  <div class="nas2">
                    <div class="nas3">
                      <img src={img0} alt="" />

                      <h6 class="nas4">Welcome to the</h6>
                      <h3>
                        National Social Investment Management System (NASIMS)
                        Portal
                      </h3>
                      <p class="nas5">
                        The National Social Investment Management System
                        (NASIMS) is the central management platform for the
                        administration and coordination of Social Investment
                        Programmes under the Federal Ministry of Humanitarian
                        Affairs, Disaster Management and Social Development.
                      </p>
                      <Link to="/About" className="nas90">
                        <p class=" text-success">Read More</p>
                      </Link>
                    </div>
                  </div>

                  <div class="nas6">
                    <img src={img1} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div className="nas13">
                <div class="nas7">
                  <div class="nas8">
                    <img src={img0} alt="" />

                    <h5 class="nas4">Please note</h5>
                    <h3>Registration for N-Power Batch C is now Closed!</h3>
                    <p>
                      The central management system for the Federal Ministry of
                      Humanitarian Affairs, Disaste Management and Social
                      Development.
                    </p>
                    <Link to="/About" className="nas90">
                      <p class="text-success">Read More</p>
                    </Link>
                  </div>

                  <div class="nas9">
                    <img src={img2} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div className="">
                <div class="nas10">
                  <div class="nas11">
                    <img src={img0} alt="" />

                    <h5 class="nas4">Read about</h5>
                    <h3>How NASIMS is impacting lives on a global level.</h3>
                    <p>
                      The N-Power Programme is a job creation and skills
                      empowerment programme of the Federal Government of
                      Nigeria…
                    </p>
                    <Link to="/About" className="nas90">
                      <p class="text-success">Read More</p>
                    </Link>
                  </div>
                  <div class="nas12">
                    <img src={img3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>

        <div class="nas16 bg-dark">
          <p class="nas17 text-light text-center">
            Read more about our response to the Covid-19 pandemic&nbsp;&nbsp;
            <Link class=" text-success text-decoration-none" to="/News">
              here
            </Link>
          </p>
        </div>

        <div class="nas20">
          <div class="text-center mx-5">
            <img src={img4} alt="" className="nas21" width={200} />
          </div>
          <div class="nas22">
            <h3>
              Welcome to the National Social Investment Management System
              (NASIMS)
            </h3>
            <p>
              <a
                class="nas23 text-success text-decoration-none"
                href="
          The Federal Ministry of Humanitarian Affairs, Disaster Management and Social Development"
              >
                The Federal Ministry of Humanitarian Affairs, Disaster
                Management and Social Development &nbsp;
              </a>
              was established on Wednesday August 21st, 2019 by an Executive
              pronouncement by the President and Commander in Chief of the Armed
              Forces of Nigeria, H.E., Muhammadu Buhari GCFR at the inauguration
              of Ministers for the Federal Republic of Nigeria. Under My
              leadership as Minister, the Ministry will position itself in light
              of the prevailing Humanitarian situation in the country through
              its Vision, Mission and Core values to promote Human dignity and
              Integration of basic Humane benevolence and compassion in the
              treatment of all Nigerians
              <br />
              <br />
              Sadiya Umar Farouq
              <br />
              Honorable Minister
            </p>
          </div>
        </div>

        <div class="nas25">
          <div class="text-center pt-5">
            <img src={img5} alt="" className="nas29" width={250} />
          </div>

          <div class="nas26">
            <h5 class="nas27 pt-5">
              <a class="text-warning text-decoration-none" href="About us">
                About us
              </a>
            </h5>
            <h3 class="nas28 py-4">
              Providing efficient, effective, and coordinated humanitarian
              response to Nigerians.
            </h3>
            <p>
              The National Social Investment Program of Nigeria is a social
              welfare initiative created by the Federal government of Nigeria in
              2015 under the direction of the National Social Investment Office.
              The Program was created to ensure a more equitable distribution of
              resources to vulnerable populations, including children, youth,
              and women. Under President Muhammadu Buhari the office has created
              four programs to address poverty and help increase economic
              development.
            </p>
            <Link to="/About" class="btn btn-success btn-lg mt-3 mx-4">
              {" "}
              Read More{" "}
            </Link>
          </div>
        </div>

        <div class="nas30 p-5 mt-5">
          <div>
            <h3 class="text-center">Our Programmes</h3>
            <p class="nas31 text-muted">
              Our programmes are specifically designed to empower, train and
              uplift millions of abandoned Nigerians in every part of the
              country.
            </p>
          </div>
          <div class="card-group">
            <div class="card">
              <img src={img6} alt="" />

              <div class="card-body">
                <h5 class="card-title">
                  <a class="text-warning text-decoration-none" href="N-POWER">
                    N-POWER
                  </a>
                </h5>
                <p class="card-text">
                  The N-Power Program is built to address the issue of youth
                  unemployment and help increase social development.
                </p>
                <Link to="/About" class=" m-3 btn btn-success btn-lg">
                  Learn More
                </Link>
                {/* <button class="nas76 m-5 btn btn-outline-success">
              Learn More
            </button>  */}
              </div>
            </div>
            {/*  <div class="card">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div> */}
            <div class="card">
              <img src={img7} className="nas32" height={283} alt="" />

              <div class="card-body">
                <h5 class="card-title">
                  <a
                    class="text-warning text-decoration-none"
                    href="Conditional Cash Transfer (CCT)
              "
                  >
                    Conditional Cash Transfer (CCT)
                  </a>
                </h5>
                <p class="card-text">
                  Nigeria's Conditional Cash Transfer program provides targeted
                  cash transfers to the most vulnerable households with the
                  long-term goal of lifting millions out of poverty.
                </p>
                <Link to="/About" class=" m-3 btn btn-success btn-lg">
                  Learn More
                </Link>
                {/* <button class="nas78 m-5 btn btn-outline-success">
                  Learn More
                </button> */}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h3 class="text-center p-3 mt-5">Latest News</h3>
            <p class="nas31 text-muted  pt-2">
              Keep up with the latest updates about programmes and events
            </p>
          </div>
          <div class="nas35 row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100">
                <img src={img8} class="card-img-top" height={250} alt="" />

                <div class="card-body">
                  <h5 class="card-title">N-Power Batch C</h5>
                  <p class="text muted">June 25, 2020</p>
                  <p class="card-text text-muted">
                    All empower batch c applicants are expected to update their
                    profile and take test for possible shortlisting...
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src={img10} class="card-img-top" height={250} alt="" />

                <div class="card-body">
                  <h5 class="card-title">N-Power Customer Care</h5>
                  <p class="text-muted">June 25, 2020</p>
                  <p class="card-text text-muted">
                    All enquires and complains should be channeled through the
                    N-Power customer care line. Details are as follows:
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src={img9} class="card-img-top" height={250} alt="" />
                <div class="card-body">
                  <h5 class="card-title">NASIMS Test Portal</h5>
                  <p class="text-muted">June 25, 2020</p>
                  <p class="card-text text-muted">
                    Please make sure your records are fully updated on the
                    NASIMS portal before taking this test...
                  </p>
                </div>
              </div>
            </div>
            <div className="nas36">
              <Link to="/News" class="btn2 btn btn-success btn-lg">
                News Page
              </Link>
            </div>
          </div>
        </div>

        <div class="text-center bg-dark mt-5">
          <p class="text-light pt-3 text-muted">Be the first to know</p>
          <p class="nas37 text-light">
            Follow us on our social media platforms for all the latest updates
            and applications news
          </p>
          <a class="text-white" href="#">
            <i class="bi bi-facebook"></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a class="text-white" href="#">
            <i class="bi bi-twitter"></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a class="text-white" href="#">
            <i class="bi bi-instagram"></i>
          </a>
        </div>

        <div class="text-center mt-5">
          <h3 class="font-italic">Got Questions?</h3>
          <p class="nas37 text-muted">
            For enquiries, complaints or requests, feel free to reach out to us.
          </p>
          <Link to="/Contact" class=" btn btn-success btn-lg">
            Contact Us
          </Link>
        </div>

        <footer class="nas38 mt-5">
          <div class="text-center">
            <p className="nas37">
              <a class=" text-light text-decoration-none" href="apply">
                Apply
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a class=" text-light text-decoration-none" href="about">
                About
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a class=" text-light text-decoration-none" href="news">
                {" "}
                News
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a class=" text-light text-decoration-none" href="contact">
                Contact
              </a>
            </p>
            <a class="text-white" href="#">
              <i class="bi bi-facebook"></i>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a class="text-white" href="#">
              <i class="bi bi-twitter"></i>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a class="text-white" href="#">
              <i class="bi bi-instagram"></i>
            </a>
            <p class="nas37 text-light mt-3">
              Copyright 2022. Federal Ministry of Humanitarian Affairs, Disaster
              Management and Social Development. All Rights Reserved.
            </p>
            <p className="nas39 text-white"> Made by Joseph Awachie.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
