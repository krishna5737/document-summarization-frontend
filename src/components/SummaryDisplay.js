import React from 'react';

const SummaryDisplay = ({ summary, isLoading, error }) => {
  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Document Summary</h2>
      
      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-700"></div>
          <span className="ml-2 text-gray-600">Generating summary...</span>
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 p-4 rounded-md">
          <p className="text-red-700">{error}</p>
        </div>
      )}
      
      {summary && !isLoading && !error && (
        <div>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">Summary Length: {summary.length}</span>
              <span className="text-sm text-gray-500">Compression: {summary.compressionRatio}</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-md max-h-96 overflow-y-auto">
              <p className="text-gray-800 whitespace-pre-line">{summary.summary}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SummaryDisplay;
