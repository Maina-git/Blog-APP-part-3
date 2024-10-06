import React from 'react'
import "../styles/Home.scss"
import Header from '../components/Header';
import Posts from '../components/Posts';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
    <Header/>
    <div className="home">
<Footer/>     
     <Sidebar/>
    </div>
    </>
  )
}

export default Home;
