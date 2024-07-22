import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Health Connect</span>
        </h3>
        <p className="ba-description">
        <ul>
          <li> <b> Appointment Requests:</b> Submit requests to your preferred doctors based on your health issues. Get notifications on the site and via email when your request is approved.</li>
          <li> <b> Medical History: </b>Access your past prescriptions and health records all in one place.</li>
          <li> <b> Chat with Doctors: </b>Communicate directly with your healthcare providers to discuss your health concerns.</li>
          <li> <b> Chatbot Assistance: </b>Get quick answers to your questions and guidance on how to use the system.</li>
          <li> <b> Profile Management:</b>Update your personal information and medical history easily.</li>
        </ul>


        </p>

       

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
