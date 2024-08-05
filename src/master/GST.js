import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/branchmaster.css";

export default function GST() {
  const navigate = useNavigate();
  const [modes, setModes] = useState([]);
  const [clients, setClients] = useState([]);
  const [selectedMode, setSelectedMode] = useState("");
  const [selectedClient, setSelectedClient] = useState("");
  const [gstValue, setGstValue] = useState("");
  const [startDate, setStartDate] = useState("");

  useEffect(() => {
    fetchModes();
    fetchClients();
  }, []);

  const fetchModes = async () => {
    try {
      const response = await fetch("http://localhost:3001/modes");
      if (!response.ok) {
        throw new Error("Failed to fetch modes");
      }
      const data = await response.json();
      const uniqueModes = [...new Set(data.gsts.map((gst) => gst.bmode))];
      setModes(uniqueModes);
    } catch (error) {
      console.error("Error fetching modes:", error);
    }
  };

  const fetchClients = async () => {
    try {
      const response = await fetch("http://localhost:3001/client");
      if (!response.ok) {
        throw new Error("Failed to fetch clients");
      }
      const data = await response.json();
      setClients(data.gsts);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  const handlClose = () => {
    navigate("/");
  };

  const handleModeChange = (e) => {
    setSelectedMode(e.target.value);
  };

  const handleClientChange = (e) => {
    setSelectedClient(e.target.value);
  };

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:3001/gsts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Clcode: selectedClient,
          smode: selectedMode,
          gst: gstValue,
          edate: startDate,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save GST data");
      }

      const data = await response.json();
      alert("Save successful:", data);
      selectedClient('');
      selectedClient('');
      gstValue('');
      startDate('');
    } catch (error) {
      console.error("Error saving GST data:", error);
    }
  };

  return (
    <div style={{ width: "100%" }} className="branchmaster-container">
      <div className="branchmaster-main-container mt-5" style={{ width: "50%", height: "50%" }}>
        <div className="branchmaster-main-container-row1" style={{ color: "maroon" }}>
          Goods And Service Tax
        </div>
        <div className="branchmaster-main-container-row2">
          <form>
            <div className="form-outer">
              <span className="form-outer-label-branchmaster">
                <label htmlFor="client">Client</label>
              </span>
              <span className="form-outer-input-branchmaster">
                <select id="client" value={selectedClient} onChange={handleClientChange}>
                  <option value="">Select client</option>
                  {clients.map((client, index) => (
                    <option key={index} value={client.clcode}>
                      {`${client.clcode}:${client.clname}`}
                    </option>
                  ))}
                </select>
              </span>
            </div>

            <div className="form-outer">
              <span className="form-outer-label-branchmaster">
                <label htmlFor="mode">Mode</label>
              </span>
              <span className="form-outer-input-branchmaster" style={{ width: "50%" }}>
                <select id="mode" value={selectedMode} onChange={handleModeChange}>
                  <option value="">Select mode</option>
                  {modes.map((mode, index) => (
                    <option key={index} value={mode}>
                      {mode}
                    </option>
                  ))}
                </select>
              </span>
            </div>

            <div className="form-outer">
              <span className="form-outer-label-branchmaster">
                <label htmlFor="gst">GST</label>
              </span>
              <span className="form-outer-input-branchmaster" style={{ width: "30%" }}>
                <input type="text" id="gst" value={gstValue} onChange={(e) => setGstValue(e.target.value)} required />
              </span>
              <p>%</p>
            </div>

            <div className="form-outer">
              <span className="form-outer-label-branchmaster">
                <label htmlFor="startDate">Start Date</label>
              </span>
              <span className="manifest-startdate">
                <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
              </span>
            </div>
          </form>
        </div>
        <div className="branchmaster-main-container-row3">
          <div className="branchmaster-button">
            <button type="button" onClick={handleSave}>Save</button>
            <button type="button" onClick={handlClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
