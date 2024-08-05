import React, { createContext, useState, useEffect } from "react";

export const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
    const [clients, setClients] = useState([])
    const [clientPickupAddress, setClientPickupAddress] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/clients')
            .then(response => response.json())
            .then(data => {
                if (data.statusCode === 200) {
                    setClients(data.clients);
                }
            })
            .catch(error => console.error("Error fetching clients:", error));
    }, []);
    
    



    useEffect(() => {
        fetch('http://localhost:3001/client-pickup-data')
            .then(response => response.json())
            .then(data => {
                if (data.statusCode === 200) {
                    setClientPickupAddress(data.clientPickupAddress);
                }
            })
            .catch(error => console.error("Error fetching clients:", error));
    }, []);

  

    return (
        <ClientContext.Provider value={{ clients, clientPickupAddress }}> {/* Include cities in context */}
            {children}
        </ClientContext.Provider>
    );
};
