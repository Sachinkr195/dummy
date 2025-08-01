import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const referralCode = 'sachin2025'; // This could be dynamic later

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/user/${referralCode}`);
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error('Failed to load user:', err);
      }
    };

    fetchUser();
  }, []);

  if (!user) return <div className="p-8 text-center text-lg">Loading dashboard...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Welcome to Your Dashboard</h1>

        <div className="space-y-4">
          <div className="bg-blue-100 rounded-lg px-6 py-4 shadow-sm">
            <p className="text-lg"><span className="font-semibold">👤 Intern Name:</span> {user.name}</p>
          </div>

          <div className="bg-blue-100 rounded-lg px-6 py-4 shadow-sm">
            <p className="text-lg"><span className="font-semibold">🎯 Referral Code:</span> <span className="text-blue-600 font-mono">{user.referralCode}</span></p>
          </div>

          <div className="bg-blue-100 rounded-lg px-6 py-4 shadow-sm">
            <p className="text-lg"><span className="font-semibold">💰 Total Donations Raised:</span> ₹{user.donationsRaised}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3 text-blue-800">🎁 Rewards & Unlockables</h2>
          <ul className="space-y-2">
            <li className={`px-4 py-2 rounded-lg ${user.donationsRaised >= 1000 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
              ₹1000 – Badge {user.donationsRaised >= 1000 ? '✅' : '❌'}
            </li>
            <li className={`px-4 py-2 rounded-lg ${user.donationsRaised >= 2500 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
              ₹2500 – T-shirt {user.donationsRaised >= 2500 ? '✅' : '❌'}
            </li>
            <li className={`px-4 py-2 rounded-lg ${user.donationsRaised >= 5000 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
              ₹5000 – Internship Certificate {user.donationsRaised >= 5000 ? '✅' : '❌'}
            </li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => navigate('/leaderboard')}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            View Leaderboard 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
