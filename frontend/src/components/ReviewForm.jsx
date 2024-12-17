/* eslint-disable react/prop-types */
import { useState } from "react"

// eslint-disable-next-line react/prop-types
const ReviewForm = ({leave}) => {
  const [starCount, setStarCount] = useState(0)
  const [clickedCount, setClickedCount] = useState(0)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center">
      <button 
        className="absolute top-10 right-10 text-white hover:text-orange-400 focus:outline-none"
        onClick={leave}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="flex-row items-center text-xl">
        <p className="text-white">How many stars do you give?</p>
        {clickedCount > 0 ? (
          <div className="flex items-center gap-2 mt-2 h-[40px]">
            <StarRow number={clickedCount} />
            <p className="text-white text-xl">{`(${clickedCount})`}</p>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="ml-auto hover:cursor-pointer size-7 text-red-500"
              onClick={() => setClickedCount(0)}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

          </div>
        ) : (
          <div className="flex items-center hover:cursor-pointer mt-2 h-[40px]">
            <div
              onMouseEnter={() => setStarCount(1)}
              onMouseLeave={() => setStarCount(0)}
              onClick={() => setClickedCount(1)}
            >
              {starCount >= 0.5 ? ( <YellowStar />) : ( <GrayStar />)}
            </div>
            <div
              onMouseEnter={() => setStarCount(2)}
              onMouseLeave={() => setStarCount(0)}
              onClick={() => setClickedCount(2)}
            >
              {starCount >= 1.5 ? ( <YellowStar />) : ( <GrayStar />)}
            </div>
            <div
              onMouseEnter={() => setStarCount(3)}
              onMouseLeave={() => setStarCount(0)}
              onClick={() => setClickedCount(3)}
            >
              {starCount >= 2.5 ? ( <YellowStar />) : ( <GrayStar />)}
            </div>
            <div
              onMouseEnter={() => setStarCount(4)}
              onMouseLeave={() => setStarCount(0)}
              onClick={() => setClickedCount(4)}
            >
              {starCount >= 3.5 ? ( <YellowStar />) : ( <GrayStar />)}
            </div>
            <div
              onMouseEnter={() => setStarCount(5)}
              onMouseLeave={() => setStarCount(0)}
              onClick={() => setClickedCount(5)}
            >
              {starCount >= 4.5 ? ( <YellowStar />) : ( <GrayStar />)}
            </div>
          </div>
        )}

        <p className="text-white mt-2">Comment: </p>
        <textarea
          className="mt-2 p-2 w-full h-32 rounded border border-gray-300 resize-none"
          rows="5"
          placeholder="Write your comment here..."
        ></textarea>
      </div>

    </div>
  )
}

const StarRow = ({number}) => {
  return (
    <div className="flex items-center">
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
    <svg className="w-6 h-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
  )
}
  
const GrayStar = () => {
  return (
    <svg className="w-6 h-6 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
  )
}

export default ReviewForm