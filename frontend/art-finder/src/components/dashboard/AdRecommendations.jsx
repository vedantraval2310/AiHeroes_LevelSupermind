
// src/components/dashboard/AdRecommendations.jsx
import React from 'react';

function AdRecommendations() {
  const recommendations = {
    hooks: [
      { text: "Upgrade to the Future of Mobile", description: "Emphasizes innovation and advancement" },
      { text: "Capture Life's Moments in Stunning Detail", description: "Focuses on camera capabilities" },
      { text: "Experience All-Day Power", description: "Highlights battery life" },
      { text: "Your Privacy, Our Priority", description: "Emphasizes security features" }
    ],
    ctas: [
      { text: "Get Started Now", usage: "Primary CTA for main landing pages" },
      { text: "Compare Models", usage: "For product comparison pages" },
      { text: "Watch the Demo", usage: "For feature showcase videos" },
      { text: "Pre-Order Today", usage: "For new product launches" }
    ],
    adCopy: [
      {
        title: "Premium Experience Ad",
        copy: "Experience the next level of mobile innovation. With cutting-edge AI features and all-day battery life, the future of smartphones is here."
      },
      {
        title: "Camera Focus Ad",
        copy: "Capture every moment in stunning detail. Professional-grade cameras in your pocket, powered by advanced AI technology."
      }
    ],
    formatRecs: [
      {
        platform: "YouTube",
        recommendation: "Create 15-30 second feature highlight videos",
        bestPractices: ["Focus on one key feature", "Include product shots", "End with strong CTA"]
      },
      {
        platform: "Instagram",
        recommendation: "Use carousel ads for multiple features",
        bestPractices: ["High-quality product images", "Brief, punchy copy", "Clear value proposition"]
      }
    ]
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Ad Recommendations</h2>

      {/* Suggested Hooks */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Suggested Hooks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendations.hooks.map((hook, index) => (
            <div key={index} className="border rounded-lg p-4">
              <p className="font-semibold text-blue-600">{hook.text}</p>
              <p className="text-gray-600 text-sm mt-2">{hook.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Suggestions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">CTA Suggestions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendations.ctas.map((cta, index) => (
            <div key={index} className="border rounded-lg p-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
                {cta.text}
              </button>
              <p className="text-gray-600 text-sm mt-2">{cta.usage}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ad Copy Ideas */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Ad Copy Ideas</h3>
        {recommendations.adCopy.map((ad, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <h4 className="font-semibold text-gray-800 mb-2">{ad.title}</h4>
            <p className="text-gray-600 bg-gray-50 p-4 rounded">{ad.copy}</p>
          </div>
        ))}
      </div>

      {/* Content Format Recommendations */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Content Format Recommendations</h3>
        {recommendations.formatRecs.map((rec, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <h4 className="font-semibold text-gray-800 mb-2">{rec.platform}</h4>
            <p className="text-gray-600 mb-2">{rec.recommendation}</p>
            <ul className="list-disc list-inside text-gray-600 text-sm">
              {rec.bestPractices.map((practice, i) => (
                <li key={i}>{practice}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdRecommendations;
