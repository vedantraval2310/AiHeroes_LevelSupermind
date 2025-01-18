// src/components/dashboard/CustomizationFilters.jsx
import React, { useState } from 'react';
import { Filter } from 'lucide-react';

function CustomizationFilters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    topics: '',
    platform: 'all',
    timeFrame: '3months',
    competitor: 'all'
  });

  const topics = [
    'Mobile Devices',
    'Smartphones',
    'Tablets',
    'Accessories',
    'Software',
    'Apps'
  ];

  const platforms = [
    { id: 'all', name: 'All Platforms' },
    { id: 'youtube', name: 'YouTube' },
    { id: 'facebook', name: 'Facebook' },
    { id: 'instagram', name: 'Instagram' },
    { id: 'twitter', name: 'Twitter' }
  ];

  const timeFrames = [
    { id: '1month', name: 'Last Month' },
    { id: '3months', name: 'Last 3 Months' },
    { id: '6months', name: 'Last 6 Months' },
    { id: '1year', name: 'Last Year' }
  ];

  const competitors = [
    { id: 'all', name: 'All Competitors' },
    { id: 'samsung', name: 'Samsung' },
    { id: 'apple', name: 'Apple' },
    { id: 'google', name: 'Google' },
    { id: 'xiaomi', name: 'Xiaomi' }
  ];

  const handleFilterChange = (type, value) => {
    const newFilters = { ...filters, [type]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <Filter className="w-6 h-6" />
        Customization & Filters
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Topic Filter */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Topic Filter</h3>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Search topics..."
              className="w-full p-2 border rounded-md"
              value={filters.topics}
              onChange={(e) => handleFilterChange('topics', e.target.value)}
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {topics
                .filter(topic => 
                  topic.toLowerCase().includes(filters.topics.toLowerCase())
                )
                .map((topic, index) => (
                  <span
                    key={index}
                    className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-200"
                    onClick={() => handleFilterChange('topics', topic)}
                  >
                    {topic}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* Platform Filter */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Platform Filter</h3>
          <div className="space-y-2">
            {platforms.map((platform) => (
              <label
                key={platform.id}
                className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-50 rounded-md"
              >
                <input
                  type="radio"
                  name="platform"
                  value={platform.id}
                  checked={filters.platform === platform.id}
                  onChange={(e) => handleFilterChange('platform', e.target.value)}
                  className="form-radio text-blue-600"
                />
                <span>{platform.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Time Filter */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Time Filter</h3>
          <div className="space-y-2">
            {timeFrames.map((timeFrame) => (
              <label
                key={timeFrame.id}
                className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-50 rounded-md"
              >
                <input
                  type="radio"
                  name="timeFrame"
                  value={timeFrame.id}
                  checked={filters.timeFrame === timeFrame.id}
                  onChange={(e) => handleFilterChange('timeFrame', e.target.value)}
                  className="form-radio text-blue-600"
                />
                <span>{timeFrame.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Competitor Filter */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Competitor Filter</h3>
          <div className="space-y-2">
            {competitors.map((competitor) => (
              <label
                key={competitor.id}
                className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-50 rounded-md"
              >
                <input
                  type="radio"
                  name="competitor"
                  value={competitor.id}
                  checked={filters.competitor === competitor.id}
                  onChange={(e) => handleFilterChange('competitor', e.target.value)}
                  className="form-radio text-blue-600"
                />
                <span>{competitor.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomizationFilters;