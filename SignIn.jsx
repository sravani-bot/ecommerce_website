import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { loginSuccess } from '../../../Redux/actions/CartActions';

const SignIn = ({ loginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = (e) => {
    e.preventDefault();
    
    
    const user = { email }; // Replace with actual authentication logic
    loginSuccess(user);

    // Store user details in session storage
    sessionStorage.setItem('user', JSON.stringify(user));

    // Redirect to the previous page or home if no previous page
    const from = location.state?.from?.pathname || '/';
    navigate(from);
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <p style={{ textAlign: 'left', marginTop: 5 }}>New User?</p>
      <Link to='/signup' >
        <p style={{ textAlign: 'justify', marginTop:5}}>signup</p>
      </Link>
    </div>
  );
};

const mapDispatchToProps = {
  loginSuccess,
};

export default connect(null, mapDispatchToProps)(SignIn);
