import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/soccerRoutes.js';

import cors from 'cors';

const app = express();
const PORT = 4000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

routes(app);

app.get('/', (req, res) => 
    res.send(`Our Soccer application is running ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your soccer server is running on port ${PORT}`)
);