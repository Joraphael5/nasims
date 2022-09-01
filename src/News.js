import React from "react";
import { Link, NavLink } from "react-router-dom";

import img0 from "./images/nassim15.webp";
import img1 from "./images/nassim20.webp";
import img2 from "./images/nassim21.webp";

const News = () => {
  return (
    <div>
      <div class="nas67 text-center">
        <h2 class="text-dark">Recent News</h2>
        <p class="text-dark">Happenings and other related information</p>
      </div>

      <div class="nas68 pt-5">
        <div>
          <img src={img0} class="nas70" alt="" />
        </div>

        <div class="nas69 text-center mt-4">
          <h3 className="mb-4">N-Power Batch C</h3>
          <p>
            All N-Power batch-c applicants are expected to update their profile
            and take test for possible shortlisting to the next stage of the
            N-Power application process <br />
            <br />
            <p>
              Please note that all successful candidates will be sent a mail and
              given directions on the next stage.
            </p>
            <p>
              Candidates not selected can re-apply for the next batch of the
              programme as soon as it opens for application.
            </p>
            <br />
            Signed NASIMS
          </p>
        </div>
      </div>

      <div class="nas71 mt-5">
        <div class="nas72">
          <img src={img1} className="nas70" alt="" />
        </div>
        <div class="nas73 text-center">
          <h3 class="nas74">N-Power Customer Care</h3>
          <p class="nas75 text-muted">
            All enquires and complains should be channeled through the N-Power
            customer care line. Details are as follow:
          </p>
          <p class="nas76">
            Phone Number: 018888340 or 018888189
            <br />
            <br />
            Opening days: Mondays Through Fridays (Time: 9AM – 9PM)
            <br />
            <br />
            Saturdays (9AM-2PM)
            <br />
            <br />
            Note: you can also send a mail to &nbsp;
            <a
              class="text-success text-decoration-none"
              href=" support.npower@nasims.gov.ng"
            >
              support.npower@nasims.gov.ng
            </a>
          </p>
        </div>
      </div>

      <div class="nas77 mt-5">
        <div class="">
          <img src={img2} className="nas78" alt="" />
        </div>
        <div className="nas73 text-center mt-5">
          <h3>Test Portal</h3>
          <br />
          <br />
          <p class="lead text-dark">Instructions:</p>
          <p class="text-muted">
            Please make sure your records are fully updated on the NASIMS portal
            before taking this test
          </p>
          <p class="lead text-dark">
            For first time login, recover your password using the underlisted
            <br />
            procedures:
          </p>
          <ol class="text-muted">
            <li>Click on login</li>
            <br />

            <li>Use the "Forgot Password" Option</li>
            <br />
            <li>
              Select either N-POWER application email or N-POWER application ID
            </li>
            <br />
            <li>Enter the information of the option selected</li>
            <br />
            <li>Click on “Reset Password”</li>
            <br />
            <li>Enter your new password and click proceed</li>
            <br />
            <li>
              Login with your N-POWER application email or N-POWER application
              ID and newly created password
            </li>
          </ol>
          <p>
            After successful reset of password, please login to update your
            records before taking test.
          </p>
          <h5>Note:</h5>
          <p>
            This test is time base and you are expected to answer 20 questions
            in 10
            <br />
            mins.
          </p>
          <ol class="text-muted">
            <li>Test cannot be retaken after submission</li>
            <li>You cannot skip any question</li>
            <li>Every question is allotted equal score</li>
            <li>
              if you are timed out after the third attempt without submitting,
              you will not be able to take the test again.
            </li>
          </ol>
          <p>
            For other enquiry or query, please call 018888340 or 018888189 or
            send a message to
            <a
              class="text-success text-decoration-none"
              href="support.npower@nasims.gov.ng"
            >
              support.npower@nasims.gov.ng
            </a>
          </p>
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

export default News;
