import React from "react";

const Login = () => {
  return (
    <div>
      <div class="mt-5 text-center">
        <h3>
          <b>Login to your NASIMS Account</b>
        </h3>
        <br />
        <br />
      </div>

      <div className="nas80">
        <div class="nas81">
          <p class="nas text-success ms-3">
            For biometrics enrolment, kindly follow the
            <br />
            instructions below;
          </p>
          <ol class="text-muted">
            <li>
              Login to your dashboard and click the "verification" tab
              <br />
              <br />
            </li>
            <li>
              Click the “capture your fingerprint” button to download and
              install the enrolment application
              <br />
              <br />
            </li>
            <li>
              After installation, provide the required credentials and click
              "Proceed".
              <br />
              <br />
            </li>
            <li>
              Make sure the fingerprint biometric device is connected, then
              click on "Begin Enrolment" to launch the enrolment process.
              <br />
              <br />
            </li>
            <li>
              Click on the finger to begin the enrolment process
              <br />
              <br />
            </li>
            <li>
              Applicants are to enroll their Right thumb, Right index, Left
              thumb and Left index fingers only for successful enrolment
              <br />
              <br />
            </li>
            <li>
              After successful enrollment, click on “Submit” to save the
              biometric enrollment
              <br />
              <br />
            </li>
          </ol>
          <p class="nas text-success ms-3">
            After successful enrolment, please check the "verification" tab of
            your self service portal to confirm if the capture was successful.
          </p>
        </div>

        <div>
          <form className="p-2" action="">
            <input
              className="nas82"
              type="text"
              placeholder="Email/Application ID"
              name="Email/Application ID"
            />
            <br />
            <br />
            <input
              className="nas82"
              type="password"
              placeholder="Enter Password"
              name="Enter Password"
            />
            <br />
            <br />
            <input type="checkbox" placeholder="" />
            &nbsp;
            <label class="nas">Keep me logged in</label> &nbsp; &nbsp; &nbsp;
            <a
              class="nas text-success text-decoration-none"
              href="forgot password"
            >
              Forgot Password
            </a>
            <br />
            <br />
            <a href="#" class="nas83 btn btn-success btn-lg w-100">
              Proceed
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
