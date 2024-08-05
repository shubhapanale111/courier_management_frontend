import React from "react";
import "../Style/aboutus.css";
import logo from "../Images/logo.jpg";

function Aboutus() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-main mt-5">
      <div className="aboutus-row">
      <div className="aboutus-row1"></div>
          <div className="aboutus-row2">
            <p className="details">
              Contact :--- <br />
              DEVELOPMENT HEAD
              <br />
              Sandeep Singh
              <br />
              +91 931 353 4559
            </p>
          </div>
       </div>
       <p className="website-details">
            Website : <a href="https://www.softec.in/">www.softec.in</a><br />
            Mail    : support@softec.in
        </p>
        <div className="aboutus-button">
            <button>Update</button>
            <button>Update History</button>
        </div>
        <div className="softec-details">
        softec was founded to achieve global IT services leadership in providing value-added high quality IT solutions to the clients in selected horizontal and vertical segments by combining technology skills, domain expertise and focus commitment to long-term client. Softec has outstanding competences and accumulated an impressive experience in highly reliable critical application development,System integration and business intelligence solutions specially in Express Industries.
        </div>
        <div className="aboutus-button2">
            <button>Exit</button>
        </div>
      </div>
      
    </div>
  );
}

export default Aboutus;
/*

<div className="aboutus-main mt-5">
        <div className="aboutus-row">
          <div className="aboutus-row1"></div>
          <div className="aboutus-row2">
            <p className="details">
              Contact :--- <br />
              DEVELOPMENT HEAD
              <br />
              Sandeep Singh
              <br />
              +91 931 353 4559
            </p>
          </div>
        </div>
        <p className="website-details">
            Website : <a href="https://www.softec.in/">www.softec.in</a><br />
            Mail    : support@softec.in
        </p>
        <div className="aboutus-button">
            <button>Update</button>
            <button>Update History</button>
        </div>
        <div className="softec-details">
        softec was founded to achieve global IT services leadership in providing value-added high quality IT solutions to the clients in selected horizontal and vertical segments by combining technology skills, domain expertise and focus commitment to long-term client. Softec has outstanding competences and accumulated an impressive experience in highly reliable critical application development,System integration and business intelligence solutions specially in Express Industries.
        </div>
        <div className="aboutus-button2">
            <button>Exit</button>
        </div>
      </div>
*/