import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png'

function ResetPassword() {
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const userParam = queryParams.get('user');
    const tokenParam = queryParams.get('token');

    if (userParam && tokenParam) {
      setUsername(userParam);
      setToken(tokenParam);
    }
  }, []);

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
    setError('Passwords do not match');
    return;
  }


    try {
      const response = await fetch('http://localhost:4000/user/reset-password/confirm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, token, newPassword }),
      });

      if (response.ok) {
        setSuccessMessage('Password reset successful');
        setError('');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        const errorMessage = await response.text();
          setError(errorMessage);
          setSuccessMessage('');
      }
    } catch (error) {
      setError('Failed to reset password');
      setSuccessMessage('');
    }
  };

  return (
    <section className="w-screen h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-lg shadow dark:border dark:border-gray-700">
        <div className="p-8 space-y-6">
          <img src={logo} alt="RevSpire Logo" className="mx-auto" />
          <div className="px-8 space-y-6">
            <h1 className="text-xl font-bold leading-tight text-gray-900">Reset Password</h1>
            {error && <p className="text-red-500">{error}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}
            <form onSubmit={handlePasswordReset} className="space-y-4">
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary-600 focus:ring-primary-600 focus:outline-none bg-gray-700 placeholder-gray-400 focus:ring-slate-400
                  text-white"
                  placeholder="support@revspire.net"
                  value={username}
                  readOnly
                />
              </div>
              <div className='hidden'>
                <label>
                  Token
                </label>
                <input
                  type="text"
                  id="token"
                  value={token}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className="w-full p-3 border border-gray-600 rounded-lg focus:ring focus:ring-primary-600 focus:outline-none bg-gray-700 placeholder-gray-400 focus:ring-slate-400
                  text-white"
                  placeholder="••••••••"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">
                  Retype Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full p-3 border border-gray-600 rounded-lg focus:ring focus:ring-primary-600 focus:outline-none bg-gray-700 placeholder-gray-400 focus:ring-slate-400
                  text-white"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 mt-6 w-full text-white bg-slate-900 hover:bg-white hover:text-slate-900 rounded-lg hover:border-slate-900 hover:ring-2 hover:ring-slate-900"
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResetPassword;
