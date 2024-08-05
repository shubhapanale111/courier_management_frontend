import React, { createContext, useState, useEffect } from 'react';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3001/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsers(data); // Assuming data is an array
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ApiContext.Provider value={{ users, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
};
