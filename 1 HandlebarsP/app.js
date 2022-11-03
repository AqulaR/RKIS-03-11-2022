const express = require('express')
const app = express()

const host = '127.0.0.1'
const port = 3000

app.set('view engine', 'hbs')
app.set('views', 'templates')

app.use('/contact', function (request, response) {
  response.render('contact.hbs', {
    title: 'Мои контакты',
    emailsVisible: true,
    emails: ['gavgav@mycorp.com', 'mioaw@mycorp.com'],
    phone: '+1234567890',
  })
})

app.use('/', function (request, response) {
  response.send('Главная страница')
})

app.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
)
