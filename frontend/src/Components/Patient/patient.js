
// export default function Patient() {
    

// }




// import React, { useState } from 'react';
// import { Tab } from '@headlessui/react';
// import { LineChart, XAxis, YAxis, Line, CartesianGrid, Tooltip, Legend } from "recharts";
// import "./patient.css"
// interface PatientProps {}

// const Patient: React.FC<PatientProps> = () => {
//   const [currentTab, setCurrentTab] = useState('appointment-requests');
//   const [appointmentRequests, setAppointmentRequests] = useState([
//     { id: 1, date: '2023-03-01', healthIssue: 'Headache' },
//     { id: 2, date: '2023-03-05', healthIssue: 'Fever' },
//   ]);
//   const [medicalHistory, setMedicalHistory] = useState([
//     { id: 1, date: '2023-02-01', prescription: 'Paracetamol' },
//     { id: 2, date: '2023-02-05', prescription: 'Ibuprofen' },
//   ]);
//   const [chatMessages, setChatMessages] = useState([
//     { id: 1, date: '2023-03-01', message: 'Hello, how are you?' },
//     { id: 2, date: '2023-03-05', message: 'I am fine, thank you.' },
//   ]);

//   const handleTabChange = (tab: string) => {
//     setCurrentTab(tab);
//   };

//   const handleAppointmentRequest = (healthIssue: string) => {
//     setAppointmentRequests([...appointmentRequests, { id: appointmentRequests.length + 1, date: new Date().toISOString(), healthIssue }]);
//   };

//   const handleChatMessage = (message: string) => {
//     setChatMessages([...chatMessages, { id: chatMessages.length + 1, date: new Date().toISOString(), message }]);
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
//       <Tab.Group>
//         <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
//           <Tab
//             className={({ selected }) =>
//               `${selected ? 'bg-blue-900 text-white' : 'text-blue-900'} rounded-lg py-2 px-4`
//             }
//             onClick={() => handleTabChange('appointment-requests')}
//           >
//             Appointment Requests
//           </Tab>
//           <Tab
//             className={({ selected }) =>
//               `${selected ? 'bg-blue-900 text-white' : 'text-blue-900'} rounded-lg py-2 px-4`
//             }
//             onClick={() => handleTabChange('medical-history')}
//           >
//             Medical History
//           </Tab>
//           <Tab
//             className={({ selected }) =>
//               `${selected ? 'bg-blue-900 text-white' : 'text-blue-900'} rounded-lg py-2 px-4`
//             }
//             onClick={() => handleTabChange('chat-with-doctors')}
//           >
//             Chat with Doctors
//           </Tab>
//           <Tab
//             className={({ selected }) =>
//               `${selected ? 'bg-blue-900 text-white' : 'text-blue-900'} rounded-lg py-2 px-4`
//             }
//             onClick={() => handleTabChange('chatbot-assistance')}
//           >
//             Chatbot Assistance
//           </Tab>
//           <Tab
//             className={({ selected }) =>
//               `${selected ? 'bg-blue-900 text-white' : 'text-blue-900'} rounded-lg py-2 px-4`
//             }
//             onClick={() => handleTabChange('profile-management')}
//           >
//             Profile Management
//           </Tab>
//         </Tab.List>
//         <Tab.Panels className="mt-2">
//           <Tab.Panel
//             className={currentTab === 'appointment-requests' ? 'block' : 'hidden'}
//           >
//             <div className="flex flex-col space-y-4">
//               <h2 className="text-lg font-bold">Appointment Requests</h2>
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   handleAppointmentRequest(e.target.healthIssue.value);
//                 }}
//               >
//                 <input
//                   type="text"
//                   name="healthIssue"
//                   placeholder="Enter your health issue"
//                   className="block w-full rounded-lg border border-gray-300 p-2"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-blue-900 text-white rounded-lg py-2 px-4"
//                 >
//                   Request Appointment
//                 </button>
//               </form>
//               <ul className="space-y-2">
//                 {appointmentRequests.map((appointmentRequest) => (
//                   <li key={appointmentRequest.id}>
//                     <span className="font-bold">{appointmentRequest.date}</span>
//                     <span className="ml-2">{appointmentRequest.healthIssue}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </Tab.Panel>
//           <Tab.Panel
//             className={currentTab === 'medical-history' ? 'block' : 'hidden'}
//           >
//             <div className="flex flex-col space-y-4">
//               <h2 className="text-lg font-bold">Medical History</h2>
//               <ul className="space-y-2">
//                 {medicalHistory.map((medicalRecord) => (
//                   <li key={medicalRecord.id}>
//                     <span className="font-bold">{medicalRecord.date}</span>
//                     <span className="ml-2">{medicalRecord.prescription}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </Tab.Panel>
//           <Tab.Panel
//             className={currentTab === 'chat-with-doctors' ? 'block' : 'hidden'}
//           >
//             <div className="flex flex-col space-y-4">
//               <h2 className="text-lg font-bold">Chat with Doctors</h2>
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   handleChatMessage(e.target.message.value);
//                 }}
//               >
//                 <input
//                   type="text"
//                   name="message"
//                   placeholder="Enter your message"
//                   className="block w-full rounded-lg border border-gray-300 p-2"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-blue-900 text-white rounded-lg py-2 px-4"
//                 >
//                   Send Message
//                 </button>
//               </form>
//               <ul className="space-y-2">
//                 {chatMessages.map((chatMessage) => (
//                   <li key={chatMessage.id}>
//                     <span className="font-bold">{chatMessage.date}</span>
//                     <span className="ml-2">{chatMessage.message}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </Tab.Panel>
//           <Tab.Panel
//             className={currentTab === 'chatbot-assistance' ? 'block' : 'hidden'}
//           >
//             <div className="flex flex-col space-y-4">
//               <h2 className="text-lg font-bold">Chatbot Assistance</h2>
//               <p>Chatbot assistance is available 24/7.</p>
//             </div>
//           </Tab.Panel>
//           <Tab.Panel
//             className={currentTab === 'profile-management' ? 'block' : 'hidden'}
//           >
//             <div className="flex flex-col space-y-4">
//               <h2 className="text-lg font-bold">Profile Management</h2>
//               <form>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter your name"
//                   className="block w-full rounded-lg border border-gray-300 p-2"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   className="block w-full rounded-lg border border-gray-300 p-2"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-blue-900 text-white rounded-lg py-2 px-4"
//                 >
//                   Update Profile
//                 </button>
//               </form>
//             </div>
//           </Tab.Panel>
//         </Tab.Panels>
//       </Tab.Group>
//     </div>
//   );
// };

