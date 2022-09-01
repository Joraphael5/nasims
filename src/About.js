import React from "react";
import { Link, NavLink } from "react-router-dom";

import img0 from "./images/nassim15.webp";
import img1 from "./images/nassim16.png";
import img2 from "./images/nassim17.webp";
import img3 from "./images/nassim18.webp";
import img4 from "./images/nassim19.webp";
import img5 from "./images/nassim9.WEBP";
import img6 from "./images/nassim10.jpg";
import img7 from "./images/nassim11.jpg";

const About = () => {
  return (
    <div>
      <div class="nas40 text-center">
        {/* <!-- <img src="images/nassim13.jpg" class="d-block w-100" /> --> */}
        <p className="text-white">Everything you need to know</p>
        <h3 className="text-white">About NASIMS</h3>
      </div>

      <div class="nas41 pt-5">
        <div>
          <img src={img0} className="nas45" alt="" />
        </div>

        <div class="nas42 text-center">
          <h3 class="nas43 p-3">
            Overview of the National Social Investment Program of Nigeria
          </h3>
          <p class="nas44 text-muted">
            The National Social Investment Program of Nigeria is a social
            welfare initiative created by the Federal government of Nigeria in
            2015 under the direction of the National Social Investment Office.
            The Program was created to ensure a more equitable distribution of
            resources to vulnerable populations, including children, youth, and
            women. Under President Muhammadu Buhari the office has created four
            programs to address poverty and help increase economic development.
          </p>
        </div>
      </div>

      <div class="nas46 mt-5">
        <div>
          <h3 class="text-center p-5 font-weight-lighter">
            The four (4) main programs under the National Social Investment
            Program
          </h3>
        </div>
        <div class="nas47">
          <div class="text-center">
            <img src={img1} alt="" />
          </div>
          <div class="nas48 text-center">
            <h3 class="nas49 font-weight-lighter">N-Power</h3>
            <p class="nas50 font-weight-lighter">
              The N-Power Programme is a job creation and skills empowerment
              programme of the Federal Government of Nigeria. The Programme is
              designed to target Nigerians between the ages of 18 and 35 and
              aims to help young Nigerians acquire and develop life-long skills
              to become practical solution providers in their communities,
              enabling them to become innovative players in the domestic and
              global markets.
            </p>
            <p class="nas51">
              <a class="text-success text-decoration-none" href="read more">
                Read More
              </a>
            </p>
          </div>
        </div>

        <div class="nas52 p-3">
          <div className="text-center">
            <img src={img2} alt="" />
          </div>
          <div class="nas53 text-center">
            <h3 class="nas54 font-weight-lighter">Conditional Cash Transfer</h3>
            <p class="nas55 font-weight-lighter">
              The Conditional cash transfer Programme directly supports the most
              vulnerable by providing no-strings-attached cash to those in the
              lowest income group, helping reduce poverty, improve nutrition and
              self-sustainability, and supporting development through increased
              consumption.
            </p>
            <p class="nas56">
              <a class="text-success text-decoration-none" href="read more">
                Read More
              </a>
            </p>
          </div>
        </div>

        <div class="nas57">
          <div className="text-center">
            <img src={img3} alt="" />
          </div>
          <div class="nas58 text-center">
            <h3 class="nas59">
              Government Enterprise and Empowerment Program (GEEP)
            </h3>
            <p class="nas60">
              The Government Enterprise and Empowerment Programme is a
              micro-lending investment programme that provides businesses for
              the bottom of the financial pyramid. The beneficiaries include
              traders, women cooperatives, market women, enterprising youth,
              farmers, and agricultural workers at no interest rate.
            </p>
            <p class="nas61">
              <a class="text-success text-decoration-none" href="read more">
                Read More
              </a>
            </p>
          </div>
        </div>

        <div class="nas62">
          <div className="text-center">
            <img src={img4} alt="" />
          </div>
          <div class="nas63 text-center">
            <h3 class="nas64">
              National Home Grown School Feeding Program (NHGSFP)
            </h3>
            <p class="nas65">
              The National Home Grown School Feeding Programme aims to deliver a
              cost-effective home grown school feeding programme with a specific
              focus on increasing school enrollment, reducing the incidence of
              malnutrition especially among the poor; empowering cooks while
              supporting local agriculture through small holder farmers, thereby
              stimulating economic growth through the socio economic value
              chain. The primary focus of the Programme is to provide free
              school meals with food procured from local smallholder farmers by
              strengthening communities across the country.
            </p>
            <p class="nas66">
              <a class="text-success text-decoration-none" href="read more">
                Read More
              </a>
            </p>
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
              <img src={img5} class="card-img-top" height={250} alt="" />

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
              <img src={img7} class="card-img-top" height={250} alt="" />

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
              <img src={img6} class="card-img-top" height={250} alt="" />
              <div class="card-body">
                <h5 class="card-title">NASIMS Test Portal</h5>
                <p class="text-muted">June 25, 2020</p>
                <p class="card-text text-muted">
                  Please make sure your records are fully updated on the NASIMS
                  portal before taking this test...
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
          Follow us on our social media platforms for all the latest updates and
          applications news
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
  );
};

export default About;
