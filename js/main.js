const movies = [
  'Aquarius',
  'L’havre',
  'The Illusionist',
  'Playtime',
  'Barking Dogs Never Bite',
  'Hard Boiled',
  'We are the best',
  'Taste of Tea',
  'Everlasting Moments',
  'This is England',
  'Hunger',
  'A Dardenne Brothers Film. Just Pick One.',
  'Oslo August 31st',
  'Age of Innocence',
  'L\'enfant',
  'Wind That Shakes the Barley',
  'Daddy Long Legs',
  'Princess Monoke',
  'Howl\'s Moving Castle',
  'Leviathan',
  'From up on Poppy Hill',
  'Solo con tu Pareja',
  'The Crying Game',
  '3 Colors: Blue',
  '3 Colors: White',
  '3 Colors: Red',
  'Brigsby Bear',
  'Snowpiercer',
  'Like Father Like Son',
  'My Beautiful Laundrette',
  'When Marnie Was There',
  'Aquarius',
  'Close-up',
  'Mommy',
  'Tom at the Farm',
  'Amour',
  'Mother (Bong Joon-ho)',
  'Welcome to Me',
  'Goodfellas',
  'Force Majeur',
  'Speed Racer',
  'Porco Rosso',
  'Only Yesterday',
  'Go and Take a Fucking Walk Outside, You Couch Potato'
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
