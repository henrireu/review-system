import axios from "axios";

const getAllReviews = () => {
  const request = axios.get('http://localhost:3001/api/reviews')

  return request.then(request => request.data)
}

const getReviewsById = (id) => {
  return getAllReviews().then(reviews => {
    return reviews.filter(review => review.serviceId === id)
  })
}

const createReview = (newReview) => {
  const request = axios.post('http://localhost:3001/api/reviews', newReview)
  return request.then(response => response.data)
}

export { getAllReviews, getReviewsById, createReview }