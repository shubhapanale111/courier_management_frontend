// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import '../Style/forworder.css'
// export default function ForwarderMaster() {
//     const navigate = useNavigate();

//     const handlClose = () => {
//         navigate('/');
//     }
//     return (
//         <div style={{height:'90vh', width:'80%'}} className="forworder-container">
//             <div class="forworder-main-container mt-5">
//                 <div class="forworder-main-container-row1" style={{ color: 'maroon' }}>
//                     Forwarder Profile </div>
//                 <div class="forworder-main-container-row2">

                    
//                         <form>
                        
//                             <div className="form-outer">
//                                 <span className="form-outer-label-forworder">
//                                     <label for="fname">Forwarder Code </label>
//                                 </span>
//                                 <span className="form-outer-input-forworder" style={{width:'40%'}}>
//                                     <select id="company">
//                                         <option value=""></option>
//                                         <option value="company1"> INT</option>
//                                         <option value="company2"> LOC</option>
//                                         <option value="company3">MET </option>
//                                         <option value="company3">NCR </option>
//                                         <option value="company3">NOE </option>
//                                         <option value="company3">NOR</option>
//                                         <option value="company3">ROI </option>
//                                     </select>
//                                 </span>
//                             </div>

//                             <div className="form-outer">
//                                 <span className="form-outer-label-forworder">
//                                     <label for="fname">Forwarder Name </label>
//                                 </span>
//                                 <span className="form-outer-input-forworder">
//                                     <select id="company">
//                                         <option value=""></option>
//                                         <option value="company1"> INT</option>
//                                         <option value="company2"> LOC</option>
//                                         <option value="company3">MET </option>
//                                         <option value="company3">NCR </option>
//                                         <option value="company3">NOE </option>
//                                         <option value="company3">NOR</option>
//                                         <option value="company3">ROI </option>
//                                     </select>
//                                 </span>
//                             </div>

//                             <div className="form-outer">
//                                 <span className="form-outer-label-forworder">
//                                     <label for="fname">Contact Person </label>
//                                 </span>
//                                 <span className="form-outer-input-forworder">
//                                     <input type="text" />
//                                 </span>
//                             </div>

//                             <div className="form-outer">
//                                 <span className="form-outer-label-forworder">
//                                     <label for="fname">Address </label>
//                                 </span>
//                                 <span className="form-outer-input-forworder">
//                                     <input type="text" />
//                                 </span>
//                             </div>

//                             <div className="form-outer">
//                                 <span className="form-outer-label-forworder">
//                                     <label for="fname">Street </label>
//                                 </span>
//                                 <span className="form-outer-input-forworder">
//                                     <input type="text" />
//                                 </span>
//                             </div>

//                             <div className="form-outer">
//                                 <span className="form-outer-label-forworder">
//                                     <label for="fname">City </label>
//                                 </span>
//                                 <span className="form-outer-input-forworder">
//                                     <select id="company">
//                                         <option value=""></option>
//                                         <option value="company1"> INT</option>
//                                         <option value="company2"> LOC</option>
//                                         <option value="company3">MET </option>
//                                         <option value="company3">NCR </option>
//                                         <option value="company3">NOE </option>
//                                         <option value="company3">NOR</option>
//                                         <option value="company3">ROI </option>
//                                     </select>
//                                 </span>
//                             </div>


//                             <div className="form-outer">
//                                 <span className="form-outer-label-forworder">
//                                     <label for="fname">Contact No.</label>
//                                 </span>
//                                 <span className="form-outer-input-forworder">
//                                     <input type="text" />
//                                 </span>
//                             </div>

//                             <div className="form-outer">
//                                 <span className="form-outer-label-forworder">
//                                     <label for="fname">Email ID</label>
//                                 </span>
//                                 <span className="form-outer-input-forworder">
//                                     <input type="text" />
//                                 </span>
//                             </div>

//                             <div className="form-outer">
//                                 <span className="form-outer-label-forworder">
//                                     <label for="fname">Awb Charge</label>
//                                 </span>
//                                 <span className="form-outer-input-forworder">
//                                     <input type="text" />
//                                 </span>
//                             </div>

