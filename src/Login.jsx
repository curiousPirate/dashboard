import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin ? '/user/login' : '/user/signup';
    const body = isLogin ? { username, password } : { username, password, email };

    try {
      const response = await fetch(`http://localhost:4000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        setSuccessMessage('Login successful!');
        setErrorMessage('');
        // Redirect to dashboard or handle successful login
        navigate('/layout'); // Redirect to dashboard route
      } else {
        const errorMessage = await response.text();
        setErrorMessage(errorMessage);
        setSuccessMessage('');
        // Handle login/signup failure
      }
    } catch (error) {
      console.error('Network error:', error.message);
      setErrorMessage('Network error. Please try again.');
      setSuccessMessage('');
      // Handle network errors
    }
  };

  return (
    <div>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        {!isLogin && (
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        )}
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Create an account' : 'Already have an account? Login'}
      </p>
      {isLogin && (
        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      )}
    </div>
  );
}

export default Login;
