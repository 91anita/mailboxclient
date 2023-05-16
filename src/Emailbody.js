import React from "react";
import "./Emaillist.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMessage, deleteMessage } from "./features/mailSlice";

function Emailbody({ id, name, subject, message }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setMail = () => {
    dispatch(
      openMessage({
        name,
        subject,
        message,
      })
    );
    navigate("/mail");
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    dispatch(deleteMessage(id));
    
  };

  return (
    <div>
    
       <div className="emailbody" onClick={setMail}>
        <div className="emailbody__left">
          <h3>{name}</h3>
        </div>
        <div className="emailbody__middle">
          <div className="emailbody__middle__msg">
            <p className="message">
              <b>{subject}</b> - {message}
            </p>
          </div>
        </div>
        <div className="emailbody__right">
          <p onClick={handleDelete} className="delete">
            sent
          </p>
        </div>
      </div> 
    </div>
  );
}

export default Emailbody;