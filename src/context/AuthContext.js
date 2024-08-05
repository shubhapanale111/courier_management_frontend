// import React, { createContext, useState } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

  
//   return (
//     <AuthContext.Provider value={{ isLoggedIn,setIsLoggedIn }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

/*
//stage 2 working code for login without the userdata
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedState=localStorage.getItem('isLoggedIn');
    return savedState === 'true' || false;
  });


  useEffect(() => {
    localStorage.setItem('isLoggedIn',isLoggedIn);
  }, [isLoggedIn]);

  
  return (
    <AuthContext.Provider value={{ isLoggedIn,setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
*/
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedState = localStorage.getItem('isLoggedIn');
    return savedState === 'true' || false;
  });

  const [userData, setUserData] = useState(() => {
    const savedData = localStorage.getItem('userData');
    return savedData ? JSON.parse(savedData) : null;
  });

  const getUserRoles = (data) => {
    return data?.urgt ? data.urgt.match(/.{1,2}/g) : [];
  };

  const [userRoles, setUserRoles] = useState(() => {
    const savedRoles = localStorage.getItem('userRoles');
    return savedRoles ? JSON.parse(savedRoles) : getUserRoles(userData);
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
    if (userData) {
      localStorage.setItem('userData', JSON.stringify(userData));
      const roles = getUserRoles(userData);
      setUserRoles(roles);
      localStorage.setItem('userRoles', JSON.stringify(roles));
    } else {
      localStorage.removeItem('userData');
      localStorage.removeItem('userRoles');
    }
  }, [isLoggedIn, userData]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userData, setUserData, userRoles }}>
      {children}
    </AuthContext.Provider>
  );
};
