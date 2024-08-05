import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/podreport.css";
function PodReport() {
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
        <div className="podreport">
            <div className="podreport-main mt-5">
                <div className="podreport-row1">
                    <h3 style={{ color: "maroon", fontSize: "18px" }}>POD IMG Upload/Pending</h3>
                </div>
                <div className="podreport-row2">
                    <div className="podreport-row2-row1">
                        <form action="">
                            <div className="form-outer">
                                

                                

                        

                            </div>



                            <div className="form-outer" style={{marginTop:'10px'}}>

                                <span className="pickup-input" style={{ width: "8%", marginLeft: "110px" }}>
                                    <label>Form Date</label></span>
                                <span className="manifest-startdate"><input type="date"></input></span>

                                <span className="pickup-input" style={{ width: "5%",marginLeft: "10px" }}>
                                    <label>To Date</label></span>
                                <span className="manifest-startdate"><input type="date"></input></span>

                                <span className="manifest-startdate" style={{marginLeft:'10px'}}><input type="radio"
                                    name="status"
                                    value="received"
                                    checked={selectedOption === 'received'}
                                    onChange={handleOptionChange}
                                   
                                >
                                </input></span>
                                <span className="pickup-input" style={{ width: "7%" }}>
                                    <label>Received</label></span>


                                    <span className="manifest-startdate"><input type="radio"
                                    name="status"
                                    value="pending"
                                    checked={selectedOption === 'pending'}
                                    onChange={handleOptionChange}
                                    
                                >
                                </input></span>
                                <span className="pickup-input" style={{ width: "7%" }}>
                                    <label>Pending</label></span>






                            </div>

                        </form>
                    </div>
                    <div className="podreport-row2-row2">
                        {/*  */}
                    </div>
                </div>
                <div className="podreport-row3">
                    <div className="ci-button">
                        <button>Show</button>
                        <button style={{ width: '15%' }}>Export To Excel</button>
                        <button onClick={handlClose}>Exit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PodReport;