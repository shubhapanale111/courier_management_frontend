import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/transaction.css";
function ConsigmentRecived() {
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
    <div className="consigment">
      <div className="consigment-main mt-5">
        <div className="consigment-row1">
          <h3 style={{ color: "maroon", fontSize: "18px" }}>
            Consigment Recived
          </h3>
        </div>
        <div className="consigment-row2">
          <div className="consigment-row2-row1">
            <div className="subdiv">
              <form action="">
                <div className="form-outer">
                  <span className="pickup-label">
                    <label for="fname">Branch </label>
                  </span>
                  <span className="pickup-input">
                    <select id="company">
                      <option value=""></option>
                      <option value="company1"> network 1</option>
                      <option value="company2"> network 2</option>
                      <option value="company3"> network 3</option>
                    </select>
                  </span>
                </div>
                <div className="form-outer">
                  <span className="pickup-label">
                    <label for="fname">Receiving Date </label>
                  </span>
                  <span className="pickup-input" style={{ width: "40%" }}>
                    <input type="date" />
                  </span>
                </div>
                <div className="form-outer">
                  <span className="pickup-label">
                    <label for="fname">AWB No. </label>
                  </span>
                  <span className="pickup-input">
                    <input type="text" />
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="consigment-row2-row2">
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>AWB No</th>
            <th>FWD No</th>
            <th>BK Date</th>
            <th>MF Date</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>PCS</th>
            <th>Disp PCS</th>
            <th>Weight</th>
            <th>Disp</th>
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
              <td>{row.pcs}</td>
              <td>{row.dispPcs}</td>
              <td>{row.weight}</td>
              <td>{row.disp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
        <div className="consigment-row3">
          <div className="ci-button">
            <button>Save</button>
            <button onClick={handlClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsigmentRecived;
