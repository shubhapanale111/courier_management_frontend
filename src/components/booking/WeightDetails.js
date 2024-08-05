// import React from "react";
// import '../../Style/booking.css'

// export default function WeightDetails() {
//   return (
//     <>
//       <div className="title-box">
//         <p className="title">Weight Details</p>
//       </div>
//       <form>
//         <div className="form-outer">
//           <span className="form-outer-label">
//             <label htmlFor="company">Description</label>
//           </span>
//           <span className="form-outer-input">
//             <select id="company">
//               <option value=""></option>
//               <option value="company1">description 1</option>
//               <option value="company2">description 2</option>
//               <option value="company3">description 3</option>
//             </select>
//           </span>
//         </div>
//         <div className="form-outer">
//           <span className="form-outer-label1">
//             <label for="fname">Mode </label>
//           </span>
//           <span className="form-outer-input2">
//             <select id="company">
//               <option value=""></option>
//               <option value="company1"> mode 1</option>
//               <option value="company2"> mode 2</option>
//               <option value="company3"> mode 3</option>
//             </select>
//           </span>
//           <span className="form-outer-label11">
//             <label for="fname">Pay Mode </label>
//           </span>
//           <span className="form-outer-input2">
//             <select id="company">
//               <option value=""></option>
//               <option value="company1">pay mode 1</option>
//               <option value="company2">pay mode 2</option>
//               <option value="company3">pay mode 3</option>
//             </select>
//           </span>
//         </div>
//         <div className="form-outer">
//           <span className="form-outer-label1">
//             <label for="fname">Pcs </label>
//           </span>
//           <span className="form-outer-input2">
//             <input type="text" />
//           </span>
//           <span className="form-outer-label11">
//             <label for="fname">Act Weight </label>
//           </span>
//           <span className="form-outer-input2">
//             <input type="text" />
//           </span>
//         </div>
//         <hr />
//         <div className="form-outer-subbox">
//           <div>
//             <label for="fname">Length </label>
//             <input type="text" />
//           </div>
//           <div>
//             <label for="fname">Width </label>
//             <input type="text" />
//           </div>
//           <div>
//             <label for="fname">Height </label>
//             <input type="text" />
//           </div>
//           <div>
//             <label for="fname">DvdBy</label>
//             <input type="text" />
//           </div>
//           <div>
//             <label for="fname">CFT </label>
//             <input type="text" />
//           </div>
//           <div>
//             <label for="fname">Pcs </label>
//             <input type="text" />
//           </div>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "end",
//             }}
//           >
//             <button
//               style={{
//                 height: "20px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 border: "none",
//                 backgroundColor: "rgb(249, 95, 39)",
//                 color: "white",
//               }}
//             >
//               Add
//             </button>
//           </div>
//         </div>
//         <div class="table-container">
//   <table>
//     <thead>
//       <tr>
//         <th>Length</th>
//         <th>Width</th>
//         <th>Height</th>
//         <th>Divided</th>
//         <th>CFT</th>
//         <th>Pcs</th>
//         <th>Vol WT</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>10.5</td>
//         <td>5.3</td>
//         <td>15.2</td>
//         <td>2</td>
//         <td>800</td>
//         <td>50</td>
//         <td>150</td>
//       </tr>
//       <tr>
//         <td>20.0</td>
//         <td>10.0</td>
//         <td>25.0</td>
//         <td>3</td>
//         <td>6000</td>
//         <td>100</td>
//         <td>300</td>
//       </tr>
//     </tbody>
//   </table>
// </div>


//         <hr />
//         <div className="form-outer">
//           <span className="form-outer-label1">
//             <label for="fname">Vol Weight </label>
//           </span>
//           <span className="form-outer-input2">
//             <input type="text" />
//           </span>
//           <span className="form-outer-label11">
//             <label for="fname">Billing Weight </label>
//           </span>
//           <span className="form-outer-input2">
//             <input type="text" />
//           </span>
//         </div>

//         <div className="form-outer">
//           <span className="form-outer-label1">
//             <label for="fname">Inv No</label>
//           </span>
//           <span className="form-outer-input2">
//             <input type="text" />
//           </span>
//           <span className="form-outer-label11">
//             <label for="fname">Inv Value </label>
//           </span>
//           <span className="form-outer-input2">
//             <input type="text" />
//           </span>
//         </div>

//         <div className="form-outer">
//           <span className="form-outer-label1">
//             <label for="fname">Policy No </label>
//           </span>
//           <span className="form-outer-input2">
//             <input type="text" />
//           </span>
//           <span className="form-outer-label11">
//             <label for="fname">Policy date </label>
//           </span>
//           <span className="form-outer-input2">
//             <input type="date" />
//           </span>
//         </div>

//         <div className="form-outer">
//           <span className="form-outer-label1">
//             <label for="fname">Pol Value </label>
//           </span>
//           <span className="form-outer-input2">
//             <input type="text" />
//           </span>
//           <span className="form-outer-label11">
//             <label for="fname">Eway Bill </label>
//           </span>
//           <span className="form-outer-input2">
//             <input type="text" />
//           </span>
//         </div>
//       </form>
//     </>
//   );
// }



// import React, { useState } from "react";
// import '../../Style/booking.css';

// export default function WeightDetails() {
//   const [rows, setRows] = useState([]); // Default 0 rows
//   const [pcs, setPcs] = useState("");

//   const handlePcsChange = (e) => {
//     setPcs(e.target.value);
//   };

//   const handlePcsKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       const newPcs = parseInt(pcs);
//       if (!isNaN(newPcs)) {
//         const newRows = Array.from({ length: newPcs }, () => ({
//           length: '',
//           width: '',
//           height: '',
//           divided: '',
//           cft: '',
//           pcs: '',
//           volWt: ''
//         }));
//         setRows([...rows, ...newRows]);
//         setPcs(""); // Reset pcs input field
//       }
//     }
//   };

//   return (
//     <>
//       <div className="title-box">
//         <p className="title">Weight Details</p>
//       </div>
//       <form>
//         <div className="form-outer">
//           <span className="form-outer-label">
//             <label htmlFor="company">Description</label>
//           </span>
//           <span className="form-outer-input">
//             <select id="company">
//               <option value=""></option>
//               <option value="company1">description 1</option>
//               <option value="company2">description 2</option>
//               <option value="company3">description 3</option>
//             </select>
//           </span>
//         </div>
//         <div className="form-outer">
//           <span className="form-outer-label1">
//             <label htmlFor="fname">Mode </label>
//           </span>
//           <span className="form-outer-input2">
//             <select id="mode">
//               <option value=""></option>
//               <option value="mode1">mode 1</option>
//               <option value="mode2">mode 2</option>
//               <option value="mode3">mode 3</option>
//             </select>
//           </span>
//           <span className="form-outer-label11">
//             <label htmlFor="payMode">Pay Mode </label>
//           </span>
//           <span className="form-outer-input2">
//             <select id="payMode">
//               <option value=""></option>
//               <option value="payMode1">pay mode 1</option>
//               <option value="payMode2">pay mode 2</option>
//               <option value="payMode3">pay mode 3</option>
//             </select>
//           </span>
//         </div>
//         <div className="form-outer">
//           <span className="form-outer-label1">
//             <label htmlFor="pcs">Pcs </label>
//           </span>
//           <span className="form-outer-input2">
//             <input
//               type="text"
//               id="pcs"
//               value={pcs}
//               onChange={handlePcsChange}
//               onKeyDown={handlePcsKeyDown}
//             />
//           </span>
//           <span className="form-outer-label11">
//             <label htmlFor="actWeight">Act Weight </label>
//           </span>
//           <span className="form-outer-input2">
//             <input type="text" id="actWeight" />
//           </span>
//         </div>
//         <hr />
//         <div className="form-outer-subbox">
//           <div>
//             <label htmlFor="length">Length </label>
//             <input type="text" id="length" />
//           </div>
//           <div>
//             <label htmlFor="width">Width </label>
//             <input type="text" id="width" />
//           </div>
//           <div>
//             <label htmlFor="height">Height </label>
//             <input type="text" id="height" />
//           </div>
//           <div>
//             <label htmlFor="divided">DvdBy</label>
//             <input type="text" id="divided" />
//           </div>
//           <div>
//             <label htmlFor="cft">CFT </label>
//             <input type="text" id="cft" />
//           </div>
//           <div>
//             <label htmlFor="pcs2">Pcs </label>
//             <input type="text" id="pcs2" />
//           </div>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "end",
//             }}
//           >
//             <button
//               style={{
//                 height: "20px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 border: "none",
//                 backgroundColor: "rgb(249, 95, 39)",
//                 color: "white",
//               }}
//             >
//               Add
//             </button>
//           </div>
//         </div>
//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>Length</th>
//                 <th>Width</th>
//                 <th>Height</th>
//                 <th>Divided</th>
//                 <th>CFT</th>
//                 <th>Pcs</th>
//                 <th>Vol WT</th>
//               </tr>
//             </thead>
//             <tbody>
//               {rows.map((row, index) => (
//                 <tr key={index} className="table-row">
//                   <td>{row.length}</td>
//                   <td>{row.width}</td>
//                   <td>{row.height}</td>
//                   <td>{row.divided}</td>
//                   <td>{row.cft}</td>
//                   <td>{row.pcs}</td>
//                   <td>{row.volWt}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <hr />
//         <div className="form-outer">
//           <span className="form-outer-label1">
//             <label htmlFor="volWeight">Vol Weight </label>
//           </span>
//           <span className="form-outer-input2">
//             <input type="text" id="volWeight" />
//           </span>
//           <span className="form-outer-label11">
//             <label htmlFor="billingWeight">Billing Weight </label>
//           </span>
//           <span className="form-outer-input2">
//             <input type="text" id="billingWeight" />
//           </span>
//         </div>
//         <div className="form-outer">
//           <span className="form-outer-label1">
//             <label htmlFor="invNo">Inv No</label>
//           </span>
//           <span className="form-outer-input2">
//             <input type="text" id="invNo" />
//           </span>
//           <span className="form-outer-label11">
//             <label htmlFor="invValue">Inv Value </label>
//           </span>
//           <span className="form-outer-input2">
//             <input type="text" id="invValue" />
//           </span>
//         </div>
//         <div className="form-outer">
//           <span className="form-outer-label1">
//             <label htmlFor="policyNo">Policy No </label>
//           </span>
//           <span className="form-outer-input2">
//             <input type="text" id="policyNo" />
//           </span>
//           <span className="form-outer-label11">
//             <label htmlFor="policyDate">Policy date </label>
//           </span>
//           <span className="form-outer-input2">
//             <input type="date" id="policyDate" />
//           </span>
//         </div>
//         <div className="form-outer">
//           <span className="form-outer-label1">
//             <label htmlFor="polValue">Pol Value </label>
//           </span>
//           <span className="form-outer-input2">
//             <input type="text" id="polValue" />
//           </span>
//           <span className="form-outer-label11">
//             <label htmlFor="ewayBill">Eway Bill </label>
//           </span>
//           <span className="form-outer-input2">
//             <input type="text" id="ewayBill" />
//           </span>
//         </div>
//       </form>
//     </>
//   );
// }
















import React, { useState } from "react";
import '../../Style/booking.css';

export default function WeightDetails() {
  const [rows, setRows] = useState([]); // Default 0 rows
  const [pcs, setPcs] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [divided, setDivided] = useState("");
  const [cft, setCft] = useState("");
  const [pcs2, setPcs2] = useState("");
  const [volWt, setVolWt] = useState("");

  const handlePcsChange = (e) => {
    setPcs(e.target.value);
  };

  const handlePcsKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newPcs = parseInt(pcs);
      if (!isNaN(newPcs)) {
        const newRows = Array.from({ length: newPcs }, () => ({
          length: '',
          width: '',
          height: '',
          divided: '',
          cft: '',
          pcs: '',
          volWt: ''
        }));
        setRows([...rows, ...newRows]);
        setPcs(""); // Reset pcs input field
      }
    }
  };

  const handleAddRow = () => {
    const lengthNum = parseFloat(length);
    const widthNum = parseFloat(width);
    const heightNum = parseFloat(height);
    const dividedNum = parseFloat(divided);

    if (!isNaN(lengthNum) && !isNaN(widthNum) && !isNaN(heightNum) && !isNaN(dividedNum) && dividedNum !== 0) {
      const volume = lengthNum * widthNum * heightNum;
      const volumeWeight = volume / dividedNum;

      const newRow = {
        length,
        width,
        height,
        divided,
        cft: volume.toFixed(2),
        pcs: pcs2,
        volWt: volumeWeight.toFixed(2)
      };

      setRows([...rows, newRow]);
      setLength("");
      setWidth("");
      setHeight("");
      setDivided("");
      setCft("");
      setPcs2("");
      setVolWt("");
    }
  };

  return (
    <>
      <div className="title-box">
        <p className="title">Weight Details</p>
      </div>
      <form>
        <div className="form-outer">
          <span className="form-outer-label">
            <label htmlFor="company">Description</label>
          </span>
          <span className="form-outer-input">
            <select id="company">
              <option value=""></option>
              <option value="company1">description 1</option>
              <option value="company2">description 2</option>
              <option value="company3">description 3</option>
            </select>
          </span>
        </div>
        <div className="form-outer">
          <span className="form-outer-label1">
            <label htmlFor="fname">Mode </label>
          </span>
          <span className="form-outer-input2">
            <select id="mode">
              <option value=""></option>
              <option value="mode1">mode 1</option>
              <option value="mode2">mode 2</option>
              <option value="mode3">mode 3</option>
            </select>
          </span>
          <span className="form-outer-label11">
            <label htmlFor="payMode">Pay Mode </label>
          </span>
          <span className="form-outer-input2">
            <select id="payMode">
              <option value=""></option>
              <option value="payMode1">pay mode 1</option>
              <option value="payMode2">pay mode 2</option>
              <option value="payMode3">pay mode 3</option>
            </select>
          </span>
        </div>
        <div className="form-outer">
          <span className="form-outer-label1">
            <label htmlFor="pcs">Pcs </label>
          </span>
          <span className="form-outer-input2">
            <input
              type="text"
              id="pcs"
              value={pcs}
              onChange={handlePcsChange}
              onKeyDown={handlePcsKeyDown}
            />
          </span>
          <span className="form-outer-label11">
            <label htmlFor="actWeight">Act Weight </label>
          </span>
          <span className="form-outer-input2">
            <input type="text" id="actWeight" />
          </span>
        </div>
        <hr />
        <div className="form-outer-subbox">
          <div>
            <label htmlFor="length">Length </label>
            <input
              type="text"
              id="length"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="width">Width </label>
            <input
              type="text"
              id="width"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="height">Height </label>
            <input
              type="text"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="divided">DvdBy</label>
            <input
              type="text"
              id="divided"
              value={divided}
              onChange={(e) => setDivided(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cft">CFT </label>
            <input
              type="text"
              id="cft"
              value={cft}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="pcs2">Pcs </label>
            <input
              type="text"
              id="pcs2"
              value={pcs2}
              onChange={(e) => setPcs2(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <button
              type="button"
              style={{
                height: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "none",
                backgroundColor: "rgb(249, 95, 39)",
                color: "white",
              }}
              onClick={handleAddRow}
            >
              Add
            </button>
          </div>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Length</th>
                <th>Width</th>
                <th>Height</th>
                <th>Divided</th>
                <th>CFT</th>
                <th>Pcs</th>
                <th>Vol WT</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="table-row">
                  <td>{row.length}</td>
                  <td>{row.width}</td>
                  <td>{row.height}</td>
                  <td>{row.divided}</td>
                  <td>{row.cft}</td>
                  <td>{row.pcs}</td>
                  <td>{row.volWt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr />
        <div className="form-outer">
          <span className="form-outer-label1">
            <label htmlFor="volWeight">Vol Weight </label>
          </span>
          <span className="form-outer-input2">
            <input type="text" id="volWeight" />
          </span>
          <span className="form-outer-label11">
            <label htmlFor="billingWeight">Billing Weight </label>
          </span>
          <span className="form-outer-input2">
            <input type="text" id="billingWeight" />
          </span>
        </div>
        <div className="form-outer">
          <span className="form-outer-label1">
            <label htmlFor="invNo">Inv No</label>
          </span>
          <span className="form-outer-input2">
            <input type="text" id="invNo" />
          </span>
          <span className="form-outer-label11">
            <label htmlFor="invValue">Inv Value </label>
          </span>
          <span className="form-outer-input2">
            <input type="text" id="invValue" />
          </span>
        </div>
        <div className="form-outer">
          <span className="form-outer-label1">
            <label htmlFor="policyNo">Policy No </label>
          </span>
          <span className="form-outer-input2">
            <input type="text" id="policyNo" />
          </span>
          <span className="form-outer-label11">
            <label htmlFor="policyDate">Policy date </label>
          </span>
          <span className="form-outer-input2">
            <input type="date" id="policyDate" />
          </span>
        </div>
        <div className="form-outer">
          <span className="form-outer-label1">
            <label htmlFor="polValue">Pol Value </label>
          </span>
          <span className="form-outer-input2">
            <input type="text" id="polValue" />
          </span>
          <span className="form-outer-label11">
            <label htmlFor="ewayBill">Eway Bill </label>
          </span>
          <span className="form-outer-input2">
            <input type="text" id="ewayBill" />
          </span>
        </div>
      </form>
    </>
  );
}
