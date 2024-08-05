
// import React, { useContext, useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { MasterContext } from "../context/MasterContext";
// import "../Style/pincodemaster.css";

// function PincodeMaster() {
//   const { states, cities } = useContext(MasterContext);
//   const [selectedState, setSelectedState] = useState('');
//   const [filteredCities, setFilteredCities] = useState([]);
//   const [selectedCityCode, setSelectedCityCode] = useState('');
//   const [selectedCityName, setSelectedCityName] = useState('');
//   const [areaName, setAreaName] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [serviceType, setServiceType] = useState('NORMAL');
//   const [servicable, setServicable] = useState('YES');
//   const [pincodeDataArray, setPincodeDataArray] = useState([]);
//   const navigate = useNavigate();
//   const stateDropdownRef = useRef(null);
//   const cityDropdownRef = useRef(null);
//   const areaNameRef = useRef(null);
//   const pincodeRef = useRef(null);
//   const serviceTypeRef = useRef(null);
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

//   useEffect(() => {
//     if (selectedState) {
//       const sortedCities = cities
//         .filter(city => city.state === selectedState)
//         .sort((a, b) => a.CITYCODE.localeCompare(b.CITYCODE));
//       setFilteredCities(sortedCities);
//     } else {
//       setFilteredCities([]);
//     }
//   }, [selectedState, cities]);

//   const handleStateChange = (e) => {
//     setSelectedState(e.target.value);
//   };

//   const handleCityChange = (e) => {
//     const selectedCity = filteredCities.find(city => city.CITYCODE === e.target.value);
//     if (selectedCity) {
//       setSelectedCityCode(selectedCity.CITYCODE);
//       setSelectedCityName(selectedCity.City_Name);
//     }
//   };

//   const handleAdd = () => {
//     const data = {
//       pstate: selectedState,
//       citycode: selectedCityCode,
//       cityname: selectedCityName,
//       areaname: areaName,
//       pincode: pincode,
//       servicetype: serviceType,
//       Servicable: servicable,
//     };

//     setPincodeDataArray([...pincodeDataArray, data]);
//   };

//   const handleSave = () => {
//     fetch('http://localhost:3001/pincodes', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(pincodeDataArray),
//     })
//       .then(response => response.json())
//       .then(result => {
//         console.log('Success:', result);
//         console.log('sending data: ', pincodeDataArray);
//         alert('Pincodes saved!!!');
//         setPincodeDataArray([]); // Clear the array after saving
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };

//   const handleClose = () => {
//     navigate("/");
//   };

//   const handleKeyDown = (e, nextRef) => {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       nextRef.current.focus();
//     }
//   }

//   return (
//     <div className="pincode">
//       <div className="pincode-main mt-5">
//         <div className="pincode-row1">
//           <h3 style={{ color: "maroon", fontSize: "18px" }}>Pincode Master</h3>
//         </div>
//         <div className="pincode-row2">
//           <div className="pincode-row2-row1">
//             <form>
//               <div className="form-outer">
//                 <span className="pickup-label" style={{ width: "10%" }}>
//                   <label htmlFor="state">State Name </label>
//                 </span>
//                 <span className="pickup-input" style={{ width: "30%" }}>
//                   <select
//                     id="state"
//                     value={selectedState}
//                     onChange={handleStateChange}
//                     ref={stateDropdownRef}
//                     onKeyDown={(e) => handleKeyDown(e, cityDropdownRef)}
//                   >
//                     <option value="">Select a state</option>
//                     {states.map((state, index) => (
//                       <option key={index} value={state.state}>
//                         {state.state}
//                       </option>
//                     ))}
//                   </select>
//                 </span>
//                 <span className="pickup-label" style={{ width: "10%" }}>
//                   <label htmlFor="city">City Name </label>
//                 </span>
//                 <span className="pickup-input" style={{ width: "50%" }}>
//                   <select
//                     id="city"
//                     ref={cityDropdownRef}
//                     onChange={handleCityChange}
//                     onKeyDown={(e) => handleKeyDown(e, areaNameRef)}
//                   >
//                     <option value="">Select a city</option>
//                     {filteredCities.map((city, index) => (
//                       <option key={index} value={city.CITYCODE}>
//                         {city.CITYCODE}: {city.City_Name}
//                       </option>
//                     ))}
//                   </select>
//                 </span>
//               </div>
//               <div className="form-outer">
//                 <span className="pickup-label" style={{ width: "10%" }}>
//                   <label htmlFor="areaName">Area Name</label>
//                 </span>
//                 <span className="pickup-input" style={{ width: "30%" }}>
//                   <input
//                     type="text"
//                     id="areaName"
//                     value={areaName}
//                     onChange={(e) => setAreaName(e.target.value)}
//                     ref={areaNameRef}
//                     onKeyDown={(e) => handleKeyDown(e, pincodeRef)}
//                   />
//                 </span>
//                 <span className="pickup-label" style={{ width: "10%" }}>
//                   <label htmlFor="pincode">Pincode </label>
//                 </span>
//                 <span className="pickup-input" style={{ width: "20%" }}>
//                   <input
//                     type="text"
//                     id="pincode"
//                     value={pincode}
//                     onChange={(e) => setPincode(e.target.value)}
//                     ref={pincodeRef}
//                     onKeyDown={(e) => handleKeyDown(e, serviceTypeRef)}
//                   />
//                 </span>
//                 <span className="pickup-label" style={{ width: "10%" }}>
//                   <label htmlFor="serviceType">Service Type </label>
//                 </span>
//                 <span className="pickup-input" style={{ width: "20%" }}>
//                   <select
//                     id="serviceType"
//                     value={serviceType}
//                     onChange={(e) => setServiceType(e.target.value)}
//                     ref={serviceTypeRef}
//                   >
//                     <option value="NORMAL">NORMAL</option>
//                     <option value="ODA">ODA</option>
//                   </select>
//                 </span>
//               </div>
//               <div className="ci-button">
//                 <button type="button" onClick={handleAdd}>Add</button>
//               </div>
//             </form>
//           </div>
//           <div className="pincode-row2-row2">
//             <table style={{ width: "100%", borderCollapse: "collapse" }}>
//               <thead>
//                 <tr>
//                   <th>Sr No</th>
//                   <th>State</th>
//                   <th>City</th>
//                   <th>City Code</th>
//                   <th>Area Name</th>
//                   <th>Pincode</th>
//                   <th>Service Type</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {tableData.map((row, index) => (
//                   <tr key={index}>
//                     <td>{row.srNo}</td>
//                     <td>{row.awbNo}</td>
//                     <td>{row.fwdNo}</td>
//                     <td>{row.bkDate}</td>
//                     <td>{row.mfDate}</td>
//                     <td>{row.origin}</td>
//                     <td>{row.destination}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className="pincode-row3">
//           <div className="ci-button">
//             <button type="button" onClick={handleSave}>Save</button>
//             <button type="button">Import</button>
//             <button onClick={handleClose} type="button">Close</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PincodeMaster;

