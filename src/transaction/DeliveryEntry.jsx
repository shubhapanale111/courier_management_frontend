import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/transaction.css";
function DeliveryEntry() {
    const navigate = useNavigate();

  const handlClose = () => {
    navigate("/");
  };
  return (
    <div className="delivery">
      <div className="delivery-main mt-5">
        <div className="delivery-row1">
          <h3 style={{ color: "maroon", fontSize: "18px" }}>Delivery Entry</h3>
        </div>
        <div className="delivery-row2">
          <div className="delivery-row2-row1">
            <div className="delivery-row2-row1-col1">
              <form action="" style={{paddingTop:'20px'}}>
                <div className="form-outer">
                  <span className="pickup-label" style={{ width: "30%" }}>
                    <label for="fname">Booking Date </label>
                  </span>
                  <span className="delivery-input" style={{ width: "70%" }}>
                    <input type="text" />
                  </span>
                </div>

                <div className="form-outer">
                  <span
                    className="form-outer-label-citymaster"
                    style={{ width: "30%" }}
                  >
                    <label for="fname">City Code </label>
                  </span>
                  <span
                    className="form-outer-input-citymaster"
                    style={{ width: "70%" }}
                  >
                    <select id="company">
                      <option value=""></option>
                      <option value="company1"> INT</option>
                      <option value="company2"> LOC</option>
                      <option value="company3">MET </option>
                      <option value="company3">NCR </option>
                      <option value="company3">NOE </option>
                      <option value="company3">NOR</option>
                      <option value="company3">ROI </option>
                    </select>
                  </span>
                </div>
                <div className="form-outer">
                  <span
                    className="form-outer-label-citymaster"
                    style={{ width: "30%" }}
                  >
                    <label for="fname">City Code </label>
                  </span>
                  <span
                    className="form-outer-input-citymaster"
                    style={{ width: "70%" }}
                  >
                    <select id="company">
                      <option value=""></option>
                      <option value="company1"> INT</option>
                      <option value="company2"> LOC</option>
                      <option value="company3">MET </option>
                      <option value="company3">NCR </option>
                      <option value="company3">NOE </option>
                      <option value="company3">NOR</option>
                      <option value="company3">ROI </option>
                    </select>
                  </span>
                </div>

                <div className="form-outer">
                  <span className="pickup-label" style={{ width: "30%" }}>
                    <label for="fname">Booking Date </label>
                  </span>
                  <span className="delivery-input" style={{ width: "70%" }}>
                    <input type="date" />
                  </span>
                </div>

                <div className="form-outer">
                  <span className="pickup-label" style={{ width: "30%" }}>
                    <label for="fname">Booking Date </label>
                  </span>
                  <span className="delivery-input" style={{ width: "70%" }}>
                    <input type="date" />
                  </span>
                </div>

                <div className="form-outer">
                  <span className="pickup-label" style={{ width: "30%" }}>
                    <label for="fname">Booking Date </label>
                  </span>
                  <span className="delivery-input" style={{ width: "70%" }}>
                    <input type="text" />
                  </span>
                </div>
              </form>
              <div style={{marginTop:'100px'}}>
              <div className="citymaster-button">
            <button>Save</button>
            <button onClick={handlClose}>Exit</button>
          </div>
              </div>
            </div>
            <div className="delivery-row2-row1-col2">
                <p>Shipment Details</p>
                <div className="shipment-details">
            <div className="shipment-details-left">
                <form action="">
                <div className="form-outer">
                  <span className="delivery-label" style={{ width: "30%" }}>
                    <label for="fname">Booking Date </label>
                  </span>
                  <span className="delivery-input" style={{ width: "70%" }}>
                    <input type="text" />
                  </span>
                </div>
                <div className="form-outer">
                  <span className="delivery-label" style={{ width: "30%" }}>
                    <label for="fname">Booking Date </label>
                  </span>
                  <span className="delivery-input" style={{ width: "70%" }}>
                    <input type="text" />
                  </span>
                </div>
                <div className="form-outer">
                  <span className="delivery-label" style={{ width: "30%" }}>
                    <label for="fname">Booking Date </label>
                  </span>
                  <span className="delivery-input" style={{ width: "70%" }}>
                    <input type="text" />
                  </span>
                </div>
                <div className="form-outer">
                  <span className="delivery-label" style={{ width: "30%" }}>
                    <label for="fname">Booking Date </label>
                  </span>
                  <span className="delivery-input" style={{ width: "70%" }}>
                    <input type="text" />
                  </span>
                </div>
                <div className="form-outer">
                  <span className="delivery-label" style={{ width: "30%" }}>
                    <label for="fname">Booking Date </label>
                  </span>
                  <span className="delivery-input" style={{ width: "70%" }}>
                    <input type="text" />
                  </span>
                </div>
                <div className="form-outer">
                  <span className="delivery-label" style={{ width: "30%",height:'20px' }}>
                    <label for="fname">Booking Date </label>
                  </span>
                  <span className="delivery-input" style={{ width: "70%" }}>
                    <textarea type="text" />
                  </span>
                </div>
                <div className="form-outer">
                  <span className="delivery-label" style={{ width: "30%" }}>
                    <label for="fname">Booking Date </label>
                  </span>
                  <span className="delivery-input" style={{ width: "70%" }}>
                    <input type="text" />
                  </span>
                </div>
                <div className="form-outer">
                  <span className="delivery-label" style={{ width: "30%" }}>
                    <label for="fname">Booking Date </label>
                  </span>
                  <span className="delivery-input" style={{ width: "70%" }}>
                    <input type="text" />
                  </span>
                </div>
                </form>
            </div>
            <div className="shipment-details-right">
                <form action="">
                <div className="form-outer">
                  <span className="delivery-label" style={{ width: "30%" }}>
                    <label for="fname">Booking Date </label>
                  </span>
                  <span className="delivery-input" style={{ width: "70%" }}>
                    <input type="text" />
                  </span>
                </div>
                <div className="form-outer">
                  <span className="delivery-label" style={{ width: "30%" }}>
                    <label for="fname">Booking Date </label>
                  </span>
                  <span className="delivery-input" style={{ width: "70%" }}>
                    <input type="text" />
                  </span>
                </div>
                <div className="form-outer">
                  <span className="delivery-label" style={{ width: "30%" }}>
                    <label for="fname">Booking Date </label>
                  </span>
                  <span className="delivery-input" style={{ width: "70%" }}>
                    <input type="text" />
                  </span>
                </div>
                <div className="form-outer">
                  <span className="delivery-label" style={{ width: "30%" }}>
                    <label for="fname">Booking Date </label>
                  </span>
                  <span className="delivery-input" style={{ width: "70%" }}>
                    <input type="text" />
                  </span>
                </div>
                <div className="form-outer">
                  <span className="delivery-label" style={{ width: "30%" }}>
                    <label for="fname">Booking Date </label>
                  </span>
                  <span className="delivery-input" style={{ width: "70%" }}>
                    <input type="text" />
                  </span>
                </div>
                <div className="form-outer">
                  <span className="delivery-label" style={{ width: "30%" }}>
                    <label for="fname">Booking Date </label>
                  </span>
                  <span className="delivery-input" style={{ width: "70%" }}>
                    <input type="text" />
                  </span>
                </div>
                <div className="form-outer">
                  <span className="delivery-label" style={{ width: "30%" }}>
                    <label for="fname">Booking Date </label>
                  </span>
                  <span className="delivery-input" style={{ width: "70%" }}>
                    <input type="text" />
                  </span>
                </div>
                </form>
                <div  style={{width:'100%',height:'100px',backgroundColor:'white',overflowY:'scroll'}}>
                <table style={{ borderCollapse: "collapse" }} className="delivery-table">
              <thead >
                <tr>
                  <th className="delivery-table-th">H</th>
                  <th className="delivery-table-th">L</th>
                  <th className="delivery-table-th">W</th>
                  <th className="delivery-table-th">Wt</th>
                 
                </tr>
              </thead>
              </table>
                </div>
            </div>
            </div>
            </div>
          </div>

          <div className="delivery-row2-row2">
            <p>Shipment History</p>
            <div className="shipment-history"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryEntry;
