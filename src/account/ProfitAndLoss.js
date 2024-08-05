import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/profitandloss.css";
function ProfitAndLoss() {
    const navigate = useNavigate();
    const tableData = [
        {
            srNo: 1,
            awbNo: "",
            fwdNo: "",
            awbNo: "",
            bkDate: "",
            mfDate: "",
            forwarder: "",
            destination: "",
            mode: "",
            weight: "",
            pcs: "",
            amount: "",

        },
        // Add more rows as needed
    ];

    const handlClose = () => {
        navigate("/");
    };
    return (
        <div className="profitandloss">
            <div className="profitandloss-main mt-5">
                <div className="profitandloss-row1">
                    <h3 style={{ color: "maroon", fontSize: "18px" }}>Profit And Loss</h3>
                </div>
                <div className="profitandloss-row2">
                    <div className="profitandloss-row2-row1">
                        <form action="">
                            <div className="form-outer">
                                <span className="pickup-label" style={{ width: "5%" }}>
                                    <label for="fname">Client </label>
                                </span>
                                <span className="pickup-input" style={{ width: "50%" }}>
                                    <select id="company">
                                        <option value=""></option>
                                        <option value="company1"> All</option>
                                        <option value="company2"> network 2</option>
                                        <option value="company3"> network 3</option>
                                    </select>
                                </span>

                                <span className="pickup-input" style={{ width: "8%", marginLeft: "20px" }}>
                                    <label>Form Date</label></span>
                                <span className="manifest-startdate"><input type="date"></input></span>

                                <span className="pickup-input" style={{ width: "6%", marginLeft: '7px' }}>
                                    <label>To Date</label></span>
                                <span className="manifest-startdate"><input type="date"></input></span>


                            </div>
                            <div className="form-outer" style={{ marginTop: '10px' }}>
                                
                            </div>
                        </form>
                    </div>
                    <div className="profitandloss-row2-row2">
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                                <tr>
                                    <th>Sr No</th>
                                    <th>AWB No</th>
                                    <th>Booking Date</th>
                                    <th>Client</th>
                                    <th>Destination</th>
                                    <th>B Weight</th>
                                    <th>M Weight</th>
                                    <th>Sale Amt</th>
                                    <th>Pur Amt</th>
                                    <th>PL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.srNo}</td>
                                        <td>{row.awbNo}</td>
                                        <td>{row.fwdNo}</td>
                                        <td>{row.bkDate}</td>
                                        <td>{row.mfDate}</td>
                                        <td>{row.origin}</td>
                                        <td>{row.destination}</td>
                                        <td>{row.origin}</td>
                                        <td>{row.destination}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        
                    </div>
                    <form action="">
                            <div className="form-outer">
                    <span className="pickup-label" style={{ marginLeft: "65%" }}>
                                    <label for="fname">Sale </label>
                                </span>
                                <span className="pickup-label" style={{ marginLeft: "10%" }}>
                                    <label for="fname">Purchase </label>
                                </span>
                                <span className="pickup-label" style={{ marginLeft: "10%" }}>
                                    <label for="fname">PL </label>
                                </span>
                                </div>
                                </form>
                                
                </div>
                <div className="profitandloss-row3">
                    <div className="ci-button">
                        <button>Save</button>
                        <button>Print</button>
                        <button onClick={handlClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfitAndLoss;