import React from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { selectedMail } from "./features/mailSlice";
import "./Emaillist.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Emaildetail() {
    const mail = useSelector(selectedMail);
  const navigate = useNavigate();
  return (
    <div className="emaillist">
      <div className="emailtype">
        <div className="emailtype_inbox">
          <ArrowBackIcon onClick={() => navigate("/")} />
          <h3>Back</h3>
        </div>
      </div>
      <div className="emaildetail_header">
        <h4>{mail.name}</h4>
      </div>
      <div className="emaildetail_middle">
        <h4>{mail.subject}</h4>
      </div>
      <div className="emaildetail_body">
        <p>{mail.message}</p>
      </div>
    </div>
  );
}

export default Emaildetail;
