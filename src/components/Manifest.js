import React from 'react';
import '../Style/manifest.css'
const Manifest = () => {
  return (
    <div className="manifest-container mt-5" >
     
 <div className="manifest-container-main" >
  
<div className="manifest-row1"> 
  
  <div className="manifest-row1-col1" >
 
<div class="manifest-row1-col1-row1"> 
  
  <h6>Period</h6>
</div>
<div class="manifest-row1-col1-row2">
  <div>
<span><label>Start Date</label></span>
<span className="manifest-startdate"><input type="date"></input></span>
</div>
<div>
<span><label>End Date</label></span>
<span className="manifest-enddate"><input type="date"></input></span> 
</div>
   </div>
<div class="manifest-row1-col1-row3">
<h6>Branch</h6> </div>
<div class="manifest-row1-col1-row4"> 
<span className="form-outer-label-manifest">
            <label htmlFor="company"></label>
            <select id="company">
            <option value="company1">All</option>
              
            </select>
          </span>
</div>

  </div>
  <div className="manifest-row1-col2" >
    <form>
    <div className="form-outer">
          <span className="form-outer-label-manifest">
            <label htmlFor="company">Client</label>
          </span>
          <span className="form-outer-input-manifest">
            <select id="company">
              <option value=""></option>
              <option value="company1">Client</option>
              <option value="company2">Destination</option>
              <option value="company3">Mode</option>
              <option value="company3">Dom/Intl</option>
              <option value="company3">Status</option>
            </select>
          </span>
        </div>

        <div className="form-outer">
          <span className="form-outer-label-manifest">
            <label htmlFor="company">Destination</label>
          </span>
          <span className="form-outer-input-manifest">
            <select id="company">
              <option value=""></option>
              <option value="company1">client 1</option>
              <option value="company2">client 2</option>
              <option value="company3">client 3</option>
            </select>
          </span>
        </div>

        <div className="form-outer">
          <span className="form-outer-label-manifest">
            <label htmlFor="company">Mode</label>
          </span>
          <span className="form-outer-input-manifest">
            <select id="company">
              <option value=""></option>
              <option value="company1">client 1</option>
              <option value="company2">client 2</option>
              <option value="company3">client 3</option>
            </select>
          </span>
        </div>

        <div className="form-outer">
          <span className="form-outer-label-manifest">
            <label htmlFor="company">Dom/Intl</label>
          </span>
          <span className="form-outer-input-manifest">
            <select id="company">
              <option value=""></option>
              <option value="company1">client 1</option>
              <option value="company2">client 2</option>
              <option value="company3">client 3</option>
            </select>
          </span>
        </div>

        <div className="form-outer">
          <span className="form-outer-label-manifest">
            <label htmlFor="company">Status</label>
          </span>
          <span className="form-outer-input-manifest">
            <select id="company">
              <option value=""></option>
              <option value="company1">client 1</option>
              <option value="company2">client 2</option>
              <option value="company3">client 3</option>
            </select>
          </span>
        </div>

    </form>
  </div>
  <div className="manifest-row1-col3" >
  
<div class="manifest-row1-col3-col1">

  <p>Total</p>
  <p>Domastic</p>
  <p>International</p>
  <p>Total Of No</p>
   </div>
   <div class="manifest-row1-col3-col2">
   <div class="div1"> Booking</div>
<div class="div2">Delivered</div>
<div class="div3">Pendin </div>
<div class="div4">HOLD</div>
<div class="div5">RTO</div>
<div class="div6">B </div>
<div class="div7">D </div>
<div class="div8">P </div>
<div class="div9">H</div>
<div class="div10">R</div>
<div class="div11">IB </div>
<div class="div12">ID </div>
<div class="div13">IP </div>
<div class="div14"> IH</div>
<div class="div15">IR </div>
<div class="div16">TB</div>
<div class="div17">TD </div>
<div class="div18">TP </div>
<div class="div19">TH </div>
<div class="div20">TR </div>
</div>
</div>




  <div className="manifest-row1-col4" >
    <span><button>Show</button></span>
    <span><button>Export To Excel</button></span>
    <span><button>Close</button></span>
    <span style={{fontWeight:700}}><p>Total of No.</p></span>
  </div>
</div>
<div className="manifest-row2"> </div>
</div>
</div>
  );
};

export default Manifest;