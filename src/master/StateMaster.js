// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { MasterContext } from "../context/MasterContext";
// import "../Style/countrymaster.css";

// export default function StateMaster() {
//   const navigate = useNavigate();
//   const {states}= useContext(MasterContext);
//   const [selectedState, setSelectedState] = useState("");
  
//   const handleStateChange = (e) => {
//     setSelectedState(e.target.value);
//   };

//   const handleClose = () => {
//     navigate("/");
//   };

//   return (
//     <div className="countrymaster-container">
//       <div className="countrymaster-main-container mt-5">
//         <div className="countrymaster-main-container-row1" style={{ color: "maroon" }}>
//           State Master
//         </div>
//         <div className="countrymaster-main-container-row2">
//           <div className="countrymaster-main-container-row2-col1">
//             <form>
//               <div className="form-outer">
//                 <span
//                   className="form-outer-label-countrymaster"
//                   style={{ width: "20%" }}
//                 >
//                   <label htmlFor="state" style={{ fontWeight: "600" }}>
//                     State Name
//                   </label>
//                 </span>
//                 <span
//                   className="form-outer-input-countrymaster"
//                   style={{ width: "80%" }}
//                 >
//                   <select
//                     id="state"
//                     value={selectedState}
//                     onChange={handleStateChange}
//                   >
//                     <option value="">Select a state</option>
//                     {states.map((state, index) => (
//                       <option key={index} value={state.state}>
//                         {state.state}
//                       </option>
//                     ))}
//                   </select>
//                 </span>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="countrymaster-main-container-row3">
//           <div className="countrymaster-button">
//             <button>Save</button>
//             <button>Delete</button>
//             <button onClick={handleClose}>Close</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// new state component for custom dropdown
import React, { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MasterContext } from "../context/MasterContext";
import "../Style/countrymaster.css";

export default function StateMaster() {
  const navigate = useNavigate();
  const { states } = useContext(MasterContext);
  const [selectedState, setSelectedState] = useState("");
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption.label);
    setSearchTerm(selectedOption.label); // Set searchTerm to selected option label
    setIsOpen(false); // Close dropdown after selection
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/states', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ state: searchTerm }),
      });
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      alert('State created successfully');
      setSearchTerm('');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  const handleDelete = async () => {
    try {
      const response = await fetch('http://localhost:3001/states/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ state: searchTerm }),
      });
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      alert('State deleted successfully');
      setSearchTerm('');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="countrymaster-container">
      <div className="countrymaster-main-container mt-5">
        <div className="countrymaster-main-container-row1" style={{ color: "maroon" }}>
          State Master
        </div>
        <div className="countrymaster-main-container-row2">
          <div className="countrymaster-main-container-row2-col1">
            <form>
              <div className="form-outer">
                <span
                  className="form-outer-label-countrymaster"
                  style={{ width: "20%" }}
                >
                  <label htmlFor="state" style={{ fontWeight: "600" }}>
                    State Name
                  </label>
                </span>
                <span
                  className="form-outer-input-countrymaster"
                  style={{ width: "80%" }}
                >
                  <div className="searchable-select" ref={dropdownRef}>
                    <div className="input-container">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleInputChange}
                        onClick={toggleDropdown}
                      />
                      <span className="dropdown-icon" onClick={toggleDropdown}>v</span>
                    </div>
                    {isOpen && (
                      <ul className="options">
                        {states
                          .filter((state) =>
                            state.state.toLowerCase().includes(searchTerm.toLowerCase())
                          )
                          .map((state, index) => (
                            <li
                              key={index}
                              onClick={() => handleStateChange({ label: state.state })}
                            >
                              {state.state}
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="countrymaster-main-container-row3">
          <div className="countrymaster-button">
            <button onClick={handleSubmit}>Save</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => navigate("/")}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
