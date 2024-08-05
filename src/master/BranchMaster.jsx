import React, { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/branchmaster.css";
import { MasterContext } from "../context/MasterContext";

export default function BranchMaster() {
  const [branches, setBranches] = useState([]);
  const [filteredBranches, setFilteredBranches] = useState([]);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [contactPerson, setContactPerson] = useState('');
  const [address, setAddress] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [emailId, setEmailId] = useState('');
  const [statename, setStatename] = useState('MAHARASHTRA');
  const [gstNo, setGstNo] = useState('');
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { cities } = useContext(MasterContext); // Use the context to get cities data

  const handleClose = () => {
    navigate("/");
  };

  useEffect(() => {
    fetch('http://localhost:3001/branches')
      .then(response => response.json())
      .then(data => {
        const uniqueBranches = data.branches.map(branch => ({
          value: branch.bname,
          label: branch.bname,
        }));
        setBranches(uniqueBranches);
        setFilteredBranches(uniqueBranches);
        setData(data.branches);
      })
      .catch(error => console.error('Error fetching branches:', error));
  }, []);

  const filterBranches = (term) => {
    const normalizedTerm = (term || '').toLowerCase();
    const filtered = branches.filter(branch =>
      (branch.label || '').toLowerCase().includes(normalizedTerm)
    );
    setFilteredBranches(filtered);
  };

  const onSelect = (selectedOption) => {
    const selectedBranch = data.find(item => item.bname === selectedOption.value);
    if (selectedBranch) {
      setContactPerson(selectedBranch.cperson || '');
      setAddress(selectedBranch.address || '');
      setStreet(selectedBranch.add1 || '');
      setCity(selectedBranch.city || '');
      setContactNo(selectedBranch.cont || '');
      setEmailId(selectedBranch.eid || '');
      setStatename(selectedBranch.statename || '');
      setGstNo(selectedBranch.gstno || '');
    }
  };

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterBranches(term);
    setIsOpen(true);
  };

  const handleBranchSelect = (option) => {
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
      const selectedOption = filteredBranches.find(option => option.label.toLowerCase() === searchTerm.toLowerCase());
      if (selectedOption) {
        onSelect(selectedOption);
      }
    }
  };

  const handleSave = () => {
    if (!searchTerm || !contactPerson || !address || !street || !city || !contactNo || !emailId || !statename || !gstNo) {
      alert('Please fill out all fields.');
      return;
    }
    const formData = {
      bname: searchTerm,
      cperson: contactPerson,
      address: address,
      add1: street,
      city: city,
      cont: contactNo,
      eid: emailId,
      statename: statename,
      gstno: gstNo,
    };
    console.log("sending data ", formData);

    fetch('http://localhost:3001/branches', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('Branch Data Saved...!!!');
        // Handle success - you might want to clear the form or display a success message
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error
      });
  };

  const handleDelete = () => {
    if (!searchTerm) {
      alert('Please select a branch to delete.');
      return;
    }

    fetch(`http://localhost:3001/branches/${searchTerm}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          alert('Branch deleted successfully.');
          // Clear the form or perform any additional cleanup
          setContactPerson('');
          setAddress('');
          setStreet('');
          setCity('');
          setContactNo('');
          setEmailId('');
          setStatename('');
          setGstNo('');
          setSearchTerm('');
          // Refresh the branches list
          return fetch('http://localhost:3001/branches')
            .then(response => response.json())
            .then(data => {
              const uniqueBranches = data.branches.map(branch => ({
                value: branch.bname,
                label: branch.bname,
              }));
              setBranches(uniqueBranches);
              setFilteredBranches(uniqueBranches);
              setData(data.branches);
            })
            .catch(error => console.error('Error fetching branches:', error));
        } else {
          return response.json().then(data => {
            alert(`Error: ${data.message}`);
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error deleting branch.');
      });
  };

  


  return (
    <div className="branchmaster-container">
      <div className="branchmaster-main-container mt-5">
        <div className="branchmaster-main-container-row1" style={{ color: "maroon" }}>
          Branch Profile
        </div>
        <div className="branchmaster-main-container-row2">
          <form>
            <div className="form-outer">
              <span className="form-outer-label-branchmaster">
                <label htmlFor="branch">Branch </label>
              </span>
              <span className="form-outer-input-branchmaster">
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
                      {filteredBranches.map((option) => (
                        <li key={option.value} onClick={() => handleBranchSelect(option)}>
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </span>
            </div>

            <div className="form-outer">
              <span className="form-outer-label-branchmaster">
                <label htmlFor="contactPerson">Contact Person </label>
              </span>
              <span className="form-outer-input-branchmaster">
                <input
                  type="text"
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  required
                />
              </span>
            </div>

            <div className="form-outer">
              <span className="form-outer-label-branchmaster">
                <label htmlFor="address">Address </label>
              </span>
              <span className="form-outer-input-branchmaster">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </span>
            </div>

            <div className="form-outer">
              <span className="form-outer-label-branchmaster">
                <label htmlFor="street">Street </label>
              </span>
              <span className="form-outer-input-branchmaster">
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  required
                />
              </span>
            </div>

            <div className="form-outer">
              <span className="form-outer-label-branchmaster">
                <label htmlFor="city">City </label>
              </span>
              <span className="form-outer-input-branchmaster" style={{ width: '50%' }}>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                >
                  <option value="">Select City</option>
                  {cities.map((cityOption) => (
                    <option key={cityOption.id} value={cityOption.name}>
                      {cityOption.City_Name}
                    </option>
                  ))}
                </select>
              </span>
              <span style={{fontWeight:'bold'}}>{statename}</span>
            </div>

            <div className="form-outer">
              <span className="form-outer-label-branchmaster">
                <label htmlFor="contactNo">Contact No.</label>
              </span>
              <span className="form-outer-input-branchmaster">
                <input
                  type="text"
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                  required
                />
              </span>
            </div>

            <div className="form-outer">
              <span className="form-outer-label-branchmaster">
                <label htmlFor="emailId">Email ID</label>
              </span>
              <span className="form-outer-input-branchmaster">
                <input
                  type="text"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                  required
                />
              </span>
            </div>

            <div className="form-outer">
              <span className="form-outer-label-branchmaster">
                <label htmlFor="gstNo">GST No.</label>
              </span>
              <span className="form-outer-input-branchmaster">
                <input
                  type="text"
                  value={gstNo}
                  onChange={(e) => setGstNo(e.target.value)}
                  required
                />
              </span>
            </div>
          </form>
        </div>
        <div className="branchmaster-main-container-row3">
          <div className="branchmaster-button">
            <button type="button" onClick={handleSave}>Save</button>
            <button type="button" onClick={handleDelete}>Delete</button>
            <button type="button" onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
