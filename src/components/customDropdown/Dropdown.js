import React, { useState, useEffect, useRef } from 'react';
import '../FormComponent.css';

const Dropdown = ({ options, onSelect, placeholder, inputValue, onInputChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setSearchTerm(inputValue);
  }, [inputValue]);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsOpen(true);
    onInputChange(value);
  };

  const handleOptionSelect = (option) => {
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
          {filteredOptions.map((option) => (
            <li key={option.value} onClick={() => handleOptionSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
