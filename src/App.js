// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import './App.css';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import Home from './components/Home';
// import Footer from './components/Footer';
// import Booking from './components/Booking';
// import Manifest from './components/Manifest';
// import UserCreationForm from './admin/UserCreationForm';
// import Support from './components/Support';
// import CompanyInformation from './admin/CompanyInformation';
// import ClientMaster from './master/client_master/ClientMaster';
// import ClientPickupPoint from './master/client_master/ClientPickupPoint';
// import ClientDeliveryPoint from './master/client_master/ClientDeliveryPoint';
// import FuelMaster from './master/client_master/FuelMaster';
// import QuickInscan from './transaction/QuickInscan';
// import DispatchEntry from './transaction/DispatchEntry';
// import ConsigmentRecived from './transaction/ConsigmentRecived';
// import ZoneMaster from './master/ZoneMaster';
// import PincodeMaster from './master/PincodeMaster';
// import CountryMaster from './master/CountryMaster';
// import CityMaster from './master/CityMaster';
// import BranchMaster from './master/BranchMaster';
// import DrsEntry from './transaction/DrsEntry';
// import DeliveryEntry from './transaction/DeliveryEntry';
// import FwdNumberUpdate from './transaction/FwdNumberUpdate';
// import NetworkNumberUpdate from './transaction/NetworkNumberUpdate';
// import ClientBilling from './billing/ClientBilling';
// import ClientTariff from './billing/ClientTariff';
// import ForwordTariff from './billing/ForwordTariff';
// import ClientRateCalculation from './billing/ClientRateCalculation';
// import ForwordRateCalculation from './billing/ForwordRateCalculation';
// import Unbilledunbilled from './billing/UnbilledConsigment';
// import OutstandingReminder from './billing/OutstandingReminder';
// import PaymentEntry from './billing/PaymentEntry';
// import Aboutus from './aboutus/Aboutus';

// const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         <Header />
//         <div className="main-content">
//           <Sidebar />
//           <Routes>
            // <Route path="/" exact element={<Home/>} />
            // <Route path="/booking" element={<Booking/>} />
            //   <Route path="/manifest" element={<Manifest/>} />
            //   <Route path="/user-creation" element={<UserCreationForm/>} />
            //   <Route path='support' element={<Support/>}/>
            //   <Route path='/company-information' element={<CompanyInformation/>}/>
            //   <Route path='/master/client-master/clientmaster' element={<ClientMaster/>}/>
            //   <Route path='/master/client-master/client-pickup-point' element={<ClientPickupPoint/>}/>
            //   <Route path='master/client-master/client-delivery-point' element={<ClientDeliveryPoint/>}/>
            //   <Route path='/master/client-master/fuel-master' element={<FuelMaster/>}/>
            //   <Route path='/zone-master' element={<ZoneMaster/>}/>
            //   <Route path='/pincode-master' element={<PincodeMaster/>}/>
            //   <Route path='/country-master' element={<CountryMaster/>}/>
            //   <Route path='/city-master' element={<CityMaster/>}/>
            //   <Route path='/branch-master' element={<BranchMaster/>}/>

            //   <Route path='/quick-inscan' element={<QuickInscan/>}/>
            //   <Route path="/inscan" element={<Booking/>} />
            //   <Route path='/dispatch-entry' element={<DispatchEntry/>}/>
            //   <Route path='/edit-dispatch' element={<DispatchEntry/>}/>
            //   <Route path='/consigment-received' element={<ConsigmentRecived/>}/>
            //   <Route path='/DRS-entry' element={<DrsEntry/>}/>
            //   <Route path='/deliver-entry' element={<DeliveryEntry/>}/>
            //   <Route path='/forwarder-number-update' element={<FwdNumberUpdate/>}/>
            //   <Route path='/network-number-update' element={<NetworkNumberUpdate/>}/>

            //   <Route path='/client-billing' element={<ClientBilling/>}/>
            //   <Route path='/client-tariff' element={<ClientTariff/>}/>
            //   <Route path='/forwarder-tariff' element={<ForwordTariff/>}/>
            //   <Route path='/client-rate-calculation' element={<ClientRateCalculation/>}/>
            //   <Route path='/forwarder-rate-calculation' element={<ForwordRateCalculation/>}/>
            //   <Route path='/unbilled-shipment' element={<Unbilledunbilled/>}/>
            //   <Route path='/outstanding-reminder' element={<OutstandingReminder/>}/>
            //   <Route path='/payment-entry' element={<PaymentEntry/>}/>

            //   <Route path='/about-us' element={<Aboutus/>}/>

           
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;


