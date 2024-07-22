

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// export default function Register() {
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [userType, setUserType] = useState("");
//   const [secretKey, setSecretKey] = useState("");
//   const [roles, setRoles] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/roles")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status === "ok") {
//           setRoles(data.roles);
//         } else {
//           alert("Failed to fetch roles");
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching roles:', error);
//         alert("Failed to fetch roles");
//       });
//   }, []);

//   const handleSubmit = (e) => {
//     if (userType === "Admin" && secretKey !== "Admin") {
//       e.preventDefault();
//       alert("Invalid Admin");
//     } else {
//       e.preventDefault();

//       console.log(fname, lname, email, password);
//       fetch("http://localhost:5000/register", {
//         method: "POST",
//         crossDomain: true,
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//         body: JSON.stringify({
//           fname,
//           email,
//           lname,
//           password,
//           userType,
//         }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data, "userRegister");
//           if (data.status === "ok") {
//             alert("Registration Successful");
//           } else {
//             alert("Something went wrong");
//           }
//         });
//     }
//   };

//   return (
//     <>
//       <div className="container mx-auto px-4 h-full">
//         <div className="flex content-center items-center justify-center h-full">
//           <div className="w-full lg:w-6/12 px-4">
//             <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
//               <div className="rounded-t mb-0 px-6 py-6">
//                 <div className="text-center mb-3">
//                   <h6 className="text-blueGray-500 text-sm font-bold">
//                     Sign up
//                   </h6>
//                 </div>
//                 <div className="btn-wrapper text-center">
//                   {/* <button
//                     className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
//                     type="button"
//                   >
//                     <img
//                       alt="..."
//                       className="w-5 mr-1"
//                       src={require("assets/img/github.svg").default}
//                     />
//                     Github
//                   </button>
//                   <button
//                     className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
//                     type="button"
//                   >
//                     <img
//                       alt="..."
//                       className="w-5 mr-1"
//                       src={require("assets/img/google.svg").default}
//                     />
//                     Google
//                   </button> */}
//                 </div>
//                 <hr className="mt-6 border-b-1 border-blueGray-300" />
//               </div>
//               <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
//                 <form onSubmit={handleSubmit}>
//                   <div className="relative w-full mb-3">
//                     <label
//                       htmlFor="role-select"
//                       className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                     >
//                       Select Role
//                     </label>
//                     <select
//                       id="role-select"
//                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                       value={userType}
//                       onChange={(e) => setUserType(e.target.value)}
//                     >
//                       <option value="">Select Role</option>
//                       {roles.map((role) => (
//                         <option key={role._id} value={role.userRole}>
//                           {role.userRole}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   {userType === "Admin" ? (
//                     <div className="relative w-full mb-3">
//                       <label
//                         className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                       >
//                         Secret Key
//                       </label>
//                       <input
//                         type="text"
//                         className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                         placeholder="Secret Key"
//                         onChange={(e) => setSecretKey(e.target.value)}
//                       />
//                     </div>
//                   ) : null}

//                   <div className="relative w-full mb-3">
//                     <label
//                       className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                       htmlFor="grid-password"
//                     >
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                       placeholder="First Name"
//                       onChange={(e) => setFname(e.target.value)}
//                     />
//                   </div>
//                   <div className="relative w-full mb-3">
//                     <label
//                       className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                       htmlFor="grid-password"
//                     >
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                       placeholder="Last Name"
//                       onChange={(e) => setLname(e.target.value)}
//                     />
//                   </div>

//                   <div className="relative w-full mb-3">
//                     <label
//                       className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                       htmlFor="grid-password"
//                     >
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                       placeholder="Email"
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>

//                   <div className="relative w-full mb-3">
//                     <label
//                       className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                       htmlFor="grid-password"
//                     >
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                       placeholder="Password"
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </div>

//                   <div>
//                     <label className="inline-flex items-center cursor-pointer">
//                       <input
//                         id="customCheckLogin"
//                         type="checkbox"
//                         className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
//                       />
//                       <span className="ml-2 text-sm font-semibold text-blueGray-600">
//                         Remember me
//                       </span>
//                     </label>
//                   </div>

//                   <div className="text-center mt-6">
//                     <button
//                       className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
//                       type="submit"
//                     >
//                       Create Account
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//             <div className="flex flex-wrap mt-6 relative">
//               <div className="w-1/2">
//                 <Link
//                   to="#"
//                   onClick={(e) => e.preventDefault()}
//                   className="text-blueGray-200"
//                 >
//                   <small>Forgot password?</small>
//                 </Link>
//               </div>
//               <div className="w-1/2 text-right">
//                 <Link to="/login" className="text-blueGray-200">
//                   <small>Already have an account?</small>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }









import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Styles/Register.css"; // Import the CSS file

export default function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/roles")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          setRoles(data.roles);
        } else {
          alert("Failed to fetch roles");
        }
      })
      .catch((error) => {
        console.error('Error fetching roles:', error);
        alert("Failed to fetch roles");
      });
  }, []);

  const handleSubmit = (e) => {
    if (userType === "Admin" && secretKey !== "Admin") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status === "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

  return (
    <div className="register-section">
      <div className="register-card">
        <div className="text-center mb-3">
          <h6>Sign up</h6>
          <br></br>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="role-select" className="input-label">Select Role</label>
            <select
              id="role-select"
              className="input-field"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="">Select Role</option>
              {roles.map((role) => (
                <option key={role._id} value={role.userRole}>
                  {role.userRole}
                </option>
              ))}
            </select>
          </div>
          {userType === "Admin" && (
            <div>
              <label className="input-label">Secret Key</label>
              <input
                type="text"
                className="input-field"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          )}
          <div>
            <label className="input-label">First Name</label>
            <input
              type="text"
              className="input-field"
              placeholder="First Name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div>
            <label className="input-label">Last Name</label>
            <input
              type="text"
              className="input-field"
              placeholder="Last Name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div>
            <label className="input-label">Email</label>
            <input
              type="email"
              className="input-field"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="input-label">Password</label>
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="checkbox-container">
            <input
              id="customCheckRegister"
              type="checkbox"
              className="form-checkbox"
            />
            <span className="checkbox-label">Remember me</span>
          </div>
          <div className="text-center mt-6">
            <button type="submit" className="signup-button">Create Account</button>
          </div>
        </form>
        <div className="flex flex-row mt-6 relative links-container">
          <div className="text-left">
            <Link to="#" onClick={(e) => e.preventDefault()}>
              <small>Forgot password?</small>
            </Link>
          </div>
          <div className="text-right">
            <Link to="/login">
              <small>Already have an account?</small>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
