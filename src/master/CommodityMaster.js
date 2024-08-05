

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/branchmaster.css";

export default function CommodityMaster() {
  const navigate = useNavigate();
  const [parcelItems, setParcelItems] = useState([]);
  const [selectedParcelItem, setSelectedParcelItem] = useState("");
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetchParcelItems();
  }, []);

  const fetchParcelItems = async () => {
    try {
      const response = await fetch("http://localhost:3001/parcelItems");
      const data = await response.json();
      setParcelItems(data.parcelItems);
    } catch (error) {
      console.error("Error fetching parcel items:", error);
    }
  };

  const handleParcelItemChange = (selectedOption) => {
    setSelectedParcelItem(selectedOption.Parcelitem);
    setSearchTerm(selectedOption.Parcelitem); // Set searchTerm to selected option label
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
      const response = await fetch('http://localhost:3001/parcelItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ parcelItem: searchTerm }),
      });
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      alert('Parcel item created successfully');
      setSearchTerm('');
      fetchParcelItems(); // Refresh the list after adding a new item
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3001/parcelItems/${searchTerm}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete data');
      }
      alert('Parcel item deleted successfully');
      setSearchTerm('');
      fetchParcelItems(); // Refresh the list after deleting an item
    } catch (error) {
      console.error('Error deleting data:', error);
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
    <div style={{ height: '70vh', marginTop: '100px', width: '100%' }} className="branchmaster-container">
      <div className="branchmaster-main-container mt-5" style={{ width: '50%' }}>
        <div className="branchmaster-main-container-row1" style={{ color: 'maroon' }}>
          Commodity
        </div>
        <div className="branchmaster-main-container-row2">
          <form>
            <div className="form-outer" style={{ marginTop: '10%' }}>
              <span className="form-outer-label-branchmaster" style={{ width: '20%' }}>
                <label htmlFor="commodity">Commodity</label>
              </span>
              <span className="form-outer-input-branchmaster">
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
                      {parcelItems
                        .filter((item) =>
                          item.Parcelitem.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((item, index) => (
                          <li
                            key={index}
                            onClick={() => handleParcelItemChange(item)}
                          >
                            {item.Parcelitem}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </span>
            </div>
          </form>
        </div>
        <div className="branchmaster-main-container-row3">
          <div className='branchmaster-button'>
            <button onClick={handleSubmit}>Save</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => navigate("/")}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
