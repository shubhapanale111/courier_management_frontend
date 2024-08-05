import React, { useState } from 'react';
import './FormComponent.css'
const SearchableSelect = ({ options, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const handleOptionSelect = (option) => {
    onSelect(option);
    setSearchTerm('');
    setIsOpen(false);
  };

  return (
    <div className="searchable-select">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
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

export default SearchableSelect;