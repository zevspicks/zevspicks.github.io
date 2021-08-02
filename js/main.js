
let recs = [
  {'text': 'Aquarius', 'quote': 'Showing our almost forgotten resilience', 'icon': 'fa fa-film'},
  {'text':  'L’havre', 'quote': 'A charming, deadpan delight', 'icon': 'fa fa-film'},
  {'text':  'The Illusionist', 'quote': 'A beautiful movie full of wonder, love, suspense and magic', 'icon': 'fa fa-film'},
  {'text':  'Playtime', 'quote': 'A magical mystery tour de force...a life-affirming comedy', 'icon': 'fa fa-film'},
  {'text':  'Barking Dogs Never Bite', 'quote': 'A wickedly smart and hilarious black comedy/social satire', 'icon': 'fa fa-film'},
  {'text':  'Hard Boiled', 'quote': 'Nirvana for seekers of action', 'icon': 'fa fa-film'},
  {'text':  'We are the best', 'quote': 'A film laced with charm, humour and superbly developed characters', 'icon': 'fa fa-film'},
  {'text':  'Taste of Tea', 'quote': 'an extremely endearing, poignant case study...packed with humor, drama, quests to better one\'s self', 'icon': 'fa fa-film'},
  {'text':  'Everlasting Moments', 'quote': 'A story of love and hope, told tenderly and without any great striving', 'icon': 'fa fa-film'},
  {'text':  'This is England', 'quote': 'An excellent, gritty and hard-hitting movie', 'icon': 'fa fa-film'},
  {'text':  'Hunger', 'quote': 'A harrowing glimpse of steely resolve', 'icon': 'fa fa-film'},
  {'text':  'A Dardenne Brothers Film. Just Pick One.', 'quote': 'known for their starkly realistic approach to working-class themes and characters', 'icon': 'fa fa-film'},
  {'text':  'Oslo August 31st', 'quote': 'Transpires mostly in quiet, engrossing dialogue', 'icon': 'fa fa-film'},
  {'text':  'Age of Innocence', 'quote': 'Swelling with exquisite period detail...alternately heartbreaking and satirical', 'icon': 'fa fa-film'},
  {'text':  'L\'enfant', 'quote': 'A gritty and disturbing look into the lives of the morally conflicted.', 'icon': 'fa fa-film'},
  {'text':  'Wind That Shakes the Barley', 'quote': 'A film about anger and bitterness', 'icon': 'fa fa-film'},
  {'text':  'Daddy Long Legs', 'quote': 'Raw, honest, and jarring', 'icon': 'fa fa-film'},
  {'text':  'Princess Mononoke', 'quote': 'A landmark in the world of animation', 'icon': 'fa fa-film'},
  {'text':  'Howl\'s Moving Castle', 'quote': 'A childlike sense of wonder with sophisticated emotions and motives', 'icon': 'fa fa-film'},
  {'text':  'Leviathan', 'quote': 'A forbidding and intimidating piece of work... a movie with real grandeur', 'icon': 'fa fa-film'},
  {'text':  'From up on Poppy Hill', 'quote': 'Gentle and nostalgic', 'icon': 'fa fa-film'},
  {'text':  'Sólo con tu pareja', 'quote': 'Conceives an expressionistic treatment of Mexico City as a personality', 'icon': 'fa fa-film'},
  {'text':  'The Crying Game', 'quote': 'This thoughtful, haunting mystery grips the viewer', 'icon': 'fa fa-film'},
  {'text':  '3 Colours: Blue', 'quote': 'Visually arresting, emotionally resonant', 'icon': 'fa fa-film'},
  {'text':  '3 Colours: White', 'quote': 'Direct, simple, bitter but also precise', 'icon': 'fa fa-film'},
  {'text':  '3 Colours: Red', 'quote': 'A complex, stirring, and beautifully realized portrait of interconnected lives', 'icon': 'fa fa-film'},
  {'text':  'Brigsby Bear', 'quote': 'An earnest – and endearingly original – approach', 'icon': 'fa fa-film'},
  {'text':  'Snowpiercer', 'quote': 'Violent, often absurd, but full of brilliant surprises', 'icon': 'fa fa-film'},
  {'text':  'Like Father Like Son', 'quote': 'Uses familiar-seeming elements to tell a thought-provoking story', 'icon': 'fa fa-film'},
  {'text':  'My Beautiful Laundrette', 'quote': 'It is with some relief that we realize it isn\'t "about" anything', 'icon': 'fa fa-film'},
  {'text':  'When Marnie Was There', 'quote': 'Blessed with visual and narrative beauty', 'icon': 'fa fa-film'},
  {'text':  'Close-up', 'quote': 'Radically drab cinema-verite', 'icon': 'fa fa-film'},
  {'text':  'Mommy', 'quote': 'A flashy, scary, gorgeous little piece of home', 'icon': 'fa fa-film'},
  {'text':  'Tom at the Farm', 'quote': 'Intriguing [film] coiled with ardor and fear', 'icon': 'fa fa-film'},
  {'text':  'Amour', 'quote': 'An honest, heartwrenching depiction of deep love and responsibility', 'icon': 'fa fa-film'},
  {'text':  'Mother (Bong Joon-ho)', 'quote': 'Straddles family drama, horror and comedy', 'icon': 'fa fa-film'},
  {'text':  'Welcome to Me', 'quote': 'By turns touching, amusing and genuinely disturbing', 'icon': 'fa fa-film'},
  {'text':  'Goodfellas', 'quote': 'Hard-hitting and stylish...a gangster classic', 'icon': 'fa fa-film'},
  {'text':  'Force Majeure', 'quote': 'Gleefully uncomfortable...a relationship drama that\'s hard to watch', 'icon': 'fa fa-film'},
  {'text':  'Speed Racer', 'quote': ' Brilliant visual cartoon that dares to ask that you take it seriously', 'icon': 'fa fa-film'},
  {'text':  'Porco Rosso', 'quote': 'Smooshes fantasy and history into a pastel-pretty yarn', 'icon': 'fa fa-film'},
  {'text':  'Only Yesterday', 'quote': 'Psychologically acute', 'icon': 'fa fa-film'},
  {'text':  'The first 3 die hard movies', 'quote': 'Yippee-ki-yay, motherfucker', 'icon': 'fa fa-film'},
  {'text':  'A Perfect Murder', 'quote': 'A skillfully plotted thriller', 'icon': 'fa fa-film'},
  {'text':  'Best of Youth', 'quote': 'A novel. The film is ambitious.', 'icon': 'fa fa-film'},
  {'text':  'Long Kiss Goodnight', 'quote': 'Smart, sharp-witted, and fueled by enjoyably over-the-top action', 'icon': 'fa fa-film'},
  {'text':  'Hackers', 'quote': 'Knockout images, unabashed eye candy and a riveting look at a complex world', 'icon': 'fa fa-film'},
  {'text':  'Party Girl (1995)', 'quote': 'Oh my God, thank you so much. Party Girl made me want to become a librarian.', 'icon': 'fa fa-film'},
  {'text':  'Sliding Doors', 'quote': 'It has it all, humour, anger, sadness, love, compassion and a lot of lying.', 'icon': 'fa fa-film'},
  {'text':  'Yi Yi', 'quote': 'Reflects the richness of our own lives', 'icon': 'fa fa-film'},
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
  console.log('t');
  $('body').css('background-color', choose(colors))

  $('#title').text(`Zev's pick for ${moment().format('dddd, MMMM Do')}`)

  const date = moment()
  let rec = recs[date.dayOfYear() % recs.length]
  if(date.month() === 7 && date.date() === 2) {
    rec = { text: 'Princess Bride', icon: 'fa fa-film', quote: 'Mawage. Mawage is wot bwings us together today. Mawage, that blessed awangement, that dweam wifin a dweam. And wuv, tru wuv, will fowow you foweva. So tweasure your wuv.' }
  }
  $('#rec-icon').addClass(rec.icon)
  $('#rec-text').text(rec.text)

  if (rec.quote) {
    $('#rec-quote').text('"' + rec.quote + '"')
  }
})
