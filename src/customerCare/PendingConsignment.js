import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/pendingconsignment.css";
function PendingConsignment() {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');
    const [checkedCheckbox, setCheckedCheckbox] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        setCheckedCheckbox(event.target.name);
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
        <div className="pendingconsignment">
            <div className="pendingconsignment-main mt-5">
                <div className="pendingconsignment-row1">
                    <h3 style={{ color: "maroon", fontSize: "18px" }}> Pending Consignment Report</h3>
                </div>
                <div className="pendingconsignment-row2">
                    <div className="pendingconsignment-row2-row1">
                        <form action="">
                            <div className="form-outer">
                                <span className="pickup-label" style={{ width: "6%", marginLeft: "40px" }}>
                                    <label for="fname">Client</label>
                                </span>
                                <span className="pickup-input" style={{ width: "50%" }}>
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
                                <span className="pickup-label" style={{ width: "6%", marginLeft: "40px" }}>
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



                                <span className="pickup-input" style={{ width: "8%", marginLeft: "50px" }}>
                                    <label>Form Date</label>
                                </span>
                                <span className="manifest-startdate"><input type="date"></input></span>
                                <span className="manifest-startdate">
                                    <input
                                        type="checkbox"
                                        name="dispatch"
                                        checked={checkedCheckbox === 'dispatch'}
                                        onChange={handleCheckboxChange}
                                    ></input>
                                </span>
                                <span className="pickup-input2" style={{ width: "15%" }}>
                                    <label> Pending After Dispatch</label>
                                </span>

                            </div>

                            <div className="form-outer">
                                <span className="pickup-label" style={{ width: "6%", marginLeft: "40px" }}>
                                    <label for="fname">Forwarder</label>
                                </span>
                                <span className="pickup-input" style={{ width: "30%" }}>
                                    <select id="company">
                                        <option value=""></option>
                                        <option value="company1"> network 1</option>
                                        <option value="company2"> network 2</option>
                                        <option value="company3"> network 3</option>
                                    </select>
                                </span>

                                <span className="pickup-input" style={{ width: "5%", marginLeft: "80px" }}>
                                    <label>To Date</label></span>
                                <span className="manifest-startdate"><input type="date"></input></span>


                                <span className="manifest-startdate">
                                    <input
                                        type="checkbox"
                                        name="receive"
                                        checked={checkedCheckbox === 'receive'}
                                        onChange={handleCheckboxChange}
                                    ></input>
                                </span>
                                <span className="pickup-input2" style={{ width: "15%" }}>
                                    <label> Pending After Receive</label>
                                </span>



                            </div>

                        </form>
                    </div>
                    <div className="pendingconsignment-row2-row2">
                        {/*  */}
                    </div>
                </div>
                <div className="pendingconsignment-row3">
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

export default PendingConsignment;