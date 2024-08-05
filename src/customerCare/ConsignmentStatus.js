import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/consignmentstatus.css";
function ConsignmentStatus() {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const tableData = [
        {
            srNo: 1,
            awbNo: "AWB123456",
            fwdNo: "FWD123456",
            bkDate: "2023-06-01",
            mfDate: "2023-06-02",
            origin: "New York",
            destination: "Los Angeles",
        },
        // Add more rows as needed
    ];

    const handlClose = () => {
        navigate("/");
    };

    const radioContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '10%',
        position: 'relative',
        cursor: 'pointer',
    };

    const customRadioStyle = {
        display: 'inline-block',
        width: '15px',
        height: '15px',
        backgroundColor: '#fff',
        border: '2px solid #ccc',
        borderRadius: '50%',
        position: 'relative',
    };

    const customRadioCheckedStyle = {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '9px',
        height: '9px',
        borderRadius: '50%',
        backgroundColor: '#007bff',
    };
    return (
        <div className="consignmentstatus">
            <div className="consignmentstatus-main mt-5">
                <div className="consignmentstatus-row1">
                    <h3 style={{ color: "maroon", fontSize: "18px" }}>Consignment Status Report</h3>
                </div>
                <div className="consignmentstatus-row2">
                    <div className="consignmentstatus-row2-row1">
                        <form action="">
                            <div className="form-outer">
                                <span className="pickup-label" style={{ width: "5%", marginLeft: "40px" }}>
                                    <label for="fname">Client</label>
                                </span>
                                <span className="pickup-input" style={{ width: "30%" }}>
                                    <select id="company">
                                        <option value=""></option>
                                        <option value="company1"> network 1</option>
                                        <option value="company2"> network 2</option>
                                        <option value="company3"> network 3</option>
                                    </select>
                                </span>
                                <span className="pickup-label" style={{ width: "8%" }}>
                                    <label for="fname">Destination </label>
                                </span>
                                <span className="pickup-input" style={{ width: "30%" }}>
                                    <select id="company">
                                        <option value=""></option>
                                        <option value="company1"> network 1</option>
                                        <option value="company2"> network 2</option>
                                        <option value="company3"> network 3</option>
                                    </select>
                                </span>
                            </div>
                            <div className="form-outer">
                                <span className="pickup-label" style={{ width: "5%", marginLeft: "40px" }}>
                                    <label for="fname">Branch </label>
                                </span>
                                <span className="pickup-input" style={{ width: "30%" }}>
                                    <select id="company">
                                        <option value=""></option>
                                        <option value="company1"> network 1</option>
                                        <option value="company2"> network 2</option>
                                        <option value="company3"> network 3</option>
                                    </select>
                                </span>

                                <span className="pickup-label" style={{ width: "8%" }}>
                                    <label for="fname">Status </label>
                                </span>
                                <span className="pickup-input" style={{ width: "30%" }}>
                                    <select id="company">
                                        <option value=""></option>
                                        <option value="company1"> network 1</option>
                                        <option value="company2"> network 2</option>
                                        <option value="company3"> network 3</option>
                                    </select>
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="pickup-input" style={{ width: "8%", marginLeft: "50px" }}>
                                    <label>Form Date</label></span>
                                <span className="manifest-startdate"><input type="date"></input></span>

                                <span className="pickup-input" style={{ width: "5%" }}>
                                    <label>To Date</label></span>
                                <span className="manifest-startdate"><input type="date"></input></span>


                                <span className="manifest-startdate" style={radioContainerStyle}>
                                    <input
                                        type="radio"
                                        name="deliveryOptions"
                                        value="Booking Date"
                                        checked={selectedOption === 'Booking Date'}
                                        onChange={handleOptionChange}
                                        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
                                    />
                                    <span style={customRadioStyle}>
                                        {selectedOption === 'Booking Date' && <span style={customRadioCheckedStyle}></span>}
                                    </span>
                                    <label style={{ marginLeft: '5px' }}>Booking Date</label>
                                </span>
                                <span className="manifest-startdate" style={radioContainerStyle}>
                                    <input
                                        type="radio"
                                        name="deliveryOptions"
                                        value="Delivery Date"
                                        checked={selectedOption === 'Delivery Date'}
                                        onChange={handleOptionChange}
                                        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
                                    />
                                    <span style={customRadioStyle}>
                                        {selectedOption === 'Delivery Date' && <span style={customRadioCheckedStyle}></span>}
                                    </span>
                                    <label style={{ marginLeft: '5px' }}>Delivery Date</label>
                                </span>

                                <span className="manifest-startdate"><input type="checkbox"></input></span>
                                <span className="pickup-input2" style={{ width: "10%", color:"maroon" }}>
                                    <label>Include Pending</label></span>



                            </div>

                        </form>
                    </div>
                    <div className="consignmentstatus-row2-row2">
                        {/*  */}
                    </div>
                </div>
                <div className="consignmentstatus-row3">
                    <div className="ci-button">
                        <button>Show</button>
                        <button>Import</button>
                        <button onClick={handlClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConsignmentStatus;