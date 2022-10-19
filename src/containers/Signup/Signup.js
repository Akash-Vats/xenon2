import React, { Component } from 'react';
import { useState } from 'react';
import "./Contact.css"
import {contactAPI} from "../../api";
import { useHistory } from 'react-router';
 const Signup=()=>
 {

   
   const [name,setName]=useState("");
   const [email,setEmail]=useState("");
   const [subject,setSubject]=useState("");
   const [message,setMessage]=useState("");
  const history=useHistory();


   const sendMessage=async()=>
   {  
    
  
        const response=await contactAPI({name,email,subject,message});
         
        if(!response.data.error)
        {
          history.push("/home");
        }
   }


  return (
    <div className='maincon'>
  <h1 className='conh1'>Elegant Contact Form</h1>
  <form className="cf">
  <div className="half left cf">
    <input type="text" id="input-name" placeholder="Name"  onChange={(e)=>setName(e.target.value)}  />
    <input type="email" id="input-email" placeholder="Email address" onChange={(e)=>setEmail(e.target.value)} />
    <input type="text" id="input-subject" placeholder="Subject" onChange={(e)=>setSubject(e.target.value)} />
  </div>
  <div className="half right cf">
    <textarea name="message" type="text" id="input-message" placeholder="Message" onChange={(e)=>setMessage(e.target.value)}  ></textarea>
  </div>  
 <a onClick={sendMessage}  className="submit">Submit</a>
  </form>
    </div>
  )
 }

export default Signup;
