export const db = {
  users: [],
  routes: [
    {
      id: 1,
      from: 'Ranchi',
      to: 'Hazaribagh',
      stops: ['Ranchi', 'Ramgarh', 'Hazaribagh'],
      times: ['08:00', '08:45', '09:30'],
      seats: 20,
      fare: 150,
    },
    {
      id: 2,
      from: 'Ranchi',
      to: 'Dhanbad',
      stops: ['Ranchi', 'Ramgarh', 'Dhanbad'],
      times: ['10:00', '10:45', '11:45'],
      seats: 20,
      fare: 200,
    },
  ],
  bookings: [],
  shuttles: [
    {
      id: 1,
      regNumber: 'JH01AB1234',
      routeId: 1,
      currentStop: 'Ranchi',
      position: { lat: 23.3441, lng: 85.3096 },
    },
  ],
};