//                             <div className="form-outer">
//                                 <span className="form-outer-label-forworder">
//                                     <label for="fname">GST No.</label>
//                                 </span>
//                                 <span className="form-outer-input-forworder">
//                                     <input type="text" />
//                                 </span>
//                             </div>

//                             <div className="form-outer">
//                                 <span className="form-outer-label-forworder">
//                                     <label for="fname">PAN</label>
//                                 </span>
//                                 <span className="form-outer-input-forworder">
//                                     <input type="text" />
//                                 </span>
//                             </div>

//                             <div className="form-outer">
//                                 <span className="form-outer-label-forworder">
//                                     <label for="fname">Website</label>
//                                 </span>
//                                 <span className="form-outer-input-forworder">
//                                     <input type="text" />
//                                 </span>
//                             </div>




//                         </form>

//                     </div>
//                   <div class="forworder-main-container-row3">
//                     <div className='forworder-button'>
//                         <button>Save</button>
//                         <button>Delete</button>
//                         <button onClick={handlClose}>Close</button>
//                     </div>
//                 </div>



//                 </div>
                
//             </div>

        
//     )
// }






















// import React, { useEffect, useState, useRef, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import "../Style/forworder.css";
// import { MasterContext } from "../context/MasterContext";

// export default function ForwarderMaster() {
//   const [forwardercode, setForwardercode] = useState([]);
//   const [branch, setBranch] = useState('SELF');
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isOpen, setIsOpen] = useState(false);
//   const [forwarderName, setForwarderName] = useState('');
//   const [contactPerson, setContactPerson] = useState('');
//   const [address, setAddress] = useState('');
//   const [street, setStreet] = useState('');
//   const [city, setCity] = useState('');
//   const [contactNo, setContactNo] = useState('');
//   const [emailId, setEmailId] = useState('');
//   const [gstNo, setGstNo] = useState('');
//   const [awbCharge, setAwbCharge] = useState('');
//   const [pan, setPan] = useState('');
//   const [website, setWebsite] = useState('');
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();
//   const { cities,branches  } = useContext(MasterContext); 

//   const handleClose = () => {
//     navigate("/");
//   };

//   useEffect(() => {
//     fetch('http://localhost:3001/forwarders')
//       .then(response => response.json())
//       .then(data => {
//         const uniqueForwardercode = data.forwarders.map(forwardercode => ({
//           value: forwardercode.FWDcode,
//           label: forwardercode.FWDcode,
//         }));
//         setBranch(uniqueForwardercode);
//         setData(data.forwarders || []); // Ensure data is an array
//       })
//       .catch(error => console.error('Error fetching forwarders:', error));
//   }, []);
  

//   const onSelect = (selectedOption) => {
//     const selectedForwardercode = data.find(item => item.bname === selectedOption.value);
//     if (selectedForwardercode) {
//       setForwarderName(selectedForwardercode.FWDname || '');
//       setContactPerson(selectedForwardercode.cperson || '');
//       setAddress(selectedForwardercode.address || '');
//       setStreet(selectedForwardercode.add1 || '');
//       setCity(selectedForwardercode.city || '');
//       setContactNo(selectedForwardercode.cont || '');
//       setEmailId(selectedForwardercode.eid || '');
//       setAwbCharge(selectedForwardercode.awbchrg || '');
//       setGstNo(selectedForwardercode.gstno || '');
//       setPan(selectedForwardercode.panno || '');
//       setWebsite(selectedForwardercode.website || '');
//       setBranch(selectedForwardercode.branch || '');
//     }
//   };

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//     setIsOpen(true);
//   };

//   const handleForwardercodeSelect = (option) => {
//     onSelect(option);
//     setSearchTerm(option.label);
//     setIsOpen(false);
//   };

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       const selectedOption = forwardercode.find(option => option.label.toLowerCase() === searchTerm.toLowerCase());
//       if (selectedOption) {
//         onSelect(selectedOption);
//       }
//     }
//   };

