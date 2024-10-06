import React from 'react'
import "../styles/Write.scss"
import { MdAdd } from "react-icons/md";
import { auth } from '../config/Firebase';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../config/Firebase';

function Write(){

    const [title, setTitle]=useState("");
    const [blogText, setBlogText]=useState("");
    const [loading, setLoading]=useState(false);
    const [author, setAuthor]=useState("");

/*
useEffect(()=>{
    const fetchUser =async()=>{
const user=auth.currentUser;
if(currentUser){
    const userDoc = await getDoc(doc(db, "userInfo", currentUser.uid));
setUser(currentUser);

if(userDoc.exists()){
    setAuthor(userDoc.data().userName);
}
}
    };
fetchUser();
},[])
*/

const handleSubmit = async (e)=>{
e.preventDefault();
if(!title || !blogText || !author){
alert("Plaese fill in the fields");
return 
}
setLoading(true);

try{
    await  addDoc(collection(db, "blogs"),{
        title,
        blogText,
        author,
        id:auth.currentUser.uid,
        timeCreated:serverTimestamp(),
    });
    setTitle("");
    setBlogText("");
    setAuthor("");
    setLoading(false);
    alert("Blog post added successfully");
}catch(err){
    console.log(err);
    setLoading(false);
}

}
return (
<div className="write">
<img src="/image/lake-8357182_1280.jpg" className="writeImg" alt="" />
<form onSubmit={handleSubmit}  className="writeForm">
<div className="writeFormGroup">
<input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} placeholder='Author' className="writeInput"/>
<input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title' className="writeInput"/>
</div>
<div className="writeFormGroup">
<textarea required value={blogText} placeholder="Tell your Story..." onChange={(e)=>setBlogText(e.target.value)} type="text" className="writeInput writeText">
 </textarea>
</div>
<button disabled={loading} type="submit" className="writeSubmit">
    { loading ? "Posting..." : "Post Blog" }
</button>

</form>
</div>
  )
}
export default Write;







