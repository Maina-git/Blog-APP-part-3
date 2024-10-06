import React from 'react'
import Topbar from './components/Topbar'
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Single from './pages/Single'
import Write from './pages/Write'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Register from './pages/Register'
import Posts from './components/Posts'
import { useState } from 'react'



function App() {


const [isAuth, setIsAuth]=useState(false);
if(isAuth){
return (
<Router>
<Topbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/POSTS" element={<Posts/>}/>
<Route path="/write" element={<Write/>}/>
<Route path="/mypost" element={<Single/>}/>
<Route path="/settings" element={<Settings/>}/>
<Route path="/login" element={<Login/>}/>
</Routes>
</Router>
)
}
return (
<>
<Register setIsAuth={setIsAuth}/>
</>
)
}
export default App;
