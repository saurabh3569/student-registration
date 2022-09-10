import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    rollNo : Number,
    name : String,
    class : String,
    section : {
        type : String,
        default : 'A'
    },
})


const student = mongoose.model('student',studentSchema) 

export default student; 