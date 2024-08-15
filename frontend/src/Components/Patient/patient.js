


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
//     <>
//     <div className="container">
//   <div className="sidebar">
//     <h2>Patient Dashboard</h2>
//     <ul>
//       <li>
//         <button onClick={() => handleTabChange('appointment-requests')}>
//           Appointment Requests
//         </button>
//       </li>
//       <li>
//         <button onClick={() => handleTabChange('medical-history')}>
//           Medical History
//         </button>
//       </li>
//       <li>
//         <button onClick={() => handleTabChange('chat-with-doctors')}>
//           Chat with Doctors
//         </button>
//       </li>
//       <li>
//         <button onClick={() => handleTabChange('chatbot-assistance')}>
//           Chatbot Assistance
//         </button>
//       </li>
//       <li>
//         <button onClick={() => handleTabChange('profile-management')}>
//           Profile Management
//         </button>
//       </li>
//     </ul>
//   </div>

//   <div className="content">
//     <div className="header">
//       <div className="icon">🔍</div>
//       <input className="search-bar" type="text" placeholder="Search..." />
//       <div className="user-info">Logged in as [Username]</div>
//     </div>

//     {/* Tab content goes here */}
//     <div className={`tab-content ${currentTab === 'appointment-requests' ? 'active' : ''}`}>
//       {/* <h2>Appointment Requests</h2> */}
//       {/* ... */}
//       <div className="flex flex-col space-y-4">
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
//     </div>
//     <div className={`tab-content ${currentTab === 'chatbot-assistance' ? 'active' : ''}`}>
//       <h2>Chatbot Assistance</h2>
//       {/* ... */}
//       <div className="flex flex-col space-y-4">
//               <h2 className="text-lg font-bold">Chatbot Assistance</h2>
//               <p>Chatbot assistance is available 24/7.</p>
//             </div>
     
//     </div>
//     <div className={`tab-content ${currentTab === 'profile-management' ? 'active' : ''}`}>
//       {/* <h2>Profile Management</h2> */}
//       {/* ... */}
//       <div className="flex flex-col space-y-4">
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
     
//     </div>
//     <div className={`tab-content ${currentTab === 'chat-with-doctors' ? 'active' : ''}`}>
//       {/* <h2>Chat with Doctors</h2> */}
//       {/* ... */}
//       <div className="flex flex-col space-y-4">
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
     
//     </div>
//     <div className={`tab-content ${currentTab === 'medical-history' ? 'active' : ''}`}>
//       {/* <h2>Medical History</h2> */}
//       <div className="flex flex-col space-y-4">
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
//     </div>

//     {/* Repeat for other tabs */}
//   </div>
// </div>

//     </>
//   );
// };

// export default Patient;














