

import React, { useState, useEffect,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/zonemaster.css';

export default function ZoneMaster() {
  const navigate = useNavigate();
  const [zoneCode, setZoneCode] = useState('');
  const [zoneName, setZoneName] = useState('');
  const [isExistingZone, setIsExistingZone] = useState(false);
  const [zoneCodes, setZoneCodes] = useState([]);

  const zoneCodeRef = useRef(null);
  const zoneNameRef = useRef(null);

  useEffect(() => {
    const fetchZoneCodes = async () => {
      try {
        const response = await fetch('http://localhost:3001/zones');
        const data = await response.json();
        if (response.ok) {
          if (data.zones && Array.isArray(data.zones)) {
            setZoneCodes(data.zones.map(zone => zone.zcode));
          } else {
            console.error('Unexpected data structure:', data);
          }
        } else {
          console.error('Error fetching zone codes');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchZoneCodes();
  }, []);


  const handleClose = () => {
    navigate('/');
  };

  const handleZoneCodeChange = async (event) => {
    const code = event.target.value;
    setZoneCode(code);

    if (code) {
      try {
        const response = await fetch(`http://localhost:3001/zones/${code}`);
        if (response.status === 200) {
          const data = await response.json();
          setZoneName(data.zone.Zone_name);
          setIsExistingZone(true);
          
        } else if (response.status === 404) {
          setZoneName('');
          setIsExistingZone(false);
        } else {
          console.error('Error fetching zone');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      setZoneName('');
      setIsExistingZone(false);
    }
  };

  const handleZoneNameChange = (event) => {
    setZoneName(event.target.value);
  };

  const handleSave = async () => {
    const zoneData = {
      zcode: zoneCode,
      Zone_name: zoneName,
    };

    try {
      let response;
      if (isExistingZone) {
        // Update existing zone
        response = await fetch(`http://localhost:3001/zones/${zoneCode}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(zoneData),
        });
      } else {
        // Create new zone
        response = await fetch('http://localhost:3001/zones', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(zoneData),
        });
      }

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        setZoneCode('');
        setZoneName('');
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3001/zones/${zoneCode}`, {
        method: 'DELETE',
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        setZoneCode('');
        setZoneName('');
        setIsExistingZone(false);
        zoneCodeRef.current.focus(); 
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
    <div className="zonemaster-container">
      <div className="zonemaster-main-container mt-5">
        <div className="zonemaster-main-container-row1" style={{ color: 'maroon' }}>
          Zone Master
        </div>
        <div className="zonemaster-main-container-row2">
          <form>
            <div className="form-outer">
              <span className="form-outer-label-zonemaster" style={{width:'20%'}}>
                <label htmlFor="zoneCode">Zone Code</label>
              </span>
              <span className="form-outer-input-zonemaster" style={{width:'80%'}}>
                <input
                  id="zoneCode"
                  type="text"
                  value={zoneCode}
                  onChange={handleZoneCodeChange}
                  onKeyDown={(event) => handleKeyDown(event, zoneNameRef)}
                  ref={zoneCodeRef}
                  list="zoneCodes"
                />

                <datalist id="zoneCodes">
                  {zoneCodes.map(code => (
                    <option key={code} value={code} />
                  ))}
                </datalist>
              </span>
            </div>

            <div className="form-outer">
              <span className="form-outer-label-zonemaster" style={{width:'20%'}}>
                <label htmlFor="zoneName">Zone Name</label>
              </span>
              <span className="form-outer-input-zonemaster" style={{width:'80%'}}>
                <input
                  id="zoneName"
                  type="text"
                  value={zoneName}
                  onChange={handleZoneNameChange}
                  onKeyDown={(event)=> handleKeyDown(event,null)}
                  ref={zoneNameRef}
                />
              </span>
            </div>
          </form>
        </div>
        <div className="zonemaster-main-container-row3">
          <div className="zonemaster-button">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleDelete} disabled={!isExistingZone}>
              Delete
            </button>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
