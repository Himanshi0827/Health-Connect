
// export default function Doctor() {

// }

import React, { useState } from 'react';
import { FaUserMd, FaCalendarCheck, FaUserInjured, FaComments, FaUser } from 'react-icons/fa';
import "./doctor.css"

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState('appointments');
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: 'John Doe', date: '2023-03-01', time: '10:00 AM', status: 'Pending' },
    { id: 2, patientName: 'Jane Doe', date: '2023-03-02', time: '11:00 AM', status: 'Approved' },
  ]);

  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe', medicalHistory: 'Hypertension', currentHealthConcerns: 'Headaches' },
    { id: 2, name: 'Jane Doe', medicalHistory: 'Diabetes', currentHealthConcerns: 'Fatigue' },
  ]);

  const [messages, setMessages] = useState([
    { id: 1, sender: 'John Doe', message: 'Hello, doctor!', timestamp: '2023-03-01 10:00 AM' },
    { id: 2, sender: 'Jane Doe', message: 'Hi, doctor!', timestamp: '2023-03-02 11:00 AM' },
  ]);

  const handleApproveAppointment = (id) => {
    setAppointments(appointments.map((appointment) => (appointment.id === id ? { ...appointment, status: 'Approved' } : appointment)));
  };

  const handleRescheduleAppointment = (id) => {
    setAppointments(appointments.map((appointment) => (appointment.id === id ? { ...appointment, status: 'Rescheduled' } : appointment)));
  };

  const handleCancelAppointment = (id) => {
    setAppointments(appointments.filter((appointment) => appointment.id !== id));
  };

  const handleSendMessage = (message) => {
    setMessages([...messages, { id: messages.length + 1, sender: 'Doctor', message, timestamp: new Date().toISOString() }]);
  };

  return (
    <div className="dashboard-container flex">
      <nav className="sidebar w-1/4 bg-light-blue-500 text-white h-screen p-4">
        <ul>
          <li className={`sidebar-item ${activeTab === 'appointments' ? 'active' : ''}`} onClick={() => setActiveTab('appointments')}>
            <FaCalendarCheck className="icon" /> Appointments
          </li>
          <li className={`sidebar-item ${activeTab === 'patients' ? 'active' : ''}`} onClick={() => setActiveTab('patients')}>
            <FaUserInjured className="icon" /> Patient List
          </li>
          <li className={`sidebar-item ${activeTab === 'messages' ? 'active' : ''}`} onClick={() => setActiveTab('messages')}>
            <FaComments className="icon" /> Chat with Patients
          </li>
          <li className={`sidebar-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
            <FaUser className="icon" /> Profile Management
          </li>
        </ul>
      </nav>
      <div className="main-content w-3/4 p-6">
        <div className="header flex justify-between items-center mb-4">
          <input type="text" className="search-bar p-2 border border-gray-300 rounded" placeholder="Search..." />
          <div className="user-info">
            <FaUserMd className="user-icon" />
            <span className="username ml-2">Doctor Name</span>
          </div>
        </div>
        {activeTab === 'appointments' && (
          <div>
            <h2 className="text-2xl font-bold mb-2">Appointments</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Patient Name</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Time</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="px-4 py-2">{appointment.patientName}</td>
                    <td className="px-4 py-2">{appointment.date}</td>
                    <td className="px-4 py-2">{appointment.time}</td>
                    <td className="px-4 py-2">{appointment.status}</td>
                    <td className="px-4 py-2">
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleApproveAppointment(appointment.id)}>
                        Approve
                      </button>
                      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleRescheduleAppointment(appointment.id)}>
                        Reschedule
                      </button>
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleCancelAppointment(appointment.id)}>
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === 'patients' && (
          <div>
            <h2 className="text-2xl font-bold mb-2">Patient List</h2>
            <ul>
              {patients.map((patient) => (
                <li key={patient.id}>
                  <h3 className="text-xl font-bold mb-1">{patient.name}</h3>
                  <p className="mb-2">Medical History: {patient.medicalHistory}</p>
                  <p className="mb-2">Current Health Concerns: {patient.currentHealthConcerns}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 'messages' && (
          <div>
            <h2 className="text-2xl font-bold mb-2">Chat with Patients</h2>
            <ul>
              {messages.map((message) => (
                <li key={message.id}>
                  <p className="mb-2">
                    <span className="font-bold">{message.sender}:</span> {message.message}
                  </p>
                  <p className="text-gray-500 mb-2">{message.timestamp}</p>
                </li>
              ))}
            </ul>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Type a message..."
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage(e.currentTarget.value);
                  e.currentTarget.value = '';
                }
              }}
            />
          </div>
        )}
        {activeTab === 'profile' && (
          <div>
            <h2 className="text-2xl font-bold mb-2">Profile Management</h2>
            <form>
              <label className="block mb-2">
                <span className="text-gray-700">Name:</span>
                <input type="text" className="block w-full p-2 border border-gray-300 rounded" />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">Email:</span>
                <input type="email" className="block w-full p-2 border border-gray-300 rounded" />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">Availability:</span>
                <select className="block w-full p-2 border border-gray-300 rounded">
                  <option>Available</option>
                  <option>Not Available</option>
                </select>
              </label>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update Profile</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDashboard;



// import React, { useState } from 'react';

// const DoctorDashboard = () => {
//   const [appointments, setAppointments] = useState([
//     { id: 1, patientName: 'John Doe', date: '2023-03-01', time: '10:00 AM', status: 'Pending' },
//     { id: 2, patientName: 'Jane Doe', date: '2023-03-02', time: '11:00 AM', status: 'Approved' },
//   ]);

//   const [patients, setPatients] = useState([
//     { id: 1, name: 'John Doe', medicalHistory: 'Hypertension', currentHealthConcerns: 'Headaches' },
//     { id: 2, name: 'Jane Doe', medicalHistory: 'Diabetes', currentHealthConcerns: 'Fatigue' },
//   ]);

//   const [messages, setMessages] = useState([
//     { id: 1, sender: 'John Doe', message: 'Hello, doctor!', timestamp: '2023-03-01 10:00 AM' },
//     { id: 2, sender: 'Jane Doe', message: 'Hi, doctor!', timestamp: '2023-03-02 11:00 AM' },
//   ]);

//   const handleApproveAppointment = (id) => {
//     setAppointments(appointments.map((appointment) => (appointment.id === id ? { ...appointment, status: 'Approved' } : appointment)));
//   };

//   const handleRescheduleAppointment = (id) => {
//     setAppointments(appointments.map((appointment) => (appointment.id === id ? { ...appointment, status: 'Rescheduled' } : appointment)));
//   };

//   const handleCancelAppointment = (id) => {
//     setAppointments(appointments.filter((appointment) => appointment.id !== id));
//   };

//   const handleSendMessage = (message) => {
//     setMessages([...messages, { id: messages.length + 1, sender: 'Doctor', message, timestamp: new Date().toISOString() }]);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Doctor Dashboard</h1>
//       <div className="grid grid-cols-3 gap-4">
//         <div className="col-span-2">
//           <h2 className="text-2xl font-bold mb-2">Appointments</h2>
//           <table className="w-full">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">Patient Name</th>
//                 <th className="px-4 py-2">Date</th>
//                 <th className="px-4 py-2">Time</th>
//                 <th className="px-4 py-2">Status</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {appointments.map((appointment) => (
//                 <tr key={appointment.id}>
//                   <td className="px-4 py-2">{appointment.patientName}</td>
//                   <td className="px-4 py-2">{appointment.date}</td>
//                   <td className="px-4 py-2">{appointment.time}</td>
//                   <td className="px-4 py-2">{appointment.status}</td>
//                   <td className="px-4 py-2">
//                     <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleApproveAppointment(appointment.id)}>
//                       Approve
//                     </button>
//                     <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleRescheduleAppointment(appointment.id)}>
//                       Reschedule
//                     </button>
//                     <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleCancelAppointment(appointment.id)}>
//                       Cancel
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div>
//           <h2 className="text-2xl font-bold mb-2">Patient List</h2>
//           <ul>
//             {patients.map((patient) => (
//               <li key={patient.id}>
//                 <h3 className="text-xl font-bold mb-1">{patient.name}</h3>
//                 <p className="mb-2">Medical History: {patient.medicalHistory}</p>
//                 <p className="mb-2">Current Health Concerns: {patient.currentHealthConcerns}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="mt-4">
//         <h2 className="text-2xl font-bold mb-2">Chat with Patients</h2>
//         <ul>
//           {messages.map((message) => (
//             <li key={message.id}>
//               <p className="mb-2">
//                 <span className="font-bold">{message.sender}:</span> {message.message}
//               </p>
//               <p className="text-gray-500 mb-2">{message.timestamp}</p>
//             </li>
//           ))}
//         </ul>
//         <input
//           type="text"
//           className="w-full p-2 border border-gray-300 rounded"
//           placeholder="Type a message..."
//           onKeyPress={(e) => {
//             if (e.key === 'Enter') {
//               handleSendMessage(e.currentTarget.value);
//               e.currentTarget.value = '';
//             }
//           }}
//         />
//       </div>
//       <div className="mt-4">
//         <h2 className="text-2xl font-bold mb-2">Profile Management</h2>
//         <form>
//           <label className="block mb-2">
//             <span className="text-gray-700">Name:</span>
//             <input type="text" className="block w-full p-2 border border-gray-300 rounded" />
//           </label>
//           <label className="block mb-2">
//             <span className="text-gray-700">Email:</span>
//             <input type="email" className="block w-full p-2 border border-gray-300 rounded" />
//           </label>
//           <label className="block mb-2">
//             <span className="text-gray-700">Availability:</span>
//             <select className="block w-full p-2 border border-gray-300 rounded">
//               <option>Available</option>
//               <option>Not Available</option>
//             </select>
//           </label>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update Profile</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DoctorDashboard;
