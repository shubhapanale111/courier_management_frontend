// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../Style/billing.css";
// function ClientBilling() {
//   const navigate = useNavigate();
//   const tableData = [
//     {
//       srNo: 1,
//       awbNo: "AWB123456",
//       fwdNo: "FWD123456",
//       bkDate: "2023-06-01",
//       mfDate: "2023-06-02",
//       origin: "New York",
//       destination: "Los Angeles",
//     },
//     // Add more rows as needed
//   ];

//   const handlClose = () => {
//     navigate("/");
//   };
//   return (
//     <div className="client-billing">
//       <div className="client-billing-main">
//         <div className="client-billing-row1">
//           <h3 style={{ color: "maroon", fontSize: "18px" }}>Edit Consignment Forwording</h3>
//         </div>
//         <div className="client-billing-row2">
//           <div className="client-billing-row2-row1">
//             <form action="">
//               <div className="form-outer">
//                 <span className="pickup-input" style={{ width: "10%" }}>
//                   <label for="fname">Manifest</label>
//                   <input type="text" />
//                 </span>

//                 <span className="pickup-input" style={{ width: "20%" }}>
//                   <label for="fname">Date </label>
//                   <input type="date" />
//                 </span>

//                 <span className="pickup-input" style={{ width: "30%" }}>
//                   <label for="fname">Forworder </label>
//                   <select id="company">
//                     <option value=""></option>
//                     <option value="company1"> network 1</option>
//                     <option value="company2"> network 2</option>
//                     <option value="company3"> network 3</option>
//                   </select>
//                 </span>
//                 <span className="pickup-input" style={{ width: "20%" }}>
//                   <label for="fname">Branch</label>
//                   <select id="company">
//                     <option value=""></option>
//                     <option value="company1"> network 1</option>
//                     <option value="company2"> network 2</option>
//                     <option value="company3"> network 3</option>
//                   </select>
//                 </span>

//                 <span className="pickup-input" style={{ width: "20%" }}>
//                   <label for="fname">Mode </label>
//                   <select id="company">
//                     <option value=""></option>
//                     <option value="company1"> network 1</option>
//                     <option value="company2"> network 2</option>
//                     <option value="company3"> network 3</option>
//                   </select>
//                 </span>
//               </div>
//               <div className="form-outer">
//                 <span className="pickup-label" style={{ width: "10%" }}>
//                   <label for="fname">Remark</label>
//                 </span>
//                 <span className="pickup-input" style={{ width: "30%" }}>
//                   <input type="text" />
//                 </span>
//                 <span style={{width:'33%'}}></span>

//                 <span className="pickup-input" style={{ width: "2%" }}>
//                   <input type="checkbox" />
//                 </span>
//                 <span className="pickup-label" style={{ width: "5%" }}>
//                   <label for="fname">Cash</label>
//                 </span>

//                 <span className="pickup-input" style={{ width: "20%" }}>
//                   <input type="text" />
//                 </span>
//               </div>
//               <div className="form-outer">
//                 <span className="pickup-input" style={{ width: "15%" }}>
//                   <label for="fname">AWB</label>
//                   <input type="text" />
//                 </span>
//                 <span className="pickup-input" style={{ width: "10%" }}>
//                   <label for="fname">Pcs</label>
//                   <input type="text" />
//                 </span>
//                 <span className="pickup-input" style={{ width: "10%" }}>
//                   <label for="fname">Disp Pcs.</label>
//                   <input type="text" />
//                 </span>
//                 <span className="pickup-input" style={{ width: "10%" }}>
//                   <label for="fname">Wt</label>
//                   <input type="text" />
//                 </span>
//                 <span className="pickup-input" style={{ width: "10%" }}>
//                   <label for="fname">Disp Wt.</label>
//                   <input type="text" />
//                 </span>
//                 <span className="pickup-input" style={{ width: "10%" }}>
//                   <label for="fname">Amount</label>
//                   <input type="text" />
//                 </span>
//                 <span className="pickup-input" style={{ width: "15%" }}>
//                   <label for="fname">Fwd AWB</label>
//                   <input type="text" />
//                 </span>
//                 <span className="pickup-input" style={{ width: "20%" }}>
//                   <textarea type="text"  style={{height:'50px'}}/>
//                 </span>
//                 </div>
//             </form>
//           </div>
//   <div className="client-billing-row2-row2">
//     <table style={{ width: "100%", borderCollapse: "collapse" }}>
//       <thead>
//         <tr>
//           <th>Sr No</th>
//           <th>AWB No</th>
//           <th>Fwd No.</th>
//           <th>Origin</th>
//           <th>Destination</th>
//           <th>Pcs</th>
//           <th>Disp Pcs</th>
//           <th>Weight</th>
//           <th>Disp Wt</th>
//           <th>Amount</th>
//         </tr>
//       </thead>
//       <tbody>
//         {tableData.map((row, index) => (
//           <tr key={index}>
//             <td>{row.srNo}</td>
//             <td>{row.awbNo}</td>
//             <td>{row.fwdNo}</td>
//             <td>{row.bkDate}</td>
//             <td>{row.mfDate}</td>
//             <td>{row.origin}</td>
//             <td>{row.destination}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// </div>
//         <div className="client-billing-row3">

//         </div>
//       </div>
//     </div>
//   );
// }

// export default ClientBilling;

