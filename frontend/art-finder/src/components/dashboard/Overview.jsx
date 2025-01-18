import React from 'react';

function Overview() {
  const stats = [
    { label: 'Pain Points Identified', value: '24' },
    { label: 'Competitor Ads Analyzed', value: '156' },
    { label: 'Positive Sentiment', value: '70%' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-xl font-bold text-blue-600">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Summary</h3>
        <p className="text-gray-600">
          Analysis period: Last 3 months<br />
          Key findings indicate strong market potential with significant user engagement across platforms.
          Main pain points revolve around efficiency and cost concerns.
        </p>
      </div>
    </div>
  );
}

export default Overview;