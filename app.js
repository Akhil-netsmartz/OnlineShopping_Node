var express = require('express')
var route = require('./Routes/routing')

var bodyparser = require('body-parser')

var cors = require('cors')

var app = express();
app.use(cors());
app.use(bodyparser.json())
app.use('/', route);

// app.use(bodyparser.urlencoded({
//   extended: true
// }));
const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Server is running on port 3000'))