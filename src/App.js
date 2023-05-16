import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Emaillist from "./Emaillist";
import Compose from "./Compose";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import Emaildetail from "./Emaildetail";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { selectUser, signin, signout } from "./features/userSlice";
import { auth } from "./firebase";
function App() {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch=useDispatch()
  
   useEffect(()=> {
    auth.onAuthStateChanged((user)=> {
     if(user){
       dispatch(signin({
          displayName:user.displayName,
            email:user.email
        }))}
         else{
         dispatch(signout())
      }
    })
   },[])
  return (
    <Router>
      {user ? (
        <div className="App">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Emaillist />} />
              <Route path="/mail" element={<Emaildetail />} />
            </Routes>
          </div>
          {isMessageOpen && <Compose />}
        </div>
      )
      : (<Login/>)
        
      }
      
    </Router>
  );
}

export default App;
