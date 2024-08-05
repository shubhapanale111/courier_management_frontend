import React, { useState, useEffect, useRef } from 'react';
import '../Style/statusmaster.css';
import { useNavigate } from 'react-router-dom';

export default function StatusMaster() {
  const [options, setOptions] = useState([]);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [remark, setRemark] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/statuses')
      .then(response => response.json())
      .then(data => {
        // Using a Set to ensure unique status values
        const uniqueStatusSet = new Set(data.statuses.map(status => status.sta));
        const uniqueStatusOptions = Array.from(uniqueStatusSet).map(status => ({
          value: status,
          label: status,
        }));
        setOptions(uniqueStatusOptions);
        setData(data.statuses);
      })
      .catch(error => console.error('Error fetching statuses:', error));
  }, []);

  const handleSave = () => {
    const selectedOption = options.find(option => option.label.toLowerCase() === searchTerm.toLowerCase());

    if (selectedOption) {
      // If status already exists, filter data and set filtered data
      onSelect(selectedOption);
    } else {
      // If status does not exist, post the new status and remark
      const newStatus = {
        sta: searchTerm,
        sramarks: remark
      };

      fetch('http://localhost:3001/statuses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStatus),
      })
      .then(response => response.json())
      .then(data => {
        alert('New status added successfully!');
        setOptions([...options, { value: newStatus.sta, label: newStatus.sta }]);
        setData([...data.statuses, newStatus]);
      })
      .catch(error => console.error('Error adding new status:', error));
    }
  };

  const handleClose = () => {
    navigate('/');
  };

  const onSelect = (selectedOption) => {
    console.log('Selected option:', selectedOption);
    const filtered = data.filter(item => item.sta === selectedOption.value);
    setFilteredData(filtered);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const handleRemarkChange = (e) => {
    setRemark(e.target.value);
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

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const selectedOption = options.find(option => option.label.toLowerCase() === searchTerm.toLowerCase());
      if (selectedOption) {
        onSelect(selectedOption);
      }
    }
  };

  return (
    <div className="statusmaster-container">
      <div className="statusmaster-main-container mt-5">
        <div className="statusmaster-main-container-row1" style={{ color: 'maroon' }}> Status Master</div>
        <div className="statusmaster-main-container-row2">
          <div className="statusmaster-main-container-row2-col1">
            <form>
              <div className="form-outer">
                <span className="form-outer-label-zonemaster">
                  <label htmlFor="status">Status </label>
                </span>
                <span className="form-outer-input-zonemaster">
                  <div className="searchable-select" ref={dropdownRef}>
                    <div className="input-container">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
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
                </span>
              </div>

              <div className="form-outer">
                <span className="form-outer-label-zonemaster">
                  <label htmlFor="remarks">Remarks </label>
                </span>
                <span className="form-outer-input-zonemaster">
                  <input type="text" value={remark} onChange={handleRemarkChange} />
                </span>
              </div>
            </form>
          </div>
          <div className="statusmaster-main-container-row2-col2">
            <div className='status-table'>
              <table >
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((entry, index) => (
                    <tr key={index}>
                      <td>{entry.sta}</td>
                      <td>{entry.sramarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="statusmaster-main-container-row3">
          <div className="statusmaster-button">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
