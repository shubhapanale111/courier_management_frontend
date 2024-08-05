import React, { createContext, useState, useEffect } from "react";

export const MasterContext = createContext();

export const MasterProvider = ({ children }) => {
    const [states, setStates] = useState([]);
    const [pincodes, setPincodes] = useState([]);
    const [cities, setCities] = useState([]); 
    const [branches, setBranches] = useState([]);
    const [pickups, setPickups] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/states')
            .then(response => response.json())
            .then(data => {
                if (data.statusCode === 200) {
                    setStates(data.states.filter(state => state.state));
                }
            })
            .catch(error => console.error("Error fetching states:", error));
    }, []);

    useEffect(() => {
        fetch('http://localhost:3001/pincodes')
            .then(response => response.json())
            .then(data => {
                if (data.statusCode === 200) {
                    setPincodes(data.pincodes);
                }
            })
            .catch(error => console.error("Error fetching pincodes:", error));
    }, []);

    useEffect(() => {
        fetch('http://localhost:3001/cities') // Add the new API endpoint for cities
            .then(response => response.json())
            .then(data => {
                if (data.statusCode === 200) {
                    setCities(data.cities); // Update state with cities data
                }
            })
            .catch(error => console.error("Error fetching cities:", error));
    }, []);

    useEffect(() => {
        fetch('http://localhost:3001/branches')
            .then(response => response.json())
            .then(data => {
                if (data.statusCode === 200) {
                    setBranches(data.branches);
                }
            })
            .catch(error => console.error("Error fetching branches:", error));
    }, []);
    useEffect(() => {
        fetch('http://localhost:3001/pickups')
            .then(response => response.json())
            .then(data => {
                if (data.statusCode === 200) {
                    setPickups(data.pickups);
                }
            })
            .catch(error => console.error("Error fetching branches:", error));
    }, []);

    return (
        <MasterContext.Provider value={{ states, pincodes, cities,branches,pickups }}> {/* Include cities in context */}
            {children}
        </MasterContext.Provider>
    );
};
