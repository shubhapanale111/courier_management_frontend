// import React, { useContext, useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ClientContext } from '../../context/ClientContext'; 
// import { MasterContext } from '../../context/MasterContext';
// import '../../Style/master.css';

// function ClientPickupPoint() {
//   const navigate = useNavigate();
//   const { cities } = useContext(MasterContext);
//   const { clients, clientPickupAddress } = useContext(ClientContext);
//   const [selectedClient, setSelectedClient] = useState({ CLcode: '', CLname: '' });
//   const [formData, setFormData] = useState({
//     company: '',
//     name: '',
//     address1: '',
//     address2: '',
//     city: '',
//     pincode: '',
//     email: '',
//     contactNo: ''
//   });
//   const [filteredCompanies, setFilteredCompanies] = useState([]);
//   const clientRef = useRef(null);
//   const companyRef = useRef(null);

//   const handleClose = () => {
//     navigate('/');
//   };

//   const handleClientChange = (e) => {
//     const selectedClientCode = e.target.value;
//     const client = clients.find(client => client.CLcode === selectedClientCode);
//     setSelectedClient({ CLcode: client.CLcode, CLname: client.CLname });

//     const filteredAddresses = clientPickupAddress.filter(addr => addr.clcode === selectedClientCode);
//     const companies = filteredAddresses.map(addr => addr.comp);
//     setFilteredCompanies(companies);

//     // Reset form data when client changes
//     setFormData({
//       company: '',
//       name: '',
//       address1: '',
//       address2: '',
//       city: '',
//       pincode: '',
//       email: '',
//       contactNo: ''
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });

//     // If the company is changed, update the form data
//     if (name === 'company') {
//       const clientData = clientPickupAddress.find(client => client.comp === value && client.clcode === selectedClient.CLcode);
//       if (clientData) {
//         setFormData({
//           company: clientData.comp,
//           name: clientData.cname,
//           address1: clientData.cadd1,
//           address2: clientData.cadd2,
//           city: clientData.city,
//           pincode: clientData.pincode,
//           email: clientData.emailid,
//           contactNo: clientData.cphone
//         });
//       } else {
//         // If no matching data is found, reset the form fields
//         setFormData({
//           company: value,
//           name: '',
//           address1: '',
//           address2: '',
//           city: '',
//           pincode: '',
//           email: '',
//           contactNo: ''
//         });
//       }
//     }
//   };

//   const handleSave = (e) => {
//     e.preventDefault();
//     const dataToSave = {
//       clientCode: selectedClient.CLcode,
//       clientName: selectedClient.CLname,
//       ...formData
//     };
//     console.log(dataToSave);
//   };

//   const handleKeyDown = (e, nextRef) => {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       nextRef.current.focus();
//     }
//   }


