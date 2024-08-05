import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/billing.css";
function OutstandingReminder() {
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
      <div className="outstanding-main mt-5">
        <div className="unbilled-row1">
          <h3 style={{ color: "maroon", fontSize: "18px" }}>
            Outstanding Reminder
          </h3>
        </div>
        <div className="unbilled-row2">
          <div className="unbilled-row2-row1">
            <div className="outstanding-subdiv">
              <form action="">
                <div className="form-outer">
                  <span className="pickup-label" style={{ width: "15%" }}>
                    <label for="fname">Client </label>
                  </span>
                  <span className="pickup-input" style={{ width: "85%" }}>
                    <select id="company">
                      <option value=""></option>
                      <option value="company1"> network 1</option>
                      <option value="company2"> network 2</option>
                      <option value="company3"> network 3</option>
                    </select>
                  </span>
                </div>
                <div className="form-outer">
                
                  <span className="pickup-label" style={{ width: "15%" }}>
                    <label for="fname">From Date </label>
                  </span>
                  <span className="pickup-input" style={{ width: "25%" }}>
                    <input type="date" />
                  </span>
                  <span className="pickup-label" style={{ width: "15%" }}>
                    <label for="fname">To Date </label>
                  </span>
                  <span className="pickup-input" style={{ width: "25%" }}>
                    <input type="date" />
                  </span>
                  
                  <button className="outstanding-button">Show</button>
                
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
            <button>Send</button>
            <button onClick={handlClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutstandingReminder;