//working with all functionality without double click delete
import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MasterContext } from "../context/MasterContext";
import "../Style/pincodemaster.css";

function PincodeMaster() {
  const { states, cities } = useContext(MasterContext);
  const [selectedState, setSelectedState] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCityCode, setSelectedCityCode] = useState('');
  const [selectedCityName, setSelectedCityName] = useState('');
  const [areaName, setAreaName] = useState('');
  const [pincode, setPincode] = useState('');
  const [serviceType, setServiceType] = useState('NORMAL');
  const [servicable, setServicable] = useState('YES');
  const [pincodeDataArray, setPincodeDataArray] = useState([]);
  const navigate = useNavigate();
  const stateDropdownRef = useRef(null);
  const cityDropdownRef = useRef(null);
  const areaNameRef = useRef(null);
  const pincodeRef = useRef(null);
  const serviceTypeRef = useRef(null);

  const [stateSearchTerm, setStateSearchTerm] = useState('');
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);
  const [citySearchTerm, setCitySearchTerm] = useState('');
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);

  useEffect(() => {
    if (selectedState) {
      const sortedCities = cities
        .filter(city => city.state === selectedState)
        .sort((a, b) => a.CITYCODE.localeCompare(b.CITYCODE));
      setFilteredCities(sortedCities);
    } else {
      setFilteredCities([]);
    }
  }, [selectedState, cities]);

  const handleStateInputChange = (e) => {
    setStateSearchTerm(e.target.value);
    setStateDropdownOpen(true);
  };

  const handleStateSelect = (state) => {
    setSelectedState(state.state);
    setStateSearchTerm(state.state);
    setStateDropdownOpen(false);
  };

  const handleCityInputChange = (e) => {
    setCitySearchTerm(e.target.value);
    setCityDropdownOpen(true);
  };

  const handleCitySelect = (city) => {
    setSelectedCityCode(city.CITYCODE);
    setSelectedCityName(city.City_Name);
    setCitySearchTerm(city.City_Name);
    setCityDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      stateDropdownRef.current &&
      !stateDropdownRef.current.contains(event.target)
    ) {
      setStateDropdownOpen(false);
    }
    if (
      cityDropdownRef.current &&
      !cityDropdownRef.current.contains(event.target)
    ) {
      setCityDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleAdd = () => {
    const data = {
      pstate: selectedState,
      citycode: selectedCityCode,
      cityname: selectedCityName,
      areaname: areaName,
      pincode: pincode,
      servicetype: serviceType,
      Servicable: servicable,
    };

    setPincodeDataArray([...pincodeDataArray, data]);
    setSelectedState('');
    setSelectedCityCode('');
    setSelectedCityName('');
    setPincode('');
    setAreaName('');
  };

  const handleSave = () => {
    fetch('http://localhost:3001/pincodes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pincodeDataArray),
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        console.log('sending data: ', pincodeDataArray);
        alert('Pincodes saved!!!');
        setPincodeDataArray([]); // Clear the array after saving
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleClose = () => {
    navigate("/");
  };

  const handleKeyDown = (e, nextRef) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      nextRef.current.focus();
    }
  }

  const handleDelete = () => {
    setPincodeDataArray(pincodeDataArray.filter(row => row !== rowToDelete));
    setRowToDelete(null);
    setIsDialogOpen(false);
  };

  const handleCancelDelete = () => {
    setRowToDelete(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="pincode">
      <div className="pincode-main mt-5">
        <div className="pincode-row1">
          <h3 style={{ color: "maroon", fontSize: "18px" }}>Pincode Master</h3>
        </div>
        <div className="pincode-row2">
          <div className="pincode-row2-row1">
            <form>
              <div className="form-outer">
                <span className="pickup-label" style={{ width: "10%" }}>
                  <label htmlFor="state">State Name </label>
                </span>
                <span className="pickup-input" style={{ width: "30%" }}>
                  <div className="searchable-select" ref={stateDropdownRef}>
                    <div className="input-container">
                      <input
                        type="text"
                        placeholder="Search State..."
                        value={stateSearchTerm}
                        onChange={handleStateInputChange}
                        ref={stateDropdownRef}
                    onKeyDown={(e) => handleKeyDown(e, cityDropdownRef)}
                        required
                      />
                      <span className="dropdown-icon" onClick={() => setStateDropdownOpen(!stateDropdownOpen)}>v</span>
                    </div>
                    {stateDropdownOpen && (
                      <ul className="options">
                        {states
                          .filter((option) => option.state.toLowerCase().includes(stateSearchTerm.toLowerCase()))
                          .map((option, index) => (
                            <li key={index} onClick={() => handleStateSelect(option)}>
                              {option.state}
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                </span>
                <span className="pickup-label" style={{ width: "10%" }}>
                  <label htmlFor="city">City Name </label>
                </span>
                <span className="pickup-input" style={{ width: "50%" }}>
                  <div className="searchable-select" ref={cityDropdownRef}>
                    <div className="input-container">
                      <input
                        type="text"
                        placeholder="Search City..."
                        value={citySearchTerm}
                        onChange={handleCityInputChange}
                        ref={cityDropdownRef}
                    onKeyDown={(e) => handleKeyDown(e, areaNameRef)}
                        required
                      />
                      <span className="dropdown-icon" onClick={() => setCityDropdownOpen(!cityDropdownOpen)}>v</span>
                    </div>
                    {cityDropdownOpen && (
                      <ul className="options">
                        {filteredCities
                          .filter((option) => option.City_Name.toLowerCase().includes(citySearchTerm.toLowerCase()))
                          .map((option) => (
                            <li key={option.CITYCODE} onClick={() => handleCitySelect(option)}>
                              {option.City_Name}
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                </span>
              </div>
              <div className="form-outer">
                <span className="pickup-label" style={{ width: "10%" }}>
                  <label htmlFor="areaName">Area Name</label>
                </span>
                <span className="pickup-input" style={{ width: "30%" }}>
                  <input
                    type="text"
                    id="areaName"
                    value={areaName}
                    onChange={(e) => setAreaName(e.target.value)}
                    ref={areaNameRef}
                    onKeyDown={(e) => handleKeyDown(e, pincodeRef)}
                  />
                </span>
                <span className="pickup-label" style={{ width: "10%" }}>
                  <label htmlFor="pincode">Pincode </label>
                </span>
                <span className="pickup-input" style={{ width: "20%" }}>
                  <input
                    type="text"
                    id="pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    ref={pincodeRef}
                    onKeyDown={(e) => handleKeyDown(e, serviceTypeRef)}
                  />
                </span>
                <span className="pickup-label" style={{ width: "10%" }}>
                  <label htmlFor="serviceType">Service Type </label>
                </span>
                <span className="pickup-input" style={{ width: "20%" }}>
                  <select
                    id="serviceType"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    ref={serviceTypeRef}
                  >
                    <option value="NORMAL">NORMAL</option>
                    <option value="ODA">ODA</option>
                  </select>
                </span>
              </div>
              <div className="ci-button">
                <button type="button" onClick={handleAdd}>Add</button>
              </div>
            </form>
          </div>
          <div className="pincode-row2-row2">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>State</th>
                  <th>City</th>
                  <th>City Code</th>
                  <th>Area Name</th>
                  <th>Pincode</th>
                  <th>Service Type</th>
                </tr>
              </thead>
              <tbody>
                {pincodeDataArray.map((row, index) => (
                  <tr key={index} onDoubleClick={() => {
                    setRowToDelete(row);
                    setIsDialogOpen(true);
                  }}>
                    <td>{index + 1}</td>
                    <td>{row.pstate}</td>
                    <td>{row.cityname}</td>
                    <td>{row.citycode}</td>
                    <td>{row.areaname}</td>
                    <td>{row.pincode}</td>
                    <td>{row.servicetype}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="pincode-row3">
          <div className="ci-button">
            <button type="button" onClick={handleSave}>Save</button>
            <button type="button">Import</button>
            <button onClick={handleClose} type="button">Close</button>
          </div>
        </div>
      </div>
      {isDialogOpen && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete {rowToDelete?.areaname}?</p>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
          <button className="btn btn-secondary" onClick={handleCancelDelete}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default PincodeMaster;
