import React from 'react';

function PainPoints() {
  const painPoints = [
    { issue: 'Lack of time', mentions: 120 },
    { issue: 'High cost', mentions: 80 },
    { issue: 'Complex interface', mentions: 65 },
    { issue: 'Limited features', mentions: 45 },
  ];

  return (
    <div className="w-full space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Pain Points & Triggers</h2>
      
      <div className="w-full bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Top Pain Points</h3>
        <div className="w-full space-y-4">
          {painPoints.map((point, index) => (
            <div key={index} className="w-full flex justify-between items-center">
              <span className="text-gray-700">{point.issue}</span>
              <div className="flex items-center">
                <div className="w-96 bg-gray-200 rounded-full h-2.5 mr-2">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${(point.mentions / 120) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">{point.mentions} mentions</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PainPoints;