const express = require('express');
const mongoose = require('mongoose'); mongoose.set('useCreateIndex', true);
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://vitor:J@ckass666@cluster0-d7wy1.mongodb.net/drexy?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(5689);


