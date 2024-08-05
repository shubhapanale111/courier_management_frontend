// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "../Style/support.css";

// function Support() {
//   // State to manage the form data
  // const [formData, setFormData] = useState({
  //   priority: "Normal", // Default priority
  //   description: "", // Description of the support request
  //   requestDate: new Date(), // Current date as default request date
  // });

  // // State to manage the table data
  // const [tableData, setTableData] = useState([
  //   {
  //     slNo: 1,
  //     priority: "Normal",
  //     description: "hi",
  //     requestDate: "03/02/2023",
  //     status: "Done",
  //     workDone: "03/02/2...",
  //   },
  // ]);

  // // Handler for input changes in the form
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // // Handler to add a new work entry to the table
  // const addWork = () => {
  //   const newRow = {
  //     slNo: tableData.length + 1, // Increment serial number
  //     priority: formData.priority, // Use priority from form data
  //     description: formData.description, // Use description from form data
  //     requestDate: formData.requestDate.toLocaleDateString(), // Format date
  //     status: "", // Initially empty status
  //     workDone: "", // Initially empty work done
  //   };

  //   // Update table data with new row
  //   setTableData([...tableData, newRow]);

  //   // Reset form data to default values
  //   setFormData({
  //     priority: "Normal",
  //     description: "",
  //     requestDate: new Date(),
  //   });
  // };

//   return (

//     <div className="support-container">
//       <div className="support-container-form mt-5">
//         <div className="support-row1">
//           <h3>SFT</h3>
//           <span>Softec Support</span>
//         </div>
//         <div className="support-row2">
//           <div className="support-row2-row1">
//            <div className="support-row2-row1-box1"></div>
//            <div className="support-row2-row1-box2"> <form>

//               <div className="support-form-div">
//                 <span>
//                 <label htmlFor="high">High</label>
//                 </span>
//                <span>
//                 <input
//                   type="radio"
//                   id="high"
//                   name="priority"
//                   value="High"
//                   checked={formData.priority === "High"}
//                   onChange={handleInputChange}
//                 />
//                 </span>
//               </div>
//               <div className="support-form-div">
//               <label htmlFor="normal">Normal</label>{" "}
//               <input
//                 type="radio"
//                 id="normal"
//                 name="priority"
//                 value="Normal"
//                 checked={formData.priority === "Normal"}
//                 onChange={handleInputChange}
//               />
//               </div>
//               <div className="support-form-div">
//               <label htmlFor="low">Low</label>
//               <input
//                 type="radio"
//                 id="low"
//                 name="priority"
//                 value="Low"
//                 checked={formData.priority === "Low"}
//                 onChange={handleInputChange}
//               />
//               </div>
//               <div className="support-form-div">
              // <DatePicker
              //   selected={formData.requestDate} // Pass selected date from state
              //   onChange={(date) =>
              //     setFormData({ ...formData, requestDate: date })
              //   }
              //   dateFormat="dd/MM/yyyy" // Specify date format
              // />
//               </div>

//             </form></div>
//            <div className="support-row2-row1-box3"></div>
//           </div>
//           <div className="support-row2-row2">
//             <div className="support-row2-row2-box1"></div>
//             <div className="support-row2-row2-box2"></div>
//             <div className="support-row2-row2-box3"></div>
//           </div>
//         </div>
//         <div className="support-row3"> </div>
//       </div>
//     </div>
//   );
// }

// export default Support;









// import React from "react";
// import "../Style/support.css";
// import { useState,useEffect } from "react";
// import DatePicker from "react-datepicker";

// export default function Support() {
//   const [formData, setFormData] = useState({
//     priority: "Normal", // Default priority
//     description: "", // Description of the support request
//     requestDate: new Date(), // Current date as default request date
//   });

//   // State to manage the table data
//   const [tableData, setTableData] = useState([
//     {
//       slNo: 1,
//       priority: "Normal",
//       description: "hi",
//       requestDate: "03/02/2023",
//       status: "Done",
//       workDone: "03/02/2...",
//     },
//   ]);

//   // Handler for input changes in the form
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handler to add a new work entry to the table
//   const addWork = () => {
//     const newRow = {
//       slNo: tableData.length + 1, // Increment serial number
//       priority: formData.priority, // Use priority from form data
//       description: formData.description, // Use description from form data
//       requestDate: formData.requestDate.toLocaleDateString(), // Format date
//       status: "", // Initially empty status
//       workDone: "", // Initially empty work done
//     };

//     // Update table data with new row
//     setTableData([...tableData, newRow]);

//     // Reset form data to default values
//     setFormData({
//       priority: "Normal",
//       description: "",
//       requestDate: new Date(),
//     });
//   };
//   return (
//     <div class="support-container">
//       <div className="support-container-main mt-5">
//         <div class="support-container-main-row1">
//           <h1
//             style={{
//               color: "maroon",
//               fontStyle: "italic",
//               fontWeight: "700",
//               fontSize:'30px'
//             }}
//           >
//             SFT
//           </h1>

