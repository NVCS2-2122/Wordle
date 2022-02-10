const express = require('express')
const app = new express()

app.use(express.static("/client/build"))
app.use(express.json())
//GET playerStats, solution, acceptableWords, guesses, userInfo 
//POST wonGame, guesses, numGuesses, userInfo

app.get("/login",(req,res) => {
    res.send("nope")
})

app.get("/game",(req, res) => {
    const answers = ["ELDER","REACT","KNOLL"]
    const randIndex = Math.floor(Math.random() * answers.length)
    const answer = answers[randIndex]
    res.json({answer})
})

app.post("/register",(req,res) => {
    const {username, password} = req.body
    console.log(username, password)
})

app.post("/result")

app.listen(8080,() => {
    console.info("server started")
})