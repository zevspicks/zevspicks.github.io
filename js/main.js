let recs = [
  {'text': 'Aquarius', 'icon': 'fa fa-film'},
  {'text':  'L’havre', 'icon': 'fa fa-film'},
  {'text':  'The Illusionist', 'icon': 'fa fa-film'},
  {'text':  'Playtime', 'icon': 'fa fa-film'},
  {'text':  'Barking Dogs Never Bite', 'icon': 'fa fa-film'},
  {'text':  'Hard Boiled', 'icon': 'fa fa-film'},
  {'text':  'We are the best', 'icon': 'fa fa-film'},
  {'text':  'Taste of Tea', 'icon': 'fa fa-film'},
  {'text':  'Everlasting Moments', 'icon': 'fa fa-film'},
  {'text':  'This is England', 'icon': 'fa fa-film'},
  {'text':  'Hunger', 'icon': 'fa fa-film'},
  {'text':  'A Dardenne Brothers Film. Just Pick One.', 'icon': 'fa fa-film'},
  {'text':  'Oslo August 31st', 'icon': 'fa fa-film'},
  {'text':  'Age of Innocence', 'icon': 'fa fa-film'},
  {'text':  'L\'enfant', 'icon': 'fa fa-film'},
  {'text':  'Wind That Shakes the Barley', 'icon': 'fa fa-film'},
  {'text':  'Daddy Long Legs', 'icon': 'fa fa-film'},
  {'text':  'Princess Mononoke', 'icon': 'fa fa-film'},
  {'text':  'Howl\'s Moving Castle', 'icon': 'fa fa-film'},
  {'text':  'Leviathan', 'icon': 'fa fa-film'},
  {'text':  'From up on Poppy Hill', 'icon': 'fa fa-film'},
  {'text':  'Solo con tu Pareja', 'icon': 'fa fa-film'},
  {'text':  'The Crying Game', 'icon': 'fa fa-film'},
  {'text':  '3 Colors: Blue', 'icon': 'fa fa-film'},
  {'text':  '3 Colors: White', 'icon': 'fa fa-film'},
  {'text':  '3 Colors: Red', 'icon': 'fa fa-film'},
  {'text':  'Brigsby Bear', 'icon': 'fa fa-film'},
  {'text':  'Snowpiercer', 'icon': 'fa fa-film'},
  {'text':  'Like Father Like Son', 'icon': 'fa fa-film'},
  {'text':  'My Beautiful Laundrette', 'icon': 'fa fa-film'},
  {'text':  'When Marnie Was There', 'icon': 'fa fa-film'},
  {'text':  'Aquarius', 'icon': 'fa fa-film'},
  {'text':  'Close-up', 'icon': 'fa fa-film'},
  {'text':  'Mommy', 'icon': 'fa fa-film'},
  {'text':  'Tom at the Farm', 'icon': 'fa fa-film'},
  {'text':  'Amour', 'icon': 'fa fa-film'},
  {'text':  'Mother (Bong Joon-ho)', 'icon': 'fa fa-film'},
  {'text':  'Welcome to Me', 'icon': 'fa fa-film'},
  {'text':  'Goodfellas', 'icon': 'fa fa-film'},
  {'text':  'Force Majeur', 'icon': 'fa fa-film'},
  {'text':  'Speed Racer', 'icon': 'fa fa-film'},
  {'text':  'Porco Rosso', 'icon': 'fa fa-film'},
  {'text':  'Only Yesterday', 'icon': 'fa fa-film'},
  {'text':  'Go and Take a Fucking Walk Outside, You Couch Potato', 'icon': 'fa fa-rocket'}
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

  const rec = recs[moment().dayOfYear() % recs.length]
  console.log(rec)
  $('#rec-icon').addClass(rec.icon)
  $('#rec-text').text(rec.text)
})