import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Footer from './components/Footer';
import Booking from './components/Booking';
import Manifest from './components/Manifest';
import UserCreationForm from './admin/UserCreationForm';
import Support from './components/Support';
import CompanyInformation from './admin/CompanyInformation';
import ClientMaster from './master/client_master/ClientMaster';
import ClientPickupPoint from './master/client_master/ClientPickupPoint';
import ClientDeliveryPoint from './master/client_master/ClientDeliveryPoint';
import FuelMaster from './master/client_master/FuelMaster';
import QuickInscan from './transaction/QuickInscan';
import DispatchEntry from './transaction/DispatchEntry';
import ConsigmentRecived from './transaction/ConsigmentRecived';
import ZoneMaster from './master/ZoneMaster';
import PincodeMaster from './master/PincodeMaster';
import CountryMaster from './master/CountryMaster';
import CityMaster from './master/CityMaster';
import BranchMaster from './master/BranchMaster';
import DrsEntry from './transaction/DrsEntry';
import DeliveryEntry from './transaction/DeliveryEntry';
import FwdNumberUpdate from './transaction/FwdNumberUpdate';
import NetworkNumberUpdate from './transaction/NetworkNumberUpdate';
import ClientBilling from './billing/ClientBilling';
import ClientTariff from './billing/ClientTariff';
import ForwordTariff from './billing/ForwordTariff';
import ClientRateCalculation from './billing/ClientRateCalculation';
import ForwordRateCalculation from './billing/ForwordRateCalculation';
import Unbilledunbilled from './billing/UnbilledConsigment';
import OutstandingReminder from './billing/OutstandingReminder';
import PaymentEntry from './billing/PaymentEntry';
import Aboutus from './aboutus/Aboutus';
import LoginForm from "./components/LoginForm";

import { AuthContext } from "./context/AuthContext";
import Inquiry from "./customerCare/Inquiry";
import ConsignmentStatus from "./customerCare/ConsignmentStatus";
import PendingConsignment from "./customerCare/PendingConsignment";
import AddressBook from "./tools/AddressBook";
import BookingUpload from "./tools/BookingUpload";
import StatusUpload from "./tools/StatusUpload";
import SalesReport from "./account/SalesReport";
import PurchaseReport from "./account/PurchaseReport";
import ProfitAndLoss from "./account/ProfitAndLoss";
import InvoiceSummary from "./account/InvoiceSummary";
import SalesSummary from "./account/SalesSummary";
import DaybookReport from "./account/DaybookReport";
import ClientLedger from "./account/ClientLedger";
import PickupReport from "./MIS/PickupReport";
import PickupDisReport from "./MIS/PickupDisReport";
import DispatchReceive from "./MIS/DispatchReceive";
import DispatchReport from "./MIS/DispatchReport";
import DRSReport from "./MIS/DRSReport";
import ClientIMS from "./MIS/ClientMIS";
import PodReport from "./MIS/PodReport";
import DispatchSummary from "./MIS/DispatchSummary";
import ForwarderMaster from "./master/ForwarderMaster";
import StatusMaster from "./master/StatusMaster";
import PickupMaster from "./master/PickupMaster";
import FormComponent from "./components/FormComponent";
import StateMaster from "./master/StateMaster";


//context import
import { MasterProvider } from "./context/MasterContext";
import { ClientProvider } from "./context/ClientContext";
import ServiceMaster from "./master/ServiceMaster";
import GST from "./master/GST";
import CommodityMaster from "./master/CommodityMaster";

