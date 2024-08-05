// // import React, { useContext, useState } from 'react';
// // import '../Style/loginform.css';
// // import { useNavigate } from 'react-router-dom';
// // import { AuthContext } from '../context/AuthContext';

// // function LoginForm() {
// //     const [username, setUsername] = useState('');
// //     const [pass, setPass] = useState('');
// //     const [branch, setBranch] = useState('JV Express');
// //     const { setIsLoggedIn, setUserData } = useContext(AuthContext);

// //     const navigate = useNavigate();

// //     const handleLogin = async (e) => {
// //         e.preventDefault();

// //         const response = await fetch('http://localhost:3001/login', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify({ username, pass, branch }),
// //         });

// //         const data = await response.json();

// //         if (response.ok) {
// //             setIsLoggedIn(true);
// //             setUserData(data.data);
// //             navigate('/home');
// //         } else {
// //             alert(data.message || 'Login failed');
// //         }
// //     };

// //     return (
// //         <div className="login-container">
// //             <div className="login-main-container">
// //                 <div className="login-row1"></div>
// //                 <div className="login-row2">
// //                     <div className="secondrow-heading">
// //                         <h3>User Login</h3>
// //                     </div>
// //                 </div>
// //                 <div className="login-row3">
// //                     <div className="row3-col1"></div>
// //                     <div className="row3-col2">
// //                         <form onSubmit={handleLogin}>
// // <div className="form-group">
// //     <span className="label-field" style={{ width: '15%', fontWeight: '600' }}>
// //         <label htmlFor="branch">Branch</label>
// //     </span>
// //     <span className="input-field" style={{ width: '50%' }}>
// //         <select id="branch" value={branch} onChange={(e) => setBranch(e.target.value)}>
// //             <option value="JV Express">JV Express</option>
// //             <option value="SELF">SELF</option>
// //         </select>
// //     </span>
// // </div>
// // <div className="form-group">
// //     <span className="label-field" style={{ width: '15%', fontWeight: '600' }}>
// //         <label htmlFor="username">Login</label>
// //     </span>
// //     <span className="input-field" style={{ width: '50%' }}>
// //         <input
// //             id="username"
// //             placeholder="username"
// //             type="text"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //         />
// //     </span>
// // </div>
// // <div className="form-group">
// //     <span className="label-field" style={{ width: '15%', fontWeight: '600' }}>
// //         <label htmlFor="pass">Password</label>
// //     </span>
// //     <span className="input-field" style={{ width: '50%' }}>
// //         <input
// //             id="pass"
// //             placeholder="password"
// //             type="password"
// //             value={pass}
// //             onChange={(e) => setPass(e.target.value)}
// //         />
// //     </span>
// // </div>
// //                             <div className="form-group">
// //                                 <div className="ci-button" >
// //                                     <button type="submit" style={{ width: '100px'}}>Login</button>
// //                                 </div>
// //                             </div>
// //                         </form>
// //                     </div>
// //                 </div>
// //                 <div className="login-row4">
//                     // <div className="baseheading">
//                     //     <h5>By Softec</h5>
//                     // </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default LoginForm;

// import React, { useContext, useState } from "react";
// import "../Style/loginform.css";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// function LoginForm() {
//   const [username, setUsername] = useState("");
//   const [pass, setPass] = useState("");
//   const [branch, setBranch] = useState("JV Express");
//   const { setIsLoggedIn, setUserData } = useContext(AuthContext);

//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const response = await fetch("http://localhost:3001/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, pass, branch }),
//     });

//     const data = await response.json();

//     if (response.ok) {
//       setIsLoggedIn(true);
//       setUserData(data.data);
//       navigate("/home");
//     } else {
//       alert(data.message || "Login failed");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-main">
//         <div className="login-main-row1">
//           <span className="title-name" style={{ color: "maroon" }}>
//             OCMS
//           </span>
//           <br />
//           <div style={{ marginTop: "-5px", color: "black" }}>
//             Online Courier Management System
//           </div>
//         </div>
//         <div className="login-main-row2">
//           <div className="login-form">
//             <center>Login</center>
//             <form onSubmit={handleLogin}>
//             <div className="form-group">
//               <span
//                 className="label-field"
//                 style={{ width: "20%", fontWeight: "600" }}
//               >
//                 <label htmlFor="branch">Branch</label>
//               </span>
//               <span className="input-field" style={{ width: "80%" }}>
//                 <select
//                   id="branch"
//                   value={branch}
//                   onChange={(e) => setBranch(e.target.value)}
//                 >
//                   <option value="JV Express">JV Express</option>
//                   <option value="SELF">SELF</option>
//                 </select>
//               </span>
//             </div>
//             <div className="form-group">
//               <span
//                 className="label-field"
//                 style={{ width: "20%", fontWeight: "600" }}
//               >
//                 <label htmlFor="username">Login</label>
//               </span>
//               <span className="input-field" style={{ width: "80%" }}>
//                 <input
//                   id="username"
//                   placeholder="username"
//                   type="text"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </span>
//             </div>
//             <div className="form-group">
//               <span
//                 className="label-field"
//                 style={{ width: "20%", fontWeight: "600" }}
//               >
//                 <label htmlFor="pass">Password</label>
//               </span>
//               <span className="input-field" style={{ width: "80%" }}>
//                 <input
//                   id="pass"
//                   placeholder="password"
//                   type="password"
//                   value={pass}
//                   onChange={(e) => setPass(e.target.value)}
//                 />
//               </span>
//             </div>
//             <div className="form-group">
//               <span
//                 className="label-field"
//                 style={{ width: "20%", fontWeight: "600" }}
//               >
//                 <label htmlFor="pass"></label>
//               </span>
//               <span className="input-field" style={{ width: "80%" }}>
//                 <button className="login-button">Login</button>
//               </span>
//             </div>
//           </form></div>
//         </div>
//         <div className="login-main-row3">
//         <div className="baseheading">
//                         <h5>By Softec</h5>
//                     </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;

