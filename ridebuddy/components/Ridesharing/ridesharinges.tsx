// pages/ridesharinges.tsx

import React from 'react';
import RideSharingPage from '@/components/Ridesharing/availavleride';
import ShareRideForm from '@/components/Ridesharing/shareride';

const Ridesharinges: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="p-4 bg-blue-500 text-white text-center">
        <h1 className="text-2xl font-semibold">Ride Sharing</h1>
      </header>
      <main className="container mx-auto p-4">
        {/* Share a Ride section using the ShareRideForm component */}
        <ShareRideForm />

        {/* Add some space */}
        <div className="mt-8" />

        {/* List of available rides using the RideSharingPage component */}
        <RideSharingPage />
      </main>
    </div>
  );
};

export default Ridesharinges;
