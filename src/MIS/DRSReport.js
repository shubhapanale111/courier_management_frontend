import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/drsreport.css";
function DRSReport() {
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
        <div className="drsreport">
            <div className="drsreport-main mt-5">
                <div className="drsreport-row1">
                    <h3 style={{ color: "maroon", fontSize: "18px" }}>DRS Report</h3>
                </div>
                <div className="drsreport-row2">
                    <div className="drsreport-row2-row1">
                        <form action="">
                            <div className="form-outer">
                                <span className="pickup-label" style={{ width: "5%", marginLeft: "250px" }}>
                                    <label for="fname">Branch</label>
                                </span>
                                <span className="pickup-input" style={{ width: "31%",backgroundColor:'rgb(220, 220, 220)' }}>
                                    <select id="company">
                                        <option value=""></option>
                                        <option value="company1"> SELF</option>
                                        <option value="company2"> network 2</option>
                                        <option value="company3"> network 3</option>
                                    </select>
                                </span>


                            </div>



                            <div className="form-outer" style={{marginTop:'10px'}}>

                                <span className="pickup-input" style={{ width: "8%", marginLeft: "220px" }}>
                                    <label>Form Date</label></span>
                                <span className="manifest-startdate"><input type="date"></input></span>

                                <span className="pickup-input" style={{ width: "5%",marginLeft: "20px" }}>
                                    <label>To Date</label></span>
                                <span className="manifest-startdate"><input type="date"></input></span>



                            </div>

                        </form>
                    </div>
                    <div className="drsreport-row2-row2">
                        {/*  */}
                    </div>
                </div>
                <div className="drsreport-row3">
                    <div className="ci-button">
                        <button>Show</button>
                        <button >Export </button>
                        <button onClick={handlClose}>Exit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DRSReport;