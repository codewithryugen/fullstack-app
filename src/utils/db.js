import mongoose from "mongoose";

const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB);
    }catch(err){
       console.log('tidak terkonesi ke database !');
    }
}

export default connect;

