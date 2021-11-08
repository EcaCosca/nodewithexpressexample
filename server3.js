const express = require('express')
const app = express()

app.use(logger)

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/users', auth, (req, res) => {
    console.log('Users page');
    res.send('Users Page')
})

function logger(req, res, next) {
    console.log('log')
    next()
}
function auth(req, res, next) {
    console.log('authenticated')
    next()
}
// function auth(req, res, next) {
//     if (req.query.admin === 'true') {
//         next()
//         console.log('authenticated')
//     } else {
//         console.log('Not authenticated')
//     }
// }

// app.listen(3000)