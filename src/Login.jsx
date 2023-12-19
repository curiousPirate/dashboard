import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = '/user/login'
    const body = { username, password }

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
    <section className="w-screen h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-lg shadow dark:border dark:border-gray-700">
        <div className="p-8 space-y-6">
          <img src={logo} alt="RevSpire Logo" className="mx-auto"/>
        <div className="px-8 space-y-6">
          <h1 className="text-xl font-bold leading-tight text-gray-900">Sign-In</h1>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary-600 focus:ring-primary-600 focus:outline-none bg-gray-700 placeholder-gray-400 focus:ring-slate-400
                text-white"
                placeholder="support@revspire.net"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-600 rounded-lg focus:ring focus:ring-primary-600 focus:outline-none bg-gray-700 placeholder-gray-400 focus:ring-slate-400
                text-white"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="px-4 py-2 mt-6 w-full text-white bg-slate-900 hover:bg-white hover:text-slate-900 rounded-lg hover:border-slate-900 hover:ring-2 hover:ring-slate-900"
              >
                Sign in
              </button>
            </div>
            <div className="flex items-center justify-between">
              <Link to="/forgot-password" className="text-sm font-medium text-slate-600 italic hover:underline hover:text-teal-950">
                Forgot password?
              </Link>
            </div>
          </form>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
