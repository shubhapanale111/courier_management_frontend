import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Style/addressbook.css'
export default function AddressBook() {
    const navigate = useNavigate();

    const handlClose = () => {
        navigate('/');
    }
    return (
        <div style={{height:'90vh',marginTop:'100px', width:'80%'}} className="addressbook-container">
            <div class="addressbook-main-container mt-5">
                <div class="addressbook-main-container-row1" style={{ color: 'maroon' }}>
                    Address Book </div>
                <div class="addressbook-main-container-row2">

                    
                        <form>
                        
                           

                           

                            <div className="form-outer">
                                <span className="form-outer-label-addressbook"style={{fontWeight:'600'}}>
                                    <label for="fname">Name </label>
                                </span>
                                <span className="form-outer-input-addressbook">
                                    <input type="text" />
                                </span>

                            </div>

                            <div className="form-outer">
                                <span className="form-outer-label-addressbook"style={{fontWeight:'600',marginTop:'5px'}}>
                                    <label for="fname">Company </label>
                                </span>
                                <span className="form-outer-input-addressbook"style={{marginTop:'5px'}}>
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="form-outer-label-addressbook"style={{fontWeight:'600',marginTop:'5px'}}>
                                    <label for="fname">Address 1 </label>
                                </span>
                                <span className="form-outer-input-addressbook"style={{marginTop:'5px'}}>
                                    <input type="text" />
                                </span>
                            </div>

                          


                            <div className="form-outer">
                                <span className="form-outer-label-addressbook"style={{fontWeight:'600',marginTop:'5px'}}>
                                    <label for="fname">Address 2</label>
                                </span>
                                <span className="form-outer-input-addressbook"style={{marginTop:'5px'}}>
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="form-outer-label-addressbook"style={{fontWeight:'600',marginTop:'5px'}}>
                                    <label for="fname">City</label>
                                </span>
                                <span className="form-outer-input-addressbook"style={{marginTop:'5px'}}>
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="form-outer-label-addressbook"style={{fontWeight:'600',marginTop:'5px'}}>
                                    <label for="fname">Contact No.</label>
                                </span>
                                <span className="form-outer-input-addressbook"style={{marginTop:'5px'}}>
                                    <input type="text" />
                                </span>
                            </div>

                            <div className="form-outer">
                                <span className="form-outer-label-addressbook"style={{fontWeight:'600',marginTop:'5px'}}>
                                    <label for="fname">Email Id</label>
                                </span>
                                <span className="form-outer-input-addressbook"style={{marginTop:'5px'}}>
                                    <input type="text" />
                                </span>
                            </div>

                        </form>

                    </div>
                  <div class="addressbook-main-container-row3">
                    <div className='addressbook-button'>
                        <button>Save</button>
                        <button>Delete</button>
                        <button onClick={handlClose}>Close</button>
                    </div>
                </div>



                </div>
                
            </div>

        
    )
}