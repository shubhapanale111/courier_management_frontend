import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import '../Style/Sidebar.css';
import logo from '../Images/logo.jpg';
import bookingg from '../Images/booking.png';
import manifest from '../Images/manifest.png'
import pencil from '../Images/pencil.png'
import search from '../Images/search.png'
import { AuthContext } from '../context/AuthContext';
const Sidebar = () => {
  const { userData } = useContext(AuthContext);
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li>
        <img src={bookingg} className='icon'/>
          <Link to="/booking" style={{textDecoration:'none',color:'white'}}>Booking</Link>
        </li>
        <li>
        <img src={manifest} className='icon'/>
          <Link to="/manifest" style={{textDecoration:'none',color:'white'}}>Manifest</Link>
        </li>
        <li>
          
        <Link to="/manifest" style={{textDecoration:'none',color:'white'}}>Manifest Receive</Link></li>

        <li>
        <img src={pencil} className='icon'/>
          <Link to="/manifest" style={{textDecoration:'none',color:'white'}}>Drs</Link></li>
        <li>
        <img src={pencil} className='icon'/>
          <Link to="/manifest" style={{textDecoration:'none',color:'white'}}>POD Entry</Link></li>
        <li>
        <img src={search} className='icon'/>
          <Link to="/manifest" style={{textDecoration:'none',color:'white'}}>History</Link></li>
          <li>
        <img src={search} className='icon'/>
          <Link to="/manifest" style={{textDecoration:'none',color:'white'}}>Change Password</Link></li>
          <li>
          <Link to="/manifest" style={{textDecoration:'none',color:'white'}}>Day book</Link></li>
      </ul>
      <div className='userdata'>
          <p>{userData.username}<br/>
          {userData.utype}</p>
      </div>
    </aside>
  );
};

export default Sidebar;
