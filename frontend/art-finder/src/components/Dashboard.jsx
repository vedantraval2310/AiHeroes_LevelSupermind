// src/components/Dashboard.jsx
import { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { Menu, XCircle } from 'lucide-react';
import Overview from './dashboard/Overview';
import PainPoints from './dashboard/PainPoints';
import CompetitorAnalysis from './dashboard/CompetitorAnalysis';
import AdRecommendations from './dashboard/AdRecommendations';
import VisualInsights from './dashboard/VisualInsights';
import ReferenceLinks from './dashboard/ReferenceLinks';

import ExportShareOptions from './dashboard/ExportShareOptions';



function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const sidebarItems = [
    { name: 'Overview', path: '' },
    { name: 'Pain Points & Triggers', path: 'pain-points' },
    { name: 'Competitor Analysis', path: 'competitor-analysis' },
    { name: 'Ad Recommendations', path: 'ad-recommendations' },
    { name: 'Visual Insights', path: 'visual-insights' },
    { name: 'Reference Links', path: 'reference-links' },
        { name: 'Export & Share', path: 'export' }
      ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900"
              >
                <Menu size={24} />
              </button>
              <span className="ml-4 text-xl font-semibold">ART Finder Dashboard</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => navigate('/')}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                New Search
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar and Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed inset-y-0 left-0 transform bg-white w-64 transition duration-200 ease-in-out z-30 lg:translate-x-0 lg:static lg:inset-0`}
        >
          <div className="h-full overflow-y-auto">
            <nav className="px-4 py-4">
              {sidebarItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    navigate(`/dashboard/${item.path}`);
                    setSidebarOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md mb-1"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
    
        <main className="flex-1 p-6 w-full">
          <Routes>
            <Route path="" element={<Overview />} />
            <Route path="pain-points" element={<PainPoints />} />
            <Route path="competitor-analysis" element={<CompetitorAnalysis />} />
            <Route path="ad-recommendations" element={<AdRecommendations />} />
            <Route path="visual-insights" element={<VisualInsights />} />
            <Route path="reference-links" element={<ReferenceLinks />} />
            
            <Route path="export" element={<ExportShareOptions />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;