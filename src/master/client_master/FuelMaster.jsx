import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Style/master.css'
function FuelMaster() {
  const navigate = useNavigate();

  const handlClose = () =>{
    navigate('/');
  }
  return (
    <div className="fuel-master">
      <div className="fuel-master-main ">
        <div className="fuel-master-row1">
          <h3 style={{color:'maroon',fontSize:'18px'}}>Fuel Master</h3>
        </div>
        <div className="fuel-master-row2">
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
                                    <label for="fname">Network </label>
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
                                    <label for="fname">Fuel </label>
                                </span>
                                <span className="pickup-input">
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="pickup-label">
                                    <label for="fname">Effective </label>
                                </span>
                                <span className="pickup-input">
                                    <input type="date" />
                                </span>
                            </div>

                           
          </form>
        </div>
        <div className="fuel-master-row3">
        <div className='ci-button'>
                        <button>Save</button>
                        <button onClick={handlClose}>Close</button>
                    </div>
        </div>
      </div>
    </div>
  )
}

export default FuelMaster