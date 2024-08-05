// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../Style/ServiceMaster.css";

// function ServiceMaster() {
//   const [services, setServices] = useState([]);
//   const [modes, setModes] = useState([]);
//   const [mode, setMode] = useState("");
//   const [service, setService] = useState("");
//   const [volumeDividedBy, setVolumeDividedBy] = useState("");

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:3001/services")
//       .then((response) => response.json())
//       .then((data) => {
//         setServices(data.services);
//         const uniqueModes = [...new Set(data.services.map((item) => item.bmode))];
//         setModes(uniqueModes);
//       })
//       .catch((error) => console.error("Error fetching services:", error));
//   }, []);

//   const handleClose = () => {
//     navigate("/");
//   };

//   const handleAdd = () => {
//     // Add logic for adding a new service to the table
//     const newService = { mode, service, voldvdby: volumeDividedBy };
//     setServices([...services, newService]);
//   };

//   return (
//     <div className="servicemaster">
//       <div className="servicemaster-main mt-5">
//         <div className="servicemaster-row1">
//           <h3 style={{ color: "maroon", fontSize: "18px" }}>Service Master</h3>
//         </div>
//         <div className="servicemaster-row2">
//           <div className="servicemaster-row2-row1">
//             <form>
//               <div className="form-outer">
//                 <span className="pickup-label" style={{ width: "5%", marginTop: "2%" }}>
//                   <label htmlFor="mode">Mode </label>
//                 </span>
//                 <span className="pickup-input" style={{ width: "20%", marginTop: "2%" }}>
//                   <select
//                     id="mode"
//                     value={mode}
//                     onChange={(e) => setMode(e.target.value)}
//                   >
//                     <option value=""></option>
//                     {modes.map((mode, index) => (
//                       <option key={index} value={mode}>{mode}</option>
//                     ))}
//                   </select>
//                 </span>
//                 <span className="pickup-label" style={{ width: "5%", marginTop: "2%" }}>
//                   <label htmlFor="service">Service</label>
//                 </span>
//                 <span className="pickup-input" style={{ width: "17%", marginTop: "2%" }}>
//                   <input
//                     type="text"
//                     id="service"
//                     value={service}
//                     onChange={(e) => setService(e.target.value)}
//                   />
//                 </span>
//                 <span className="pickup-label" style={{ width: "14%", marginTop: "2%" }}>
//                   <label htmlFor="volumeDividedBy">Volume Divided By</label>
//                 </span>
//                 <span className="pickup-input" style={{ width: "15%", marginTop: "2%" }}>
//                   <input
//                     type="text"
//                     id="volumeDividedBy"
//                     value={volumeDividedBy}
//                     onChange={(e) => setVolumeDividedBy(e.target.value)}
//                   />
//                 </span>

//                 <div className="ci-button" style={{ marginTop: "0.5%" }}>
//                   <button type="button" onClick={handleAdd}>Add</button>
//                 </div>
//               </div>
//             </form>
//           </div>
//           <div className="servicemaster-row2-row2">
//             <table style={{ width: "100%", borderCollapse: "collapse" }}>
//               <thead>
//                 <tr>
//                   <th>Sr No</th>
//                   <th>Mode</th>
//                   <th>Service</th>
//                   <th>Vol Divided By</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {services.map((row, index) => (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{row.bmode}</td>
//                     <td>{row.bservice}</td>
//                     <td>{row.voldvdby}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className="servicemaster-row3">
//           <div className="ci-button">
//             <button>Save</button>
//             <button onClick={handleClose}>Close</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ServiceMaster;





import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/ServiceMaster.css";

function ServiceMaster() {
  const [services, setServices] = useState([]);
  const [modes, setModes] = useState([]);
  const [mode, setMode] = useState("");
  const [service, setService] = useState("");
  const [volumeDividedBy, setVolumeDividedBy] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data.services);
        const uniqueModes = [...new Set(data.services.map((item) => item.bmode))];
        setModes(uniqueModes);
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  const handleClose = () => {
    navigate("/");
  };

  const handleAdd = () => {
    if (!mode || !service || !volumeDividedBy) {
      alert("Please fill out all fields.");
      return;
    }

    const newService = { bmode: mode, bservice: service, voldvdby: volumeDividedBy };
    setServices([...services, newService]);
  };

  const handleSave = () => {
    if (!mode || !service || !volumeDividedBy) {
      alert("Please fill out all fields.");
      return;
    }

    const newService = { bmode: mode, bservice: service, voldvdby: volumeDividedBy };

    fetch("http://localhost:3001/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newService)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Service added successfully:", data);
        setServices([...services, newService]);
      })
      .catch((error) => {
        console.error("Error adding service:", error);
      });
  };

  return (
    <div className="servicemaster">
      <div className="servicemaster-main mt-3">
        <div className="servicemaster-row1">
          <h3 style={{ color: "maroon", fontSize: "18px" }}>Service Master</h3>
        </div>
        <div className="servicemaster-row2">
          <div className="servicemaster-row2-row1">
            <form>
              <div className="form-outer">
                <span className="pickup-label" style={{ width: "5%", marginTop: "2%" }}>
                  <label htmlFor="mode">Mode </label>
                </span>
                <span className="pickup-input" style={{ width: "20%", marginTop: "2%" }}>
                  <select
                    id="mode"
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    required
                  >
                    <option value=""></option>
                    {modes.map((mode, index) => (
                      <option key={index} value={mode}>{mode}</option>
                    ))}
                  </select>
                </span>
                <span className="pickup-label" style={{ width: "5%", marginTop: "2%" }}>
                  <label htmlFor="service">Service</label>
                </span>
                <span className="pickup-input" style={{ width: "17%", marginTop: "2%" }}>
                  <input
                    type="text"
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                  />
                </span>
                <span className="pickup-label" style={{ width: "14%", marginTop: "2%" }}>
                  <label htmlFor="volumeDividedBy">Volume Divided By</label>
                </span>
                <span className="pickup-input" style={{ width: "15%", marginTop: "2%" }}>
                  <input
                    type="text"
                    id="volumeDividedBy"
                    value={volumeDividedBy}
                    onChange={(e) => setVolumeDividedBy(e.target.value)}
                    required
                  />
                </span>

                <div className="ci-button" style={{ marginTop: "0.5%" }}>
                  <button type="button" onClick={handleAdd}>Add</button>
                </div>
              </div>
            </form>
          </div>
          <div className="servicemaster-row2-row2">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Mode</th>
                  <th>Service</th>
                  <th>Vol Divided By</th>
                </tr>
              </thead>
              <tbody>
                {services.map((row, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{row.bmode}</td>
                    <td>{row.bservice}</td>
                    <td>{row.voldvdby}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="servicemaster-row3">
          <div className="ci-button">
            <button type="button" onClick={handleSave}>Save</button>
            <button type="button" onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceMaster;