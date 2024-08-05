import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Style/master.css'
function ClientMaster() {
  const navigate = useNavigate();

  const handlClose = () =>{
    navigate('/');
  }
  return (
    <div className="client-master">
      <div className="client-master-main mt-5">
        <div className="client-row1">
          <h3 style={{color:'maroon',fontSize:'18px'}}>Customer Profile</h3>
        </div>
        <div className="client-row2">
          <div className="client-row2-left">
          <form>
                            <div className="form-outer">
                                <span className="form-outer-label-cm-11">
                                    <label for="fname">Client Code </label>
                                </span>
                                <span className="form-outer-input-cm-11">
                                <select id="company">
                                  <option value=""></option>
                                  <option value="company1"> network 1</option>
                                  <option value="company2"> network 2</option>
                                  <option value="company3"> network 3</option>
                                </select>
                                </span>
                                <span className="form-outer-label-cm-11" style={{marginRight:'-18px',width:'20%'}}>
                                    <label for="fname">Client Type </label>
                                </span>
                                <span className="form-outer-input-cm-11" style={{width:'27%'}}>
                                <select id="company">
                                  <option value=""></option>
                                  <option value="company1"> network 1</option>
                                  <option value="company2"> network 2</option>
                                  <option value="company3"> network 3</option>
                                </select>
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="form-outer-label-cm-1">
                                    <label for="fname">Client Name </label>
                                </span>
                                <span className="form-outer-input-cm-1">
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="form-outer-label-cm-1">
                                    <label for="fname">Contact Person </label>
                                </span>
                                <span className="form-outer-input-cm-1">
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="form-outer-label-cm-1">
                                    <label for="fname">Address </label>
                                </span>
                                <span className="form-outer-input-cm-1">
                                    <textarea type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="form-outer-label-cm-1">
                                    <label for="fname">Street </label>
                                </span>
                                <span className="form-outer-input-cm-1">
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="form-outer-label-cm-1">
                                    <label for="fname">City</label>
                                </span>
                                <span className="form-outer-input-cm-1">
                                <select id="city">
                                  <option value=""></option>
                                  <option value="company1"> city 1</option>
                                  <option value="company2"> city 2</option>
                                  <option value="company3"> city 3</option>
                                </select>
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="form-outer-label-cm-1" style={{width:'25%'}}>
                                    <label for="fname">Pincode</label>
                                </span>
                                <span className="form-outer-input-cm-1" style={{width:'20%'}}>
                                    <input type="text" />
                                </span>
                                <span className="form-outer-label-cm-1" style={{width:'15%'}}>
                                    <label for="fname">Contact No</label>
                                </span>
                                <span className="form-outer-input-cm-1" style={{width:'30%'}}>
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="form-outer-label-cm-1">
                                    <label for="fname">Email </label>
                                </span>
                                <span className="form-outer-input-cm-1">
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="form-outer-label-cm-1">
                                    <label for="fname">GST No</label>
                                </span>
                                <span className="form-outer-input-cm-1">
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="form-outer-label-cm-1">
                                    <label for="fname">Branch </label>
                                </span>
                                <span className="form-outer-input-cm-1">
                                <select id="branch">
                                  <option value=""></option>
                                  <option value="company1"> Branch 1</option>
                                  <option value="company2"> Branch 2</option>
                                  <option value="company3"> Branch 3</option>
                                </select>
                                </span>
                            </div>
              </form>
          </div>
          <div className="client-row2-right">
          <form>
                            <div className="form-outer">
                                <span className="form-outer-label-cm">
                                    <label for="fname">Fuel chg(Dom) </label>
                                </span>
                                <span className="form-outer-input-cm">
                                    <input type="text" />
                                </span>
                                <span className="form-outer-label-cm">
                                    <label for="fname">Fuel chg(Air) </label>
                                </span>
                                <span className="form-outer-input-cm">
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="form-outer-label-cm">
                                    <label for="fname">C/note charge Dom</label>
                                </span>
                                <span className="form-outer-input-cm">
                                    <input type="text" />
                                </span>
                                <span className="form-outer-label-cm">
                                    <label for="fname">C/note charge Air</label>
                                </span>
                                <span className="form-outer-input-cm">
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="form-outer-label-cm">
                                    <label for="fname">FOV </label>
                                </span>
                                <span className="form-outer-input-cm">
                                    <input type="text" />
                                </span>
                                <span className="form-outer-label-cm">
                                    <label for="fname">Risk Cover Charge </label>
                                </span>
                                <span className="form-outer-input-cm">
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="form-outer-label-cm">
                                    <label for="fname">Active/Deactive </label>
                                </span>
                                <span className="form-outer-input-cm">
                                    <input type="text" />
                                </span>
                                <span className="form-outer-label-cm">
                                    <label for="fname">CFT Air </label>
                                </span>
                                <span className="form-outer-input-cm">
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="form-outer-label-cm">
                                    <label for="fname">CFT Road </label>
                                </span>
                                <span className="form-outer-input-cm">
                                    <input type="text" />
                                </span>
                                <span className="form-outer-label-cm">
                                    <label for="fname">CFT Train </label>
                                </span>
                                <span className="form-outer-input-cm">
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="form-outer-label-cm">
                                  
                                </span>
                                <span className="form-outer-input-cm">
                                    
                                </span>
                                <span className="form-outer-label-cm">
                                    <label for="fname">GST </label>
                                </span>
                                <span className="form-outer-input-cm">
                                    <input type="text" />
                                </span>
                            </div>
                            
                </form>
               <div className="client-checkbox">
               <div style={{display:'flex', }}>
                <span>
               <input type="checkbox" id="checkbox" name="checkbox" value="checkbox" />
               </span>
               <span style={{width:'100px',paddingLeft:'5px',marginTop:'-2px'}}>
               <label for="checkbox">Send Mail</label>
               </span>
               </div>
               <div style={{display:'flex'}}>
                <span>
               <input type="checkbox" id="checkbox" name="checkbox" value="checkbox" />
               </span>
               <span style={{width:'100px',paddingLeft:'5px',marginTop:'-2px'}}>
               <label for="checkbox">Send sms</label>
               </span>
               </div>
                
               
               </div>
          </div>
        </div>
        <div className="client-row3">
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

export default ClientMaster