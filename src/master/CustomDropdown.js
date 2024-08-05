import React, { useState, useEffect, useRef } from 'react';
import '../components/FormComponent.css'; // Ensure this contains necessary styles

const CustomDropdown = ({ options, placeholder, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const handleOptionSelect = (option) => {
    onSelect(option);
    setSearchTerm(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
    <div className="searchable-select" ref={dropdownRef}>
      <div className="input-container">
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleInputChange}
        />
        <span className="dropdown-icon" onClick={toggleDropdown}>v</span>
      </div>
      {isOpen && (
        <ul className="options">
          {filteredOptions.map((option, index) => (
            <li key={index} onClick={() => handleOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
