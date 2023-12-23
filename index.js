const express = require("express");

const app = express();

app.use(express.json());

app.get("/sum", (req, res) => {
    const num1 = req.query.a;
    const num2 = req.query.b;
    const result = parseInt(num1) + parseInt(num2);
    res.send(result.toString());
})

app.get("/interest", (req, res) => {
    const principle = req.query.principle;
    const rate = req.query.rate;
    const time = req.query.time;
    const interest = (principle*rate*time)/100;
    res.send({
        total: principle + interest,
        interest: interest,
    })
})

app.listen(3000);