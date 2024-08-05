import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Style/transaction.css'
function QuickInscan() {
  const navigate = useNavigate();

  const handlClose = () =>{
    navigate('/');
  }
  return (
    <div className="quickinscan">
      <div className="quickinscan-main mt-3" style={{width:'45%'}}>
        <div className="quickinscan-row1">
          <h3 style={{color:'maroon',fontSize:'18px'}}>Consigment Entry</h3>
        </div>
        <div className="quickinscan-row2">
          <form action="">

          <div className="form-outer">
                                <span className="pickup-label">
                                    <label for="fname">Booking Date </label>
                                </span>
                                <span className="pickup-input" style={{width:'40%'}}>
                                    <input type="date" />
                                </span>
                            </div>
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
                                    <label for="fname">Origin </label>
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
                                    <label for="fname">AWB No. </label>
                                </span>
                                <span className="pickup-input" style={{width:'50%'}}>
                                    <input type="text" />
                                </span>
                            </div>
                            <div className="form-outer">
                                <span className="pickup-label">
                                    <label for="fname">Refno </label>
                                </span>
                                <span className="pickup-input" style={{width:'50%'}}>
                                    <input type="text" />
                                </span>
                            </div>
                            <div className="form-outer">
                                <span className="pickup-label">
                                    <label for="fname">Pkg </label>
                                </span>
                                <span className="pickup-input" style={{width:'50%'}}>
                                    <input type="text" />
                                </span>
                            </div>
                            <div className="form-outer">
                                <span className="pickup-label">
                                    <label for="fname">Act Weight </label>
                                </span>
                                <span className="pickup-input" style={{width:'30%'}}>
                                    <input type="text" />
                                </span>
                            </div>


                            <div className="form-outer">
                                <span className="pickup-label">
                                    <label for="fname">Pay Mode </label>
                                </span>
                                <span className="pickup-input" style={{width:'40%'}}>
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
                                    <label for="fname">Mode </label>
                                </span>
                                <span className="pickup-input" style={{width:'40%'}}>
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
                                    <label for="fname">Destination </label>
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
                                    <label for="fname">Consignee </label>
                                </span>
                                <span className="pickup-input">
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="pickup-label">
                                    <label for="fname">Phone No. </label>
                                </span>
                                <span className="pickup-input">
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="pickup-label">
                                    <label for="fname">Cash Amt </label>
                                </span>
                                <span className="pickup-input" style={{width:'50%'}}>
                                    <input type="text" />
                                </span>
                            </div>
                            <div className="form-outer">
                                <span className="pickup-label">
                                    <label for="fname">COD Amt </label>
                                </span>
                                <span className="pickup-input" style={{width:'50%'}}>
                                    <input type="text" />
                                </span>
                            </div>
                            <div className="form-outer">
                                <span className="pickup-label">
                                    <label for="fname">TOPAY Amt </label>
                                </span>
                                <span className="pickup-input" style={{width:'50%'}}>
                                    <input type="text" />
                                </span>
                            </div>
          </form>
        </div>
        <div className="quickinscan-row3">
        <div className='ci-button'>
                        <button>Save</button>
                        <button onClick={handlClose}>Close</button>
                    </div>
        </div>
      </div>
    </div>
  )
}

export default QuickInscan