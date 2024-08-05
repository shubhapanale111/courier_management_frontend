import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/billing.css";
function ClientRateCalculation() {
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
          <h3 style={{ color: "maroon", fontSize: "18px" }}>Client Rate Calculation</h3>
        </div>
        <div className="client-rate-row2">
          <form action="">
            <div className="form-outer">
            <span className="client-label">
                <label for="fname">Client </label>
              </span>
              <span className="client-input">
                <input type="date" />
              </span>
              <span className="client-label">
                <label for="fname">Client </label>
              </span>
              <span className="client-input">
                <input type="date" />
              </span>
              <span className="client-label">
                <label for="fname">Client </label>
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
          </form>
          <div className="client-rate-table">
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr>
                        <th>Sl No</th>
                        <th>AWB No</th>
                        <th>Date</th>
                        <th>Client</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>State</th>
                        <th>Zone</th>
                        <th>Mode</th>
                        <th>Net...</th>
                        <th>Weight</th>
                        <th>PcsN-Dox</th>
                        <th>Cr</th>
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

export default ClientRateCalculation;
