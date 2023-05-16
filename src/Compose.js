import React, { useState } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import './Compose.css'
import { useDispatch } from "react-redux";
import {db} from './firebase'
import { closeSendMessage } from "./features/mailSlice";
function Compose() {
  const dispatch =useDispatch()
  const [to, setTo]= useState("");
  const [subject, setSubject]= useState("");
  const [message, setMessage]= useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    if(to==="")
    {
      return alert("Please enter email")
    }
    if(subject==="")
    {
      return alert("Please enter Subject")
    }
    if(message==="")
    {
      return alert("Please type message")
    }
    db.collection("emails").add({
      to,
      subject,
      message
    })
    setTo("");
    setSubject("");
    setMessage("");

    alert("Email sent successfully")
  }

  return (

    <div className="compose">
      <div className="header">
        <div className="compose__left">
          <span>Message</span>
        </div>
        <div className="compose__right">
            
        <CloseIcon onClick={()=>dispatch(closeSendMessage())} />
        </div>
      </div>
      <form onSubmit={formSubmit}>
      <div className="body">
      <div className="bodyform">
        <input type="email" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)}/>
        <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
        <textarea rows={17} cols={90} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}/>
      </div>
      </div>
      <div className="footer">
        <button type="submit" className="send">Send</button>
      </div>
      </form>
    </div>
    
  );
}

export default Compose;