// import React, { useContext, useState } from 'react';
// import '../Style/loginform.css';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// function LoginForm() {
//     const [username, setUsername] = useState('');
//     const [pass, setPass] = useState('');
//     const [branch, setBranch] = useState('JV Express');
//     const { setIsLoggedIn, setUserData } = useContext(AuthContext);

//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         const response = await fetch('http://localhost:3001/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ username, pass, branch }),
//         });

//         const data = await response.json();

//         if (response.ok) {
//             setIsLoggedIn(true);
//             setUserData(data.data);
//             navigate('/home');
//         } else {
//             alert(data.message || 'Login failed');
//         }
//     };

//     return (
//         <div className="login-container">
//             <div className="login-main-container">
//                 <div className="login-row1"></div>
//                 <div className="login-row2">
//                     <div className="secondrow-heading">
//                         <h3>User Login</h3>
//                     </div>
//                 </div>
//                 <div className="login-row3">
//                     <div className="row3-col1"></div>
//                     <div className="row3-col2">
//                         <form onSubmit={handleLogin}>
// <div className="form-group">
//     <span className="label-field" style={{ width: '15%', fontWeight: '600' }}>
//         <label htmlFor="branch">Branch</label>
//     </span>
//     <span className="input-field" style={{ width: '50%' }}>
//         <select id="branch" value={branch} onChange={(e) => setBranch(e.target.value)}>
//             <option value="JV Express">JV Express</option>
//             <option value="SELF">SELF</option>
//         </select>
//     </span>
// </div>
// <div className="form-group">
//     <span className="label-field" style={{ width: '15%', fontWeight: '600' }}>
//         <label htmlFor="username">Login</label>
//     </span>
//     <span className="input-field" style={{ width: '50%' }}>
//         <input
//             id="username"
//             placeholder="username"
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//         />
//     </span>
// </div>
// <div className="form-group">
//     <span className="label-field" style={{ width: '15%', fontWeight: '600' }}>
//         <label htmlFor="pass">Password</label>
//     </span>
//     <span className="input-field" style={{ width: '50%' }}>
//         <input
//             id="pass"
//             placeholder="password"
//             type="password"
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//         />
//     </span>
// </div>
//                             <div className="form-group">
//                                 <div className="ci-button" >
//                                     <button type="submit" style={{ width: '100px'}}>Login</button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//                 <div className="login-row4">
                    // <div className="baseheading">
                    //     <h5>By Softec</h5>
                    // </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default LoginForm;

import React, { useContext, useState, useRef } from "react";
import "../Style/loginform.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [branch, setBranch] = useState("JV_Express");
  const { setIsLoggedIn, setUserData } = useContext(AuthContext);

  const navigate = useNavigate();

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const loginButtonRef = useRef(null);

  const handleKeyDown = (event, nextFieldRef) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      if (nextFieldRef.current) {
        nextFieldRef.current.focus(); // Move focus to the next field
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, pass, branch }),
    });

    const data = await response.json();

    if (response.ok) {
      setIsLoggedIn(true);
      setUserData(data.data);
      navigate("/home");
    } else {
      alert(data.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-main">
        <div className="login-main-row1">
          <span className="title-name" style={{ color: "maroon" }}>
            OCMS
          </span>
          <br />
          <div style={{ marginTop: "-5px", color: "black" }}>
            Online Courier Management System
          </div>
        </div>
        <div className="login-main-row2">
          <div className="login-form">
            <center>Login</center>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <span
                  className="label-field"
                  style={{ width: "20%", fontWeight: "600" }}
                >
                  <label htmlFor="branch">Branch</label>
                </span>
                <span className="input-field" style={{ width: "80%" }}>
                  <select
                    id="branch"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    onKeyDown={(event) => handleKeyDown(event, usernameRef)}
                  >
                    <option value="JV_Express">JV Express</option>
                    <option value="SELF">SELF</option>
                  </select>
                </span>
              </div>
              <div className="form-group">
                <span
                  className="label-field"
                  style={{ width: "20%", fontWeight: "600" }}
                >
                  <label htmlFor="username">Login</label>
                </span>
                <span className="input-field" style={{ width: "80%" }}>
                  <input
                    id="username"
                    placeholder="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={(event) => handleKeyDown(event, passwordRef)}
                    ref={usernameRef}
                  />
                </span>
              </div>
              <div className="form-group">
                <span
                  className="label-field"
                  style={{ width: "20%", fontWeight: "600" }}
                >
                  <label htmlFor="pass">Password</label>
                </span>
                <span className="input-field" style={{ width: "80%" }}>
                  <input
                    id="pass"
                    placeholder="password"
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    onKeyDown={(event) => handleKeyDown(event, loginButtonRef)}
                    ref={passwordRef}
                  />
                </span>
              </div>
              <div className="form-group">
                <span
                  className="label-field"
                  style={{ width: "20%", fontWeight: "600" }}
                >
                  <label htmlFor="pass"></label>
                </span>
                <span className="input-field" style={{ width: "80%" }}>
                  <button
                    className="login-button"
                    ref={loginButtonRef}
                    onKeyDown={(event) => handleKeyDown(event, null)}
                  >
                    Login
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="login-main-row3">
          <div className="baseheading">
            <h5>By Softec</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
