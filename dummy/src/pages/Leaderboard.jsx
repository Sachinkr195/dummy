import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/leaderboard')  
      .then(res => setUsers(res.data))
      .catch(err => console.error('Failed to fetch leaderboard:', err));
  }, []);
  console.log(users)

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="flex justify-between items-center bg-white shadow p-4 rounded-md mb-6">
        <div className="text-xl font-bold text-blue-700 flex items-center gap-2">
          <img src="/hamster.jpg" className="w-6 h-6" alt="logo" />
          dummy<span className="text-black">.com</span>
        </div>
        <Link to="/dashboard" className="text-sm text-blue-500 hover:underline">← Back to Dashboard</Link>
      </header>

      <main className="bg-white shadow p-6 rounded-md max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🏆 Leaderboard</h2>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-3 border-b">Rank</th>
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Referral Code</th>
              <th className="p-3 border-b">Amount Raised (₹)</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="hover:bg-gray-50 text-gray-800">
                <td className="p-3 border-b font-semibold">{index + 1}</td>
                <td className="p-3 border-b">{user.name}</td>
                <td className="p-3 border-b text-blue-600">{user.referralCode}</td>
                <td className="p-3 border-b">₹{user.donationsRaised.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Leaderboard;
