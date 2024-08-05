

import React, { useState, useEffect ,useRef} from "react";
import { useNavigate } from "react-router-dom";
import "../Style/style.css";

export default function UserCreationForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    branch: "",
    role: "general",
    admin: false,
    master: false,
    transaction: false,
    tools: false,
    customercare: false,
    billing: false,
    mis: false,
    account: false,
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const branchRef = useRef(null);

  // Function to fetch users data from API
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3001/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsers(data.users); // Assuming data.users is the array of users
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  // Fetch users data on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleFormChange = (event) => {
    const { id, value, type, checked } = event.target;

    if (type === "radio") {
      setFormData({
        ...formData,
        role: value,
      });
    } else if (type === "checkbox") {
      setFormData({
        ...formData,
        [id]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Create a string representation for the checkbox states
    const checkboxData = [];
    if (formData.admin) checkboxData.push("Ad");
    if (formData.master) checkboxData.push("Ma");
    if (formData.transaction) checkboxData.push("Tr");
    if (formData.tools) checkboxData.push("To");
    if (formData.customercare) checkboxData.push("Cu");
    if (formData.billing) checkboxData.push("Bi");
    if (formData.mis) checkboxData.push("M.");
    if (formData.account) checkboxData.push("Ac");

    const jsonData = {
      username: formData.username,
      password: formData.password,
      branch: formData.branch,
      role: formData.role,
      admin: formData.admin,
      master: formData.master,
      transaction: formData.transaction,
      tools: formData.tools,
      customercare: formData.customercare,
      billing: formData.billing,
      mis: formData.mis,
      account: formData.account,
    };

    try {
      const response = await fetch('http://localhost:3001/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });
      const result = await response.json();
      if (response.status === 201) {
        setUsers([...users, result]);
        alert(`Success: ${result.message}`);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleRowClick = (user) => {
    setSelectedUser(user);
    setShowConfirmation(true);
  };

  const handleDeleteUser = async () => {
    if (selectedUser) {
      try {
        const response = await fetch(`http://localhost:3001/users/${selectedUser.username}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setUsers(users.filter(user => user.username !== selectedUser.username));
          alert('User deleted successfully');
        } else {
          const result = await response.json();
          alert(`Error: ${result.message}`);
        }
      } catch (error) {
        alert(`Error: ${error.message}`);
      } finally {
        setShowConfirmation(false);
        setSelectedUser(null);
      }
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
    setSelectedUser(null);
  };

  const handleClose = () => {
    navigate("/");
  };


    // Handle key down event
    const handleKeyDown = (event, nextFieldRef) => {
      if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        if (nextFieldRef && nextFieldRef.current) {
          nextFieldRef.current.focus(); // Move focus to the next field
        }
      }
    };
  return (
    <div className="user-ceration-container">
      <div className="user-ceration-form mt-5">
        <div className="row1" style={{ color: "maroon", fontWeight: "700" }}>
          <span className="right">User Creation</span>
        </div>
        <div className="row2">
          <div className="row2-left">
            <form>
              <div className="uppersection">
                <div className="form-group">
                  <span className="label-feild">
                    <label htmlFor="username">Username</label>
                  </span>
                  <span className="input-feild">
                    <input
                      id="username"
                      placeholder="username"
                      type="text"
                      value={formData.username}
                      onChange={handleFormChange}
                      onKeyDown={(event) => handleKeyDown(event, passwordRef)}
                      ref={usernameRef}
                    />
                  </span>
                </div>
                <div className="form-group">
                  <span className="label-feild">
                    <label htmlFor="password">Password</label>
                  </span>
                  <span className="input-feild">
                    <input
                      id="password"
                      placeholder="password"
                      type="password"
                      value={formData.password}
                      onChange={handleFormChange}
                      onKeyDown={(event) => handleKeyDown(event,branchRef)}
                      ref={passwordRef}
                    />
                  </span>
                </div>
                <div className="form-group">
                  <span className="label-feild">
                    <label htmlFor="branch">Branch</label>
                  </span>
                  <span className="input-feild">
                    <select
                      id="branch"
                      value={formData.branch}
                      onChange={handleFormChange}
                      onKeyDown={(event) => handleKeyDown(event,null)}
                      ref={branchRef}
                    >
                      <option value="JV_Express">JV Express</option>
                      <option value="SELF">SELF</option>
                    </select>
                  </span>
                </div>
                <div className="radio-group" style={{ marginLeft: "35px" }}>
                  <div className="radio-group">
                    <input
                      id="role-general"
                      type="radio"
                      name="role"
                      value="general"
                      checked={formData.role === "general"}
                      onChange={handleFormChange}
                    />
                    <label htmlFor="general">General</label>
                  </div>
                  <div className="radio-group" style={{ marginLeft: "45px" }}>
                    <input
                      id="role-admin"
                      type="radio"
                      name="role"
                      value="admin"
                      checked={formData.role === "admin"}
                      onChange={handleFormChange}
                    />
                    <label htmlFor="admin">Admin</label>
                  </div>
                </div>
              </div>
              <div className="lowersection">
                <div className="lowersection-main">
                  <div className="checkbox-section">
                    <span className="checkbox-section-element1">
                      <input
                        id="admin"
                        type="checkbox"
                        checked={formData.admin}
                        onChange={handleFormChange}
                      />
                    </span>
                    <span className="checkbox-section-element2">
                      <label htmlFor="admin">Admin</label>
                    </span>
                  </div>
                  <div className="checkbox-section">
                    <span className="checkbox-section-element1">
                      <input
                        id="master"
                        type="checkbox"
                        checked={formData.master}
                        onChange={handleFormChange}
                      />
                    </span>
                    <span className="checkbox-section-element2">
                      <label htmlFor="master">Master</label>
                    </span>
                  </div>
                  <div className="checkbox-section">
                    <span className="checkbox-section-element1">
                      <input
                        id="transaction"
                        type="checkbox"
                        checked={formData.transaction}
                        onChange={handleFormChange}
                      />
                    </span>
                    <span className="checkbox-section-element2">
                      <label htmlFor="transaction">Transaction</label>
                    </span>
                  </div>
                  <div className="checkbox-section">
                    <span className="checkbox-section-element1">
                      <input
                        id="tools"
                        type="checkbox"
                        checked={formData.tools}
                        onChange={handleFormChange}
                      />
                    </span>
                    <span className="checkbox-section-element2">
                      <label htmlFor="tools">Tools</label>
                    </span>
                  </div>
                  <div className="checkbox-section">
                    <span className="checkbox-section-element1">
                      <input
                        id="customercare"
                        type="checkbox"
                        checked={formData.customercare}
                        onChange={handleFormChange}
                      />
                    </span>
                    <span className="checkbox-section-element2">
                      <label htmlFor="customercare">Customer Care</label>
                    </span>
                  </div>
                  <div className="checkbox-section">
                    <span className="checkbox-section-element1">
                      <input
                        id="billing"
                        type="checkbox"
                        checked={formData.billing}
                        onChange={handleFormChange}
                      />
                    </span>
                    <span className="checkbox-section-element2">
                      <label htmlFor="billing">Billing</label>
                    </span>
                  </div>
                  <div className="checkbox-section">
                    <span className="checkbox-section-element1">
                      <input
                        id="mis"
                        type="checkbox"
                        checked={formData.mis}
                        onChange={handleFormChange}
                      />
                    </span>
                    <span className="checkbox-section-element2">
                      <label htmlFor="mis">M.I.S</label>
                    </span>
                  </div>
                  <div className="checkbox-section">
                    <span className="checkbox-section-element1">
                      <input
                        id="account"
                        type="checkbox"
                        checked={formData.account}
                        onChange={handleFormChange}
                      />
                    </span>
                    <span className="checkbox-section-element2">
                      <label htmlFor="account">Account</label>
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="row2-right">
            <div className="store-data-section" style={{height:'40vh',overflowY:'scroll'}}>
              <table className="table table-bordered mt-4">
                <thead>
                  <tr>
                    <th>USERNAME</th>
                    <th>PASS</th>
                    <th>UTYPE</th>
                    <th>BRANCH</th>
                  </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                  <tr key={index} onClick={() => handleRowClick(user)}>
                    <td>{user.username}</td>
                    <td>{user.pass}</td>
                    <td>{user.utype}</td>
                    <td>{user.branch}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row3">
          <span className="row3-span">
            <button className="btn btn-primary" onClick={handleFormSubmit}>
              SAVE
            </button>
            <button className="btn btn-secondary" onClick={handleClose}>
              CANCEL
            </button>
          </span>
        </div>
      </div>
      {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete {selectedUser.username}?</p>
          <button className="btn btn-danger" onClick={handleDeleteUser}>Delete</button>
          <button className="btn btn-secondary" onClick={handleCancelDelete}>Cancel</button>
        </div>
      )}
    </div>
  );
}
