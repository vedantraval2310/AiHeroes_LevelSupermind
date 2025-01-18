// src/components/dashboard/ExportShareOptions.jsx
import React, { useState } from 'react';
import { Download, Share2, Copy, Check } from 'lucide-react';

function ExportShareOptions() {
  const [copied, setCopied] = useState(false);
  const [exporting, setExporting] = useState(false);

  const handleExportPDF = async () => {
    setExporting(true);
    // Simulate PDF export
    await new Promise(resolve => setTimeout(resolve, 2000));
    setExporting(false);
    // In a real application, you would implement actual PDF export functionality here
  };

  const handleCopyLink = async () => {
    const dashboardLink = window.location.href;
    await navigator.clipboard.writeText(dashboardLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Export & Share Options</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Export Options */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Export Options</h3>
          <div className="space-y-4">
            <button
              onClick={handleExportPDF}
              disabled={exporting}
              className={`w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition-colors ${
                exporting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              <Download className="w-5 h-5" />
              {exporting ? 'Exporting...' : 'Export as PDF'}
            </button>
            <p className="text-sm text-gray-600">
              Export the complete dashboard content including all insights and visualizations.
            </p>
          </div>
        </div>

        {/* Share Options */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Share Options</h3>
          <div className="space-y-4">
            <button
              onClick={handleCopyLink}
              className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-800 px-4 py-3 rounded-md hover:bg-gray-200 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-green-600" />
                  Link Copied!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  Copy Dashboard Link
                </>
              )}
            </button>
            <div className="flex items-center gap-4">
              <button
                className="flex-1 flex items-center justify-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-md hover:bg-blue-200 transition-colors"
                onClick={() => {/* Implement email sharing */}}
              >
                <Share2 className="w-4 h-4" />
                Email
              </button>
              <button
                className="flex-1 flex items-center justify-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-md hover:bg-blue-200 transition-colors"
                onClick={() => {/* Implement slack sharing */}}
              >
                <Share2 className="w-4 h-4" />
                Slack
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Share the dashboard overview with your team members or stakeholders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExportShareOptions;