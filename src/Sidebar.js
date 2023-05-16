import { Button } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from '@mui/icons-material/Send';
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";
function Sidebar() {

  const dispatch = useDispatch();
  return (
    <div>
      <div className="sidebar">
        <Button startIcon={<EmailIcon />} className="compose" onClick={() => dispatch(openSendMessage())}>
          Compose
        </Button>
      </div>
      <div className="sidebar">
        <Button startIcon={<SendIcon />} className="sent">
          Sent
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
