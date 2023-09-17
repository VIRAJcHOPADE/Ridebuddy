// components/ShareRideForm.tsx

import React, { useState } from 'react';
import ShareRideSuccessModal from '@/components/Ridesharing/ShareRideSuccessModel'; // Import the modal component


const ShareRideForm: React.FC = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleShareRide = () => {
    // Perform form validation
    if (!from || !to || !date) {
      alert('Please fill in all fields before sharing the ride.');
      return;
    }

    // Perform the share ride logic here (e.g., making a request)
    // Once the request is successful, open the success modal
    setIsSuccessModalOpen(true);
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Share a Ride</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="from" className="block text-sm font-medium">
            From
          </label>
          <input
            type="text"
            id="from"
            name="from"
            className="w-full p-2 border rounded-md"
            placeholder="Enter starting location"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="to" className="block text-sm font-medium">
            To
          </label>
          <input
            type="text"
            id="to"
            name="to"
            className="w-full p-2 border rounded-md"
            placeholder="Enter destination"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full p-2 border rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        {/* Centered button */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleShareRide}
            className="bg-green-300 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-600 transition duration-300"
          >
            Share Ride
          </button>
        </div>
      </form>
      {/* Success modal */}
      <ShareRideSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleCloseSuccessModal}
      />
    </section>
  );
};

export default ShareRideForm;
