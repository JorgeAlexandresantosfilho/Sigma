const express = require('express');
const app = express();
const cors = require('cors');
const file_routes = require('./routes/file_routes');

app.use(cors());
app.use(express.json());

//post file route
app.use('/file-post', file_routes);



module.exports = app;
