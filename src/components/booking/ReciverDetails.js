import React from "react";

export default function ReciverDetails() {
  return (
    <>
      <div className="title-box">
        <p className="title">Reciver Details</p>
      </div>
      <form>
        <div className="form-outer">
          <span className="form-outer-label">
            <label htmlFor="company">Company</label>
          </span>
          <span className="form-outer-input">
            <select id="company">
              <option value=""></option>
              <option value="company1">Company 1</option>
              <option value="company2">Company 2</option>
              <option value="company3">Company 3</option>
            </select>
          </span>
        </div>

        <div className="form-outer">
          <span className="form-outer-label">
            <label for="fname">Name </label>
          </span>
          <span className="form-outer-input">
            <input type="text" />
          </span>
        </div>
        <div className="form-outer">
          <span className="form-outer-label">
            <label for="fname">Pin code </label>
          </span>
          <span className="form-outer-input">
            <input type="text" />
          </span>
        </div>
        <div className="form-outer">
          <span className="form-outer-label">
            <label for="fname">Address 1 </label>
          </span>
          <span className="form-outer-input">
            <textarea type="text" />
          </span>
        </div>
        <div className="form-outer">
          <span className="form-outer-label">
            <label for="fname">Address 2 </label>
          </span>
          <span className="form-outer-input">
            <textarea type="text" />
          </span>
        </div>
        <div className="form-outer">
          <span className="form-outer-label">
            <label htmlFor="company">Destination</label>
          </span>
          <span className="form-outer-input">
            <select id="company">
              <option value=""></option>
              <option value="company1">Company 1</option>
              <option value="company2">Company 2</option>
              <option value="company3">Company 3</option>
            </select>
          </span>
        </div>
        <div className="form-outer">
          <span className="form-outer-label">
            <label for="fname">Contact no. </label>
          </span>
          <span className="form-outer-input">
            <input type="text" />
          </span>
        </div>
        <div className="form-outer">
          <span className="form-outer-label">
            <label for="fname">Email </label>
          </span>
          <span className="form-outer-input">
            <input type="text" />
          </span>
        </div>
      </form>
    </>
  );
}
