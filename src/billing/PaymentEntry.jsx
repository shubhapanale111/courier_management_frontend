import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/billing.css";
export default function PaymentEntry() {
  const navigate = useNavigate();

  const handlClose = () => {
    navigate("/");
  };
  return (
    <div className="payment-container">
      <div class="payment-main-container mt-5">
        <div class="payment-main-container-row1" style={{ color: "maroon" }}>
          Payment Entry{" "}
        </div>
        <div class="payment-main-container-row2">
            <div className="payment-row2-col1">
          <form>
            <div className="form-outer">
            <span className="payment-label-sub">
                <label for="fname">Date </label>
              </span>
              <span className="payment-input">
                <input type="date" />
                </span>
            </div>
            <div className="form-outer">
              <span className="payment-label">
                <label for="fname">Client </label>
              </span>
              <span className="payment-input">
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
            <span className="payment-label-sub">
                <label for="fname">Balance Amt </label>
              </span>
              <span className="payment-input-sub">
                <input type="text" />
                </span>
                <span className="payment-label-sub">
                <label for="fname">Receive Amt </label>
              </span>
              <span className="payment-input-sub">
                <input type="text" />
                </span>
            </div>
           
            <div className="form-outer">
            <span className="payment-label-sub">
                <label for="fname">Deduction </label>
              </span>
              <span className="payment-input-sub">
                <input type="text" />
                </span>
            </div>
            <div className="form-outer">
            <span className="payment-label-sub">
                <label for="fname">Cheque No. </label>
              </span>
              <span className="payment-input-sub">
                <input type="text" />
                </span>
            </div>
            <div className="form-outer">
            <span className="payment-label">
                <label for="fname">Bank Name </label>
              </span>
              <span className="payment-input">
                <input type="text" />
                </span>
            </div>
            <div className="form-outer">
            <span className="payment-label">
                <label for="fname">Remarks </label>
              </span>
              <span className="payment-input">
                <input type="text" />
                </span>
            </div>
          </form>
          </div>
            <div className="payment-row2-col2"></div>
        </div>
        <div class="payment-main-container-row3">
          <div className="payment-button">
            <button>Save</button>
            <button onClick={handlClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
