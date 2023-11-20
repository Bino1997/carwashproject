import React, { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import { readBuilderProgram } from 'typescript';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  // const auth = useAuth();
  const  { login }  = useAuth();

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'loginEmail') {
      setLoginEmail(value);
    } else if (name === 'loginPassword') {
      setLoginPassword(value);
    }
  };

  //create a function for handle login with loginUsername and loginPassword without token
  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    // try {

      e.preventDefault();
      // if (auth) {
        try {
          await login(loginEmail, loginPassword);
          console.log("successfully logedin",loginEmail);
          // console.log(auth);
          navigate('/booking')
        } catch (error) {
          console.log('Login failed.User Please check your credentials.');
        }

  };




  return (
    <>
  
    <div className="login-form"  >
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={loginEmail}
          name='loginEmail'
          onChange={handleLoginChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={loginPassword}
          name='loginPassword'
          onChange={handleLoginChange}
        />
        <button type="submit" >Login</button>
      </form>
      <p>create a new account</p><a href="/signup">Signup</a>
    </div>


   
    </>
  );
};

export default Login;
