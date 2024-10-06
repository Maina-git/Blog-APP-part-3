import React from 'react'
import "../styles/Settings.scss"
import Sidebar from '../components/Sidebar';
import { FaRegCircleUser } from "react-icons/fa6";
import { auth } from '../config/Firebase';
import { db } from '../config/Firebase';
import { doc, getDocs } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Settings() {

const [userInfo, setUserInfo]=useState(null);
const [profile, setProfile]=useState([]);

useEffect(()=>{
  const  fetchUserInfo= async()=>{
  try{
    const  myInfo=collection(db, "userInfo");
    const q=query(myInfo);
    const querySnapshot=await (getDocs(q));


    const myUserInfoData=querySnapshot.docs.map(doc=>({
      id:doc.id,
      ...doc.data()
    }));
    setProfile(myUserInfoData);
  }catch(err){
    console.log(err);
  }
  };
  fetchUserInfo();
},[]);

  
  /*
  const handleProfilePicChange = (e) => {
  if (e.target.files[0]) {
  setProfilePic(e.target.files[0]);
    }
  };
*/

  return (
    <div className="settings">
      <div className="settingsWrapper">
        {
userInfo ? (
<>
<div className="settingsTitle">
    <span className="settingsUpdateTitle">Update Your Account</span>
    <span className="settingsDeleteTitle">Delete  Account</span>
</div>

    <label>Profile Picture</label>
    <div className="settingsPP">

<FaRegCircleUser className="settingsPPIcon"/>
    </div>
    <h1>Username:{userInfo.userName}</h1>
    <h1>Email:{userInfo.email}</h1>
    <h1>Password:{userInfo.password}</h1>
    <input type="password" id="password"/>
    <button type="" className="settingsSubmit">UPDATE</button>
</>
):(
  <div className="settings">No  user Info</div>
)
        }
      </div>

      <Sidebar/>
    </div>
  )
}

export default Settings;
