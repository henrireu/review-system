/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { getReviewsById } from "../services/reviewsService"
import { countAverageRating } from "../helpers/reviewHelper"

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getReviewsById(id)
        setReviews(response)
      } catch (error) {
        console.error("Error fetching reviews:", error)
      }
    };

    fetchData()
  }, [id])

  return (
    <div className="border-t border-b mt-10 py-5">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-5">
        <h2 className="text-2xl">Reviews {'('}{reviews.length}{')'}</h2>
        {reviews.length > 0 && (
          <RatingStars reviews={reviews}/>
        )}

      </div>

      <div className="mt-5">
        {reviews.map(review => (
          <SingleReview key={review.reviewId} review={review}/>
        ))}
      </div>
  
    </div>
  )
}

const SingleReview = ({review}) => {
  return (
    <div className="flex gap-5">
      <div className="space-y-2">
        <StarRow number={review.stars}/>
        <p className="ms-1">{review.userName}</p>
      </div>
      <p>{review.comment}</p>
    </div>
  )
}

const RatingStars = ({reviews}) => {
  const average = countAverageRating(reviews)
  return (
    <StarRow number={average}/>
  )
}

const StarRow = ({number}) => {
  return (
    <div className="flex items-center mt-1">
      {number >= 0.5 ? ( <YellowStar />) : ( <GrayStar />)}
      {number >= 1.5 ? ( <YellowStar />) : ( <GrayStar />)}
      {number >= 2.5 ? ( <YellowStar />) : ( <GrayStar />)}
      {number >= 3.5 ? ( <YellowStar />) : ( <GrayStar />)}
      {number >= 4.5 ? ( <YellowStar />) : ( <GrayStar />)}
    </div>
  )
}

const YellowStar = () => {
  return (
    <svg className="w-5 h-5 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
  )
}

const GrayStar = () => {
  return (
    <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
  )
}

export default Reviews