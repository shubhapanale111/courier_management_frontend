import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/purchasereport.css";
function PurchaseReport() {
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
    <div className="purchasereport">
      <div className="purchasereport-main mt-5">
        <div className="purchasereport-row1">
          <h3 style={{ color: "maroon", fontSize: "18px" }}>Purchase Report</h3>
        </div>
        <div className="purchasereport-row2">
          <div className="purchasereport-row2-row1">
            <form action="">
              <div className="form-outer">
                <span className="pickup-label" style={{ width: "7%" }}>
                  <label for="fname">Forwarder </label>
                </span>
                <span className="pickup-input" style={{ width: "50%" }}>
                  <select id="company">
                    <option value=""></option>
                    <option value="company1"> All</option>
                    <option value="company2"> network 2</option>
                    <option value="company3"> network 3</option>
                  </select>
                </span>
                <span className="pickup-label" style={{ width: "9%" }}>
                  <label for="fname">Destination </label>
                </span>
                <span className="pickup-input" style={{ width: "30%" }}>
                  <select id="company">
                    <option value=""></option>
                    <option value="company1"> network 1</option>
                    <option value="company2"> network 2</option>
                    <option value="company3"> network 3</option>
                  </select>
                </span>
              </div>
              <div className="form-outer" style={{marginTop:'10px'}}>
              <span className="pickup-input" style={{ width: "8%", marginLeft: "250px" }}>
                                    <label>Form Date</label></span>
                                <span className="manifest-startdate"><input type="date"></input></span>

                                <span className="pickup-input" style={{ width: "6%", marginLeft:'7px' }}>
                                    <label>To Date</label></span>
                                <span className="manifest-startdate"><input type="date"></input></span>

              </div>
            </form>
          </div>
          <div className="purchasereport-row2-row2">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Fwd No.</th>
                  <th>Awb No.</th>
                  <th>Manifest Date</th>
                  <th>Forwarder</th>
                  <th>Destination</th>
                  <th>Mode</th>
                  <th>Weight</th>
                  <th>Pcs</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.srNo}</td>
                    <td>{row.awbNo}</td>
                    <td>{row.fwdNo}</td>
                    <td>{row.bkDate}</td>
                    <td>{row.mfDate}</td>
                    <td>{row.origin}</td>
                    <td>{row.destination}</td>
                    <td>{row.origin}</td>
                    <td>{row.destination}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="purchasereport-row3">
          <div className="ci-button">
            <button>Save</button>
            <button>Print</button>
            <button onClick={handlClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseReport;