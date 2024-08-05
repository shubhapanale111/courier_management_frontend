// import React from "react";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import "../Style/Header.css";
// const navBarData = [
//   {
//     label: "Admin",
//     key: "Ad",
//     submenu: [{ label: "User Creation", url: "/user-creation" },
//       { label: "Company Information", url: "/company-information" },
//       { label: "Status Remove", url: "/status-remove" },
//       { label: "Advance Csd Tool", url: "/advance-csd" },
//     ],
//   },
//   // Master dropdown menu
//   {
//     label: "Master",
//     key: "Ms",
//     submenu: [
//       { label: "Zone Master", url: "/zone-master" },
//       { label: "Country Master", url: "/country-master" },
//       { label: "Pincode Master", url: "/pincode-master" },
//       { label: "City Master", url: "/city-master" },
//       {
//         label: "Client Master",
//         url: "/client-master",
//         submenu: [
//           { label: "Client Master", url: "/master/client-master/clientmaster" },
//           { label: "Client Pickup Point", url: "/master/client-master/client-pickup-point" },
//           { label: "Client Delivery Point", url: "/master/client-master/client-delivery-point" },
//           { label: "Fuel Master", url: "/master/client-master/fuel-master" },
//         ],
//       },
//       { label: "Branch Master", url: "/branch-master" },
//       { label: "Forwarder Master", url: "/forwarder-master" },
//       { label: "Delivery /Pickup Man", url: "/delivery" },
//       { label: "Status Master", url: "/status-master" },
//       { label: "Service Master", url: "/service-master" },
//       { label: "GST", url: "/gst" },
//       { label: "Packing Master", url: "/packing-master" },
//       { label: "Commodity Master", url: "/commodity-master" },
//     ],
//   },
//   // Transaction
//   {
//     label: "Transaction",
//     key: "Tr",
//     submenu: [
//       { label: "Quick Inscan", url: "/quick-inscan" },
//       { label: "Inscan", url: "/inscan" },
//       { label: "Dispatch Entry", url: "/dispatch-entry" },
//       { label: "Consigment Received", url: "/consigment-received" },
//       { label: "DRS Entry", url: "/DRS-entry" },
//       { label: "Deliver Entry", url: "/deliver-entry" },
//       { label: "Edit Dispatch", url: "/edit-dispatch" },
//       { label: "Forwarder Number Update", url: "/forwarder-number-update" },
//       { label: "Network Number Update", url: "/network-number-update" },
//     ],
//   },
//   // Customer
//   {
//     label: "Customer",
//     key: "Cu",
//     submenu: [
//       { label: "Customer Care", url: "/customer-care" },
//       { label: "Inquiry", url: "/inquiry" },
//       { label: "Consigment Status Report", url: "/consigment-status-report" },
//       { label: "Pending Consigment Report", url: "/pending-consigment-report" },
//     ],
//   },
//   // Billing
//   {
//     label: "Billing",
//     key: "Bi",
//     submenu: [
//       { label: "Client Billing", url: "/client-billing" },
//       { label: "Client Tariff", url: "/client-tariff" },
//       { label: "Forwarder Tariff", url: "/forwarder-tariff" },
//       { label: "Client Rate Calculation", url: "/client-rate-calculation" },
//       { label: "Forwarder Rate Calculation", url: "/forwarder-rate-calculation" },
//       { label: "Unbilled Shipment", url: "/unbilled-shipment" },
//       { label: "Payment Entry", url: "/payment-entry" },
//       { label: "Outstanding Reminder", url: "/outstanding-reminder" },
//       { label: "Cash Topay Collection Report", url: "/cash-topay-collection-report" },
//     ],
//   },
//   //Tools
//   {
//     label: "Tools",
//     key: "To",
//     submenu: [
//       { label: "Booking Upload", url: "/booking-upload" },
//       { label: "Status Upload", url: "/status-upload" },
//       { label: "Address Book", url: "/address-book" },
//     ],
//   },
//   //Accounts
//   {
//     label: "Accounts",
//     key: "Ac",
//     submenu: [
//       { label: "Sales Report", url: "/sales-report" },
//       { label: "Purchase Report", url: "/purchase-report" },
//       { label: "Profit And Loss", url: "/profit-and-loss" },
//       { label: "Invoice Summary", url: "/invoice-summary" },
//       { label: "Sale Summary", url: "/sale-summary" },
//       { label: "Client Ledger", url: "/client-ledger" },
//       { label: "Daybook Report", url: "/daybook-report" },
//       { label: "Vehicle Amount Report", url: "/vehicle-amount-report" },
//       { label: "Manifest Wise Amount Report", url: "/manifest-report" },
//       { label: "Deleted Shipment", url: "/deleted-shipment" },
//     ],
//   },
//   // M.I.S
//   {
//     label: "M.I.S",
//     key: "M.",
//     submenu: [
//       { label: "Pickup Report", url: "/pickup-report" },
//       { label: "Pickup Vs Dispatch", url: "/pickup" },
//       { label: "Dispatch Vs Received", url: "/dispatch" },
//       { label: "Dispatch Report", url: "/dispatch-report" },
//       { label: "Dispatch Summary", url: "/dispatch-summary" },
//       { label: "DRS", url: "/drs" },
//       { label: "Consigment Status Report", url: "/consigment-status-report" },
//       { label: "Consigment Pending Report", url: "/consigment-pending-report" },
//       { label: "Client MIS Report", url: "/client-MIS-report" },
//       { label: "Pod Img Report", url: "/pod-img-report" },
//     ],
//   },
//   {
//     label: "Support",
//     url: "/support",
//   },
//   {
//     label: "About Us",
//     url: "/about-us",
//   },
// ];

// function Header() {
//   const menuShow = (mItems) => {
//     return mItems.map((item, index) => {
//       if (item.submenu) {
//         return (
//           <NavDropdown
//             title={item.label}
//             key={index}
//             className="dropdown-menu-dark  
//                                        dropend"
//           >
//             {menuShow(item.submenu)}
//           </NavDropdown>
//         );
//       } else {
//         return (
//           <Nav.Link href={item.url} key={index}>
//             {item.label}
//           </Nav.Link>
//         );
//       }
//     });
//   };
//   const navStyle = {
//     color: "black",
//     fontWeight: "bold",
//   };
//   return (
//     <>
//       <div className="top-nav">
//         <div className="top-nav-left">
//           {/* Title and subtitle */}
//           <span className="title-name">OCMS</span>
//           <br />
//           <div style={{ marginTop: "-5px", color: "white" }}>
//             Online Courier Management System
//           </div>
//         </div>
//       </div>
//       <Navbar expand="lg">
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto" style={navStyle}>
//             {menuShow(navBarData)}
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </>
//   );
// }
// export default Header;


// import React, { useContext } from "react";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import "../Style/Header.css";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const navBarData = [
//   {
//     label: "Admin",
//     key: "Ad",
//     submenu: [
//       { label: "User Creation", url: "/user-creation" },
//       { label: "Company Information", url: "/company-information" },
//       { label: "Status Remove", url: "/status-remove" },
//       { label: "Advance Csd Tool", url: "/advance-csd" },
//     ],
//   },
//   // Master dropdown menu
//   {
//     label: "Master",
//     key: "Ma",
//     submenu: [
//       { label: "Zone Master", url: "/zone-master" },
//       { label: "Country Master", url: "/country-master" },
//       { label: "Pincode Master", url: "/pincode-master" },
//       { label: "City Master", url: "/city-master" },
//       {
//         label: "Client Master",
//         url: "/client-master",
//         submenu: [
//           { label: "Client Master", url: "/master/client-master/clientmaster" },
//           { label: "Client Pickup Point", url: "/master/client-master/client-pickup-point" },
//           { label: "Client Delivery Point", url: "/master/client-master/client-delivery-point" },
//           { label: "Fuel Master", url: "/master/client-master/fuel-master" },
//         ],
//       },
//       { label: "Branch Master", url: "/branch-master" },
//       { label: "Forwarder Master", url: "/forwarder-master" },
//       { label: "Delivery /Pickup Man", url: "/delivery" },
//       { label: "Status Master", url: "/status-master" },
//       { label: "Service Master", url: "/service-master" },
//       { label: "GST", url: "/gst" },
//       { label: "Packing Master", url: "/packing-master" },
//       { label: "Commodity Master", url: "/commodity-master" },
//     ],
//   },
//   // Transaction
//   {
//     label: "Transaction",
//     key: "Tr",
//     submenu: [
//       { label: "Quick Inscan", url: "/quick-inscan" },
//       { label: "Inscan", url: "/inscan" },
//       { label: "Dispatch Entry", url: "/dispatch-entry" },
//       { label: "Consigment Received", url: "/consigment-received" },
//       { label: "DRS Entry", url: "/DRS-entry" },
//       { label: "Deliver Entry", url: "/deliver-entry" },
//       { label: "Edit Dispatch", url: "/edit-dispatch" },
//       { label: "Forwarder Number Update", url: "/forwarder-number-update" },
//       { label: "Network Number Update", url: "/network-number-update" },
//     ],
//   },
//   // Customer
//   {
//     label: "Customer",
//     key: "Cu",
//     submenu: [
//       { label: "Customer Care", url: "/customer-care" },
//       { label: "Inquiry", url: "/inquiry" },
//       { label: "Consigment Status Report", url: "/consigment-status-report" },
//       { label: "Pending Consigment Report", url: "/pending-consigment-report" },
//     ],
//   },
//   // Billing
//   {
//     label: "Billing",
//     key: "Bi",
//     submenu: [
//       { label: "Client Billing", url: "/client-billing" },
//       { label: "Client Tariff", url: "/client-tariff" },
//       { label: "Forwarder Tariff", url: "/forwarder-tariff" },
//       { label: "Client Rate Calculation", url: "/client-rate-calculation" },
//       { label: "Forwarder Rate Calculation", url: "/forwarder-rate-calculation" },
//       { label: "Unbilled Shipment", url: "/unbilled-shipment" },
//       { label: "Payment Entry", url: "/payment-entry" },
//       { label: "Outstanding Reminder", url: "/outstanding-reminder" },
//       { label: "Cash Topay Collection Report", url: "/cash-topay-collection-report" },
//     ],
//   },
//   //Tools
//   {
//     label: "Tools",
//     key: "To",
//     submenu: [
//       { label: "Booking Upload", url: "/booking-upload" },
//       { label: "Status Upload", url: "/status-upload" },
//       { label: "Address Book", url: "/address-book" },
//     ],
//   },
//   //Accounts
//   {
//     label: "Accounts",
//     key: "Ac",
//     submenu: [
//       { label: "Sales Report", url: "/sales-report" },
//       { label: "Purchase Report", url: "/purchase-report" },
//       { label: "Profit And Loss", url: "/profit-and-loss" },
//       { label: "Invoice Summary", url: "/invoice-summary" },
//       { label: "Sale Summary", url: "/sale-summary" },
//       { label: "Client Ledger", url: "/client-ledger" },
//       { label: "Daybook Report", url: "/daybook-report" },
//       { label: "Vehicle Amount Report", url: "/vehicle-amount-report" },
//       { label: "Manifest Wise Amount Report", url: "/manifest-report" },
//       { label: "Deleted Shipment", url: "/deleted-shipment" },
//     ],
//   },
//   // M.I.S
//   {
//     label: "M.I.S",
//     key: "M.",
//     submenu: [
//       { label: "Pickup Report", url: "/pickup-report" },
//       { label: "Pickup Vs Dispatch", url: "/pickup" },
//       { label: "Dispatch Vs Received", url: "/dispatch" },
//       { label: "Dispatch Report", url: "/dispatch-report" },
//       { label: "Dispatch Summary", url: "/dispatch-summary" },
//       { label: "DRS", url: "/drs" },
//       { label: "Consigment Status Report", url: "/consigment-status-report" },
//       { label: "Consigment Pending Report", url: "/consigment-pending-report" },
//       { label: "Client MIS Report", url: "/client-MIS-report" },
//       { label: "Pod Img Report", url: "/pod-img-report" },
//     ],
//   },
 
// ];
// const supportAndAboutUs = [
//   { label: "Support", url: "/support" },
//   { label: "About Us", url: "/about-us" },
// ];


// function Header() {
//   const { userRoles } = useContext(AuthContext);
//   // Filter navBarData based on userRoles
//   const accessibleNavbar = [
//     ...navBarData.filter(item => userRoles.includes(item.key)),
//     ...supportAndAboutUs
//   ];

//   const menuShow = (mItems) => {
//     return mItems.map((item, index) => {
//       if (item.submenu) {
//         return (
//           <NavDropdown
//             title={item.label}
//             key={index}
//             className="dropdown-menu-dark dropend"
//           >
//             {item.submenu.map((subItem, subIndex) => (
//               <NavDropdown.Item href={subItem.url} key={subIndex}>
//                 {subItem.label}
//               </NavDropdown.Item>
//             ))}
//           </NavDropdown>
//         );
//       } else {
//         return (
//           <Nav.Link href={item.url} key={index}>
//             {item.label}
//           </Nav.Link>
//         );
//       }
//     });
//   };

//   const navStyle = {
//     color: "black",
//     fontWeight: "bold",
//   };

//   const navigate=useNavigate();
//   const { setIsLoggedIn, setUserData } = useContext(AuthContext);
//   const handleLogout = () =>{
//     setIsLoggedIn(false);
//     setUserData(null);
    
//     localStorage.removeItem('isLoggedIn');
//     localStorage.removeItem('userData');
//     localStorage.removeItem('userRoles');
//     navigate('/login');
//   }

//   return (
//     <>
//       <div className="top-nav">
//         <div className="top-nav-left">
//           <span className="title-name">OCMS</span>
//           <br />
//           <div style={{ marginTop: "-5px", color: "white" }}>
//             Online Courier Management System
//           </div>
//         </div>
//         <div className="top-nav-right">
//           <button onClick={handleLogout}>Logout</button>
//           </div>
//       </div>
//       <Navbar expand="lg">
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto" style={navStyle}>
//             {menuShow(accessibleNavbar)}
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </>
//   );
// }

// export default Header;

import React, { useContext } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../Style/Header.css";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const navBarData = [
  {
    label: "Admin",
    key: "Ad",
    submenu: [
      { label: "User Creation", url: "/user-creation" },
      { label: "Company Information", url: "/company-information" },
     
    ],
  },
  // Master dropdown menu
  {
    label: "Master",
    key: "Ma",
    submenu: [
      { label: "Zone Master", url: "/zone-master" },
      { label: "Country Master", url: "/country-master" },
      { label: "State Master", url: "/state-master" },
      { label: "Pincode Master", url: "/pincode-master" },
      { label: "City Master", url: "/city-master" },
      {
        label: "Client Master",
        url: "/client-master",
        submenu: [
          { label: "Client Master", url: "/master/client-master/clientmaster" },
          { label: "Client Pickup Point", url: "/master/client-master/client-pickup-point" },
          { label: "Client Delivery Point", url: "/master/client-master/client-delivery-point" },
          { label: "Fuel Master", url: "/master/client-master/fuel-master" },
        ],
      },
      { label: "Branch Master", url: "/branch-master" },
      { label: "Forwarder Master", url: "/forwarder-master" },
      { label: "Delivery /Pickup Man", url: "/delivery" },
      { label: "Status Master", url: "/status-master" },
      { label: "Service Master", url: "/service-master" },
      { label: "GST", url: "/gst" },
      // { label: "Packing Master", url: "/packing-master" },
      { label: "Commodity Master", url: "/commodity-master" },
    ],
  },
  // Transaction
  {
    label: "Transaction",
    key: "Tr",
    submenu: [
      { label: "Quick Inscan", url: "/quick-inscan" },
      { label: "Inscan", url: "/inscan" },
      { label: "Dispatch Entry", url: "/dispatch-entry" },
      { label: "Consigment Received", url: "/consigment-received" },
      { label: "DRS Entry", url: "/DRS-entry" },
      { label: "Deliver Entry", url: "/deliver-entry" },
      { label: "Edit Dispatch", url: "/edit-dispatch" },
      { label: "Forwarder Number Update", url: "/forwarder-number-update" },
      { label: "Network Number Update", url: "/network-number-update" },
    ],
  },
  // Customer
  {
    label: "Customer",
    key: "Cu",
    submenu: [
      { label: "Customer Care", url: "/customer-care" },
      { label: "Inquiry", url: "/inquiry" },
      { label: "Consigment Status Report", url: "/consigment-status-report" },
      { label: "Pending Consigment Report", url: "/pending-consigment-report" },
    ],
  },
  // Billing
  {
    label: "Billing",
    key: "Bi",
    submenu: [
      { label: "Client Billing", url: "/client-billing" },
      { label: "Client Tariff", url: "/client-tariff" },
      { label: "Forwarder Tariff", url: "/forwarder-tariff" },
      { label: "Client Rate Calculation", url: "/client-rate-calculation" },
      { label: "Forwarder Rate Calculation", url: "/forwarder-rate-calculation" },
      { label: "Unbilled Shipment", url: "/unbilled-shipment" },
      { label: "Payment Entry", url: "/payment-entry" },
      { label: "Outstanding Reminder", url: "/outstanding-reminder" },
      { label: "Cash Topay Collection Report", url: "/cash-topay-collection-report" },
    ],
  },
  // Tools
  {
    label: "Tools",
    key: "To",
    submenu: [
      { label: "Booking Upload", url: "/booking-upload" },
      { label: "Status Upload", url: "/status-upload" },
      { label: "Address Book", url: "/address-book" },
    ],
  },
  // Accounts
  {
    label: "Accounts",
    key: "Ac",
    submenu: [
      { label: "Sales Report", url: "/sales-report" },
      { label: "Purchase Report", url: "/purchase-report" },
      { label: "Profit And Loss", url: "/profit-and-loss" },
      { label: "Invoice Summary", url: "/invoice-summary" },
      { label: "Sale Summary", url: "/sale-summary" },
      { label: "Client Ledger", url: "/client-ledger" },
      { label: "Daybook Report", url: "/daybook-report" },
      { label: "Vehicle Amount Report", url: "/vehicle-amount-report" },
      { label: "Manifest Wise Amount Report", url: "/manifest-report" },
      { label: "Deleted Shipment", url: "/deleted-shipment" },
    ],
  },
  // M.I.S
  {
    label: "M.I.S",
    key: "M.",
    submenu: [
      { label: "Pickup Report", url: "/pickup-report" },
      { label: "Pickup Vs Dispatch", url: "/pickup" },
      { label: "Dispatch Vs Received", url: "/dispatch" },
      { label: "Dispatch Report", url: "/dispatch-report" },
      { label: "Dispatch Summary", url: "/dispatch-summary" },
      { label: "DRS", url: "/drs" },
      { label: "Consigment Status Report", url: "/consigment-status-report" },
      { label: "Consigment Pending Report", url: "/consigment-pending-report" },
      { label: "Client MIS Report", url: "/client-MIS-report" },
      { label: "Pod Img Report", url: "/pod-img-report" },
    ],
  },
];
const supportAndAboutUs = [
  { label: "Support", url: "/support" },
  { label: "About Us", url: "/about-us" },
];

function Header() {
  const { userRoles } = useContext(AuthContext);
  const accessibleNavbar = [
    ...navBarData.filter(item => userRoles.includes(item.key)),
    ...supportAndAboutUs,
  ];

  const menuShow = (mItems) => {
    return mItems.map((item, index) => {
      if (item.submenu) {
        return (
          <NavDropdown title={item.label} key={index} className="dropdown-menu-dark dropend">
            {menuShow(item.submenu)}
          </NavDropdown>
        );
      } else {
        return (
          <Nav.Link href={item.url} key={index}>
            {item.label}
          </Nav.Link>
        );
      }
    });
  };

  const navStyle = {
    color: "black",
    fontWeight: "bold",
  };

  const navigate = useNavigate();
  const { setIsLoggedIn, setUserData } = useContext(AuthContext);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);

    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
    localStorage.removeItem('userRoles');
    navigate('/login');
  };

  return (
    <>
      <div className="top-nav">
        <div className="top-nav-left">
          <span className="title-name">OCMS</span>
          <br />
          <div style={{ marginTop: "-5px", color: "white" }}>
            Online Courier Management System
          </div>
        </div>
        <div className="top-nav-right">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={navStyle}>
            {menuShow(accessibleNavbar)}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;