import React from 'react'
import "../styles/Posts.scss"
import { collection } from 'firebase/firestore';
import { db } from '../config/Firebase';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDocs } from 'firebase/firestore';
import { query } from 'firebase/firestore';
import { orderBy } from 'firebase/firestore';
import { GrValidate } from "react-icons/gr";
import { auth } from '../config/Firebase';
import { FaTrash } from "react-icons/fa6";
import { deleteDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';

function Posts(){
  const user=auth.currentUser;
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); 

  const deleteBlog= async(id)=>{
    const blogDoc=doc(db, "blogs", id)
    try{
        await deleteDoc(blogDoc);
    }catch(err){
      console.log(err);
    }
  }
    

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, 'blogs'); 
        const q = query(blogsCollection, orderBy('timeCreated', 'desc')); 
        const querySnapshot = await getDocs(q);

      
        const blogsData = querySnapshot.docs.map(doc => ({
          id: doc.id, 
          ...doc.data() 
        }));

        setBlogs(blogsData); 
        setLoading(false); 
      } catch(error){
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs(); 
  }, []); 


  if (loading){
  return(
 <div className="loading">
  <h2>Loading blogs...</h2>;
  </div>
  )  
  }
  return (
    <div className="posts">
{
blogs.length === 0 ? (
  <p>No blogs available</p>
):(
blogs.map((blog)=>(
  <div key={blog.id} className="post">
    <div className="blogImage">
      <p>Blog</p>
    </div>
    <div className="content">
    <h2>{blog.title}</h2>
    <p>{blog.blogText}</p>
    {  user.uid === blog.id ? (<p className="author"> <strong>You</strong> </p>)
    :(<p className="author"><strong>Author:{blog.author}</strong></p>)
    }
    <p className="time"><small> <GrValidate/> {new Date(blog.timeCreated.seconds*1000).toLocaleString()}</small></p>
    {
   user.uid === blog.id &&  (  <FaTrash className="trashIcon" onClick={()=>{deleteBlog(blog.id)}}/>)
}
</div>
</div>
))
)
}
</div>  
  )
}
export default Posts;




