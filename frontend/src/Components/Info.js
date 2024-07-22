import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        "HealthConnect: Your Digital Bridge to Seamless Healthcare"
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Convenience"
          description="Book appointments from the comfort of your home.
Access your medical history anytime, anywhere.
Receive notifications and reminders for appointments and prescriptions.
"
          icon={faTruckMedical}
        />

        <InformationCard
          title="Efficiency"
          description="Quickly connect with doctors specializing in your health issues.
Real-time chat and video consultations for immediate support.
Streamlined appointment management for both patients and doctors.
"
          icon={faHeartPulse}
        />

        <InformationCard
          title="Comprehensive Care"
          description="Maintain a detailed record of your past prescriptions and medical history.
Get personalized healthcare advice through our integrated chatbot.
Secure and private communication with your healthcare providers."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
