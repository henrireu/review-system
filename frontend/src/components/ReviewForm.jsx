// eslint-disable-next-line react/prop-types
const ReviewForm = ({leave}) => {
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
    </div>
  )
}

export default ReviewForm