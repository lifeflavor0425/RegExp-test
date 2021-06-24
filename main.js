const str = `
010-2953-6488
theakfmzh@naver.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
the fjfjfjasd asdjfksadjf djfkjdf the dog
aabbdcccaavdb
`

// const regexp = RegExp('the','gi')
console.log(
  str.match(/\b\w{2,3}\b/g)
)

