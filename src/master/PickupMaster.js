import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/pickupmaster.css";
import { MasterContext } from "../context/MasterContext";

export default function PickupMaster() {
    const navigate = useNavigate();
    const { pickups, branches } = useContext(MasterContext);

    const [selectedPickup, setSelectedPickup] = useState("");
    const [formData, setFormData] = useState({
        pcode: "",
        branch: "",
        pname: "",
        address: "",
        phone: "",
        perKgRate: ""
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPickups, setFilteredPickups] = useState(pickups);
    const [isOpen, setIsOpen] = useState(false);
    const [branchOptions, setBranchOptions] = useState([]);
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (selectedPickup) {
            const pickupData = pickups.find(pickup => pickup.pcode === selectedPickup);
            if (pickupData) {
                setFormData({
                  pcode: pickupData.pcode,
                    branch: pickupData.branch,
                    pname: pickupData.pname,
                    address: pickupData.address,
                    phone: pickupData.phone,
                    pkrate: pickupData.pkrate
                });
            }
        }
    }, [selectedPickup, pickups]);

    useEffect(() => {
        // Filter pickups based on search term
        const filtered = pickups.filter(pickup =>
            pickup.pcode.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPickups(filtered);
    }, [searchTerm, pickups]);

    useEffect(() => {
        // Set branch options from context
        setBranchOptions(branches);
    }, [branches]);

    const handleSelectChange = (event) => {
        setSelectedPickup(event.target.value);
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        setIsOpen(true);
    };

    const handleOptionSelect = (pcode) => {
        setSelectedPickup(pcode);
        setSearchTerm(pcode);
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

    const handleClose = () => {
        navigate("/");
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    
    const handleSave = async () => {
      try {
        console.log('sending data : ',formData);
          const response = await fetch('http://localhost:3001/pickups', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
          });
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
        
          const data = await response.json();
          alert('Data saved successfully:', data);
      } catch (error) {
          alert('Error saving data:', error);
      }
  };

  const handleDelete = async () => {
      try {
          const response = await fetch(`http://localhost:3001/pickups/${formData.pcode}`, {
              method: 'DELETE',
          });
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          alert('Data deleted successfully');
          // Optionally reset form data or fetch updated data
      } catch (error) {
          alert('Error deleting data:', error);
      }
  };

    return (
        <div className="pickupmaster-container">
            <div className="pickupmaster-main-container mt-5">
                <div className="pickupmaster-main-container-row1" style={{ color: "maroon" }}>
                    Pickup/Delivery Agent
                </div>
                <div className="pickupmaster-main-container-row2">
                    <form>
                        <div className="form-outer">
                            <span className="form-outer-label-pickupmaster">
                                <label htmlFor="code">CODE</label>
                            </span>
                            <span className="form-outer-input-pickupmaster" style={{ width: "40%" }}>
                                <div className="searchable-select" ref={dropdownRef}>
                                    <div className="input-container">
                                        <input
                                            type="text"
                                            id="pcode"
                                            placeholder="Search Code..."
                                            value={searchTerm}
                                            onChange={handleInputChange}
                                            onClick={toggleDropdown}
                                            required
                                        />
                                        <span className="dropdown-icon" onClick={toggleDropdown}>v</span>
                                    </div>
                                    {isOpen && (
                                        <ul className="options">
                                            {filteredPickups.map(pickup => (
                                                <li
                                                    key={pickup.pcode}
                                                    onClick={() => handleOptionSelect(pickup.pcode)}
                                                >
                                                    {pickup.pcode}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-pickupmaster">
                                <label htmlFor="branch">Branch</label>
                            </span>
                            <span className="form-outer-input-pickupmaster">
                                <select
                                    id="branch"
                                    value={formData.branch}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Branch</option>
                                    {branchOptions.map(branch => (
                                        <option key={branch.id} value={branch.bname}>
                                            {branch.bname}
                                        </option>
                                    ))}
                                </select>
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-pickupmaster">
                                <label htmlFor="name">Name</label>
                            </span>
                            <span className="form-outer-input-pickupmaster">
                                <input
                                    type="text"
                                    id="pname"
                                    value={formData.pname}
                                    onChange={handleChange}
                                />
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-pickupmaster">
                                <label htmlFor="address">Address</label>
                            </span>
                            <span className="form-outer-input-pickupmaster">
                                <input
                                    type="text"
                                    id="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-pickupmaster">
                                <label htmlFor="phone">Phone</label>
                            </span>
                            <span className="form-outer-input-pickupmaster">
                                <input
                                    type="text"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-pickupmaster">
                                <label htmlFor="perKgRate">Per Kg Rate</label>
                            </span>
                            <span className="form-outer-input-pickupmaster" style={{ width: "20%" }}>
                                <input
                                    type="text"
                                    id="pkrate"
                                    value={formData.pkrate}
                                    onChange={handleChange}
                                />
                            </span>
                        </div>
                    </form>
                </div>
                <div className="pickupmaster-main-container-row3">
                    <div className="pickupmaster-button">
                        <button onClick={handleSave}>Save</button>
                        <button onClick={handleDelete}>Delete</button>
                        <button onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