import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/billing.css";
function ClientBilling() {
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
    <div className="client-billing">
      <div className="client-billing-main">
        <div className="client-billing-row1">
          <h3 style={{ color: "maroon", fontSize: "18px" }}>
            Invoice preparation GST
          </h3>
        </div>
        <div className="client-billing-row2">
          <div className="client-billing-row2-row1">
            <div className="clientinfo">
              <form action="">
                <div className="form-outer">
                  <span className="pickup-label" style={{ width: "15%" }}>
                    <label for="fname">Client</label>
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
                    <label for="fname">Sub Client</label>
                  </span>
                  <span className="pickup-input" style={{ width: "20%" }}>
                    <select id="company">
                      <option value=""></option>
                      <option value="company1"> network 1</option>
                      <option value="company2"> network 2</option>
                      <option value="company3"> network 3</option>
                    </select>
                  </span>
                  <span className="pickup-label" style={{ width: "10%" }}>
                    <label for="fname">Mode</label>
                  </span>
                  <span className="pickup-input" style={{ width: "20%" }}>
                    <select id="company">
                      <option value=""></option>
                      <option value="company1"> network 1</option>
                      <option value="company2"> network 2</option>
                      <option value="company3"> network 3</option>
                    </select>
                  </span>
                  <span className="pickup-label" style={{ width: "13%" }}>
                    <label for="fname">Pay Mode</label>
                  </span>
                  <span className="pickup-input" style={{ width: "20%" }}>
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
                    <label for="fname">Invoice Date</label>
                  </span>
                  <span className="pickup-input" style={{ width: "20%" }}>
                    <input type="date" />
                  </span>
                  <span style={{ width: "30%" }}></span>
                  <span className="pickup-label" style={{ width: "15%" }}>
                    <label for="fname">Invoice No.</label>
                  </span>
                  <span className="pickup-input" style={{ width: "20%" }}>
                    <input type="text" />
                  </span>
                </div>
                <div className="form-outer">
                  <span className="pickup-label" style={{ width: "15%" }}>
                    <label for="fname">From Date</label>
                  </span>
                  <span className="pickup-input" style={{ width: "20%" }}>
                    <input type="date" />
                  </span>
                  <span className="pickup-label" style={{ width: "15%" }}>
                    <label for="fname">To Date</label>
                  </span>
                  <span className="pickup-input" style={{ width: "20%" }}>
                    <input type="date" />
                  </span>
                </div>
              </form>
            </div>
            <div className="client-button">
              <button>Show</button>
              <button>Save</button>
            </div>
          </div>
          <div className="client-billing-row2-row2">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>AWB No</th>
                  <th>Fwd No.</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Pcs</th>
                  <th>Disp Pcs</th>
                  <th>Weight</th>
                  <th>Disp Wt</th>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="client-billing-row2-row3">
            <div className="invoice1">
              <div className="form-outer">
              <span className="pickup-label" style={{ width: "40%" }}>
                    <label for="fname">Month</label>
                  </span>
                  <span className="pickup-input" style={{ width: "65%" }}>
                    <input type="date" />
                  </span>
                  <button>All Invoice</button>
              </div>
              <div className="form-outer">
              <span className="pickup-label" style={{ width: "23%" }}>
                    <label for="fname">Invoice</label>
                  </span>
                  <span className="pickup-input" style={{ width: "76%" }}>
                    <select id="company">
                      <option value=""></option>
                      <option value="company1"> network 1</option>
                      <option value="company2"> network 2</option>
                      <option value="company3"> network 3</option>
                    </select>
                  </span>
              </div>
              <div className="form-outer">
              <span className="pickup-label" style={{ width: "23%" }}>
                    
                  </span>
                <button style={{width:'76%'}}>Show</button>
              </div>
              <div className="form-outer">
              <span className="pickup-label" style={{ width: "23%" }}>
                    
                  </span>
                <button style={{width:'38%'}}>Delete</button>
                <button style={{width:'38%'}}>Print</button>
              </div>
          
            <div className="form-outer">
            <span className="pickup-label" style={{ width: "23%" }}>
                   
                  </span>
                <button style={{width:'76%'}}>Close</button>
              </div>
              </div>
            <div className="invoice2"></div>
            <div className="invoice3">
              <div className="form-outer">
              <span className="pickup-label" style={{ width: "50%" }}>
                    <label for="fname">Total</label>
                  </span>
                  <span className="pickup-input" style={{ width: "50%" }}>
                    <input type="text" />
                  </span>
              </div>
              <div className="form-outer">
              <span className="pickup-label" style={{ width: "50%" }}>
                    <label for="fname">IGST</label>
                  </span>
                  <span className="pickup-input" style={{ width: "50%" }}>
                    <input type="text" />
                  </span>
              </div>
              <div className="form-outer">
              <span className="pickup-label" style={{ width: "50%" }}>
                    <label for="fname">CGST</label>
                  </span>
                  <span className="pickup-input" style={{ width: "50%" }}>
                    <input type="text" />
                  </span>
              </div>
              <div className="form-outer">
              <span className="pickup-label" style={{ width: "50%" }}>
                    <label for="fname">SGST</label>
                  </span>
                  <span className="pickup-input" style={{ width: "50%" }}>
                    <input type="text" />
                  </span>
              </div>
              <hr />
              <div className="form-outer">
              <span className="pickup-label" style={{ width: "50%" }}>
                    <label for="fname">Net Total</label>
                  </span>
                  <span className="pickup-input" style={{ width: "50%" }}>
                    <input type="text" />
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientBilling;
