const express = require('express')
const app = express()

app.use(logger)

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/users', (req, res) => {
    console.log('Users page');
    res.send('Users Page')
})

function logger(req, res, next) {
    console.log('log')
    next()
}

// app.listen(3000)