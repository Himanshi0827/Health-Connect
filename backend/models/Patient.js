const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    date: String,
    details: {
        
        doctor: String,
        vitals: String,
        systemicExamination: String,
        diagnosis: [
            {
                name: String,
                duration: String,
                date: String,
            }
        ],
        chiefComplaints: [
            {
                name: String,
                frequency: String,
                severity: String,
                duration: String,
                date: String,
            }
        ],
    }
});

module.exports = mongoose.model('Patient', patientSchema);