//   const handleSave = () => {
//     if (!searchTerm || !forwarderName || !contactPerson || !address || !street || !city || !contactNo || !emailId || !awbCharge || !gstNo || !pan || !website || !branch) {
//       alert('Please fill out all fields.');
//       return;
//     }
//     //FWDcode, FWDname, Cperson, Address, Street, City_Name, Contactno, EmailID, awbchrg, gstno, panno, website
//     const formData = {
//         FWDcode: searchTerm,
//         FWDname: forwarderName,
//       Cperson: contactPerson,
//       Address: address,
//       Street: street,
//       City_NAME: city,
//       Contactno: contactNo,
//       EmailID: emailId,
//       awbchrg: awbCharge,
//       gstno: gstNo,
//       panno: pan,
//       website: website,
//       branch: branch || 'SELF'
//     };

//     console.log("sending data ", formData);

//     fetch('http://localhost:3001/forwarders', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Success:', data);
//         alert('forworder Data Saved...!!!');
//         // Handle success - you might want to clear the form or display a success message
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         // Handle error
//       });
//   };

//   const handleDelete = () => {
//     if (!searchTerm) {
//       alert('Please select a branch to delete.');
//       return;
//     }

//     fetch(`http://localhost:3001/forwarders/${searchTerm}`, {
//       method: 'DELETE',
//     })
//       .then(response => {
//         if (response.ok) {
//           alert('Forwarder deleted successfully.');
//           // Clear the form or perform any additional cleanup
//           setForwarderName('');
//           setContactPerson('');
//           setAddress('');
//           setStreet('');
//           setCity('');
//           setContactNo('');
//           setEmailId('');
//           setAwbCharge('');
//           setGstNo('');
//           setPan('');
//           setWebsite('');
//           setBranch('');
//           setSearchTerm('');
//           // Refresh the branches list
//           return fetch('http://localhost:3001/forwarders')
//             .then(response => response.json())
//             .then(data => {
//               const uniqueForwardercode = data.forwardercode.map(forwardercode => ({
//                 value: forwardercode.FWDcode,
//                 label: forwardercode.FWDcode,
//               }));
//               setForwardercode(uniqueForwardercode);
//               setData(data.branch);
//             })
//             .catch(error => console.error('Error fetching branches:', error));
//         } else {
//           return response.json().then(data => {
//             alert(`Error: ${data.message}`);
//           });
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         alert('Error deleting branch.');
//       });
//   };


//   return (
//     <div className="forworder-container">
//       <div className="forworder-main-container mt-5">
//         <div className="forworder-main-container-row1" style={{ color: "maroon" }}>
//           Forwarder Profile
//         </div>
//         <div className="forworder-main-container-row2">
//           <form>
         
//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="branch">Forwarder Code </label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <div className="searchable-select" ref={dropdownRef}>
//                   <div className="input-container">
//                     <input
//                       type="text"
//                       placeholder="Search..."
//                       value={searchTerm}
//                       onChange={handleInputChange}
//                       onKeyPress={handleKeyPress}
//                       required
//                     />
//                     <span className="dropdown-icon" onClick={toggleDropdown}>v</span>
//                   </div>
//                   {isOpen && (
//                     <ul className="options">
//                       {branch.map((option) => (
//                         <li key={option.value} onClick={() => handleForwardercodeSelect(option)}>
//                           {option.label}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="address">Forwarder Name </label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <input
//                   type="text"
//                   value={forwarderName}
//                   onChange={(e) => setForwarderName(e.target.value)}
//                   required
//                 />
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="contactPerson">Contact Person </label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <input
//                   type="text"
//                   value={contactPerson}
//                   onChange={(e) => setContactPerson(e.target.value)}
//                   required
//                 />
//               </span>
//             </div>

//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="address">Address </label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <input
//                   type="text"
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                   required
//                 />
//               </span>
//             </div>

//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="street">Street </label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <input
//                   type="text"
//                   value={street}
//                   onChange={(e) => setStreet(e.target.value)}
//                   required
//                 />
//               </span>
//             </div>

//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="city">City </label>
//               </span>
//               <span className="form-outer-input-forworder" style={{ width: '50%' }}>
//                 <select
//                   value={city}
//                   onChange={(e) => setCity(e.target.value)}
//                   required
//                 >
//                   {cities.map((cityOption) => (
//                     <option key={cityOption.id} value={cityOption.name}>
//                       {cityOption.City_Name}
//                     </option>
//                   ))}
//                 </select>
//               </span>
//             </div>

//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="contactNo">Contact No.</label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <input
//                   type="text"
//                   value={contactNo}
//                   onChange={(e) => setContactNo(e.target.value)}
//                   required
//                 />
//               </span>
//             </div>

//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="emailId">Email ID</label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <input
//                   type="text"
//                   value={emailId}
//                   onChange={(e) => setEmailId(e.target.value)}
//                   required
//                 />
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="address">Awb Charge </label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <input
//                   type="text"
//                   value={awbCharge}
//                   onChange={(e) => setAwbCharge(e.target.value)}
//                   required
//                 />
//               </span>
//             </div>
            
//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="gstNo">GST No.</label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <input
//                   type="text"
//                   value={gstNo}
//                   onChange={(e) => setGstNo(e.target.value)}
//                   required
//                 />
//               </span>
//             </div>

//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="address">PAN</label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <input
//                   type="text"
//                   value={pan}
//                   onChange={(e) => setPan(e.target.value)}
//                   required
//                 />
//               </span>
//             </div>

//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="address">Website </label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <input
//                   type="text"
//                   value={website}
//                   onChange={(e) => setWebsite(e.target.value)}
//                   required
//                 />
//               </span>
//             </div>

//             <div className="form-outer">
//                 <span className="form-outer-label-forworder">
//                     <label htmlFor="branch">Branch</label>
//                 </span>
//                 <span className="form-outer-input-forworder" style={{ width: '50%' }}>
//                     <select
//                         value={branch}
//                         onChange={(e) => setBranch(e.target.value)}
//                         required
//                     >
//                         {branches.map((branchOption) => (
//                             <option key={branchOption.id} value={branchOption.name}>
//                                 {branchOption.bname}
//                             </option>
//                         ))}
//                     </select>
//                 </span>
//             </div>
//           </form>
//         </div>
        // <div className="forworder-main-container-row3">
        //   <div className="forworder-button">
        //     <button type="button" onClick={handleSave}>Save</button>
        //     <button type="button" onClick={handleDelete}>Delete</button>
        //     <button type="button" onClick={handleClose}>Close</button>
        //   </div>
        // </div>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState, useRef, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import "../Style/forworder.css";
// import { MasterContext } from "../context/MasterContext";

// export default function ForwarderMaster() {
//   const [forwardercode, setForwardercode] = useState([]);
//   const [branch, setBranch] = useState("SELF");
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isOpen, setIsOpen] = useState(false);
//   const [forwarderName, setForwarderName] = useState('');
//   const [contactPerson, setContactPerson] = useState('');
//   const [address, setAddress] = useState('');
//   const [street, setStreet] = useState('');
//   const [city, setCity] = useState('');
//   const [contactNo, setContactNo] = useState('');
//   const [emailId, setEmailId] = useState('');
//   const [gstNo, setGstNo] = useState('');
//   const [awbCharge, setAwbCharge] = useState('');
//   const [pan, setPan] = useState('');
//   const [website, setWebsite] = useState('');
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();
//   const { cities, branches } = useContext(MasterContext);

//   const handleClose = () => {
//     navigate("/");
//   };

//   useEffect(() => {
//     fetch('http://localhost:3001/forwarders')
//       .then(response => response.json())
//       .then(data => {
//         const uniqueForwardercode = data.forwarders.map(forwardercode => ({
//           value: forwardercode.FWDcode,
//           label: forwardercode.FWDcode,
//         }));
//         setForwardercode(uniqueForwardercode);
//         setData(data.forwarders || []); // Ensure data is an array
//       })
//       .catch(error => console.error('Error fetching forwarders:', error));
//   }, []);

//   const onSelect = (selectedOption) => {
//     const selectedForwardercode = data.find(item => item.FWDcode === selectedOption.value);
//     if (selectedForwardercode) {
//       setForwarderName(selectedForwardercode.FWDname || '');
//       setContactPerson(selectedForwardercode.Cperson || '');
//       setAddress(selectedForwardercode.Address || '');
//       setStreet(selectedForwardercode.Street || '');
//       setCity(selectedForwardercode.City_NAME || '');
//       setContactNo(selectedForwardercode.Contactno || '');
//       setEmailId(selectedForwardercode.EmailID || '');
//       setAwbCharge(selectedForwardercode.awbchrg || '');
//       setGstNo(selectedForwardercode.gstno || '');
//       setPan(selectedForwardercode.panno || '');
//       setWebsite(selectedForwardercode.website || '');
//       setBranch(selectedForwardercode.branch || 'SELF');
//     }
//   };

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//     setIsOpen(true);
//   };

