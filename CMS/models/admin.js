import mongoose from "mongoose";
 const AdminSchema = new mongoose.Schema({
    name: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String,
      required: true, 
      unique: true 
    },
    password: { 
      type: String,
      required: true 
    },
    number : {
      type: Number,
      required: true
    },
    designation: { 
      type: String, 
      required: true 
    },
  });
  
  export default mongoose.model("admin", AdminSchema);
  