import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/citymaster.css";
export default function FwdNumberUpdate() {
  const navigate = useNavigate();

  const handlClose = () => {
    navigate("/");
  };
  return (
    <div className="citymaster-container">
      <div class="citymaster-main-container mt-5">
        <div class="citymaster-main-container-row1" style={{ color: "maroon" }}>
          Update Fwd No.{" "}
        </div>
        <div class="citymaster-main-container-row2">
          <form>
            <div className="form-outer">
              <span className="form-outer-label-citymaster">
                <label for="fname">Fwd No. </label>
              </span>
              <span className="form-outer-input-citymaster">
                <input type="text" />
              </span>
            </div>

            <div className="form-outer">
              <span className="form-outer-label-citymaster">
                <label for="fname">Manifest </label>
              </span>
              <span className="form-outer-input-citymaster">
                <select id="company">
                  <option value=""></option>
                  <option value="company1"> INT</option>
                  <option value="company2"> LOC</option>
                  <option value="company3">MET </option>
                  <option value="company3">NCR </option>
                  <option value="company3">NOE </option>
                  <option value="company3">NOR</option>
                  <option value="company3">ROI </option>
                </select>
              </span>
            </div>
            <div className="form-outer">
              <span className="form-outer-label-citymaster">
                <label for="fname">AWB No. </label>
              </span>
              <span className="form-outer-input-citymaster">
               
                  <input type="text" name="" id="" />
              
              </span>
            </div>
            
          </form>
        </div>
        <div class="citymaster-main-container-row3">
          <div className="citymaster-button">
            <button>Save</button>
            <button>Delete</button>
            <button onClick={handlClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
