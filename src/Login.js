import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useDispatch } from "react-redux";
import { signin } from "./features/userSlice";
function Login() {
  const dispatch = useDispatch();
  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((user) => {
        dispatch(
          signin({
           
            email: user.email,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="loginwrapper">
      <div className="login">
        <h1>LOGIN</h1>
        <button className="gmail_login" onClick={login}>
          Login with gmail
        </button>
      </div>
    </div>
  );
}

export default Login;
