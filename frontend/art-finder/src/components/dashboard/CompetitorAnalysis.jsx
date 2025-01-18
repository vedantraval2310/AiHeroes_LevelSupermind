// src/components/dashboard/CompetitorAnalysis.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function CompetitorAnalysis() {
  const competitorData = [
    {
      name: 'Samsung',
      adEngagement: 85000,
      commonHooks: ['Innovation', 'Camera Quality', 'Battery Life'],
      ctas: ['Learn More', 'Pre-Order Now', 'Watch Video'],
      adExamples: [
        { title: 'Galaxy S24 Launch', platform: 'YouTube', engagement: '2.1M views' },
        { title: 'Camera Features', platform: 'Instagram', engagement: '850K likes' }
      ]
    },
    {
      name: 'Apple',
      adEngagement: 120000,
      commonHooks: ['Premium Experience', 'Security', 'Ecosystem'],
      ctas: ['Buy Now', 'Compare Models', 'Visit Store'],
      adExamples: [
        { title: 'iPhone 15 Pro', platform: 'YouTube', engagement: '3.2M views' },
        { title: 'iOS Features', platform: 'Facebook', engagement: '1.2M likes' }
      ]
    },
    {
      name: 'Google',
      adEngagement: 65000,
      commonHooks: ['AI Features', 'Photo Quality', 'Clean Android'],
      ctas: ['Shop Now', 'See Features', 'Compare Pixels'],
      adExamples: [
        { title: 'Pixel 8 Launch', platform: 'YouTube', engagement: '1.5M views' },
        { title: 'AI Demo', platform: 'Twitter', engagement: '500K likes' }
      ]
    }
  ];

  const formatData = [
    { name: 'Video Ads', percentage: 60 },
    { name: 'Carousel Ads', percentage: 30 },
    { name: 'Text Ads', percentage: 10 }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Competitor Analysis</h2>

      {/* Competitor Performance Table */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Competitor Performance</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">Competitor</th>
                <th className="px-4 py-2 text-left">Engagement</th>
                <th className="px-4 py-2 text-left">Common Hooks</th>
                <th className="px-4 py-2 text-left">CTAs</th>
              </tr>
            </thead>
            <tbody>
              {competitorData.map((competitor, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{competitor.name}</td>
                  <td className="px-4 py-2">{competitor.adEngagement.toLocaleString()}</td>
                  <td className="px-4 py-2">
                    <ul className="list-disc list-inside">
                      {competitor.commonHooks.map((hook, i) => (
                        <li key={i}>{hook}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-4 py-2">
                    <ul className="list-disc list-inside">
                      {competitor.ctas.map((cta, i) => (
                        <li key={i}>{cta}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ad Examples */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Ad Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {competitorData.map((competitor) => 
            competitor.adExamples.map((ad, index) => (
              <div key={index} className="border rounded p-4">
                <h4 className="font-semibold">{competitor.name} - {ad.title}</h4>
                <p className="text-gray-600">Platform: {ad.platform}</p>
                <p className="text-gray-600">Engagement: {ad.engagement}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Content Format Breakdown */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Content Format Breakdown</h3>
        <div className="h-64">
          <BarChart width={600} height={200} data={formatData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="percentage" fill="#4F46E5" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default CompetitorAnalysis;
