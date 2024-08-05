import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/inquiry.css";
function Inquiry() {
    const navigate = useNavigate();

    const handlClose = () => {
        navigate("/");
    };
    return (
        <div className="inquiry">
            <div className="inquiry-main mt-5">
                <div className="inquiry-row1">
                    <h3 style={{ color: "maroon", fontSize: "18px" }}>Delivery Entry</h3>
                </div>
                <div className="inquiry-row2">
                    <div className="inquiry-row2-row1">
                        <div className="inquiry-row2-row1-col1">
                            <form action="" style={{ paddingTop: '20px' }}>
                                <div className="form-outer" style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                                    <span className="pickup-label" style={{ width: "30%" }}>
                                        <label htmlFor="awbNo">AWB No.</label>
                                    </span>
                                    <span className="inquiry-input" style={{ width: "70%" }}>
                                        <input type="text" id="awbNo" />
                                    </span>
                                </div>

                               

                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px"  }}>
                                    <div className="citymaster-button">
                                        <button style={{ width: "75%" }}>Save</button>
                                        <button  onClick={handlClose}>Exit</button>
                                    </div>
                                </div>

                                <div className="form-row" style={{ marginBottom: "10px", backgroundColor: "white", padding: "10px" }}>
                                    <input type="text" style={{ width: "100%", height: "20px" }} />
                                </div>
                                <div className="form-row" style={{ marginBottom: "10px", backgroundColor: "white", padding: "10px" }}>
                                    <input type="text" style={{ width: "100%", height: "20px" }} />
                                </div>
                                <div className="form-row" style={{ backgroundColor: "white", padding: "10px" }}>
                                    <input type="text" style={{ width: "100%", height: "20px" }} />
                                </div>
                            </form>
                            <div style={{marginTop:'100px'}}>
              <div className="citymaster-button">
            <button style={{width:'100%'}}>Save Image</button>
            {/* <button onClick={handlClose}>Exit</button> */}
          </div>
              </div>
                        </div>
                        <div className="inquiry-row2-row1-col2">
                            <p style={{color:'maroon'}}>SHIPMENT DETAILS</p>
                            <div className="shipment-details">
                                <div className="shipment-details-left">
                                    <form action="">
                                        <div className="form-outer">
                                            <span className="inquiry-label" style={{ width: "30%" }}>
                                                <label for="fname">AWB No. </label>
                                            </span>
                                            <span className="inquiry-input" style={{ width: "70%" }}>
                                                <input type="text" />
                                            </span>
                                        </div>
                                        <div className="form-outer">
                                            <span className="inquiry-label" style={{ width: "30%" }}>
                                                <label for="fname">Origin </label>
                                            </span>
                                            <span className="inquiry-input" style={{ width: "70%" }}>
                                                <input type="text" />
                                            </span>
                                        </div>
                                        <div className="form-outer">
                                            <span className="inquiry-label" style={{ width: "30%" }}>
                                                <label for="fname">Destination </label>
                                            </span>
                                            <span className="inquiry-input" style={{ width: "70%" }}>
                                                <input type="text" />
                                            </span>
                                        </div>
                                        <div className="form-outer">
                                            <span className="inquiry-label" style={{ width: "30%" }}>
                                                <label for="fname">Consignor </label>
                                            </span>
                                            <span className="inquiry-input" style={{ width: "70%" }}>
                                                <input type="text" />
                                            </span>
                                        </div>
                                        <div className="form-outer">
                                            <span className="inquiry-label" style={{ width: "30%" }}>
                                                <label for="fname">Contact No. </label>
                                            </span>
                                            <span className="inquiry-input" style={{ width: "70%" }}>
                                                <input type="text" />
                                            </span>
                                        </div>
                                        <div className="form-outer">
                                            <span className="inquiry-label" style={{ width: "30%" }}>
                                                <label for="fname">Email Id </label>
                                            </span>
                                            <span className="inquiry-input" style={{ width: "70%" }}>
                                                <input type="text" />
                                            </span>
                                        </div>
                                        


                                        <div className="form-outer">
                                            <span className="inquiry-label" style={{ width: "30%" }}>
                                                <label for="fname">consignee</label>
                                            </span>
                                            <span className="inquiry-input" style={{ width: "70%" }}>
                                                <input type="text" />
                                            </span>
                                        </div>
                                        <div className="form-outer">
                                            <span className="inquiry-label" style={{ width: "30%" }}>
                                                <label for="fname">Address </label>
                                            </span>
                                            <span className="inquiry-input" style={{ width: "70%" }}>
                                            <input type="text" style={{ height: "40px", width: "100%"}} />
                                            </span>
                                        </div>
                                        

                                        <div className="form-outer" style={{marginTop:'10px'}}>
                                            <span className="inquiry-label" style={{ width: "30%", marginLeft:'40px' }}>
                                                <label for="fname">COD Amt </label>
                                            </span>
                                            <span className="inquiry-input" style={{ width: "70%" }}>
                                                <input type="text" />
                                            </span>
                                        </div>

                                        <div className="form-outer" >
                                            <span className="inquiry-label" style={{ width: "30%", marginLeft:'40px' }}>
                                                <label for="fname">TOPAY Amt </label>
                                            </span>
                                            <span className="inquiry-input" style={{ width: "70%" }}>
                                                <input type="text" />
                                            </span>
                                        </div>

                                        <div className="form-outer">
                                            <span className="inquiry-label" style={{ width: "30%", marginLeft:'40px' }}>
                                                <label for="fname">Bill No </label>
                                            </span>
                                            <span className="inquiry-input" style={{ width: "70%" }}>
                                                <input type="text" />
                                            </span>
                                        </div>
                                    </form>
                                </div>
                                <div className="shipment-details-right">
                                    <form action="">
                                        <div className="form-outer">
                                            <span className="inquiry-label" style={{ width: "30%" }}>
                                                <label for="fname"> Date </label>
                                            </span>
                                            <span className="inquiry-input" style={{ width: "70%" }}>
                                                <input type="text" />
                                            </span>
                                        </div>
                                        <div className="form-outer">
                                            <span className="inquiry-label" style={{ width: "30%" }}>
                                                <label for="fname">Forwarder </label>
                                            </span>
                                            <span className="inquiry-input" style={{ width: "70%" }}>
                                                <input type="text" />
                                            </span>
                                        </div>
                                        <div className="form-outer">
                                            <span className="inquiry-label" style={{ width: "30%" }}>
                                                <label for="fname">Contact No. </label>
                                            </span>
                                            <span className="inquiry-input" style={{ width: "70%" }}>
                                                <input type="text" />
                                            </span>
                                        </div>
                                        <div className="form-outer">
                                            <span className="inquiry-label" style={{ width: "30%" }}>
                                                <label for="fname">Email Id </label>
                                            </span>
                                            <span className="inquiry-input" style={{ width: "70%" }}>
                                                <input type="text" />
                                            </span>
                                        </div>
                                        <div className="form-outer">
                                            <span className="inquiry-label" style={{ width: "30%" }}>
                                                <label for="fname">Fwd No. </label>
                                            </span>
                                            <span className="inquiry-input" style={{ width: "70%" }}>
                                                <input type="text" />
                                            </span>
                                        </div>
                                        <div className="form-outer">
                                            <span className="inquiry-label" style={{ width: "30%" }}>
                                                <label for="fname">Pcs </label>
                                            </span>
                                            <span className="inquiry-input" style={{ width: "70%" }}>
                                                <input type="text" />
                                            </span>
                                        </div>
                                        <div className="form-outer">
                                            <span className="inquiry-label" style={{ width: "30%" }}>
                                                <label for="fname">Disp. Date </label>
                                            </span>
                                            <span className="inquiry-input" style={{ width: "70%" }}>
                                                <input type="text" />
                                            </span>
                                        </div>
                                        <div className="form-outer">
                                            <span className="inquiry-label" style={{ width: "30%" }}>
                                                <label for="fname">Billing Wt. </label>
                                            </span>
                                            <span className="inquiry-input" style={{ width: "70%" }}>
                                                <input type="text" />
                                            </span>
                                        </div>
                                        <div className="form-outer">
                                            <span className="inquiry-label" style={{ width: "30%" }}>
                                                <label for="fname">Mfst Wt. </label>
                                            </span>
                                            <span className="inquiry-input" style={{ width: "70%" }}>
                                                <input type="text" />
                                            </span>
                                        </div>

                                        <div className="form-outer">
                                            <span className="inquiry-label" style={{ width: "35%" }}>
                                                <label for="fname">DIMENSSION </label>
                                            </span>
                                           
                                        </div>
                                    </form>
                                    <div style={{ width: '100%', height: '100px', backgroundColor: 'white', overflowY: 'scroll' }}>
                                        <table style={{ borderCollapse: "collapse" }} className="inquiry-table">
                                            <thead >
                                                <tr>
                                                    <th className="inquiry-table-th">H</th>
                                                    <th className="inquiry-table-th">L</th>
                                                    <th className="inquiry-table-th">W</th>
                                                    <th className="inquiry-table-th">Wt</th>

                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="inquiry-row2-row2">
                        <p style={{color:'maroon'}}>Shipment History</p>
                        <div className="shipment-history"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inquiry;