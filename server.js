const express = require('express')
const app = new express()

//GET playerStats, solution, acceptableWords, guesses, userInfo 
//POST wonGame, guesses, numGuesses, userInfo

app.get("/login",(req,res) => {
    res.send("nope")
})

app.get("/game")

app.post("/register")

app.post("/result")

app.listen(8080,() => {
    console.info("server started")
})