// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../Style/countrymaster.css";
// export default function CountryMaster() {
//   const navigate = useNavigate();

//   const handlClose = () => {
//     navigate("/");
//   };
//   return (
//     <div className="countrymaster-container">
//       <div class="countrymaster-main-container mt-5">
//         <div
//           class="countrymaster-main-container-row1"
//           style={{ color: "maroon" }}
//         >
//           Country Master{" "}
//         </div>
//         <div class="countrymaster-main-container-row2">
//           <form>
//             <div className="form-outer">
//               <span className="pickup-label" style={{width:'15%'}}>
//                 <label for="fname">Area Name</label>
//               </span>
//               <span className="pickup-input">
//               <select id="company">
//                     <option value=""></option>
//                     <option value="company1"> network 1</option>
//                     <option value="company2"> network 2</option>
//                     <option value="company3"> network 3</option>
//                   </select>
//               </span>
//             </div>
//           </form>
//         </div>

//         <div class="countrymaster-main-container-row3">
//           <div className="countrymaster-button">
//             <button>Save</button>
//             <button>Delete</button>
//             <button onClick={handlClose}>Close</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/countrymaster.css";

export default function CountryMaster() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await axios.get("http://localhost:3001/countries");
      setCountries(response.data.countries);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const handleSave = async () => {
    if (!selectedCountry) return;

    try {
      const country = countries.find((c) => c.Country_Name === selectedCountry);
      if (country) {
        // Update existing country
        await axios.put(`http://localhost:3001/countries/${selectedCountry}`, {
          New_Country_Name: selectedCountry,
        });
        alert("Country updated successfully");
      } else {
        // Create new country
        await axios.post("http://localhost:3001/countries", {
          Country_Name: selectedCountry,
        });
        alert("Country created successfully");
      }
      fetchCountries();
      setSelectedCountry("");
    } catch (error) {
      console.error("Error saving country:", error);
    }
  };

  const handleDelete = async () => {
    if (!selectedCountry) return;

    try {
      await axios.delete(`http://localhost:3001/countries/${selectedCountry}`);
      alert("Country deleted successfully");
      fetchCountries();
      setSelectedCountry("");
    } catch (error) {
      console.error("Error deleting country:", error);
    }
  };

  const handleCountryChange = (e) => {
    const selected = e.target.value;
    setSelectedCountry(selected);
  };

  const handlClose = () => {
    navigate("/");
  };

  return (
    <div className="countrymaster-container">
      <div className="countrymaster-main-container mt-5">
        <div className="countrymaster-main-container-row1" style={{ color: "maroon" }}>
          Country Master
        </div>
        <div className="countrymaster-main-container-row2">
          <form>
            <div className="form-outer">
              <span className="pickup-label" style={{ width: '15%' }}>
                <label htmlFor="country">Country</label>
              </span>
              <span className="pickup-input">
                <input
                  type="text"
                  id="country"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  list="country-options"
                />
                <datalist id="country-options">
                  {countries.map((country) => (
                    <option key={country.Country_Name} value={country.Country_Name}>
                      {country.Country_Name}
                    </option>
                  ))}
                </datalist>
              </span>
            </div>
          </form>
        </div>
        <div className="countrymaster-main-container-row3">
          <div className="countrymaster-button">
            <button type="button" onClick={handleSave}>Save</button>
            <button type="button" onClick={handleDelete}>Delete</button>
            <button type="button" onClick={handlClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

