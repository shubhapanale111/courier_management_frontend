import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/pickupdis.css";
function PickupDisReport() {
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

    const radioStyle = {
        color: 'blue',
        borderColor: 'blue',
        backgroundColor: 'blue',
    };



    return (
        <div className="pickupdis">
            <div className="pickupdis-main mt-5">
                <div className="pickupdis-row1">
                    <h3 style={{ color: "maroon", fontSize: "18px" }}>Consignment Entry Vs Dispatch</h3>
                </div>
                <div className="pickupdis-row2">
                    <div className="pickupdis-row2-row1">
                        <form action="">
                            <div className="form-outer">
                                <span className="pickup-label" style={{ width: "8%", marginLeft: "40px" }}>
                                    <label for="fname">Client</label>
                                </span>
                                <span className="pickup-input" style={{ width: "55%" }}>
                                    <select id="company">
                                        <option value=""></option>
                                        <option value="company1"> SELF</option>
                                        <option value="company2"> network 2</option>
                                        <option value="company3"> network 3</option>
                                    </select>
                                </span>

                                <span className="manifest-startdate"><input type="radio"
                                    name="status"
                                    value="dispatch"
                                    checked={selectedOption === 'dispatch'}
                                    onChange={handleOptionChange}
                                    style={selectedOption === 'dispatch' ? radioStyle : {}}
                                >
                                </input></span>
                                <span className="pickup-input" style={{ width: "7%" }}>
                                    <label>Dispatch</label></span>


                            </div>
                            <div className="form-outer">
                                <span className="pickup-label" style={{ width: "8%", marginLeft: "40px" }}>
                                    <label for="fname">Branch </label>
                                </span>
                                <span className="pickup-input" style={{ width: "17%" }}>
                                    <select id="company">
                                        <option value=""></option>
                                        <option value="company1"> All</option>
                                        <option value="company2"> network 2</option>
                                        <option value="company3"> network 3</option>
                                    </select>
                                </span>

                                <span className="pickup-input" style={{ width: "7%" }}>
                                    <label>Form Date</label></span>
                                <span className="manifest-startdate"><input type="date"></input></span>

                                <span className="pickup-input" style={{ width: "6%" }}>
                                    <label>To Date</label></span>
                                <span className="manifest-startdate"><input type="date"></input></span>


                                <span className="manifest-startdate"><input type="radio"
                                    name="status"
                                    value="pending"
                                    checked={selectedOption === 'pending'}
                                    onChange={handleOptionChange}
                                    style={selectedOption === 'pending' ? radioStyle : {}}

                                ></input></span>
                                <span className="pickup-input" style={{ width: "7%" }}>
                                    <label>Pending</label></span>








                            </div>



                        </form>
                    </div>
                    <div className="pickupdis-row2-row2">
                        {/*  */}
                    </div>
                </div>
                <div className="pickupdis-row3">
                    <div className="ci-button">
                        <button>Show</button>
                        <button style={{ width: '15%' }}>Export To Excel</button>
                        <button onClick={handlClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PickupDisReport;