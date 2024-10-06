import React from 'react'
import "../styles/SinglePost.scss"
import { useState } from 'react';
import { useEffect } from 'react';
import { auth, db } from '../config/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { query } from 'firebase/firestore';
import { orderBy } from 'firebase/firestore';
import { deleteDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';

function SinglePost() {
const user=auth.currentUser;
const [blogs, setBlogs]=useState([]);
  

useEffect(()=>{
  const fetchMyBlogs=async () =>{
    try{
      const myBlogs=collection(db, "blogs");
      const q=query(myBlogs, orderBy("timeCreated", "desc"));
      const querySnapshot=await (getDocs(q));


      const myBlogsData=querySnapshot.docs.map(doc=>({
        id:doc.id,
        ...doc.data()
      }));
      setBlogs(myBlogsData);
    }catch(err){
console.err(err);
    }
  };
  fetchMyBlogs();
},[]);


const deleteblog = async(id)=>{
const blogDoc= doc(db, "blogs", id);
await deleteDoc(blogDoc);
}


return (  
    <div className="singlePost">
      <div className="singlePostWrapper">
      <img src="/image/cable-car-8357177_1280.jpg" alt=""  className="singlePostImg"/> 
{
blogs.map((blog)=>(
<div key={blog.id}> 
  {  user.uid === blog.id ? (
    <>
      <h1 className="singlePostTitle">{blog.title}
      <div className="singlePostEdit">
      </div>
      </h1>
<div className="singlePostInfo"> 
<span className="singlePostAuthor">Author:<b>You</b></span>    
<span className="singlePostDate">{new Date(blog.timeCreated.seconds*1000).toLocaleString()}</span> 
</div>
<p className="singlePostDesc">{blog.blogText}</p>
  </>
):(<>
<div>
<p>You dont have any blogs</p>
</div>
</>)}
</div>
))}
</div>
</div>  
  )
}

export default SinglePost;
