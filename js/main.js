const movies = [
  'Aquarius',
  'L’havre',
  'The Illusionist',
  'Playtime',
  'Barking Dogs Never Bite',
  'Hard Boiled',
  'We are the best',
  'Taste of Tea',
  'Everlasting Moments'
]

const colors = [
  '#AD343E',
  '#474747',
  '#3A2E39',
  '#011638',
  '#353A47',
  '#E8C547',
  '#A08D46',
  '#2B193D',
  '#FE5D26',
  '#688B58',
  '#4B4A67',
]

function choose(arr) {
  return arr[Math.floor(Math.random()*arr.length)]
}

$(document).ready(function() {
  $('body').css('background-color', choose(colors))

  $('#title').text(`Zev's pick for ${moment().format('dddd, MMMM Do')}`)

  const movie = movies[moment().dayOfYear() % movies.length]
  $('#movie').text(movie)
})
