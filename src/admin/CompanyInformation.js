import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Style/companyinfo.css'
export default function CompanyInformation() {
    const navigate = useNavigate();

    const [companyInfo, setCompanyInfo] = useState({
        CompName: '',
        Address1: '',
        Address2: '',
        City: '',
        Pincode: '',
        contact: '',
        email: '',
        website: '',
        panno: '',
        stax: '',
        t1: '',
        t2: '',
        t3: '',
        t4: '',
        t5: '',
        bankname: '',
        acno: '',
        ifsccode: '',
        bankbranch: '',
        bankcity: ''  
    })
    useEffect(() => {
        fetch('http://localhost:3001/company-info')
            .then(response => response.json())
            .then(data => {
                if (data.statusCode === 200 && data.users.length > 0) {
                    setCompanyInfo(data.users[0]);
                }
            })
            .catch(error => {
                console.error('Error fetching company info:', error);
            });
    }, []);

    const handleClose = () =>{
        navigate('/');
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCompanyInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch('http://localhost:3001/company-info',{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(companyInfo)
        })
        .then(response=>response.json())
        .then(data=>{
            if (data.statusCode === 200) {
                alert('Company info updated successfully');
            } else {
                alert('Error updating company info');
            }
        })
        .catch(error=>{
            console.log('Error updating company info : ',error);
        });
    }
    return (
        <div className="companyinfo-container">
        <div className="companyinfo-main-container mt-5">
            <div className="companyinfo-main-container-row1" style={{ color: 'maroon' }}>
                Company Profile
            </div>
            <div className="companyinfo-main-container-row2" style={{ paddingTop: '10px' }}>
                <div className="companyinfo-main-container-row2-col1">
                    <form onSubmit={handleSubmit}>
                        <div className="form-outer">
                            <span className="form-outer-label-ci">
                                <label htmlFor="CompName">Company Name</label>
                            </span>
                            <span className="form-outer-input-ci">
                                <input type="text" name="CompName" value={companyInfo.CompName} onChange={handleInputChange} disabled />
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-ci">
                                <label htmlFor="Address1">Address 1</label>
                            </span>
                            <span className="form-outer-input-ci">
                                <input type="text" name="Address1" value={companyInfo.Address1} onChange={handleInputChange} />
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-ci">
                                <label htmlFor="Address2">Address 2</label>
                            </span>
                            <span className="form-outer-input-ci">
                                <input type="text" name="Address2" value={companyInfo.Address2} onChange={handleInputChange} />
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-ci">
                                <label htmlFor="City">City</label>
                            </span>
                            <span className="form-outer-input-ci">
                                <input type="text" name="City" value={companyInfo.City} onChange={handleInputChange} />
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-ci">
                                <label htmlFor="Pincode">Pincode</label>
                            </span>
                            <span className="form-outer-input-ci">
                                <input type="text" name="Pincode" value={companyInfo.Pincode} onChange={handleInputChange} />
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-ci">
                                <label htmlFor="contact">Phone No</label>
                            </span>
                            <span className="form-outer-input-ci">
                                <input type="text" name="contact" value={companyInfo.contact} onChange={handleInputChange} />
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-ci">
                                <label htmlFor="email">Email</label>
                            </span>
                            <span className="form-outer-input-ci">
                                <input type="text" name="email" value={companyInfo.email} onChange={handleInputChange} />
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-ci">
                                <label htmlFor="website">Website</label>
                            </span>
                            <span className="form-outer-input-ci">
                                <input type="text" name="website" value={companyInfo.website} onChange={handleInputChange} />
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-ci">
                                <label htmlFor="panno">Pan No.</label>
                            </span>
                            <span className="form-outer-input-ci">
                                <input type="text" name="panno" value={companyInfo.panno} onChange={handleInputChange} />
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-ci">
                                <label htmlFor="stax">GST No.</label>
                            </span>
                            <span className="form-outer-input-ci">
                                <input type="text" name="stax" value={companyInfo.stax} onChange={handleInputChange} />
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-ci">
                                <label htmlFor="t1">Terms 1</label>
                            </span>
                            <span className="form-outer-input-ci">
                                <input type="text" name="t1" value={companyInfo.t1} onChange={handleInputChange} />
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-ci">
                                <label htmlFor="t2">Terms 2</label>
                            </span>
                            <span className="form-outer-input-ci">
                                <input type="text" name="t2" value={companyInfo.t2} onChange={handleInputChange} />
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-ci">
                                <label htmlFor="t3">Terms 3</label>
                            </span>
                            <span className="form-outer-input-ci">
                                <input type="text" name="t3" value={companyInfo.t3} onChange={handleInputChange} />
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-ci">
                                <label htmlFor="t4">Terms 4</label>
                            </span>
                            <span className="form-outer-input-ci">
                                <input type="text" name="t4" value={companyInfo.t4} onChange={handleInputChange} />
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-ci">
                                <label htmlFor="t5">Terms 5</label>
                            </span>
                            <span className="form-outer-input-ci">
                                <input type="text" name="t5" value={companyInfo.t5} onChange={handleInputChange} />
                            </span>
                        </div>
                    </form>
                </div>
                <div className="companyinfo-main-container-row2-col2">
                    <form>
                        <div className="form-outer">
                            <span className="form-outer-label-ci">
                                <label htmlFor="bankname">Bank Detail</label>
                            </span>
                            <span className="form-outer-input-ci">
                                <input type="text" name="bankname" value={companyInfo.bankname} onChange={handleInputChange} />
                            </span>
                        </div>
                        <div className="form-outer">
                            <span className="form-outer-label-ci">
                                <label htmlFor="acno">A/c No.</label>
                            </span>
                            <span className="form-outer-input-ci">
                                <input type="text" name="acno" value={companyInfo.acno} onChange={handleInputChange} />
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-ci">
                                <label htmlFor="ifsccode">IFSC Code</label>
                            </span>
                            <span className="form-outer-input-ci">
                                <input type="text" name="ifsccode" value={companyInfo.ifsccode} onChange={handleInputChange} />
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-ci">
                                <label htmlFor="bankbranch">Branch</label>
                            </span>
                            <span className="form-outer-input-ci">
                                <input type="text" name="bankbranch" value={companyInfo.bankbranch} onChange={handleInputChange} />
                            </span>
                        </div>

                        <div className="form-outer">
                            <span className="form-outer-label-ci">
                                <label htmlFor="bankcity">City</label>
                            </span>
                            <span className="form-outer-input-ci">
                                <input type="text" name="bankcity" value={companyInfo.bankcity} onChange={handleInputChange} />
                            </span>
                        </div>
                    </form>
                </div>
            </div>
            <div className="companyinfo-main-container-row3">
                <div className="ci-button">
                    <button type="submit" onClick={handleSubmit}>Save</button>
                    <button onClick={handleClose}>Close</button>
                </div>
            </div>
        </div>
    </div>
    )
}