const App = () => {
  const { isLoggedIn, userData } = useContext(AuthContext);

  return (
    <>
    <MasterProvider>
      <ClientProvider>
      {isLoggedIn ? (
        <Router>
          <div className="app">
            <Header />
            <div className="main-content">
              <Sidebar />
              
              <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/form-component" element={<FormComponent/>} />
            <Route path="/booking" element={<Booking/>} />
              <Route path="/manifest" element={<Manifest/>} />
              <Route path="/user-creation" element={<UserCreationForm/>} />
              <Route path='support' element={<Support/>}/>
              <Route path='/company-information' element={<CompanyInformation/>}/>
              <Route path='/master/client-master/clientmaster' element={<ClientMaster/>}/>
              <Route path='/master/client-master/client-pickup-point' element={<ClientPickupPoint/>}/>
              <Route path='master/client-master/client-delivery-point' element={<ClientDeliveryPoint/>}/>
              <Route path='/master/client-master/fuel-master' element={<FuelMaster/>}/>
              
              <Route path='/zone-master' element={<ZoneMaster/>}/>
              <Route path='/pincode-master' element={<PincodeMaster/>}/>
              <Route path='/country-master' element={<CountryMaster/>}/>
              <Route path='/city-master' element={<CityMaster/>}/>
              <Route path='/branch-master' element={<BranchMaster/>}/>
              <Route path='/forwarder-master' element={<ForwarderMaster/>}/>
              <Route path='/delivery' element={<PickupMaster/>}/>
              <Route path='/status-master' element={<StatusMaster/>}/>
              <Route path='/service-master' element={<ServiceMaster/>}/>
              <Route path='/gst' element={<GST/>}/>
              <Route path='/packing-master' element={<BranchMaster/>}/>
              <Route path='/commodity-master' element={<CommodityMaster/>}/>
              <Route path="/state-master" element={<StateMaster/>}/>

              <Route path='/quick-inscan' element={<QuickInscan/>}/>
              <Route path="/inscan" element={<Booking/>} />
              <Route path='/dispatch-entry' element={<DispatchEntry/>}/>
              <Route path='/edit-dispatch' element={<DispatchEntry/>}/>
              <Route path='/consigment-received' element={<ConsigmentRecived/>}/>
              <Route path='/DRS-entry' element={<DrsEntry/>}/>
              <Route path='/deliver-entry' element={<DeliveryEntry/>}/>
              <Route path='/forwarder-number-update' element={<FwdNumberUpdate/>}/>
              <Route path='/network-number-update' element={<NetworkNumberUpdate/>}/>

              <Route path='/client-billing' element={<ClientBilling/>}/>
              <Route path='/client-tariff' element={<ClientTariff/>}/>
              <Route path='/forwarder-tariff' element={<ForwordTariff/>}/>
              <Route path='/client-rate-calculation' element={<ClientRateCalculation/>}/>
              <Route path='/forwarder-rate-calculation' element={<ForwordRateCalculation/>}/>
              <Route path='/unbilled-shipment' element={<Unbilledunbilled/>}/>
              <Route path='/outstanding-reminder' element={<OutstandingReminder/>}/>
              <Route path='/payment-entry' element={<PaymentEntry/>}/>

              <Route path='/about-us' element={<Aboutus/>}/>



              <Route path='/consigment-status-report' element={<ConsignmentStatus/>}/>
              <Route path='/inquiry' element={<Inquiry/>}/>
              <Route path='/pending-consigment-report' element={<PendingConsignment/>}/>



              <Route path='/address-book' element={<AddressBook/>}/>
              <Route path='/booking-upload' element={<BookingUpload/>}/>
              <Route path='/status-upload' element={<StatusUpload/>}/>



              <Route path='/sales-report' element={<SalesReport/>}/>
              <Route path='/purchase-report' element={<PurchaseReport/>}/>
              <Route path='/profit-and-loss' element={<ProfitAndLoss/>}/>
              <Route path='/invoice-summary' element={<InvoiceSummary/>}/>
              <Route path='/sale-summary' element={<SalesSummary/>}/>
              <Route path='/daybook-report' element={<DaybookReport/>}/>
              <Route path='/client-ledger' element={<ClientLedger/>}/>
              <Route path='/pickup-report' element={<PickupReport/>}/>
              <Route path='/pickup' element={<PickupDisReport/>}/>
              <Route path='/dispatch' element={<DispatchReceive/>}/>
              <Route path='/dispatch-report' element={<DispatchReport/>}/>
              <Route path='/drs' element={<DRSReport/>}/>
              <Route path='/client-MIS-report' element={<ClientIMS/>}/>
              <Route path='/pod-img-report' element={<PodReport/>}/>
              <Route path='/dispatch-summary' element={<DispatchSummary/>}/>



              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      ) : (
        <Router>
          <div className="app">
            <div className="main-content">
              <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="*" element={<LoginForm />} />
              </Routes>
            </div>
          </div>
        </Router>
      )}
      </ClientProvider>
      </MasterProvider>
    </>
  );
};

export default App;
