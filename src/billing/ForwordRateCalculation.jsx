import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/billing.css";
function ForwordRateCalculation() {
  const navigate = useNavigate();
  const tableData = [
    {
      srNo: 1,
      awbNo: "AWB123456",
      fwdNo: "FWD123456",
    },
    // Add more rows as needed
  ];

  const handlClose = () => {
    navigate("/");
  };
  return (
    <div className="client-rate">
      <div className="client-rate-main mt-3" >
        <div className="client-rate-row1">
          <h3 style={{ color: "maroon", fontSize: "18px" }}>Auto Calculation FWD</h3>
        </div>
        <div className="client-rate-row2" >
            <div className="forworder-rate" >
          <form action="">
            <div className="form-outer">
          
              <span className="client-label">
                <label for="fname">Forworder </label>
              </span>
              <span className="client-input">
                <select id="company">
                  <option value=""></option>
                  <option value="company1"> network 1</option>
                  <option value="company2"> network 2</option>
                  <option value="company3"> network 3</option>
                </select>
              </span>
            </div>
            <div className="form-outer">
            <span className="client-label" style={{width:'30%'}}>
                <label for="fname">Form Date </label>
              </span>
              <span className="client-input">
                <input type="date" />
              </span>
              <span className="client-label">
                <label for="fname">To Date </label>
              </span>
              <span className="client-input">
                <input type="date" />
              </span>
            </div>
          </form>
          </div>
          <div className="forworder-rate-table">
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr>
                        <th>Sl No</th>
                        <th>FWD...</th>
                        <th>AWB No</th>
                        <th>Manifest Date</th>
                        <th>Forworder</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>State</th>
                        <th>Zone</th>
                        <th>Mode</th>
                        <th>Pcs</th>
                        <th>Weight</th>
                        <th>Amount</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, index) => (
                        <tr key={index}>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
          </div>
       
        </div>
        <div className="client-rate-row3">
          <div className="ci-button">
            <button>Save</button>
            <button>Show</button>
            <button onClick={handlClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForwordRateCalculation;