//   const handleForwardercodeSelect = (option) => {
//     onSelect(option);
//     setSearchTerm(option.label);
//     setIsOpen(false);
//   };

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       const selectedOption = forwardercode.find(option => option.label.toLowerCase() === searchTerm.toLowerCase());
//       if (selectedOption) {
//         onSelect(selectedOption);
//       }
//     }
//   };

//   const handleSave = () => {
//     if (!searchTerm || !forwarderName || !contactPerson || !address || !street || !city || !contactNo || !emailId || !awbCharge || !gstNo || !pan || !website || !branch) {
//       alert('Please fill out all fields.');
//       return;
//     }

//     const formData = {
//       FWDcode: searchTerm,
//       FWDname: forwarderName,
//       Cperson: contactPerson,
//       Address: address,
//       Street: street,
//       City_NAME: city,
//       Contactno: contactNo,
//       EmailID: emailId,
//       awbchrg: awbCharge,
//       gstno: gstNo,
//       panno: pan,
//       website: website,
//       branch: branch || 'SELF',
//     };

//     console.log("sending data ", formData);

//     fetch('http://localhost:3001/forwarders', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Success:', data);
//         alert('Forwarder Data Saved...!!!');
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };

//   const handleDelete = () => {
//     if (!searchTerm) {
//       alert('Please select a forwarder to delete.');
//       return;
//     }

//     fetch(`http://localhost:3001/forwarders/${searchTerm}`, {
//       method: 'DELETE',
//     })
//       .then(response => {
//         if (response.ok) {
//           alert('Forwarder deleted successfully.');
//           setForwarderName('');
//           setContactPerson('');
//           setAddress('');
//           setStreet('');
//           setCity('');
//           setContactNo('');
//           setEmailId('');
//           setAwbCharge('');
//           setGstNo('');
//           setPan('');
//           setWebsite('');
//           setBranch('SELF');
//           setSearchTerm('');

//           return fetch('http://localhost:3001/forwarders')
//             .then(response => response.json())
//             .then(data => {
//               const uniqueForwardercode = data.forwarders.map(forwardercode => ({
//                 value: forwardercode.FWDcode,
//                 label: forwardercode.FWDcode,
//               }));
//               setForwardercode(uniqueForwardercode);
//               setData(data.forwarders);
//             })
//             .catch(error => console.error('Error fetching forwarders:', error));
//         } else {
//           return response.json().then(data => {
//             alert(`Error: ${data.message}`);
//           });
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         alert('Error deleting forwarder.');
//       });
//   };

//   return (
//     <div className="forworder-container">
//       <div className="forworder-main-container mt-5">
//         <div className="forworder-main-container-row1" style={{ color: "maroon" }}>
//           Forwarder Profile
//         </div>
//         <div className="forworder-main-container-row2">
//           <form>
//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="branch">Forwarder Code </label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <div className="searchable-select" ref={dropdownRef}>
//                   <div className="input-container">
//                     <input
//                       type="text"
//                       placeholder="Search..."
//                       value={searchTerm}
//                       onChange={handleInputChange}
//                       onKeyPress={handleKeyPress}
//                       required
//                     />
//                     <span className="dropdown-icon" onClick={toggleDropdown}>v</span>
//                   </div>
//                   {isOpen && (
//                     <ul className="options">
//                       {forwardercode.map((option) => (
//                         <li key={option.value} onClick={() => handleForwardercodeSelect(option)}>
//                           {option.label}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="address">Forwarder Name </label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <input
//                   type="text"
//                   value={forwarderName}
//                   onChange={(e) => setForwarderName(e.target.value)}
//                   required
//                 />
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="contactPerson">Contact Person </label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <input
//                   type="text"
//                   value={contactPerson}
//                   onChange={(e) => setContactPerson(e.target.value)}
//                   required
//                 />
//               </span>
//             </div>

