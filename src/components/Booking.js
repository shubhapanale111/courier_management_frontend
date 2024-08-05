// import React from "react";
// import "../Style/style.css";
// import SenderDetails from "./booking/SenderDetails";
// import ReciverDetails from "./booking/ReciverDetails";
// import WeightDetails from "./booking/WeightDetails";
// import AmountDetails from "./booking/AmountDetails";

// const Booking = () => {
//   return (
//     <div className="booking-container">
//       <div class="booking-container-main mt-2">
//         <div className="main-row1"> <div className='top-nav-left'>   
//         <span className='title-name' >OCMS</span> 
//         <br/>
//        <div style={{marginTop:'-5px'}}> Online Courier Management System</div>
//        </div></div>
//         <div className="main-row2">
//           <div class="main-row2-subrow1"> 
//             <div className="search-info">
//               <div className="search-info-sub">
//                 <span><label>AWB No.</label></span>
//                 <span className="form-outer-input"><input type="number"></input></span>
//               </div>
//               <div className="search-info-sub">
//                 <span><label>Ref No.</label></span>
//                 <span className="form-outer-input"><input type="number"></input></span>
//               </div>
//               <div className="search-info-sub">
//                 <span><label>Booking Date </label></span>
//                 <span className="form-outer-input"><input type="date"></input></span>
//               </div>
//             </div>
//           </div>
//           <div class="main-row2-subrow2">
//             <div class="subrow2-col1">
//               <div className="subrow2-col1-row1">
//                 <SenderDetails />
//               </div>
//               <div className="subrow2-col1-row2">
//                 <ReciverDetails />
//               </div>
//             </div>
//             <div class="subrow2-col2">
//               <WeightDetails />
//             </div>
//             <div class="subrow2-col3">
//               <AmountDetails />
//             </div>
//           </div>
//         </div>
//         <div className="main-row3">
//           <button >Print Cn</button>
//           <button >Print Lb</button>
//           <button >Save</button>
//            </div>
//       </div>
//     </div>
//   );
// };

// export default Booking;
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/booking.css";
import SenderDetails from "./booking/SenderDetails";
import ReciverDetails from "./booking/ReciverDetails";
import WeightDetails from "./booking/WeightDetails";
import AmountDetails from "./booking/AmountDetails";

const Booking = () => {
  const navigate=useNavigate();

  const handleClose = () =>{
    navigate('/');
  }
  return (
    <div className="booking-container">
      {/* Main container for the booking page */}
      <div className="booking-container-main">
        {/* Header section */}
        <div className="main-row1">
          {/* Logo and system name */}
          <div className='row1' style={{display:'flex',justifyContent:'flex-end'}}>
            <span style={{color:'maroon',fontWeight:'700'}}>Booking Entry</span>
          </div>
        </div>
        {/* Main content rows */}
        <div className="main-row2">
          {/* Sub-row for search and information */}
          <div className="main-row2-subrow1">
            {/* Search information inputs */}
            <div className="search-info">
              <div className="search-info-sub">
                <span className="search-info-sub-label"><label>AWB No.</label></span>
                <span className="search-info-sub-input"><input type="text"></input></span>
              </div>
              <div className="search-info-sub">
                <span className="search-info-sub-label"><label>Ref No.</label></span>
                <span className="search-info-sub-input"><input type="text"></input></span>
              </div>
              <div className="search-info-sub">
                <span className="search-info-sub-label"><label>Booking Date</label></span>
                <span className="search-info-sub-input"><input type="date"></input></span>
              </div>
            </div>
          </div>
          {/* Sub-row for details sections */}
          <div className="main-row2-subrow2">
            {/* Column for sender and receiver details */}
            <div className="subrow2-col1">
              
              <div className="subrow2-col1-row1">
                
                <SenderDetails /> {/* Component for sender details */}
              </div>
              <div className="subrow2-col1-row2">
                <ReciverDetails /> {/* Component for receiver details */}
              </div>
            </div>
            {/* Column for weight details */}
            <div className="subrow2-col2">
              <WeightDetails /> {/* Component for weight details */}
            </div>
            {/* Column for amount details */}
            <div className="subrow2-col3">
              <AmountDetails /> {/* Component for amount details */}
            </div>
          </div>
        </div>
        {/* Action buttons section */}
        <div className="main-row3">
          <button>Print Cn</button> {/* Button to print consignment */}
          <button>Print Lb</button> {/* Button to print label */}
          <button>Save</button>
          <button>Dlete</button>
          <button onClick={()=>handleClose()}>Close</button> {/* Button to save booking */}
        </div>
      </div>
    </div>
  );
};

export default Booking;