//   return (
//     <div className="client-pickup">
//       <div className="client-pickup-main mt-5">
//         <div className="client-pickup-row1">
//           <h3 style={{ color: 'maroon', fontSize: '18px' }}>Client Pickup Point</h3>
//         </div>
//         <div className="client-pickup-row2">
//           <form onSubmit={handleSave}>
//             <div className="form-outer">
//               <span className="pickup-label">
//                 <label htmlFor="client">Client </label>
//               </span>
//               <span className="pickup-input">
//                 <select id="client" onChange={handleClientChange} ref={clientRef}
//                   onKeyDown={(e) => handleKeyDown(e, companyRef)}>
//                   <option value="">Select a client</option>
//                   {clients.map(client => (
//                     <option key={client.CLcode} value={client.CLcode}>
//                       {client.CLcode}: {client.CLname}
//                     </option>
//                   ))}
//                 </select>
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="pickup-label">
//                 <label htmlFor="company">Company </label>
//               </span>
//               <span className="pickup-input">
//                 <select id="company" name="company" ref={companyRef} onChange={handleChange}>
//                   <option value="">Select Company</option>
//                   {filteredCompanies.map((company, index) => (
//                     <option key={index} value={company}>{company}</option>
//                   ))}
//                 </select>
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="pickup-label">
//                 <label htmlFor="name">Name </label>
//               </span>
//               <span className="pickup-input">
//                 <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="pickup-label">
//                 <label htmlFor="address1">Address 1 </label>
//               </span>
//               <span className="pickup-input">
//                 <input type="text" id="address1" name="address1" value={formData.address1} onChange={handleChange} />
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="pickup-label">
//                 <label htmlFor="address2">Address 2 </label>
//               </span>
//               <span className="pickup-input">
//                 <input type="text" id="address2" name="address2" value={formData.address2} onChange={handleChange} />
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="pickup-label">
//                 <label htmlFor="city">City </label>
//               </span>
//               <span className="pickup-input">
//                 <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="pickup-label">
//                 <label htmlFor="pincode">Pincode </label>
//               </span>
//               <span className="pickup-input">
//                 <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} />
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="pickup-label">
//                 <label htmlFor="email">Email Id </label>
//               </span>
//               <span className="pickup-input">
//                 <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
//               </span>
//             </div>
//             <div className="form-outer">
//               <span className="pickup-label">
//                 <label htmlFor="contactNo">Contact No.</label>
//               </span>
//               <span className="pickup-input">
//                 <input type="text" id="contactNo" name="contactNo" value={formData.contactNo} onChange={handleChange} />
//               </span>
//             </div>
//             <div className="client-pickup-row3">
//               <div className='ci-button'>
//                 <button type="submit">Save</button>
//                 <button type="button">Delete</button>
//                 <button type="button" onClick={handleClose}>Close</button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ClientPickupPoint;


import React, { useContext, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClientContext } from '../../context/ClientContext'; 
import { MasterContext } from '../../context/MasterContext';
import '../../Style/master.css';

