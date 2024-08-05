import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/transaction.css";
function DrsEntry() {
  const navigate = useNavigate();
  const tableData = [
    {
      srNo: 1,
      awbNo: "AWB123456",
      fwdNo: "FWD123456",
      bkDate: "2023-06-01",
      mfDate: "2023-06-02",
      origin: "New York",
      destination: "Los Angeles",
    },
    // Add more rows as needed
  ];

  const handlClose = () => {
    navigate("/");
  };
  return (
    <div className="drs">
      <div className="drs-main mt-5">
        <div className="drs-row1">
          <h3 style={{ color: "maroon", fontSize: "18px" }}>Drs Entry</h3>
        </div>
        <div className="drs-row2">
          <div className="drs-row2-row1">
            <form action="">
              <div className="form-outer">
                <span className="pickup-input" style={{ width: "10%" }}>
                  <label for="fname">DRS No.</label>
                  <input type="text" />
                </span>

                <span className="pickup-input" style={{ width: "20%" }}>
                  <label for="fname">Branch </label>
                  <select id="company">
                    <option value=""></option>
                    <option value="company1"> network 1</option>
                    <option value="company2"> network 2</option>
                    <option value="company3"> network 3</option>
                  </select>
                </span>

                <span className="pickup-input" style={{ width: "30%" }}>
                  <label for="fname">Delivery Man </label>
                  <select id="company">
                    <option value=""></option>
                    <option value="company1"> network 1</option>
                    <option value="company2"> network 2</option>
                    <option value="company3"> network 3</option>
                  </select>
                </span>
                <span className="pickup-input" style={{ width: "20%" }}>
                  <label for="fname">Date</label>
                  <input type="date" />
                </span>

                <span className="pickup-input" style={{ width: "20%" }}>
                  <label for="fname">Mode of Delivery </label>
                  <select id="company">
                    <option value=""></option>
                    <option value="company1"> network 1</option>
                    <option value="company2"> network 2</option>
                    <option value="company3"> network 3</option>
                  </select>
                </span>
              </div>
              <div className="form-outer">
                <span className="pickup-label" style={{ width: "10%" }}>
                  <label for="fname">Details</label>
                </span>
                <span className="pickup-input" style={{ width: "30%" }}>
                  <input type="text" />
                </span>
                <span className="pickup-label" style={{ width: "10%" }}>
                  <label for="fname">Area Name </label>
                </span>
                <span className="pickup-input" style={{ width: "20%" }}>
                  <input type="text" />
                </span>
                <span className="pickup-label" style={{ width: "10%" }}>
                  <label for="fname">AWB No. </label>
                </span>
                <span className="pickup-input" style={{ width: "20%" }}>
                  <input type="text" />
                </span>
              </div>
            </form>
          </div>
          <div className="drs-row2-row2">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>AWB No</th>
                  <th>Booking Date</th>
                  <th>Client</th>
                  <th>Consignee</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Desti</th>
                  <th>pcs</th>
                  <th>Weight</th>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="drs-row3">
          <div className="ci-button">
            <button>Print</button>
            <button>Save</button>
            <button>Delete</button>
            <button onClick={handlClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrsEntry;
