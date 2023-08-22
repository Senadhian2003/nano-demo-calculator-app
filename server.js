const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({extended: true})); 
const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

// app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    
 
    return res.send('Hello World');
});

baseRouter.post('/add', (req, res) => {

    const num = req.body;
    const num1 = num.first;
    const num2 = num.second;
    console.log(num)

    res.send(json({ "result": num1+num2 }));
}); 


baseRouter.post('/subtract', (req, res) => {

    const num = req.body;
    const num1 = num.first;
    const num2 = num.second;
    res.send(json({ "result": num1-num2 }));
});
 
app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});