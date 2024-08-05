// import React, { useRef } from 'react';

// const FormComponent = () => {
//   // Create refs for the form fields
//   const firstNameRef = useRef(null);
//   const lastNameRef = useRef(null);
//   const emailRef = useRef(null);

//   // Handle key down event
//   const handleKeyDown = (event, nextFieldRef) => {
//     if (event.key === 'Enter') {
//       event.preventDefault(); // Prevent form submission
//       if (nextFieldRef.current) {
//         nextFieldRef.current.focus(); // Move focus to the next field
//       }
//     }
//   };

//   return (
//     <form>
//       <div>
//         <label htmlFor="firstName">First Name:</label>
//         <input
//           type="text"
//           id="firstName"
//           ref={firstNameRef}
//           onKeyDown={(event) => handleKeyDown(event, lastNameRef)}
//         />
//       </div>
//       <div>
//         <label htmlFor="lastName">Last Name:</label>
//         <input
//           type="text"
//           id="lastName"
//           ref={lastNameRef}
//           onKeyDown={(event) => handleKeyDown(event, emailRef)}
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           ref={emailRef}
//           onKeyDown={(event) => handleKeyDown(event, null)}
//         />
//       </div>
//     </form>
//   );
// };

// export default FormComponent;



// import React, { useState } from 'react';
// import './FormComponent.css'; // Import the CSS file

// const options = [
//   'ABOHAR', 'ADILABAD', 'ADONI', 'ADOOR', 'AGARTALA', 'AGRA', 'AHMEDABAD',
//   'AHMEDNAGAR', 'AIZAWL', 'AJMER', 'AKOLA', 'ALAKODE', 'ALAPPUZHA', 'ALIGARH',
//   'ALLAHABAD', 'ALLEPPEY', 'ALUVA', 'ALWAR', 'AMALAPURAM', 'AMBALA', 'AMBALA CANTT',
//   'AMBEDKAR NAGAR', 'AMBIKAPUR', // Add all other city options here
// ];


// const FormComponent = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [filteredOptions, setFilteredOptions] = useState([]);

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);

//     // Show options only when at least 3 characters are entered
//     if (value.length >= 2) {
//       setFilteredOptions(options.filter(option => option.toLowerCase().includes(value.toLowerCase())));
//     } else {
//       setFilteredOptions([]);
//     }
//   };

//   const handleSelect = (option) => {
//     setInputValue(option);
//     setFilteredOptions([]);
//   };

//   return (
//     <div className="form-container">
//       <h1>OCMS</h1>
//       <h2>Online Courier Management System</h2>
//       <div className="form">
//         <div className="form-row">
//           <label>City Name</label>
//           <input
//             type="text"
//             value={inputValue}
//             onChange={handleChange}
//             className="custom-input"
//             placeholder="Enter a city name"
//             list="city-options"
//           />

//           {filteredOptions.length > 0 && (
//             <ul className="options-list" style={{marginTop:'50px'}}>
//               {filteredOptions.map((option, index) => (
//                 <li key={index} onClick={() => handleSelect(option)}>
//                   {option}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//         <div className="form-row">
//           <button className="close-button">Close</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormComponent;

// import React, { useState } from 'react';
// import './FormComponent.css';

// const options = [
//   { value: 'option1', label: 'Option 1' },
//   { value: 'option2', label: 'Option 2' },
//   { value: 'option3', label: 'Option 3' },
//   { value: 'option4', label: 'Option 4' },
//   { value: 'option5', label: 'Option 5' },
// ];

// const FormComponent = () => {
//   const onSelect = (selectedOption) => {
//     console.log('Selected option:', selectedOption);
//   };
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isOpen, setIsOpen] = useState(false);

//   const filteredOptions = options.filter((option) =>
//     option.label.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//     setIsOpen(true);
//   };

//   const handleOptionSelect = (option) => {
//     onSelect(option);
//     setSearchTerm(option.label);
//     setIsOpen(false);
//   };

//   return (
//     <div className="form-container">
//       <div className="form-container-sub">
//         <div className="searchable-select">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={handleInputChange}
//           /> 
//           {isOpen && (
//             <ul className="options">
//               {filteredOptions.map((option) => (
//                 <li key={option.value} onClick={() => handleOptionSelect(option)}>
//                   {option.label}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormComponent;



// import React, { useState, useEffect, useRef } from 'react';
// import './FormComponent.css';

// const options = [
//   { value: 'option1', label: 'Option 1' },
//   { value: 'option2', label: 'Option 2' },
//   { value: 'option3', label: 'Option 3' },
//   { value: 'option4', label: 'Option 4' },
//   { value: 'option5', label: 'Option 5' },
// ];

// const FormComponent = () => {
  // const onSelect = (selectedOption) => {
  //   console.log('Selected option:', selectedOption);
  // };

  // const [searchTerm, setSearchTerm] = useState('');
  // const [isOpen, setIsOpen] = useState(false);
  // const dropdownRef = useRef(null);

  // const filteredOptions = options.filter((option) =>
  //   option.label.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const handleInputChange = (e) => {
  //   setSearchTerm(e.target.value);
  //   setIsOpen(true);
  // };

  // const handleOptionSelect = (option) => {
  //   onSelect(option);
  //   setSearchTerm(option.label);
  //   setIsOpen(false);
  // };

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleClickOutside = (event) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setIsOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

//   return (
//     <div className="form-container">
//       <div className="form-container-sub">
        // <div className="searchable-select" ref={dropdownRef}>
        //   <div className="input-container">
        //     <input
        //       type="text"
        //       placeholder="Search..."
        //       value={searchTerm}
        //       onChange={handleInputChange}
        //     />
        //     <span className="dropdown-icon" onClick={toggleDropdown}>v</span>
        //   </div>
        //   {isOpen && (
        //     <ul className="options">
        //       {filteredOptions.map((option) => (
        //         <li key={option.value} onClick={() => handleOptionSelect(option)}>
        //           {option.label}
        //         </li>
        //       ))}
        //     </ul>
        //   )}
        // </div>
//       </div>
//     </div>
//   );
// };

// export default FormComponent;

import React, { useState } from 'react';
import Dropdown from './customDropdown/Dropdown';
import './FormComponent.css';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
];

const FormComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleOptionSelect = (selectedOption) => {
    setSelectedOption(selectedOption);
    setInputValue(selectedOption.label);
  };

  const handleSubmit = () => {
    console.log('Entered value:', inputValue);
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <div className="form-container">
      <div className="form-container-sub">
        <Dropdown
          options={options}
          onSelect={handleOptionSelect}
          placeholder="Search..."
          inputValue={inputValue}
          onInputChange={handleInputChange}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default FormComponent;
