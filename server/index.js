import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/movies.js';

const app = express();

app.use('/posts', postRoutes);

//reads the “body” of an incoming JSON object.
// used express.json instead of the deprecated body-parser
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://JoeBot:zcGbNPZdPHerZdit@cluster0.12n34.mongodb.net/mySecondDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// connect our data base to the server
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
.catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify', false);
