import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/dispatchsummary.css";
function DispatchSummary() {
  const navigate = useNavigate();
  const tableData = [
    {
      srNo: 1,
      awbNo: "",
      fwdNo: "",
      awbNo: "",
      bkDate: "",
      mfDate: "",
      forwarder: "",
      destination: "",
      mode: "",
      weight: "",
      pcs: "",
      amount: "",

    },
    // Add more rows as needed
  ];

  const handlClose = () => {
    navigate("/");
  };
  return (
    <div className="dispatchsummary">
      <div className="dispatchsummary-main mt-5">
        <div className="dispatchsummary-row1">
          <h3 style={{ color: "maroon", fontSize: "18px" }}>Dispatch Report</h3>
        </div>
        <div className="dispatchsummary-row2">
          <div className="dispatchsummary-row2-row1">
            <form action="">
              <div className="form-outer">
                <span className="pickup-label" style={{ width: "6%" }}>
                  <label for="fname">Branch </label>
                </span>
                <span className="pickup-input" style={{ width: "20%" }}>
                  <select id="company">
                    <option value=""></option>
                    <option value="company1"> All</option>
                    <option value="company2"> network 2</option>
                    <option value="company3"> network 3</option>
                  </select>
                </span>
                <span className="pickup-label" style={{ width: "12%" }}>
                  <label for="fname">Forwarder Name </label>
                </span>
                <span className="pickup-input" style={{ width: "35%" }}>
                  <select id="company">
                    <option value=""></option>
                    <option value="company1"> network 1</option>
                    <option value="company2"> network 2</option>
                    <option value="company3"> network 3</option>
                  </select>
                </span>
              </div>
              <div className="form-outer" style={{marginTop:'10px'}}>
              <span className="pickup-input" style={{ width: "8%", marginLeft: "120px" }}>
                                    <label>Form Date</label></span>
                                <span className="manifest-startdate"><input type="date"></input></span>

                                <span className="pickup-input" style={{ width: "6%", marginLeft:'15px' }}>
                                    <label>To Date</label></span>
                                <span className="manifest-startdate"><input type="date"></input></span>

              </div>
            </form>
          </div>
          <div className="dispatchsummary-row2-row2">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Mfno</th>
                  <th>Forwarder</th>
                  <th>Date</th>
                  <th>Mode</th>
                  <th>Pcs</th>
                  <th>Weight</th>
                  
                 
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.srNo}</td>
                    <td>{row.mfno}</td>
                    <td>{row.forwarder}</td>
                    <td>{row.date}</td>
                    <td>{row.mode}</td>
                    <td>{row.pcs}</td>
                    <td>{row.weight}</td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="dispatchsummary-row3">
          <div className="ci-button">
            <button>Show</button>
            <button>Export</button>
            <button onClick={handlClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DispatchSummary;