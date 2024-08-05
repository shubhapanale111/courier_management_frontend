import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/salesreport.css";
function SalesReport() {
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

    

    

   
    return (
        <div className="salesreport">
            <div className="salesreport-main mt-5">
                <div className="salesreport-row1">
                    <h3 style={{ color: "maroon", fontSize: "18px" }}>Sales Report</h3>
                </div>
                <div className="salesreport-row2">
                    <div className="salesreport-row2-row1">
                        <form action="">
                            <div className="form-outer">
                                <span className="pickup-label" style={{ width: "8%", marginLeft: "40px" }}>
                                    <label for="fname">Branch</label>
                                </span>
                                <span className="pickup-input" style={{ width: "30%" }}>
                                    <select id="company">
                                        <option value=""></option>
                                        <option value="company1"> SELF</option>
                                        <option value="company2"> network 2</option>
                                        <option value="company3"> network 3</option>
                                    </select>
                                </span>
                                <span className="pickup-label" style={{ width: "8%" }}>
                                    <label for="fname">Origin </label>
                                </span>
                                <span className="pickup-input" style={{ width: "20%" }}>
                                    <select id="company">
                                        <option value=""></option>
                                        <option value="company1"> All</option>
                                        <option value="company2"> network 2</option>
                                        <option value="company3"> network 3</option>
                                    </select>
                                </span>
                            </div>
                            <div className="form-outer">
                                <span className="pickup-label" style={{ width: "8%", marginLeft: "40px" }}>
                                    <label for="fname">Client </label>
                                </span>
                                <span className="pickup-input" style={{ width: "30%" }}>
                                    <select id="company">
                                        <option value=""></option>
                                        <option value="company1"> All</option>
                                        <option value="company2"> network 2</option>
                                        <option value="company3"> network 3</option>
                                    </select>
                                </span>

                                <span className="pickup-label" style={{ width: "8%" }}>
                                    <label for="fname">Shipper </label>
                                </span>
                                <span className="pickup-input" style={{ width: "20%" }}>
                                    <select id="company">
                                        <option value=""></option>
                                        <option value="company1"> network 1</option>
                                        <option value="company2"> network 2</option>
                                        <option value="company3"> network 3</option>
                                    </select>
                                </span>
                            </div>

                            <div className="form-outer">
                            <span className="pickup-label" style={{ width: "8%" , marginLeft: "40px"}}>
                                    <label for="fname">Destination </label>
                                </span>
                                <span className="pickup-input" style={{ width: "20%" }}>
                                    <select id="company">
                                        <option value=""></option>
                                        <option value="company1"> network 1</option>
                                        <option value="company2"> network 2</option>
                                        <option value="company3"> network 3</option>
                                    </select>
                                </span>

                                <span className="pickup-label" style={{ width: "10%", marginLeft:'82px' }}>
                                    <label for="fname">Booking Mode </label>
                                </span>
                                <span className="pickup-input" style={{ width: "20%" }}>
                                    <select id="company">
                                        <option value=""></option>
                                        <option value="company1"> network 1</option>
                                        <option value="company2"> network 2</option>
                                        <option value="company3"> network 3</option>
                                    </select>
                                </span>
                            </div>

                            <div className="form-outer">
                            <span className="pickup-label" style={{ width: "8%" , marginLeft: "40px"}}>
                                    <label for="fname">Pay Mode </label>
                                </span>
                                <span className="pickup-input" style={{ width: "10%" }}>
                                    <select id="company">
                                        <option value=""></option>
                                        <option value="company1"> network 1</option>
                                        <option value="company2"> network 2</option>
                                        <option value="company3"> network 3</option>
                                    </select>
                                </span>
                                <span className="pickup-input" style={{ width: "8%", marginLeft: "50px" }}>
                                    <label>Form Date</label></span>
                                <span className="manifest-startdate"><input type="date"></input></span>

                                <span className="pickup-input" style={{ width: "5%" }}>
                                    <label>To Date</label></span>
                                <span className="manifest-startdate"><input type="date"></input></span>


                            
                            </div>

                        </form>
                    </div>
                    <div className="salesreport-row2-row2">
                        {/*  */}
                    </div>
                </div>
                <div className="salesreport-row3">
                    <div className="ci-button">
                        <button>Show</button>
                        <button>Export</button>
                        <button onClick={handlClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SalesReport;