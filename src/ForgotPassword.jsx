import React, { useState } from 'react';

function ForgotPassword() {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handlePasswordResetRequest = async (e) => {
        e.preventDefault();
        if (!username) {
            setError('Username is required');
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
                setSuccessMessage('Password reset email sent');
                setError(''); // Clear any previous errors
            } else {
                const errorMessage = await response.text();
                setError(errorMessage);
                setSuccessMessage(''); // Clear any previous success message
            }
        } catch (error) {
            console.error('Error requesting password reset:', error);
            setError('Failed to reset password');
            setSuccessMessage(''); // Clear any previous success message
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handlePasswordResetRequest}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-500 text-xs italic">{error}</p>}
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
