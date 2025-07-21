export const db = {
       routes: [
         // Ranchi Routes
         { id: 'r1', city: 'Ranchi', from: 'Ranchi', to: 'Hazaribagh', stops: ['Ranchi', 'Ramgarh', 'Hazaribagh'], times: ['08:00', '08:45', '09:30'], fare: 150, seats: 40, shuttleIds: ['s1', 's2'], driverIds: ['d1', 'd2'] },
         { id: 'r2', city: 'Ranchi', from: 'Ranchi', to: 'Jamshedpur', stops: ['Ranchi', 'Chandil', 'Jamshedpur'], times: ['09:00', '09:50', '10:45'], fare: 200, seats: 35, shuttleIds: ['s3'], driverIds: ['d3'] },
         { id: 'r3', city: 'Ranchi', from: 'Ranchi', to: 'Dhanbad', stops: ['Ranchi', 'Bokaro', 'Dhanbad'], times: ['07:30', '08:30', '09:30'], fare: 180, seats: 38, shuttleIds: ['s4'], driverIds: ['d4'] },
         { id: 'r4', city: 'Ranchi', from: 'Ranchi', to: 'Giridih', stops: ['Ranchi', 'Hazaribagh', 'Giridih'], times: ['10:00', '11:00', '12:00'], fare: 170, seats: 40, shuttleIds: ['s5'], driverIds: ['d5'] },
         { id: 'r5', city: 'Ranchi', from: 'Ranchi', to: 'Deoghar', stops: ['Ranchi', 'Hazaribagh', 'Deoghar'], times: ['06:30', '07:30', '08:45'], fare: 200, seats: 36, shuttleIds: ['s6'], driverIds: ['d6'] },
         { id: 'r6', city: 'Ranchi', from: 'Ranchi', to: 'Palamu', stops: ['Ranchi', 'Daltonganj', 'Palamu'], times: ['08:30', '09:45', '11:00'], fare: 190, seats: 40, shuttleIds: ['s7'], driverIds: ['d7'] },
         { id: 'r7', city: 'Ranchi', from: 'Ranchi', to: 'Gumla', stops: ['Ranchi', 'Lohardaga', 'Gumla'], times: ['09:30', '10:15', '11:00'], fare: 140, seats: 38, shuttleIds: ['s8'], driverIds: ['d8'] },
         { id: 'r8', city: 'Ranchi', from: 'Ranchi', to: 'Simdega', stops: ['Ranchi', 'Gumla', 'Simdega'], times: ['07:00', '08:00', '09:00'], fare: 160, seats: 35, shuttleIds: ['s9'], driverIds: ['d9'] },
         // Patna Routes
         { id: 'p1', city: 'Patna', from: 'Patna', to: 'Gaya', stops: ['Patna', 'Jehanabad', 'Gaya'], times: ['08:00', '08:45', '09:30'], fare: 120, seats: 40, shuttleIds: ['s10', 's11'], driverIds: ['d10', 'd11'] },
         { id: 'p2', city: 'Patna', from: 'Patna', to: 'Muzaffarpur', stops: ['Patna', 'Hajipur', 'Muzaffarpur'], times: ['09:00', '09:30', '10:00'], fare: 130, seats: 35, shuttleIds: ['s12'], driverIds: ['d12'] },
         // Add similar routes for Raipur (r3–r10), Kolkata (k1–k8)
       ],
       shuttles: [
         { id: 's1', regNumber: 'JH01AB1234', seats: 40, driverId: 'd1', routeId: 'r1' },
         { id: 's2', regNumber: 'JH01CD5678', seats: 40, driverId: 'd2', routeId: 'r1' },
         // Add more shuttles
       ],
       drivers: [
         { id: 'd1', name: 'Amit Kumar', contact: '1234567890' },
         { id: 'd2', name: 'Suresh Yadav', contact: '0987654321' },
         // Add more drivers
       ],
       passengers: [
         { id: 'p1', name: 'Ravi Sharma', contact: '1112223334' },
         { id: 'p2', name: 'Priya Singh', contact: '4445556667' },
         // Add more passengers
       ],
       bookings: [
         { id: 'b1', routeId: 'r1', shuttleId: 's1', userId: 'p1', seat: 5, status: 'confirmed', paymentMethod: 'UPI', fare: 150 },
         // Add more bookings
       ],
       feedback: [
         { id: 'f1', bookingId: 'b1', userId: 'p1', rating: 4, comment: 'Comfortable ride!' },
         // Add more feedback
       ],
       admins: [
         { id: 'a1', name: 'Admin One', email: 'admin1@shuttlesetu.com', password: 'admin123' },
         // Add more admins
       ],
       seats: {
         's1': { booked: [5, 6, 10], total: 40 },
         's2': { booked: [1, 2], total: 40 },
         // Add seat data for other shuttles
       }
     };
