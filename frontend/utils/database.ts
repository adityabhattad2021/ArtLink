import mongoose,{ ConnectOptions } from "mongoose";


let isConnected = false;

export async function connectToDB() {
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log("Already connected to the database");
        return;
    }

    try {
        console.log(process.env.MONGODB_URI);
        
        await mongoose.connect(process.env.MONGODB_URI || "",{
            dbName:"artlink",
            useNewUrlParser:true,
            useUnifiedTopology:true,
        } as ConnectOptions)
        isConnected=true;
        console.log("DB Successfully connected");
    } catch(err){
        console.log("Could not connect to the database because of the following error ",err);
    }
}