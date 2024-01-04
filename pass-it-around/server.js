const express = require('express')
const app = express();

const PORT = 1000;


app.get('/', (req, res) => {
    res.send(
        `<h1>99 Bottles of milk on the wall </h1>
        <a href="/bottles/98">Take one down, pass it around</a>
        `
    )
})

app.get('/bottles/:number_of_bottles', (req, res) => {
    const numberOfBottles = parseInt(req.params.number_of_bottles, 10)

    if (numberOfBottles >= 0) {
        const newNumber = numberOfBottles - 1;
        res.send(` 
            <h1>${numberOfBottles} bottle${numberOfBottles !== 1 ? 's' : ''} of milk on the wall </h1>
            ${newNumber >= 0 ? `<a href="/bottles/${newNumber}">Take one down, pass it around</a>` : ''}
            <br>
            <a href='/'>Start Over</a> 
        `)
       
    } else {
        res.send(`
        <h1>No more bottles of milk on the wall</h1>
        <a href='/bottles/'>Start Over</a>
        `)
    }
})










app.listen(PORT, () => {
    console.log(`The port at ${PORT} is working!`)
})