// export default Patient;
















import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { LineChart, XAxis, YAxis, Line, CartesianGrid, Tooltip, Legend } from "recharts";
import "./patient.css"
interface PatientProps {}

const Patient: React.FC<PatientProps> = () => {
  const [currentTab, setCurrentTab] = useState('appointment-requests');
  const [appointmentRequests, setAppointmentRequests] = useState([
    { id: 1, date: '2023-03-01', healthIssue: 'Headache' },
    { id: 2, date: '2023-03-05', healthIssue: 'Fever' },
  ]);
  const [medicalHistory, setMedicalHistory] = useState([
    { id: 1, date: '2023-02-01', prescription: 'Paracetamol' },
    { id: 2, date: '2023-02-05', prescription: 'Ibuprofen' },
  ]);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, date: '2023-03-01', message: 'Hello, how are you?' },
    { id: 2, date: '2023-03-05', message: 'I am fine, thank you.' },
  ]);

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  const handleAppointmentRequest = (healthIssue: string) => {
    setAppointmentRequests([...appointmentRequests, { id: appointmentRequests.length + 1, date: new Date().toISOString(), healthIssue }]);
  };

  const handleChatMessage = (message: string) => {
    setChatMessages([...chatMessages, { id: chatMessages.length + 1, date: new Date().toISOString(), message }]);
  };

  return (
    <>
    <div className="container">
  <div className="sidebar">
    <h2>Patient Dashboard</h2>
    <ul>
      <li>
        <button onClick={() => handleTabChange('appointment-requests')}>
          Appointment Requests
        </button>
      </li>
      <li>
        <button onClick={() => handleTabChange('medical-history')}>
          Medical History
        </button>
      </li>
      <li>
        <button onClick={() => handleTabChange('chat-with-doctors')}>
          Chat with Doctors
        </button>
      </li>
      <li>
        <button onClick={() => handleTabChange('chatbot-assistance')}>
          Chatbot Assistance
        </button>
      </li>
      <li>
        <button onClick={() => handleTabChange('profile-management')}>
          Profile Management
        </button>
      </li>
    </ul>
  </div>

  <div className="content">
    <div className="header">
      <div className="icon">🔍</div>
      <input className="search-bar" type="text" placeholder="Search..." />
      <div className="user-info">Logged in as [Username]</div>
    </div>

    {/* Tab content goes here */}
    <div className={`tab-content ${currentTab === 'appointment-requests' ? 'active' : ''}`}>
      <h2>Appointment Requests</h2>
      {/* ... */}
      <div className="flex flex-col space-y-4">
              <h2 className="text-lg font-bold">Appointment Requests</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAppointmentRequest(e.target.healthIssue.value);
                }}
              >
                <input
                  type="text"
                  name="healthIssue"
                  placeholder="Enter your health issue"
                  className="block w-full rounded-lg border border-gray-300 p-2"
                />
                <button
                  type="submit"
                  className="bg-blue-900 text-white rounded-lg py-2 px-4"
                >
                  Request Appointment
                </button>
              </form>
              <ul className="space-y-2">
                {appointmentRequests.map((appointmentRequest) => (
                  <li key={appointmentRequest.id}>
                    <span className="font-bold">{appointmentRequest.date}</span>
                    <span className="ml-2">{appointmentRequest.healthIssue}</span>
                  </li>
                ))}
              </ul>
            </div>
    </div>
    <div className={`tab-content ${currentTab === 'chatbot-assistance' ? 'active' : ''}`}>
      <h2>Chatbot Assistance</h2>
      {/* ... */}
      <div className="flex flex-col space-y-4">
              <h2 className="text-lg font-bold">Chatbot Assistance</h2>
              <p>Chatbot assistance is available 24/7.</p>
            </div>
     
    </div>
    <div className={`tab-content ${currentTab === 'profile-management' ? 'active' : ''}`}>
      <h2>Profile Management</h2>
      {/* ... */}
      <div className="flex flex-col space-y-4">
              <h2 className="text-lg font-bold">Profile Management</h2>
              <form>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="block w-full rounded-lg border border-gray-300 p-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-lg border border-gray-300 p-2"
                />
                <button
                  type="submit"
                  className="bg-blue-900 text-white rounded-lg py-2 px-4"
                >
                  Update Profile
                </button>
              </form>
            </div>
     
    </div>
    <div className={`tab-content ${currentTab === 'chat-with-doctors' ? 'active' : ''}`}>
      <h2>Chat with Doctors</h2>
      {/* ... */}
      <div className="flex flex-col space-y-4">
              <h2 className="text-lg font-bold">Chat with Doctors</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleChatMessage(e.target.message.value);
                }}
              >
                <input
                  type="text"
                  name="message"
                  placeholder="Enter your message"
                  className="block w-full rounded-lg border border-gray-300 p-2"
                />
                <button
                  type="submit"
                  className="bg-blue-900 text-white rounded-lg py-2 px-4"
                >
                  Send Message
                </button>
              </form>
              <ul className="space-y-2">
                {chatMessages.map((chatMessage) => (
                  <li key={chatMessage.id}>
                    <span className="font-bold">{chatMessage.date}</span>
                    <span className="ml-2">{chatMessage.message}</span>
                  </li>
                ))}
              </ul>
            </div>
     
    </div>
    <div className={`tab-content ${currentTab === 'medical-history' ? 'active' : ''}`}>
      <h2>Medical History</h2>
      <div className="flex flex-col space-y-4">
              <h2 className="text-lg font-bold">Medical History</h2>
              <ul className="space-y-2">
                {medicalHistory.map((medicalRecord) => (
                  <li key={medicalRecord.id}>
                    <span className="font-bold">{medicalRecord.date}</span>
                    <span className="ml-2">{medicalRecord.prescription}</span>
                  </li>
                ))}
              </ul>
            </div>
    </div>

    {/* Repeat for other tabs */}
  </div>
</div>

    </>
  );
};

export default Patient;
