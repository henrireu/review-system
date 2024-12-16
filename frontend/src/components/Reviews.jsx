/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
//import axios from "axios";

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([])

  console.log(id);

  /*useEffect(() => {
    getReviews()
  }, [])

  const getReviews = async () => {
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
  }*/

  return (
    <div className="mt-10 border-t">
      Reviews section
    </div>
  )
}

{/*<div>
        {reviews.length > 0 && (
          reviews.map(review => (
            <div key={review.id}>
              <p>stars: {review.stars}</p>
              <p>comment: {review.comment}</p>
            </div>
          ))
        )}
    </div>*/}

export default Reviews