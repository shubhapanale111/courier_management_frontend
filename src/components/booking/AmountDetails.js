import React from 'react'

export default function AmountDetails() {
  return (
    <>
     <div className='title-box'>
    <p className='title'>Amount Details</p>
    </div>
     <form>
   
              <div className="form-outer">
                    <span className="form-outer-label">
                      <label for="fname">Other Descp. </label>
                    </span>
                    <span className="form-outer-input">
                      <input type="text"  />
                    </span>
                  </div>

                  <div className="form-outer">
                    <span className="form-outer-label">
                      <label for="fname">Other Amt</label>
                    </span>
                    <span className="form-outer-input2">
                      <input type="text"  />
                    </span>
                  </div>
                  <div className="form-outer">
                    <span className="form-outer-label1">
                      <label for="fname">Cash Amt </label>
                    </span>
                    <span className="form-outer-input2">
                      <input type="text"  />
                    </span>
                    
                    <span className="form-outer-input-checkbox">
                      <input type="checkbox"  />
                    </span>
                    <span className="form-outer-label-checkbox">
                      <label for="fname" style={{color:'maroon',fontWeight:'700'}}>Tariff Not Apply </label>
                    </span>
                  </div>
                  <div className="form-outer">
                    <span className="form-outer-label">
                      <label for="fname">Network </label>
                    </span>
                    <span className="form-outer-input">
                    <select id="company">
              <option value=""></option>
              <option value="company1"> network 1</option>
              <option value="company2"> network 2</option>
              <option value="company3"> network 3</option>
            </select>
                    </span>
                  </div>

                  <div className="form-outer">
                    <span className="form-outer-label1">
                      <label for="fname">ODA Amt </label>
                    </span>
                    <span className="form-outer-input2">
                      <input type="text"  />
                    </span>
                    <span className="form-outer-label11">
                      <label for="fname">COD Amt </label>
                    </span>
                    <span className="form-outer-input2">
                      <input type="text"  />
                    </span>
                  </div>

                  <div className="form-outer">
                    <span className="form-outer-label1">
                      <label for="fname">TOPAY Amt </label>
                    </span>
                    <span className="form-outer-input2">
                      <input type="text"  />
                    </span>
                    <span className="form-outer-label11">
                      <label for="fname">CN Charge </label>
                    </span>
                    <span className="form-outer-input2">
                      <input type="text"  />
                    </span>
                  </div>

                  <div className="form-outer">
                    <span className="form-outer-label1">
                      <label for="fname">Fov Amt </label>
                    </span>
                    <span className="form-outer-input2">
                      <input type="text"  />
                    </span>
                    <span className="form-outer-label11">
                      <label for="fname">Risk Cover </label>
                    </span>
                    <span className="form-outer-input2">
                      <input type="text"  />
                    </span>
                  </div>

                  <div className="form-outer">
                    <span className="form-outer-label1">
                      <label for="fname">Fwd Amount </label>
                    </span>
                    <span className="form-outer-input2">
                      <input type="text"  />
                    </span>
                    <span className="form-outer-label11">
                      <label for="fname">Fuel Amt </label>
                    </span>
                    <span className="form-outer-input2">
                      <input type="text"  />
                    </span>
                  </div>

                  <div className="form-outer">
                    <span className="form-outer-label">
                      <label for="fname">Tariff Amount</label>
                    </span>
                    <span className="form-outer-input2">
                      <input type="text"  />
                    </span>
                  </div>

              </form>
    </>
  )
}
