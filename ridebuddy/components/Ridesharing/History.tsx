import React from 'react';

const RideHistory: React.FC = () => {
  const rideHistoryData = [
    // Replace this with your actual ride history data
    {
      date: '2023-09-16',
      from: 'Location A',
      to: 'Location B',
      fare: '$20',
      rideId: '002',
      originStation: '20',
      stationPath: [20, 39, 40, 42, 54, 63, 72, 88, 98],
    },
    {
      date: '2023-09-15',
      from: 'Location C',
      to: 'Location D',
      fare: '$18',
      rideId: '001',
      originStation: '10',
      stationPath: [10, 30, 45, 55, 68, 74, 82],
    },
    {
      date: '2023-09-14',
      from: 'Location E',
      to: 'Location F',
      fare: '$25',
      rideId: '003',
      originStation: '15',
      stationPath: [15, 28, 37, 49, 58, 65, 70],
    },
    {
      date: '2023-09-13',
      from: 'Location G',
      to: 'Location H',
      fare: '$22',
      rideId: '004',
      originStation: '22',
      stationPath: [22, 33, 41, 47, 53, 62, 69, 79],
    },
    {
      date: '2023-09-12',
      from: 'Location I',
      to: 'Location J',
      fare: '$18',
      rideId: '005',
      originStation: '18',
      stationPath: [18, 29, 38, 48, 56, 67, 73],
    },
    // Add more ride history entries here
  ];

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Ride History</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {rideHistoryData.map((ride, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 flex mb-4 mx-4"
          >
            {/* Left side with location image */}
            <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={`https://edvora-ride-react.netlify.app/static/media/map.17150d1e6e6206c37ec5.png`} // Replace with your image source
                alt={`Location ${index}`}
                className="w-full h-full object-cover rounded"
              />
            </div>

            {/* Right side with ride details */}
            <div className="ml-4">
              <p className="text-lg font-semibold">Ride Id: {ride.rideId}</p>
              <p className="text-sm">Origin Station: {ride.originStation}</p>
              <p className="text-sm">
                Station Path: {ride.stationPath.join(', ')}
              </p>
              <p className="text-sm">Date: {ride.date}</p>
              <p className="text-sm">From: {ride.from}</p>
              <p className="text-sm">To: {ride.to}</p>
              <p className="text-sm">Fare: {ride.fare}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideHistory;
