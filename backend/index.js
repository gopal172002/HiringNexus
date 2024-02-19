const express = require('express');
require('dotenv').config();
require('./src/db/mongoose');

var cors = require('cors')
const router = require("./src/routers");
const app = express();
const port = process.env.PORT || 5001;

const corsOptions = {
    origin: 'https://tathagat-a-farmer-ql77.vercel.app/',  // Replace with the origin of your frontend application
    credentials: true,                 // Enable credentials (e.g., cookies, authorization headers)
  };
  
  app.use(cors(corsOptions));
app.use(express.json());
app.use(router);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
