// src/components/WelcomeForm.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomeForm() {
  const [greeting, setGreeting] = useState('');
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting('Good Morning');
    else if (hour >= 12 && hour < 17) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // API call will go here
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">{greeting}</h1>
        <h2 className="text-2xl text-gray-600">Welcome to ART Finder</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your search query..."
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default WelcomeForm;