import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/clientims.css";
function ClientIMS() {
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
        <div className="clientims">
            <div className="clientims-main mt-5">
                <div className="clientims-row1">
                    <h3 style={{ color: "maroon", fontSize: "18px" }}>Client MIS</h3>
                </div>
                <div className="clientims-row2">
                    <div className="clientims-row2-row1">
                        <form action="">

                            <div className="form-outer" style={{ marginTop: '10px' }}>

                                <span className="pickup-input" style={{ width: "8%", marginLeft: "220px" }}>
                                    <label>Form Date</label></span>
                                <span className="manifest-startdate"><input type="date"></input></span>

                                <span className="pickup-input" style={{ width: "5%", marginLeft: "20px" }}>
                                    <label>To Date</label></span>
                                <span className="manifest-startdate"><input type="date"></input></span>
                            </div>

                            <div className="form-outer">
                                <span className="pickup-label" style={{ width: "5%", marginLeft: "130px", marginTop:'9px' }}>
                                    <label for="fname">Branch</label>
                                </span>
                                <span className="pickup-input" style={{ width: "50%", marginTop:'9px' }}>
                                    <select id="company">
                                        <option value=""></option>
                                        <option value="company1"> SELF</option>
                                        <option value="company2"> network 2</option>
                                        <option value="company3"> network 3</option>
                                    </select>
                                </span>

                                <div className="ci-button">
                                    <button style={{width:'220px'}}>Show</button>
                                </div>


                            </div>

                        </form>
                       
                    </div>
                    <form action="">
                        <div className="form-outer">
                        {/* <span className="form-outer-label-zonemaster"style={{marginLeft:'500px'}}>
                                    <label for="fname"style={{width:'-1%'}}>Mail-Id </label>
                                </span> */}
                                 <span className="pickup-label" style={{ width: "5%", marginLeft: "600px" }}>
                                 <label for="fname">Email Id</label></span>
                                <span className="form-outer-input-zonemaster"style={{width:'40%',marginRight:'0px'}}>
                                    <input type="text" />
                                </span>

                        </div>

                        </form>

                    <div className="clientims-row2-row2">
                        {/*  */}
                    </div>
                </div>
                <div className="clientims-row3">
                    <div className="ci-button">

                        <button style={{width:'20%'}} >Send Mail To Client </button>
                        <button onClick={handlClose}>Exit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientIMS;