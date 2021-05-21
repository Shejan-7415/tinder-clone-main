import express from 'express';
import mongoose from 'mongoose';
import Card from './dbCards.js';
import Cors from 'cors';

//App Config

const app = express();
const port = process.env.PORT || 3000;
const dbConnectionUrl = "mongodb+srv://devdan:Jz5FO4vhb5wtGcxO@cluster0.rnoxu.mongodb.net/tinderdb?retryWrites=true&w=majority";

//Middlewares

app.use(express.json());
app.use(Cors());


//DB Config
mongoose.connect(dbConnectionUrl,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});


//End Points

app.get('/', (req, res) => {
    res.status(200).send("Hello World..!");
});

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Card.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err);
        } else{
            res.status(201).send(data);
        }
    });
});

app.get('/tinder/cards', (req, res) => {
    Card.find((err, data) => {
        if(err){
            res.status(500).send(err);
        } else{
            res.status(200).send(data);
        }
    });
});

app.listen(port, () => {
    console.log(`Listining On Port ${port}`);
});