const mongoose = require('mongoose');

const UserRoleSchema = new mongoose.Schema({
  userRole: {
    
    type: String,
    unique: true,
    required: true,
  },
});
mongoose.model('UserRoles', UserRoleSchema);