//           <div className="support-heading">
//             <p>Softec Support</p>
//           </div>
//         </div>
//         <div class="support-container-main-row2">
//           <div className="support-sub1"></div>
//           <div className="support-sub2">
//             <div style={{display:'flex'}}>
//               <input type="radio"/>
//               <label style={{color:'red'}}>High</label>
//             </div>

//             <div style={{display:'flex'}}>
//               <input type="radio"/>
//               <label style={{color:'blue'}}>Normal</label>
//             </div>

//             <div style={{display:'flex'}}>
//               <input type="radio"/>
//               <label style={{color:'green'}}>Low</label>
//             </div>
//             <div style={{display:'flex'}}>
//             <DatePicker
//                 selected={formData.requestDate} // Pass selected date from state
//                 onChange={(date) =>
//                   setFormData({ ...formData, requestDate: date })
//                 }
//                 dateFormat="dd/MM/yyyy" // Specify date format
//               />
              
//             </div>
//           </div>
//           <div className="support-sub3"></div>
//           <div className="support-sub4"></div>
//           <div className="support-sub5">
//             <input type="text"/>
//           </div>
//           <div className="support-sub6">
//             <button>Add Work</button>
//             <button>Close</button>
//           </div>
//            </div>
//         <div class="support-container-main-row3">
//           </div>
//       </div>
//     </div>
//   );
// }




import React from "react";
import "../Style/support.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import datepicker CSS

export default function Support() {
  const [formData, setFormData] = useState({
    priority: "Normal", // Default priority
    description: "", // Description of the support request
    requestDate: new Date(), // Current date as default request date
  });

  // State to manage the table data
  const [tableData, setTableData] = useState([
    {
      slNo: 1,
      priority: "Normal",
      description: "hi",
      requestDate: "03/02/2023",
      status: "Done",
      workDone: "03/02/2...",
    },
  ]);

  // Handler for input changes in the form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler to add a new work entry to the table
  const addWork = () => {
    const newRow = {
      slNo: tableData.length + 1, // Increment serial number
      priority: formData.priority, // Use priority from form data
      description: formData.description, // Use description from form data
      requestDate: formData.requestDate.toLocaleDateString(), // Format date
      status: "", // Initially empty status
      workDone: "", // Initially empty work done
    };

    // Update table data with new row
    setTableData([...tableData, newRow]);

    // Reset form data to default values
    setFormData({
      priority: "Normal",
      description: "",
      requestDate: new Date(),
    });
  };

  return (
    <div className="support-container">
      <div className="support-container-main mt-5">
        <div className="support-container-main-row1">
          <h1
            style={{
              color: "maroon",
              fontStyle: "italic",
              fontWeight: "700",
              fontSize: '30px'
            }}
          >
            SFT
          </h1>

          <div className="support-heading">
            <p>Softec Support</p>
          </div>
        </div>
        <div className="support-container-main-row2">
          <div className="support-sub1"></div>
          <div className="support-sub2">
            <div style={{ display: 'flex' }}>
              <input type="radio" name="priority" value="High" onChange={handleInputChange} checked={formData.priority === "High"} />
              <label style={{ color: 'red' }}>High</label>
            </div>

            <div style={{ display: 'flex' }}>
              <input type="radio" name="priority" value="Normal" onChange={handleInputChange} checked={formData.priority === "Normal"} />
              <label style={{ color: 'blue' }}>Normal</label>
            </div>

            <div style={{ display: 'flex' }}>
              <input type="radio" name="priority" value="Low" onChange={handleInputChange} checked={formData.priority === "Low"} />
              <label style={{ color: 'green' }}>Low</label>
            </div>
            <div style={{ display: 'flex' }}>
              <DatePicker
                selected={formData.requestDate} // Pass selected date from state
                onChange={(date) =>
                  setFormData({ ...formData, requestDate: date })
                }
                dateFormat="dd/MM/yyyy" // Specify date format
              />
            </div>
          </div>
          <div className="support-sub3"></div>
          <div className="support-sub4"></div>
          <div className="support-sub5">
            <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
          </div>
          <div className="support-sub6">
            <button onClick={addWork}>Add Work</button>
            <button>Close</button>
          </div>
        </div>
        <div className="support-container-main-row3">
          <table>
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Priority</th>
                <th>Description</th>
                <th>Request Date</th>
                <th>Status</th>
                <th>Work Done</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.slNo}</td>
                  <td>{row.priority}</td>
                  <td>{row.description}</td>
                  <td>{row.requestDate}</td>
                  <td>{row.status}</td>
                  <td>{row.workDone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
