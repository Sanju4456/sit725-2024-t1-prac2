const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.render('index.html'); // Assuming you have a template engine set up for rendering HTML files
});

app.get('/addtwonumbers', function (req, res) {
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    let result = parseInt(num1) + parseInt(num2);
    let response = { data: result, message: 'success', statuscode: 200 };
    res.json(response);
});

app.listen(port, () => {
    console.log('Express server started');
});
