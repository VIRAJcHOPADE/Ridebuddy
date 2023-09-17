// components/ShareRideSuccessModal.tsx

import React from 'react';

const ShareRideSuccessModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-md shadow-md">
        <p className="text-lg font-semibold mb-2">Request Successful!</p>
        <p>Your request to share the ride has been sent.</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ShareRideSuccessModal;
