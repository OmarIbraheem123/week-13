const express = require('express');
const app = express();
const PORT =  2000;


//Greeeting
app.get('/greeting',  (req, res) => {
    res.send('Hello, stranger')
});

app.get('/greeting/:name', (req, res) => { 
    const name = req.params.name;
    res.send(`WOW! Hello there ${name} `)
})


//Tip Calculator
app.get('/tip/:total/:tipPrecentage', (req, res) => {
    const tipPrecentage = req.params.tipPrecentage;
    res.send(`${tipPrecentage}`)
})

// Magic 8 Ball
const magic8BallResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]



app.get('/magic/:question', (req, res) => {
  const question = req.params.question.replace(/%20/g, ' ')
 const randomResponse = magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)]
  const h1Response = `<h1>Your Question: ${question}</h1><h1>${randomResponse}</h1>`
  res.send(h1Response)
})






app.listen(PORT, () => {
    console.log(`The PORT at ${PORT} is working`)
})