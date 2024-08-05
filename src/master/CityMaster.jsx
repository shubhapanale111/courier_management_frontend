import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/citymaster.css";

export default function CityMaster() {
  const [cities, setCities] = useState([]);
  const [cityNameOptions, setCityNameOptions] = useState([]);
  const [cityCodeOptions, setCityCodeOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const [zoneOptions, setZoneOptions] = useState([]);
  const [selectedCityDetails, setSelectedCityDetails] = useState({
    cityCode: "",
    state: "",
    country: "",
    zone: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCityNames, setFilteredCityNames] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  useEffect(() => {
    fetch("http://localhost:3001/cities")
      .then((response) => response.json())
      .then((data) => {
        setCities(data.cities);
        setCityNameOptions([...new Set(data.cities.map((city) => city.City_Name))]);
        setCityCodeOptions([...new Set(data.cities.map((city) => city.CITYCODE))]);
        setStateOptions([...new Set(data.cities.map((city) => city.state))]);
        setCountryOptions([...new Set(data.cities.map((city) => city.country_name))]);
        setZoneOptions([...new Set(data.cities.map((city) => city.Zone))]);
      })
      .catch((error) => console.error("Error fetching cities:", error));
  }, []);

  const handleCityNameChange = (selectedCityName) => {
    const selectedCity = cities.find((city) => city.City_Name === selectedCityName);

    if (selectedCity) {
      setSelectedCityDetails({
        cityCode: selectedCity.CITYCODE,
        state: selectedCity.state,
        country: selectedCity.country_name,
        zone: selectedCity.Zone,
      });
    } else {
      setSelectedCityDetails({
        cityCode: "",
        state: "",
        country: "",
        zone: "",
      });
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    filterCityNames(value);
    setIsOpen(true); // Open dropdown when input changes
  };

  const filterCityNames = (value) => {
    const filteredNames = cityNameOptions.filter((name) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCityNames(filteredNames);
  };

  const handleCityNameSelect = (name) => {
    setSearchTerm(name);
    handleCityNameChange(name);
    setFilteredCityNames([]);
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalCityDetails = {
      CITYCODE: selectedCityDetails.cityCode,
      City_Name: searchTerm,
      state: selectedCityDetails.state,
      country_name: selectedCityDetails.country,
      Zone: selectedCityDetails.zone,
    };

    fetch('http://localhost:3001/cities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(finalCityDetails),
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        console.log('sending data: ', finalCityDetails);
        alert('City Data saved!!!');
        
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="citymaster-container">
      <div className="citymaster-main-container mt-5">
        <div className="citymaster-main-container-row1" style={{ color: "maroon" }}>
          City Master
        </div>
        <div className="citymaster-main-container-row2">
          <form>
            <div className="form-outer">
              <span className="form-outer-label-citymaster">
                <label htmlFor="cityName">City Name </label>
              </span>
              <span className="form-outer-input-citymaster">
                <div className="searchable-select" ref={dropdownRef}>
                  <div className="input-container">
                    <input
                      type="text"
                      id="cityName"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={handleInputChange}
                    />
                    <span className="dropdown-icon" onClick={() => setIsOpen(!isOpen)}>v</span>
                  </div>
                  {isOpen && (
                    <ul className="options">
                      {filteredCityNames.map((name, index) => (
                        <li key={index} onClick={() => handleCityNameSelect(name)}>
                          {name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </span>
            </div>

            <div className="form-outer">
              <span className="form-outer-label-citymaster">
                <label htmlFor="cityCode">City Code </label>
              </span>
              <span className="form-outer-input-citymaster">
                <select id="cityCode" value={selectedCityDetails.cityCode} onChange={(e) => setSelectedCityDetails({ ...selectedCityDetails, cityCode: e.target.value })}>
                  <option value=""></option>
                  {cityCodeOptions.map((code, index) => (
                    <option key={index} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
              </span>
            </div>

            <div className="form-outer">
              <span className="form-outer-label-citymaster">
                <label htmlFor="state">State </label>
              </span>
              <span className="form-outer-input-citymaster">
                <select id="state" value={selectedCityDetails.state} onChange={(e) => setSelectedCityDetails({ ...selectedCityDetails, state: e.target.value })}>
                  <option value=""></option>
                  {stateOptions.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </span>
            </div>

            <div className="form-outer">
              <span className="form-outer-label-citymaster">
                <label htmlFor="country">Country </label>
              </span>
              <span className="form-outer-input-citymaster">
                <select id="country" value={selectedCityDetails.country} onChange={(e) => setSelectedCityDetails({ ...selectedCityDetails, country: e.target.value })}>
                  <option value=""></option>
                  {countryOptions.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </span>
            </div>

            <div className="form-outer">
              <span className="form-outer-label-citymaster">
                <label htmlFor="zone">Zone </label>
              </span>
              <span className="form-outer-input-citymaster">
                <select id="zone" value={selectedCityDetails.zone} onChange={(e) => setSelectedCityDetails({ ...selectedCityDetails, zone: e.target.value })}>
                  <option value=""></option>
                  {zoneOptions.map((zone, index) => (
                    <option key={index} value={zone}>
                      {zone}
                    </option>
                  ))}
                </select>
              </span>
            </div>
          </form>
        </div>
        <div className="citymaster-main-container-row3">
          <div className="citymaster-button">
            <button onClick={handleSubmit}>Save</button>
            <button>Delete</button>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
