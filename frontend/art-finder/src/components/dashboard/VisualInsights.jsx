
// src/components/dashboard/VisualInsights.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

function VisualInsights() {
  const trendData = [
    { month: 'Jan', samsung: 75, apple: 85, google: 65 },
    { month: 'Feb', samsung: 78, apple: 88, google: 68 },
    { month: 'Mar', samsung: 82, apple: 86, google: 72 },
    { month: 'Apr', samsung: 85, apple: 89, google: 75 },
    { month: 'May', samsung: 88, apple: 90, google: 78 },
    { month: 'Jun', samsung: 86, apple: 92, google: 80 }
  ];

  const comparisonData = [
    { category: 'Brand Recognition', competitor: 90, our: 75 },
    { category: 'User Satisfaction', competitor: 85, our: 82 },
    { category: 'Market Share', competitor: 78, our: 68 },
    { category: 'Innovation Score', competitor: 88, our: 85 }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Visual Insights</h2>

      {/* Trend Graph */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Market Share Trends</h3>
        <div className="h-80">
          <LineChart width={800} height={300} data={trendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="samsung" stroke="#1E40AF" />
            <Line type="monotone" dataKey="apple" stroke="#DC2626" />
            <Line type="monotone" dataKey="google" stroke="#047857" />
          </LineChart>
        </div>
      </div>

      {/* Comparison Chart */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Competitive Analysis</h3>
        <div className="h-80">
          <BarChart width={800} height={300} data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="competitor" fill="#1E40AF" name="Competitor" />
            <Bar dataKey="our" fill="#047857" name="Our Brand" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default VisualInsights;