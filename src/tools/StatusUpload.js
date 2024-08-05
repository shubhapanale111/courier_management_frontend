import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/bookingupload.css";
function StatusUpload() {
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
        <div className="bookingupload">
            <div className="bookingupload-main mt-5">
                <div className="bookingupload-row1">
                    <h3 style={{ color: "maroon", fontSize: "18px" }}>Import Shipment Status</h3>
                </div>
                <div className="bookingupload-row2">
                    <div className="bookingupload-row2-row1">
                        <form action="">
                            <div className="form-outer">
                            <span className="form-outer-input-addressbook"style={{marginTop:'20px',width:'40%', marginLeft:'150px'}}>
                                    <input type="text" />
                                </span>
                                <div className="ci-button"style={{marginTop:'10px'}}>
                        <button>...........</button>
                       
                    </div>

                               


                            </div>

                        </form>
                    </div>
                    <div className="bookingupload-row2-row2">
                        {/*  */}
                    </div>
                </div>
                <div className="bookingupload-row3">
                    <div className="ci-button">
                        <button>Save</button>
                        <button onClick={handlClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatusUpload;