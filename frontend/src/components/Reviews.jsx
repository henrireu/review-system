import { useState } from "react";
import axios from "axios";

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  axios.get('http://localhost:3001/api/reviews')
    .then(function (response) {
        setReviews(response.data)
    })
    .catch(function (error) {
        console.error(error)
    })
    .finally(function () {
        console.log('finally')
    })

  return (
    <div>
        {reviews.length > 0 && (
          reviews.map(review => (
            <div key={review.id}>
              <p>stars: {review.stars}</p>
              <p>comment: {review.comment}</p>
            </div>
          ))
        )}
    </div>
  )
}

export default Reviews