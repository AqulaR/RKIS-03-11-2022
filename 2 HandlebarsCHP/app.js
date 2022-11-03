const express = require('express')
const app = express()
const hbs = require('hbs')

const host = '127.0.0.1'
const port = 3000

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.use('/contact', function (request, response) {
  response.render('contact', {
    title: 'Мои контакты',
    emailsVisible: true,
    emails: ['gavgav@mycorp.com', 'mioaw@mycorp.com'],
    phone: '+1234567890',
  })
})

app.use('/', function (request, response) {
  response.render('home.hbs')
})

app.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
)
