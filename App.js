const express = require('express');

const app = express();

require('dotenv').config();
const cors = require('cors');
const router = require('./Routes/routes');

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/', router);