const countAverageRating = (reviews) => {
  const numbers = reviews.map(r => r.stars)
  const sum = numbers.reduce((acc, n) => acc + n, 0)
  const result = sum / reviews.length
  return Number(result.toFixed(1))
}

export { countAverageRating}