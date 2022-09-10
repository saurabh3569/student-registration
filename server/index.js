import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import StudentRoutes from './routes/student.js'

const app = express()



app.use(bodyParser.json({limit:"20mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb",extended:true}));


app.use(cors());
app.use('/students',StudentRoutes)

const CONNECTION_URL = "mongodb+srv://username:password@cluster0.oylio.mongodb.net/StudentCard?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL)
.then(()=> app.listen(PORT,()=>{
     console.log(`DB connected ..... port:${PORT}`);
}))
.catch((err)=> console.log(err.message))


// mongoose.set('useFindAndModify',false);