function ClientPickupPoint() {
  const navigate = useNavigate();
  const { cities } = useContext(MasterContext);
  const { clients, clientPickupAddress } = useContext(ClientContext);
  const [selectedClient, setSelectedClient] = useState({ CLcode: '', CLname: '' });
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    address1: '',
    address2: '',
    city: '',
    pincode: '',
    email: '',
    contactNo: ''
  });
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const clientRef = useRef(null);
  const companyRef = useRef(null);
  const cityRef = useRef(null);

  const handleClose = () => {
    navigate('/');
  };

  const handleClientChange = (e) => {
    const selectedClientCode = e.target.value;
    const client = clients.find(client => client.CLcode === selectedClientCode);
    
    if (client) {
      setSelectedClient({ CLcode: client.CLcode, CLname: client.CLname });
  
      // Ensure clientPickupAddress is defined and not null
      if (clientPickupAddress) {
        const filteredAddresses = clientPickupAddress.filter(addr => addr.clcode === selectedClientCode);
        const companies = filteredAddresses.map(addr => addr.comp);
        setFilteredCompanies(companies);
      } else {
        // Handle the case where clientPickupAddress is undefined or null
        console.error('clientPickupAddress is undefined or null');
        setFilteredCompanies([]);
      }
  
      // Reset form data when client changes
      setFormData({
        company: '',
        name: '',
        address1: '',
        address2: '',
        city: '',
        pincode: '',
        email: '',
        contactNo: ''
      });
    } else {
      // Handle the case where the client is not found
      console.error('Client not found');
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // If the company is changed, update the form data
    if (name === 'company') {
      const clientData = clientPickupAddress.find(client => client.comp === value && client.clcode === selectedClient.CLcode);
      if (clientData) {
        const cityData = cities.find(city => city.City_Name === clientData.city.split(':')[0]);
        setFormData({
          company: clientData.comp,
          name: clientData.cname,
          address1: clientData.cadd1,
          address2: clientData.cadd2,
          city: cityData ? cityData.CITYCODE : '',
          pincode: clientData.pincode,
          email: clientData.emailid,
          contactNo: clientData.cphone
        });
      } else {
        // If no matching data is found, reset the form fields
        setFormData({
          company: value,
          name: '',
          address1: '',
          address2: '',
          city: '',
          pincode: '',
          email: '',
          contactNo: ''
        });
      }
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const dataToSave = {
      clientCode: selectedClient.CLcode,
      clientName: selectedClient.CLname,
      ...formData
    };
    console.log(dataToSave);
  };

  const handleKeyDown = (e, nextRef) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      nextRef.current.focus();
    }
  };

  const getCityOptions = () => {
    return cities.map(city => ({
      value: city.CITYCODE,
      label: `${city.CITYCODE}:${city.City_Name}`
    }));
  };

  return (
    <div className="client-pickup">
      <div className="client-pickup-main mt-5">
        <div className="client-pickup-row1">
          <h3 style={{ color: 'maroon', fontSize: '18px' }}>Client Pickup Point</h3>
        </div>
        <div className="client-pickup-row2">
          <form onSubmit={handleSave}>
            <div className="form-outer">
              <span className="pickup-label">
                <label htmlFor="client">Client </label>
              </span>
              <span className="pickup-input">
                <select id="client" onChange={handleClientChange} ref={clientRef}
                  onKeyDown={(e) => handleKeyDown(e, companyRef)}>
                  <option value="">Select a client</option>
                  {clients.map(client => (
                    <option key={client.CLcode} value={client.CLcode}>
                      {client.CLcode}: {client.CLname}
                    </option>
                  ))}
                </select>
              </span>
            </div>
            <div className="form-outer">
              <span className="pickup-label">
                <label htmlFor="company">Company </label>
              </span>
              <span className="pickup-input">
                <select id="company" name="company" ref={companyRef} onChange={handleChange}>
                  <option value="">Select Company</option>
                  {filteredCompanies.map((company, index) => (
                    <option key={index} value={company}>{company}</option>
                  ))}
                </select>
              </span>
            </div>
            <div className="form-outer">
              <span className="pickup-label">
                <label htmlFor="name">Name </label>
              </span>
              <span className="pickup-input">
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
              </span>
            </div>
            <div className="form-outer">
              <span className="pickup-label">
                <label htmlFor="address1">Address 1 </label>
              </span>
              <span className="pickup-input">
                <input type="text" id="address1" name="address1" value={formData.address1} onChange={handleChange} />
              </span>
            </div>
            <div className="form-outer">
              <span className="pickup-label">
                <label htmlFor="address2">Address 2 </label>
              </span>
              <span className="pickup-input">
                <input type="text" id="address2" name="address2" value={formData.address2} onChange={handleChange} />
              </span>
            </div>
            <div className="form-outer">
              <span className="pickup-label">
                <label htmlFor="city">City </label>
              </span>
              <span className="pickup-input">
                <select id="city" name="city" ref={cityRef} onChange={handleChange} value={formData.city}>
                  <option value="">Select City</option>
                  {getCityOptions().map((city, index) => (
                    <option key={index} value={city.value}>{city.label}</option>
                  ))}
                </select>
              </span>
            </div>
            <div className="form-outer">
              <span className="pickup-label">
                <label htmlFor="pincode">Pincode </label>
              </span>
              <span className="pickup-input">
                <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} />
              </span>
            </div>
            <div className="form-outer">
              <span className="pickup-label">
                <label htmlFor="email">Email Id </label>
              </span>
              <span className="pickup-input">
                <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
              </span>
            </div>
            <div className="form-outer">
              <span className="pickup-label">
                <label htmlFor="contactNo">Contact No.</label>
              </span>
              <span className="pickup-input">
                <input type="text" id="contactNo" name="contactNo" value={formData.contactNo} onChange={handleChange} />
              </span>
            </div>
            <div className="client-pickup-row3">
              <div className='ci-button'>
                <button type="submit">Save</button>
                <button type="button">Delete</button>
                <button type="button" onClick={handleClose}>Close</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClientPickupPoint;
