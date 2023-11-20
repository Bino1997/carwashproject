
// import React, { useState } from 'react';

// import axios from 'axios';
// import './adminlogin.css'; // Import the adminlogin.css
// import { useNavigate } from 'react-router-dom';

 
// const Login: React.FC = () => {
//  const navigate=useNavigate()
//   const [username, setUsername] = useState('');

//   const [password, setPassword] = useState('');

//   const [error, setError] = useState('');
 
//   const handleLogin = async () => {

//     try {

//       const response = await axios.post('http://localhost:4000/api/adminsign/adminlogin', {

//         username,

//         password,

//       });
 
//       console.log(response.data);
//       if (response.data){
//          navigate("/UserBookinglist")
//       }

//       // Handle successful login, e.g., store a token in localStorage

//     } catch (err) {

//       setError('Invalid username or password');

//       console.error(err);

//     }

//   };
 
//   return (

//     <div>

//       <h2>Login</h2>

//       <div>

//         <label>Username:</label>

//         <input

//           type="text"

//           value={username}

//           onChange={(e) => setUsername(e.target.value)}

//         />

//       </div>

//       <div>

//         <label>Password:</label>

//         <input

//           type="password"

//           value={password}

//           onChange={(e) => setPassword(e.target.value)}

//         />

//       </div>

//       <button onClick={handleLogin}>Login</button>

//       {error && <div style={{ color: 'red' }}>{error}</div>}

//     </div>

//   );

// };
 
// export default Login;

// adminlogin.tsx

import React, { useState } from 'react';
import axios from 'axios';
import './adminlogin.css'; // Import the adminlogin.css
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/adminsign/adminlogin', {
        username,
        password,
      });

      console.log(response.data);
      if (response.data) {
        navigate("/UserBookinglist");
      }
    } catch (err) {
      setError('Invalid username or password');
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default Login;
