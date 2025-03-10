// require('dotenv').config({path: './env'})

import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({           //This is recent concept thus its not in documentation and you have to add experimentation feature on script in package.json
    path: './env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port : ${process.env.PORT}`);
    })
})
.catch((error)=>{console.error("MONGODB connection falied !!!", error);

})










// const app = express();

// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("Error while connecting Mongo", error)
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening at ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.error("ERROR", error)
//         throw error
//     }
// })()