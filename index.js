const express = require('express');
const app = express();
const port =3000;
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.post('/data', (req, res, next) => {
    const response = {message: `${req.body.message}`, name: "Mohammad"};
    return res.json(response);
});

app.get('/greeting/:name', (req, res, next) => {
    const response = { message: "Hello", name:`${req.params.name}`};
    return res.json(response);
});

app.listen(port, console.log(`server is running on port ${port}`));