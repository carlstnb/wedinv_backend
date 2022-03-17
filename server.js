
const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT ||5000

const guestRoute = require('./routes/guest');
const RSVPRoute = require('./routes/confirmation');
const arrGuestRoute = require('./routes/arriving');
const invite = require('./routes/inv_list');

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("connected to mongodb");
})

app.use('/guest',guestRoute);
app.use('/RSVP',RSVPRoute);
app.use('/attendance',arrGuestRoute);
app.use('/invitation',invite);


app.listen(port,()=>{
    console.log("server is running!");
}) 