// import React, { useState } from 'react';
// import {
//   LineChart,
//   XAxis,
//   YAxis,
//   Line,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from 'recharts';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Container,
//   Paper,
//   Grid,
//   TextField,
//   Button,
//   Avatar,
// } from '@material-ui/core';
// import {
//   Menu as MenuIcon,
//   Dashboard as DashboardIcon,
//   History as HistoryIcon,
//   Chat as ChatIcon,
//   Person as PersonIcon,
//   Search as SearchIcon,
// } from '@material-ui/icons';
// import { makeStyles } from '@material-ui/core/styles';

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerContainer: {
//     overflow: 'auto',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   toolbar: theme.mixins.toolbar,
//   title: {
//     flexGrow: 1,
//   },
//   avatar: {
//     marginLeft: theme.spacing(2),
//   },
//   paper: {
//     padding: theme.spacing(2),
//     display: 'flex',
//     overflow: 'auto',
//     flexDirection: 'column',
//   },
// }));

// const Patient = ({ userData }) => {
//   const classes = useStyles();
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

//   const handleTabChange = (tab) => {
//     setCurrentTab(tab);
//   };

//   const handleAppointmentRequest = (healthIssue) => {
//     setAppointmentRequests([
//       ...appointmentRequests,
//       { id: appointmentRequests.length + 1, date: new Date().toISOString(), healthIssue },
//     ]);
//   };

//   const handleChatMessage = (message) => {
//     setChatMessages([
//       ...chatMessages,
//       { id: chatMessages.length + 1, date: new Date().toISOString(), message },
//     ]);
//   };

//   const renderTabContent = () => {
//     switch (currentTab) {
//       case 'appointment-requests':
//         return (
//           <Paper className={classes.paper}>
//             <Typography variant="h6">Appointment Requests</Typography>
//             <form onSubmit={(e) => {
//               e.preventDefault();
//               handleAppointmentRequest(e.target.healthIssue.value);
//             }}>
//               <TextField
//                 name="healthIssue"
//                 label="Enter your health issue"
//                 fullWidth
//                 margin="normal"
//               />
//               <Button type="submit" variant="contained" color="primary">
//                 Request Appointment
//               </Button>
//             </form>
//             <List>
//               {appointmentRequests.map((request) => (
//                 <ListItem key={request.id}>
//                   <ListItemText
//                     primary={request.healthIssue}
//                     secondary={request.date}
//                   />
//                 </ListItem>
//               ))}
//             </List>
//           </Paper>
//         );
//       case 'medical-history':
//         return (
//           <Paper className={classes.paper}>
//             <Typography variant="h6">Medical History</Typography>
//             <List>
//               {medicalHistory.map((record) => (
//                 <ListItem key={record.id}>
//                   <ListItemText
//                     primary={record.prescription}
//                     secondary={record.date}
//                   />
//                 </ListItem>
//               ))}
//             </List>
//           </Paper>
//         );
//       case 'chat-with-doctors':
//         return (
//           <Paper className={classes.paper}>
//             <Typography variant="h6">Chat with Doctors</Typography>
//             <form onSubmit={(e) => {
//               e.preventDefault();
//               handleChatMessage(e.target.message.value);
//             }}>
//               <TextField
//                 name="message"
//                 label="Enter your message"
//                 fullWidth
//                 margin="normal"
//               />
//               <Button type="submit" variant="contained" color="primary">
//                 Send Message
//               </Button>
//             </form>
//             <List>
//               {chatMessages.map((message) => (
//                 <ListItem key={message.id}>
//                   <ListItemText
//                     primary={message.message}
//                     secondary={message.date}
//                   />
//                 </ListItem>
//               ))}
//             </List>
//           </Paper>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="fixed" className={classes.appBar}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             Patient Dashboard
//           </Typography>
//           <TextField
//             placeholder="Search..."
//             InputProps={{
//               startAdornment: (
//                 <IconButton>
//                   <SearchIcon />
//                 </IconButton>
//               ),
//             }}
//           />
//           <Typography variant="subtitle1">
//           {userData.fname}
//           </Typography>
//           <Avatar className={classes.avatar} src={userData.avatar} />
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         className={classes.drawer}
//         variant="permanent"
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//       >
//         <div className={classes.toolbar} />
//         <List>
//           {['Appointment Requests', 'Medical History', 'Chat with Doctors'].map((text, index) => (
//             <ListItem
//               button
//               key={text}
//               onClick={() => handleTabChange(text.toLowerCase().replace(' ', '-'))}
//             >
//               <ListItemIcon>
//                 {index === 0 ? <DashboardIcon /> : index === 1 ? <HistoryIcon /> : <ChatIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <main className={classes.content}>
//         <div className={classes.toolbar} />
//         <Container maxWidth="lg">
//           <Grid container spacing={3}>
//             <Grid item xs={12}>
//               {renderTabContent()}
//             </Grid>
//           </Grid>
//         </Container>
//       </main>
//     </div>
//   );
// };

// export default Patient;






import React, { useState } from 'react';
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Paper,
  Grid,
  TextField,
  Button,
  Avatar,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  History as HistoryIcon,
  Chat as ChatIcon,
  Person as PersonIcon,
  Search as SearchIcon,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerContainer: {
//     overflow: 'auto',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   toolbar: theme.mixins.toolbar,
//   title: {
//     flexGrow: 1,
//   },
//   avatar: {
//     marginLeft: theme.spacing(2),
//   },
//   paper: {
//     padding: theme.spacing(2),
//     display: 'flex',
//     overflow: 'auto',
//     flexDirection: 'column',
//   },
// }));
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      backgroundColor: '#e0f7fa',  // Light grey background (adjust as per your theme)
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: '#333',  // Darker AppBar background color
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor: '#282c34',  // Darker drawer background
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#282c34',  // Same as drawer to blend in
      color: '#fff',  // White text for contrast
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      backgroundColor: '#f4f4f4',  // Match root background
    },
    toolbar: theme.mixins.toolbar,
    title: {
      flexGrow: 1,
      color: '#fff',  // White text for the title
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      backgroundColor: '#fff',  // White card background for contrast
    },
    button: {
      backgroundColor: '#61dafb',  // Accent color for buttons (adjust as per theme)
      color: '#282c34',  // Dark text for contrast
    },
    listItem: {
      '&:hover': {
        backgroundColor: '#3c4043',  // Darker hover state
      },
    },
  }));
  
