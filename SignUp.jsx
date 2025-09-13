import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginSuccess } from '../../../Redux/actions/CartActions';

const SignUp = ({loginSuccess}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignUp = (e) => {
    e.preventDefault();
    const user = { email }; 
    loginSuccess(user);
    sessionStorage.setItem('user', JSON.stringify(user));
    const from = location.state?.from?.pathname || '/';
    navigate(from);
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
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
        <input
          type="confirmPassword"
          placeholder="confirmPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  loginSuccess,
};

export default connect(null, mapDispatchToProps)(SignUp);


