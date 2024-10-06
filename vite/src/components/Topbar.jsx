import React from 'react'
import "../styles/Topbar.scss"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Topbar() {

  //

  return (
    <div className="topbar">
      <div className="topleft"> 
        <FaFacebook className="topIcon"/>
        <FaTwitter className="topIcon"/>
        <FaPinterest className="topIcon"/>
        <FaInstagramSquare className="topIcon"/>
      </div>
      <div className="topcenter">
    <Link to="/" className="listItem">HOME</Link>
    <Link to="/POSTS" className="listItem">POSTS</Link>
    <Link to="/myPost" className="listItem">MYPOST</Link>
    <Link to="/write" className="listItem">WRITE</Link>
</div>
      <div className="topright">
      <Link to="settings"><img src="/image/DESIGN WITH MAINA.png"  className="topimage"/></Link>
    <FaSearch className="topSearchIcon"/>
      </div>
    </div>
  )
}
export default Topbar;








