// pages/index.tsx

import React from 'react';

// Sample ride data
const ridesData = [
  {
    id: 'Ride 1',
    imageSrc: '/ride1.jpg', // Provide the path to the image for Ride 1
    pickup: 'Pickup Address 1',
    destination: 'Destination Address 1',
    distance: '10 miles',
    date: '11th Oct 2022',
    time: '12:03 PM',
  },
  {
    id: 'Ride 2',
    imageSrc: '/ride2.jpg', // Provide the path to the image for Ride 2
    pickup: 'Pickup Address 2',
    destination: 'Destination Address 2',
    distance: '15 miles',
    date: '12th Oct 2022',
    time: '02:30 PM',
  },
  {
    id: 'Ride 3',
    imageSrc: '/ride3.jpg', // Provide the path to the image for Ride 3
    pickup: 'Pickup Address 3',
    destination: 'Destination Address 3',
    distance: '8 miles',
    date: '13th Oct 2022',
    time: '09:15 AM',
  },
];

const RideCard: React.FC<{
  id: string;
  imageSrc: string;
  pickup: string;
  destination: string;
  distance: string;
  date: string;
  time: string;
}> = ({ id, imageSrc, pickup, destination, distance, date, time }) => (
  <div className="bg-white p-4 border rounded-md shadow-md">
    <img
      src={'https://edvora-ride-react.netlify.app/static/media/map.17150d1e6e6206c37ec5.png'}
      alt={id}
      className="w-32 h-32 mx-auto mb-4 rounded-full"
    />
    <p>{id}</p>
    <p>Pickup: {pickup}</p>
    <p>Destination: {destination}</p>
    <p>Distance: {distance}</p>
    <p>Date: {date}</p>
    <p>Time: {time}</p>
    {/* Request Share button */}
    <button
      className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 transition duration-300"
      onClick={() => {
        // Add your request share logic here
        alert(`Requesting to share ${id}`);
      }}
    >
      Request Share
    </button>
  </div>
);

const RideSharingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="p-4 bg-blue-500 text-white text-center">
        <h1 className="text-2xl font-semibold">Available Rides</h1>
      </header>
      <main className="container mx-auto p-4">
        <section>
          <h2 className="text-xl font-semibold mb-2">Available Rides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ridesData.map((ride) => (
              <RideCard key={ride.id} {...ride} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default RideSharingPage;
