import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/billing.css";
function Unbilledunbilled() {
  const navigate = useNavigate();
  const tableData = [
    {
      srNo: 1,
      awbNo: 'AWB123456',
      fwdNo: 'FWD123456',
      bkDate: '2023-06-01',
      mfDate: '2023-06-02',
      origin: 'New York',
      destination: 'Los Angeles',
      pcs: 10,
      dispPcs: 8,
      weight: 100,
      disp: 80
    },
    // Add more rows as needed
  ];

  const handlClose = () => {
    navigate("/");
  };
  return (
    <div className="unbilled">
      <div className="unbilled-main mt-5">
        <div className="unbilled-row1">
          <h3 style={{ color: "maroon", fontSize: "18px" }}>
            unbilled consigment
          </h3>
        </div>
        <div className="unbilled-row2">
          <div className="unbilled-row2-row1">
            <div className="subdiv">
              <form action="">
                <div className="form-outer">
                  <span className="pickup-label" style={{ width: "20%" }}>
                    <label for="fname">City </label>
                  </span>
                  <span className="pickup-input" style={{ width: "80%" }}>
                    <select id="company">
                      <option value=""></option>
                      <option value="company1"> network 1</option>
                      <option value="company2"> network 2</option>
                      <option value="company3"> network 3</option>
                    </select>
                  </span>
                </div>
                <div className="form-outer">
                <span className="pickup-label" style={{ width: "20%" }}>
                    <label for="fname">Branch </label>
                  </span>
                  <span className="pickup-input" style={{ width: "30%" }}>
                    <select id="company">
                      <option value=""></option>
                      <option value="company1"> network 1</option>
                      <option value="company2"> network 2</option>
                      <option value="company3"> network 3</option>
                    </select>
                  </span>
                  <span className="pickup-label" style={{ width: "20%" }}>
                    <label for="fname">From Date </label>
                  </span>
                  <span className="pickup-input" style={{ width: "30%" }}>
                    <input type="date" />
                  </span>
                </div>
                <div className="form-outer">
                <span className="pickup-label" style={{ width: "20%" }}>
                    <label for="fname">Mode </label>
                  </span>
                  <span className="pickup-input" style={{ width: "30%" }}>
                    <select id="company">
                      <option value=""></option>
                      <option value="company1"> network 1</option>
                      <option value="company2"> network 2</option>
                      <option value="company3"> network 3</option>
                    </select>
                  </span>
                  <span className="pickup-label" style={{ width: "20%" }}>
                    <label for="fname">To Date </label>
                  </span>
                  <span className="pickup-input" style={{ width: "30%" }}>
                    <input type="date" />
                  </span>
                </div>
                <div className="form-outer">
                <span className="pickup-label" style={{ width: "20%" }}>
                    <label for="fname">Status </label>
                  </span>
                  <span className="pickup-input" style={{ width: "30%" }}>
                    <select id="company">
                      <option value=""></option>
                      <option value="company1"> network 1</option>
                      <option value="company2"> network 2</option>
                      <option value="company3"> network 3</option>
                    </select>
                  </span>
                  <span className="pickup-label" style={{ width: "20%" }}>
                   
                  </span>
                  <span className="pickup-input" style={{ width: "30%" }}>
                   
                  </span>
                </div>
               
              </form>
            </div>
          </div>
          <div className="unbilled-row2-row2">
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
           
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
        <div className="unbilled-row3">
          <div className="ci-button">
            <button>Show</button>
            <button style={{width:'150px'}}>Export to Excel</button>
            <button onClick={handlClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unbilledunbilled;
