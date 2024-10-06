import React from 'react'
import "../styles/Sidebar.scss"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
<span className="sidebarTitle">ABOUT ME</span>
<img src="/image/bus-8016675_1280.jpg" className="sidebarImg" width="200px" alt="" />
<p>Lorem ipsum dolor sit amet</p>
      </div>
<div className="sidebarItem">
    <span className="sidebarTitle">CATEGORIES</span>
<ul>
    <li className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>
    </li>
</ul>
</div>
<div className="sidebarItem">
    <span className="sidebarTitle">Follow Us</span>

<div className="sidebarSocial">
<FaFacebook className="sidebarIcon"/>
<FaTwitter className="sidebarIcon"/>
<FaPinterest className="sidebarIcon"/>
<FaInstagramSquare className="sidebarIcon"/>

</div>
</div>

    </div>
  )
}

export default Sidebar;
