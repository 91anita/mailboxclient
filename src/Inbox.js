import React from 'react'
import SendIcon from '@mui/icons-material/Send';

import './Emaillist.css'
function Inbox() {
  
  return (
    <div className='emailtype'>
        <div className='emailtype_inbox'>
            
            <SendIcon/> 
            <h3>Sent</h3>
            
             </div>
    </div>
  )
}

export default Inbox;