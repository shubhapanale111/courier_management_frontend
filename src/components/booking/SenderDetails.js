import React from 'react'

export default function SenderDetails() {
  return (
    <>
    <div className='title-box'>
    <p className='title'>Sender Details</p>
    </div>
    <form>
    
    <div className="form-outer">
          <span className="form-outer-label">
            <label htmlFor="company">Client</label>
          </span>
          <span className="form-outer-input">
            <select id="company">
              <option value=""></option>
              <option value="company1">client 1</option>
              <option value="company2">client 2</option>
              <option value="company3">client 3</option>
            </select>
          </span>
        </div>

        <div className="form-outer">
          <span className="form-outer-label">
            <label htmlFor="company">Shipper</label>
          </span>
          <span className="form-outer-input">
            <select id="company">
              <option value=""></option>
              <option value="company1">shipper 1</option>
              <option value="company2">shipper 2</option>
              <option value="company3">shipper 3</option>
            </select>
          </span>
        </div>

                  <div className="form-outer">
                    <span className="form-outer-label">
                      <label for="fname">Name </label>
                    </span>
                    <span className="form-outer-input">
                      <input type="text"  />
                    </span>
                  </div>

                  <div className="form-outer">
                    <span className="form-outer-label">
                      <label for="fname">Address 1 </label>
                    </span>
                    <span className="form-outer-input">
                      <textarea type="text"  />
                    </span>
                  </div>

                  <div className="form-outer">
                    <span className="form-outer-label">
                      <label for="fname">Address 2 </label>
                    </span>
                    <span className="form-outer-input">
                      <textarea type="text"  />
                    </span>
                  </div>

                  <div className="form-outer">
                    <span className="form-outer-label1">
                      <label for="fname">Origin </label>
                    </span>
                    <span className="form-outer-input2">
                      <input type="text"  />
                    </span>
                    <span className="form-outer-label-pincode">
                      <label for="fname">Pin code </label>
                    </span>
                    <span className="form-outer-input22">
                      <input type="text"  />
                    </span>
                  </div>
                  <div className="form-outer">
                    <span className="form-outer-label">
                      <label for="fname">Contact no.</label>
                    </span>
                    <span className="form-outer-input">
                      <input type="text"  />
                    </span>
                  </div>
                  <div className="form-outer">
                    <span className="form-outer-label">
                      <label for="fname">Email</label>
                    </span>
                    <span className="form-outer-input">
                      <input type="text"  />
                    </span>
                  </div>
                </form>
    </>
  )
}