//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="address">Address </label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <input
//                   type="text"
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                   required
//                 />
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="street">Street </label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <input
//                   type="text"
//                   value={street}
//                   onChange={(e) => setStreet(e.target.value)}
//                   required
//                 />
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="city">City </label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <input
//                   type="text"
//                   value={city}
//                   onChange={(e) => setCity(e.target.value)}
//                   required
//                 />
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="contactNo">Contact No </label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <input
//                   type="text"
//                   value={contactNo}
//                   onChange={(e) => setContactNo(e.target.value)}
//                   required
//                 />
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="emailId">Email ID </label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <input
//                   type="text"
//                   value={emailId}
//                   onChange={(e) => setEmailId(e.target.value)}
//                   required
//                 />
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="awbCharge">AWB Charge </label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <input
//                   type="text"
//                   value={awbCharge}
//                   onChange={(e) => setAwbCharge(e.target.value)}
//                   required
//                 />
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="gstNo">GST No </label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <input
//                   type="text"
//                   value={gstNo}
//                   onChange={(e) => setGstNo(e.target.value)}
//                   required
//                 />
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="pan">PAN </label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <input
//                   type="text"
//                   value={pan}
//                   onChange={(e) => setPan(e.target.value)}
//                   required
//                 />
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="website">Website </label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <input
//                   type="text"
//                   value={website}
//                   onChange={(e) => setWebsite(e.target.value)}
//                   required
//                 />
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="form-outer-label-forworder">
//                 <label htmlFor="branch">Branch </label>
//               </span>
//               <span className="form-outer-input-forworder">
//                 <select
//                   value={branch}
//                   onChange={(e) => setBranch(e.target.value)}
//                 >
//                   <option value="SELF">SELF</option>
//                   {branches.map((branch, index) => (
//                     <option key={index} value={branch.BRANCH_NAME}>
//                       {branch.bname}
//                     </option>
//                   ))}
//                 </select>
//               </span>
//             </div>
//             </form>
//             </div>
        //     <div className="forworder-main-container-row3">
        //   <div className="forworder-button">
        //     <button type="button" onClick={handleSave}>Save</button>
        //     <button type="button" onClick={handleDelete}>Delete</button>
        //     <button type="button" onClick={handleClose}>Close</button>
        //   </div>
        // </div>
         
      
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/forworder.css";
import { MasterContext } from "../context/MasterContext";

