// src/components/dashboard/ReferenceLinks.jsx
import React from 'react';
import { ExternalLink, BookOpen, Youtube, MessageSquare } from 'lucide-react';

function ReferenceLinks() {
  const references = {
    sourceLinks: [
      {
        title: 'Mobile Market Analysis 2024',
        url: '#',
        source: 'Industry Report',
        date: 'Jan 2024',
        description: 'Comprehensive analysis of mobile device market trends and predictions'
      },
      {
        title: 'Smartphone Usage Statistics',
        url: '#',
        source: 'Research Paper',
        date: 'Dec 2023',
        description: 'Detailed study of user behavior patterns across different mobile platforms'
      },
      {
        title: 'Consumer Trends in Mobile',
        url: '#',
        source: 'Market Study',
        date: 'Feb 2024',
        description: 'Analysis of consumer preferences and buying patterns in mobile technology'
      }
    ],
    competitorAds: [
      {
        brand: 'Samsung',
        campaign: 'Galaxy S24 Launch',
        platform: 'YouTube',
        url: '#',
        views: '2.1M',
        date: 'Jan 2024',
        description: 'Product launch campaign highlighting AI features'
      },
      {
        brand: 'Apple',
        campaign: 'iPhone 15 Features',
        platform: 'Instagram',
        url: '#',
        engagement: '850K likes',
        date: 'Dec 2023',
        description: 'Feature showcase focusing on camera capabilities'
      },
      {
        brand: 'Google',
        campaign: 'Pixel 8 AI Demo',
        platform: 'Facebook',
        url: '#',
        engagement: '1.2M views',
        date: 'Nov 2023',
        description: 'Demonstration of AI-powered features'
      }
    ],
    userContent: [
      {
        type: 'Review',
        platform: 'Reddit',
        title: 'Long-term User Review',
        url: '#',
        author: 'TechEnthusiast',
        karma: '15.2K',
        date: 'Feb 2024',
        summary: 'Detailed 6-month usage review of latest mobile devices'
      },
      {
        type: 'Discussion',
        platform: 'Twitter',
        title: 'Feature Comparison Thread',
        url: '#',
        author: '@MobileExpert',
        engagement: '5.6K retweets',
        date: 'Jan 2024',
        summary: 'Comprehensive comparison of flagship device features'
      },
      {
        type: 'Blog',
        platform: 'Medium',
        title: 'Mobile Tech Analysis',
        url: '#',
        author: 'Tech Insider',
        reads: '25K',
        date: 'Feb 2024',
        summary: 'In-depth analysis of current mobile technology trends'
      }
    ]
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Reference Links</h2>

      {/* Source Links */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold">Source Links</h3>
        </div>
        <div className="space-y-4">
          {references.sourceLinks.map((link, index) => (
            <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-blue-600 hover:text-blue-800">
                    <a href={link.url} className="flex items-center gap-2">
                      {link.title}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">{link.description}</p>
                </div>
                <span className="text-sm text-gray-500">{link.date}</span>
              </div>
              <div className="mt-2">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {link.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Competitor Ad Library */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <Youtube className="w-6 h-6 text-red-600" />
          <h3 className="text-xl font-semibold">Competitor Ad Library</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {references.competitorAds.map((ad, index) => (
            <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-sm font-semibold text-gray-500">{ad.brand}</span>
                  <h4 className="font-semibold text-blue-600 hover:text-blue-800">
                    <a href={ad.url} className="flex items-center gap-2">
                      {ad.campaign}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h4>
                </div>
                <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  {ad.platform}
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-2">{ad.description}</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-sm text-gray-500">{ad.date}</span>
                <span className="text-sm text-gray-600">{ad.views || ad.engagement}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User-Generated Content */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="w-6 h-6 text-green-600" />
          <h3 className="text-xl font-semibold">User-Generated Content</h3>
        </div>
        <div className="space-y-4">
          {references.userContent.map((content, index) => (
            <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      {content.type}
                    </span>
                    <span className="text-sm text-gray-500">{content.platform}</span>
                  </div>
                  <h4 className="font-semibold text-blue-600 hover:text-blue-800 mt-2">
                    <a href={content.url} className="flex items-center gap-2">
                      {content.title}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h4>
                </div>
                <span className="text-sm text-gray-500">{content.date}</span>
              </div>
              <p className="text-gray-600 text-sm mt-2">{content.summary}</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">{content.author}</span>
                <span className="text-sm text-gray-500">
                  {content.karma || content.engagement || content.reads}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReferenceLinks;