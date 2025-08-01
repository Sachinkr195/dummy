import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
    
      <header className="bg-white shadow p-4 text-2xl font-bold text-blue-700 flex items-center justify-center space-x-3">
  <img className="w-8 h-8" src="/hamster.jpg" alt="Hamster" />
  <span>
    dummy<span className="text-black">.com</span>
  </span>
</header>
      <main className="flex-1 flex justify-center items-center">
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-center mb-6">Welcome Back 👋</h2>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm mb-1 text-gray-600">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-600">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