const Patient = ({ userData }) => {
  const classes = useStyles();
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

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const handleAppointmentRequest = (healthIssue) => {
    setAppointmentRequests([
      ...appointmentRequests,
      { id: appointmentRequests.length + 1, date: new Date().toISOString(), healthIssue },
    ]);
  };

  const handleChatMessage = (message) => {
    setChatMessages([
      ...chatMessages,
      { id: chatMessages.length + 1, date: new Date().toISOString(), message },
    ]);
  };

  const renderTabContent = () => {
    switch (currentTab) {
      case 'appointment-requests':
        return (
          <Paper className={classes.paper}>
            <Typography variant="h6">Appointment Requests</Typography>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleAppointmentRequest(e.target.healthIssue.value);
            }}>
              <TextField
                name="healthIssue"
                label="Enter your health issue"
                fullWidth
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary">
                Request Appointment
              </Button>
            </form>
            <List>
              {appointmentRequests.map((request) => (
                <ListItem key={request.id}>
                  <ListItemText
                    primary={request.healthIssue}
                    secondary={request.date}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        );
      case 'medical-history':
        return (
          <Paper className={classes.paper}>
            <Typography variant="h6">Medical History</Typography>
            <List>
              {medicalHistory.map((record) => (
                <ListItem key={record.id}>
                  <ListItemText
                    primary={record.prescription}
                    secondary={record.date}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        );
      case 'chat-with-doctors':
        return (
          <Paper className={classes.paper}>
            <Typography variant="h6">Chat with Doctors</Typography>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleChatMessage(e.target.message.value);
            }}>
              <TextField
                name="message"
                label="Enter your message"
                fullWidth
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary">
                Send Message
              </Button>
            </form>
            <List>
              {chatMessages.map((message) => (
                <ListItem key={message.id}>
                  <ListItemText
                    primary={message.message}
                    secondary={message.date}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        );
      default:
        return null;
    }
  };

  return (
    <div className={classes.root}>
    <AppBar position="fixed" className={classes.appBar}>
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      Patient Dashboard
    </Typography>
    <TextField
      placeholder="Search..."
      InputProps={{
        startAdornment: (
          <IconButton>
            <SearchIcon style={{ color: '#fff' }} /> {/* White search icon */}
          </IconButton>
        ),
        style: { color: '#fff' },  // White text in search input
      }}
      InputLabelProps={{
        style: { color: '#fff' },  // White label text
      }}
    />
    <Typography variant="subtitle1" style={{ color: '#fff' }}>
      {userData.fname}
    </Typography>
    <Avatar className={classes.avatar} src={userData.avatar} />
  </Toolbar>
</AppBar>

<Drawer
  className={classes.drawer}
  variant="permanent"
  classes={{
    paper: classes.drawerPaper,
  }}
>
  <div className={classes.toolbar} />
  <List>
    {['Appointment Requests', 'Medical History', 'Chat with Doctors'].map((text, index) => (
      <ListItem
        button
        key={text}
        className={classes.listItem}
        onClick={() => handleTabChange(text.toLowerCase().replace(' ', '-'))}
      >
        <ListItemIcon style={{ color: '#61dafb' }}>  {/* Accent color for icons */}
          {index === 0 ? <DashboardIcon /> : index === 1 ? <HistoryIcon /> : <ChatIcon />}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
</Drawer>

      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Patient Dashboard
          </Typography>
          <TextField
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
          <Typography variant="subtitle1">
          {userData.fname}
          </Typography>
          <Avatar className={classes.avatar} src={userData.avatar} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {['Appointment Requests', 'Medical History', 'Chat with Doctors'].map((text, index) => (
            <ListItem
              button
              key={text}
              onClick={() => handleTabChange(text.toLowerCase().replace(' ', '-'))}
            >
              <ListItemIcon>
                {index === 0 ? <DashboardIcon /> : index === 1 ? <HistoryIcon /> : <ChatIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer> */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {renderTabContent()}
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Patient;