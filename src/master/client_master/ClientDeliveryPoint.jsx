import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Style/master.css'
function ClientDeliveryPoint() {
  const navigate = useNavigate();

  const handlClose = () =>{
    navigate('/');
  }
  return (
    <div className="client-pickup">
      <div className="client-pickup-main mt-5">
        <div className="client-pickup-row1">
          <h3 style={{color:'maroon',fontSize:'18px'}}>Client Delivery Point</h3>
        </div>
        <div className="client-pickup-row2">
          <form action="">
          <div className="form-outer">
                                <span className="pickup-label">
                                    <label for="fname">Client </label>
                                </span>
                                <span className="pickup-input">
                                <select id="company">
                                  <option value=""></option>
                                  <option value="company1"> network 1</option>
                                  <option value="company2"> network 2</option>
                                  <option value="company3"> network 3</option>
                                </select>
                                </span>
                                
                            </div>
                            <div className="form-outer">
                                <span className="pickup-label">
                                    <label for="fname">Company </label>
                                </span>
                                <span className="pickup-input">
                                <select id="company">
                                  <option value=""></option>
                                  <option value="company1"> network 1</option>
                                  <option value="company2"> network 2</option>
                                  <option value="company3"> network 3</option>
                                </select>
                                </span>
                                
                            </div>

                            <div className="form-outer">
                                <span className="pickup-label">
                                    <label for="fname">Name </label>
                                </span>
                                <span className="pickup-input">
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="pickup-label">
                                    <label for="fname">Address 1 </label>
                                </span>
                                <span className="pickup-input">
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="pickup-label">
                                    <label for="fname">Address 2 </label>
                                </span>
                                <span className="pickup-input">
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="pickup-label">
                                    <label for="fname">City </label>
                                </span>
                                <span className="pickup-input">
                                <select id="company">
                                  <option value=""></option>
                                  <option value="company1"> network 1</option>
                                  <option value="company2"> network 2</option>
                                  <option value="company3"> network 3</option>
                                </select>
                                </span>
                                
                            </div>

                            <div className="form-outer">
                                <span className="pickup-label">
                                    <label for="fname">Pincode </label>
                                </span>
                                <span className="pickup-input">
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="pickup-label">
                                    <label for="fname">Email Id </label>
                                </span>
                                <span className="pickup-input">
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="pickup-label">
                                    <label for="fname">Contact No.</label>
                                </span>
                                <span className="pickup-input">
                                    <input type="text" />
                                </span>
                            </div>
          </form>
        </div>
        <div className="client-pickup-row3">
        <div className='ci-button'>
                        <button>Save</button>
                        <button>Delete</button>
                        <button onClick={handlClose}>Close</button>
                    </div>
        </div>
      </div>
    </div>
  )
}

export default ClientDeliveryPoint