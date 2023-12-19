import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png'

function ForgotPassword() {
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handlePasswordResetRequest = async (e) => {
    e.preventDefault();
    if (!username) {
        setErrorMessage('Username is required');
        return;
    }
    try {
        const response = await fetch('http://localhost:4000/user/reset-password/request', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
        });
        if (response.ok) {
        setSuccessMessage('Check your email for password reset link!');
        setErrorMessage('');
        } else {
        const errorMessage = await response.text();
        setErrorMessage(errorMessage);
        setSuccessMessage('');
        }
    } catch (error) {
        console.error('Error requesting password reset:', error);
        setErrorMessage('Failed to reset password');
        setSuccessMessage('');
    }
    };

    return (
    <section className="w-screen h-screen flex items-center justify-center bg-gray-900">
        <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-lg shadow border border-gray-700">
        <div className="p-8 space-y-6">
            <img src={logo} alt="RevSpire Logo" className="mx-auto" />
            <div className="p-8 space-y-6">
            <h1 className="text-xl font-bold leading-tight text-gray-900">Forgot Password</h1>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}
            <form onSubmit={handlePasswordResetRequest} className="space-y-4">
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
                <button
                type="submit"
                className="px-4 py-2 mt-6 w-full text-white bg-slate-900 hover:bg-white hover:text-slate-900 rounded-lg hover:border-slate-900 hover:ring-2 hover:ring-slate-900"
                >
                Verify by Email
                </button>
            <div className="flex items-center justify-between">
              <Link to="/login" className="text-sm font-medium text-slate-600 italic hover:underline hover:text-teal-950">
                Return to Login Page
              </Link>
            </div>
            </form>
            </div>
        </div>
        </div>
    </section>
    );
}

export default ForgotPassword;
