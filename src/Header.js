import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import './Header.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Button, IconButton } from '@mui/material';
import { auth } from "./firebase";

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
        <IconButton> 
            <HomeIcon/>Welcome to your MailBox
            </IconButton>

        </div>
        <div className='header__right'>
        
        <Button startIcon={<LogoutIcon/>} onClick={()=> firebase.auth().signOut()}>Logout</Button>
            
        </div>
    </div>
  )
}

export default Header

