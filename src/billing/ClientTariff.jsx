import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/transaction.css";
function ClientTariff() {
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
    <div className="client-tariff">
      <div className="client-tariff-main mt-3" style={{ width: "60%" }}>
        <div className="client-tariff-row1">
          <h3 style={{ color: "maroon", fontSize: "18px" }}>Client Tariff</h3>
        </div>
        <div className="client-tariff-row2">
          <form action="">
            <div className="form-outer">
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
            <div className="form-outer">
              <span className="client-label" style={{ width: "15%" }}>
                <label for="fname">Origin </label>
              </span>
              <span className="client-input" style={{ width: "35%" }}>
                <select id="company">
                  <option value=""></option>
                  <option value="company1"> network 1</option>
                  <option value="company2"> network 2</option>
                  <option value="company3"> network 3</option>
                </select>
              </span>
              <span className="client-label" style={{ width: "15%" }}>
                <label for="fname">Network </label>
              </span>
              <span className="client-input" style={{ width: "35%" }}>
                <select id="company">
                  <option value=""></option>
                  <option value="company1"> network 1</option>
                  <option value="company2"> network 2</option>
                  <option value="company3"> network 3</option>
                </select>
              </span>
            </div>
            <div className="row2-subdiv">
              <div className="form-outer">
                <span className="client-label" style={{ width: "20%" }}>
                  <label for="fname">Mode </label>
                  <select id="company">
                    <option value=""></option>
                    <option value="company1"> network 1</option>
                    <option value="company2"> network 2</option>
                    <option value="company3"> network 3</option>
                  </select>
                </span>
                <span className="client-label" style={{ width: "20%" }}>
                  <label for="fname">Zone </label>
                  <select id="company">
                    <option value=""></option>
                    <option value="company1"> network 1</option>
                    <option value="company2"> network 2</option>
                    <option value="company3"> network 3</option>
                  </select>
                </span>
                <span className="client-label" style={{ width: "30%" }}>
                  <label for="fname">State </label>
                  <select id="company">
                    <option value=""></option>
                    <option value="company1"> network 1</option>
                    <option value="company2"> network 2</option>
                    <option value="company3"> network 3</option>
                  </select>
                </span>
                <span className="client-label" style={{ width: "30%" }}>
                  <label for="fname">City </label>
                  <select id="company">
                    <option value=""></option>
                    <option value="company1"> network 1</option>
                    <option value="company2"> network 2</option>
                    <option value="company3"> network 3</option>
                  </select>
                </span>
              </div>
            </div>
            <div className="row2-title">Weight Wise Rates</div>

            <div className="cient-tariff-weight-details">
              <div className="cient-tariff-weight-details-col1">
                <p style={{ marginTop: "10px" }}>BASIC</p>
                <div className="form-outer" style={{ marginTop: "-10px" }}>
                  <span className="client-label" style={{ width: "25%" }}>
                    <label for="fname">Weight </label>
                    <input type="text" />
                  </span>
                  <span className="client-label" style={{ width: "25%" }}>
                    <label for="fname">Dox </label>
                    <input type="text" />
                  </span>
                  <span className="client-label" style={{ width: "25%" }}>
                    <label for="fname">N-Dox </label>
                    <input type="text" />
                  </span>
                  <button style={{ width: "25%" }}>Add</button>
                </div>
                <div className="basic-table">
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr>
                        <th>Weight</th>
                        <th>Dox</th>
                        <th>N-Dox</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, index) => (
                        <tr key={index}>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="cient-tariff-weight-details-col2">
                <p style={{ marginTop: "10px" }}>ADDITIONAL</p>
                <div
                  className="form-outer"
                  style={{ marginTop: "-10px", marginTop: "20%" }}
                >
                  <span className="client-label" style={{ width: "50%" }}>
                    <label for="fname">Weight </label>
                    <input type="text" />
                  </span>
                  <span className="client-label" style={{ width: "50%" }}>
                    <label for="fname">Dox </label>
                    <input type="text" />
                  </span>
                </div>
              </div>
              <div className="cient-tariff-weight-details-col3">
                <p style={{ marginTop: "10px" }}>BASIC</p>
                <div className="form-outer" style={{ marginTop: "-10px" }}>
                  <span className="client-label" style={{ width: "35%" }}>
                    <label for="fname">Weight </label>
                    <input type="text" />
                  </span>
                  <span className="client-label" style={{ width: "35%" }}>
                    <label for="fname">Dox </label>
                    <input type="text" />
                  </span>

                  <button style={{ width: "30%" }}>Add</button>
                </div>
                <div className="basic-table">
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr>
                        <th>Weight</th>
                        <th>Dox</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, index) => (
                        <tr key={index}>
                          <td></td>
                          <td></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="client-tariff-row3">
          <div className="ci-button">
            <button>Save</button>
            <button>Print</button>
            <button>Delete</button>
            <button onClick={handlClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientTariff;
