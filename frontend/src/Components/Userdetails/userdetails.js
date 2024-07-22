
import AdminHome from "../adminHome/adminHome";
import Rough from "../Rough/rough";
import Patient from "../Patient/patient";
import Doctor from "../Doctor/doctor";
import React, { useEffect, useState } from "react";


export default function UserDetails() {
  const [userData, setUserData] = useState(null);
  const [userType, setUserType] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data === "token expired") {
          alert("Token expired, login again");
          window.localStorage.clear();
          window.location.href = "./auth/login";
        } else {
          setUserData(data.data);
          setUserType(data.data.userType);
        }
      });
  }, []);

  if (!userData) {
    return <div>ERROR 404</div>;
  }

  switch (userType) {
    case "Admin":
      return <AdminHome />;
    case "Patient":
      return <Patient userData={userData} />;
    case "Doctor":
      return <Doctor userData={userData} />;
    
    default:
      return <Rough userData={userData} />;
  }
}