export default function ForwarderMaster() {
  const [forwardercode, setForwardercode] = useState([]);
  const [branch, setBranch] = useState("SELF");
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [forwarderName, setForwarderName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [address, setAddress] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [citySearchTerm, setCitySearchTerm] = useState('');
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [contactNo, setContactNo] = useState('');
  const [emailId, setEmailId] = useState('');
  const [gstNo, setGstNo] = useState('');
  const [awbCharge, setAwbCharge] = useState('');
  const [pan, setPan] = useState('');
  const [website, setWebsite] = useState('');
  const dropdownRef = useRef(null);
  const cityDropdownRef = useRef(null);
  const navigate = useNavigate();
  const { cities, branches } = useContext(MasterContext);

  const handleClose = () => {
    navigate("/");
  };

  useEffect(() => {
    fetch('http://localhost:3001/forwarders')
      .then(response => response.json())
      .then(data => {
        const uniqueForwardercode = data.forwarders.map(forwardercode => ({
          value: forwardercode.FWDcode,
          label: forwardercode.FWDcode,
        }));
        setForwardercode(uniqueForwardercode);
        setData(data.forwarders || []); // Ensure data is an array
        console.log('data',data)
      })
      .catch(error => console.error('Error fetching forwarders:', error));
  }, []);

  const onSelect = (selectedOption) => {
    const selectedForwardercode = data.find(item => item.FWDcode === selectedOption.value);
    if (selectedForwardercode) {
      setForwarderName(selectedForwardercode.FWDname || '');
      setContactPerson(selectedForwardercode.Cperson || '');
      setAddress(selectedForwardercode.Address || '');
      setStreet(selectedForwardercode.Street || '');
      setCity(selectedForwardercode.City_NAME || '');
      setContactNo(selectedForwardercode.Contactno || '');
      setEmailId(selectedForwardercode.EmailID || '');
      setAwbCharge(selectedForwardercode.awbchrg || '');
      setGstNo(selectedForwardercode.gstno || '');
      setPan(selectedForwardercode.panno || '');
      setWebsite(selectedForwardercode.website || '');
      setBranch(selectedForwardercode.branch || 'SELF');
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const handleForwardercodeSelect = (option) => {
    onSelect(option);
    setSearchTerm(option.label);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
    if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target)) {
      setCityDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const selectedOption = forwardercode.find(option => option.label.toLowerCase() === searchTerm.toLowerCase());
      if (selectedOption) {
        onSelect(selectedOption);
      }
    }
  };

  const handleSave = () => {
    if (!searchTerm || !forwarderName || !contactPerson || !address || !street || !city || !contactNo || !emailId || !awbCharge || !gstNo || !pan || !website || !branch) {
      alert('Please fill out all fields.');
      return;
    }

    const formData = {
      FWDcode: searchTerm,
      FWDname: forwarderName,
      Cperson: contactPerson,
      Address: address,
      Street: street,
      City_NAME: city,
      Contactno: contactNo,
      EmailID: emailId,
      awbchrg: awbCharge,
      gstno: gstNo,
      panno: pan,
      website: website,
      branch: branch || 'SELF',
    };

    console.log("sending data ", formData);

    fetch('http://localhost:3001/forwarders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('Forwarder Data Saved...!!!');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleDelete = () => {
    if (!searchTerm) {
      alert('Please select a forwarder to delete.');
      return;
    }

    fetch(`http://localhost:3001/forwarders/${searchTerm}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          alert('Forwarder deleted successfully.');
          setForwarderName('');
          setContactPerson('');
          setAddress('');
          setStreet('');
          setCity('');
          setContactNo('');
          setEmailId('');
          setAwbCharge('');
          setGstNo('');
          setPan('');
          setWebsite('');
          setBranch('SELF');
          setSearchTerm('');

          return fetch('http://localhost:3001/forwarders')
            .then(response => response.json())
            .then(data => {
              const uniqueForwardercode = data.forwarders.map(forwardercode => ({
                value: forwardercode.FWDcode,
                label: forwardercode.FWDcode,
              }));
              setForwardercode(uniqueForwardercode);
              setData(data.forwarders);
            })
            .catch(error => console.error('Error fetching forwarders:', error));
        } else {
          return response.json().then(data => {
            alert(`Error: ${data.message}`);
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error deleting forwarder.');
      });
  };

  const handleCityInputChange = (e) => {
    setCitySearchTerm(e.target.value);
    setCityDropdownOpen(true);
  };

  const handleCitySelect = (option) => {
    setCity(option.City_Name);
    setCitySearchTerm(option.City_Name);
    setCityDropdownOpen(false);
  };

  const toggleCityDropdown = () => {
    setCityDropdownOpen(!cityDropdownOpen);
  };

  return (
    <div className="forworder-container">
      <div className="forworder-main-container mt-5">
        <div className="forworder-main-container-row1" style={{ color: "maroon" }}>
          Forwarder Profile
        </div>
        <div className="forworder-main-container-row2">
          <form>
            <div className="form-outer">
              <span className="form-outer-label-forworder">
                <label htmlFor="branch">Forwarder Code </label>
              </span>
              <span className="form-outer-input-forworder">
                <div className="searchable-select" ref={dropdownRef}>
                  <div className="input-container">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      required
                    />
                    <span className="dropdown-icon" onClick={toggleDropdown}>v</span>
                  </div>
                  {isOpen && (
                    <ul className="options">
                      {forwardercode.map((option) => (
                        <li key={option.value} onClick={() => handleForwardercodeSelect(option)}>
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </span>
            </div>
            <div className="form-outer">
              <span className="form-outer-label-forworder">
                <label htmlFor="address">Forwarder Name </label>
              </span>
              <span className="form-outer-input-forworder">
                <input
                  type="text"
                  name="forwardername"
                  placeholder="Enter Forwarder Name"
                  value={forwarderName}
                  onChange={(e) => setForwarderName(e.target.value)}
                  required
                />
              </span>
            </div>
            <div className="form-outer">
              <span className="form-outer-label-forworder">
                <label htmlFor="contactperson">Contact Person </label>
              </span>
              <span className="form-outer-input-forworder">
                <input
                  type="text"
                  name="contactperson"
                  placeholder="Enter Contact Person"
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  required
                />
              </span>
            </div>
            <div className="form-outer">
              <span className="form-outer-label-forworder">
                <label htmlFor="address">Address </label>
              </span>
              <span className="form-outer-input-forworder">
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </span>
            </div>
            <div className="form-outer">
              <span className="form-outer-label-forworder">
                <label htmlFor="street">Street </label>
              </span>
              <span className="form-outer-input-forworder">
                <input
                  type="text"
                  name="street"
                  placeholder="Enter Street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  required
                />
              </span>
            </div>
            <div className="form-outer">
              <span className="form-outer-label-forworder">
                <label htmlFor="city">City </label>
              </span>
              <span className="form-outer-input-forworder">
                <div className="searchable-select" ref={cityDropdownRef}>
                  <div className="input-container">
                    <input
                      type="text"
                      placeholder="Search City..."
                      value={citySearchTerm}
                      onChange={handleCityInputChange}
                      required
                    />
                    <span className="dropdown-icon" onClick={toggleCityDropdown}>v</span>
                  </div>
                  {cityDropdownOpen && (
                    <ul className="options">
                      {cities
                        .filter((option) => option.City_Name.toLowerCase().includes(citySearchTerm.toLowerCase()))
                        .map((option) => (
                          <li key={option.City_ID} onClick={() => handleCitySelect(option)}>
                            {option.City_Name}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </span>
            </div>
            <div className="form-outer">
              <span className="form-outer-label-forworder">
                <label htmlFor="contactno">Contact No </label>
              </span>
              <span className="form-outer-input-forworder">
                <input
                  type="tel"
                  name="contactno"
                  placeholder="Enter Contact No"
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                  required
                />
              </span>
            </div>
            <div className="form-outer">
              <span className="form-outer-label-forworder">
                <label htmlFor="emailid">Email ID </label>
              </span>
              <span className="form-outer-input-forworder">
                <input
                  type="email"
                  name="emailid"
                  placeholder="Enter Email ID"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                  required
                />
              </span>
            </div>
            <div className="form-outer">
              <span className="form-outer-label-forworder">
                <label htmlFor="awbcharge">AWB Charge </label>
              </span>
              <span className="form-outer-input-forworder">
                <input
                  type="text"
                  name="awbcharge"
                  placeholder="Enter AWB Charge"
                  value={awbCharge}
                  onChange={(e) => setAwbCharge(e.target.value)}
                  required
                />
              </span>
            </div>
            <div className="form-outer">
              <span className="form-outer-label-forworder">
                <label htmlFor="gstno">GST No </label>
              </span>
              <span className="form-outer-input-forworder">
                <input
                  type="text"
                  name="gstno"
                  placeholder="Enter GST No"
                  value={gstNo}
                  onChange={(e) => setGstNo(e.target.value)}
                  required
                />
              </span>
            </div>
            <div className="form-outer">
              <span className="form-outer-label-forworder">
                <label htmlFor="panno">PAN No </label>
              </span>
              <span className="form-outer-input-forworder">
                <input
                  type="text"
                  name="panno"
                  placeholder="Enter PAN No"
                  value={pan}
                  onChange={(e) => setPan(e.target.value)}
                  required
                />
              </span>
            </div>
            <div className="form-outer">
              <span className="form-outer-label-forworder">
                <label htmlFor="website">Website </label>
              </span>
              <span className="form-outer-input-forworder">
                <input
                  type="text"
                  name="website"
                  placeholder="Enter Website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  required
                />
              </span>
            </div>
            <div className="form-outer">
              <span className="form-outer-label-forworder">
                <label htmlFor="branch">Branch </label>
              </span>
              <span className="form-outer-input-forworder">
                <select
                  name="branch"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  required
                >
                  {branches.map((branch) => (
                    <option key={branch.Branch_ID} value={branch.Branch_NAME}>
                      {branch.Branch_NAME}
                    </option>
                  ))}
                </select>
              </span>
            </div>
          
          </form>
        </div>
        <div className="forworder-main-container-row3">
          <div className="forworder-button">
            <button type="button" onClick={handleSave}>Save</button>
            <button type="button" onClick={handleDelete}>Delete</button>
            <button type="button" onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
