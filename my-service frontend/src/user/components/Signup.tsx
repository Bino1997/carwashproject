import React, { useState } from 'react';
import '../styles/Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup: React.FC = () => {
  //   const [phoneNumber, setPhoneNumber] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  //   const handleSignup = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     // Implement your signup logic here
  //     console.log('Phone Number:', phoneNumber);
  //     console.log('Email:', email);
  //     console.log('Password:', password);
  //   };

  const navigate = useNavigate();

  // const [username, setName] = useState('')
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // if (name === 'username') {
    //   setName(value);
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'phone') {
      setPhone(value);
    } else if (name === 'password') {
      setPassword(value); 
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/userreg/register', {
        email,
        phone,
        password,
      });
      console.log('Signup successful', response.data);
      navigate("/login");

    } catch (error) {
      console.error('Signup error', error);
    }
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={handleChange}
        /> */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Phone Number"
          value={phone}
          name='phone'
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          name='password'
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
