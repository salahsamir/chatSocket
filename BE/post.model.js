
import mongoose, { Schema, Types, model } from "mongoose";

const connectDB  = async ()=>{
    return await mongoose.connect("mongodb+srv://salah:01004037009@cluster0.sru27ya.mongodb.net/socket")
    .then(res=>console.log(`DB Connected successfully on .........`))
    .catch(err=>console.log(` Fail to connect  DB.........${err} `))
}


export default connectDB;
const postSchema = new Schema({

  title:{
    type:String
  }
 
}, {
    timestamps: true
})


export const postModel = mongoose.models.post|| model('post', postSchema)
