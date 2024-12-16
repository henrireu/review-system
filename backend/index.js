const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

let reviews = [
  {
    reviewId: "1",
    serviceId: "1",
    userName: "test-user72",
    stars: 5,
    comment: "Paras ikinä"
  }, 

  {
    reviewId: "2",
    serviceId: "1",
    userName: "test-user72",
    stars: 1,
    comment: "Tosi huono"
  },

  {
    reviewId: "3",
    serviceId: "1",
    userName: "test-user88",
    stars: 5,
    comment: "Paras ikinä koskaan todellakin"
  }, 
]

let services = [
  {
    id: "1",
    
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/services', (request, response) => {

})

app.get('/api/reviews', (request, response) => {
  response.json(reviews)
})

app.get('/api/reviews/:id', (request, response) => {
  const id = request.params.id
  const review = reviews.find(review => review.id === id)
  response.json(review)
})

app.delete('/api/reviews/:id', (request, response) => {
  const id = request.params.id
  reviews = reviews.filter(review => review.id !== id)

  response.status(204).end()
})

const generateId = () => {
  const maxId = reviews.length > 0
    ? Math.max(...reviews.map(r => Number(r.id)))
    : 0
  return String(maxId + 1)
}

app.post('/api/reviews', (request, response) => {
  const body = request.body

  if (!body.stars) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const review = {
    stars : body.stars,
    comment : body.comment || "",
    id: generateId()
  }

  reviews = reviews.concat(review)
  response.json(review)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})