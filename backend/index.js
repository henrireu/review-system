const express = require('express')
const cors = require('cors')
const app = express()
const uuid = require('uuid')

app.use(cors())
app.use(express.json())

let reviews = [
  {
    reviewId: "1",
    serviceId: "1",
    userName: "test-user72",
    stars: 5,
    comment: "Paras ikinä",
    date: "13.11.2024"
  }, 

  {
    reviewId: "2",
    serviceId: "1",
    userName: "test-user72",
    stars: 1,
    comment: "Tosi huono",
    date: "13.11.2024"
  },

  {
    reviewId: "3",
    serviceId: "1",
    userName: "test-user88",
    stars: 5,
    comment: "Paras ikinä koskaan todellakin",
    date: "13.11.2024"
  }, 
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/services', (request, response) => {

})

app.get('/api/reviews', (request, response) => {
  response.json(reviews)
})

app.get('/api/reviews/:reviewId', (request, response) => {
  const id = request.params.id
  const review = reviews.find(review => review.id === id)
  response.json(review)
})

app.delete('/api/reviews/:reviewId', (request, response) => {
  const id = request.params.id
  reviews = reviews.filter(review => review.id !== id)

  response.status(204).end()
})

app.post('/api/reviews', (request, response) => {
  const body = request.body

  if (!body.stars || !body.serviceId || !body.userName || !body.date) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const review = {
    reviewId: uuid.v4(),
    serviceId: body.serviceId,
    userName: body.userName,
    stars : body.stars,
    comment : body.comment || "",
    date: body.date
  }

  reviews = reviews.concat(review)
  response.json(review)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})