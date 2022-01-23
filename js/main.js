// BEGIN_RECS
let recs = [
{'text': 'Aquarius', 'quote': 'Showing our almost forgotten resilience', 'url': 'null', 'rating': null},
{'text': 'L’havre', 'quote': 'A charming, deadpan delight', 'url': 'null', 'rating': null},
{'text': 'The Illusionist', 'quote': 'A beautiful movie full of wonder, love, suspense and magic', 'url': 'null', 'rating': null},
{'text': 'Playtime', 'quote': 'A magical mystery tour de force...a life-affirming comedy', 'url': 'null', 'rating': null},
{'text': 'Barking Dogs Never Bite', 'quote': 'A wickedly smart and hilarious black comedy/social satire', 'url': 'null', 'rating': null},
{'text': 'Hard Boiled', 'quote': 'Nirvana for seekers of action', 'url': 'null', 'rating': null},
{'text': 'We are the best', 'quote': 'A film laced with charm, humour and superbly developed characters', 'url': 'null', 'rating': null},
{'text': 'Taste of Tea', 'quote': 'an extremely endearing, poignant case study...packed with humor, drama, quests to better one\'s self', 'url': 'null', 'rating': null},
{'text': 'Everlasting Moments', 'quote': 'A story of love and hope, told tenderly and without any great striving', 'url': 'null', 'rating': null},
{'text': 'This is England', 'quote': 'An excellent, gritty and hard-hitting movie', 'url': 'null', 'rating': null},
{'text': 'Hunger', 'quote': 'A harrowing glimpse of steely resolve', 'url': 'null', 'rating': null},
{'text': 'A Dardenne Brothers Film. Just Pick One.', 'quote': 'known for their starkly realistic approach to working-class themes and characters', 'url': 'null', 'rating': null},
{'text': 'Oslo August 31st', 'quote': 'Transpires mostly in quiet, engrossing dialogue', 'url': 'null', 'rating': null},
{'text': 'Age of Innocence', 'quote': 'Swelling with exquisite period detail...alternately heartbreaking and satirical', 'url': 'null', 'rating': null},
{'text': 'L\'enfant', 'quote': 'A gritty and disturbing look into the lives of the morally conflicted.', 'url': 'null', 'rating': null},
{'text': 'Wind That Shakes the Barley', 'quote': 'A film about anger and bitterness', 'url': 'null', 'rating': null},
{'text': 'Daddy Long Legs', 'quote': 'Raw, honest, and jarring', 'url': 'null', 'rating': null},
{'text': 'Princess Mononoke', 'quote': 'A landmark in the world of animation', 'url': 'null', 'rating': null},
{'text': 'Howl\'s Moving Castle', 'quote': 'A childlike sense of wonder with sophisticated emotions and motives', 'url': 'null', 'rating': null},
{'text': 'Leviathan', 'quote': 'A forbidding and intimidating piece of work... a movie with real grandeur', 'url': 'null', 'rating': null},
{'text': 'From up on Poppy Hill', 'quote': 'Gentle and nostalgic', 'url': 'null', 'rating': null},
{'text': 'Sólo con tu pareja', 'quote': 'Conceives an expressionistic treatment of Mexico City as a personality', 'url': 'null', 'rating': null},
{'text': 'Can\'t Get You Out of My Head (2021)', 'quote': 'One helpful way to think about Adam Curtis’ new 6-part series is via the “Lord Forgive Me But It’s Time To Go Back To Tha Old Me” image of Bugs Bunny resting his head on an old pistol, both in terms of Curtis’ diagnosis of human societies since the neoliberal turn (we are all, in the absence of a cohering belief in a positive vision of the future, in a constant retreat into the past) and also in his essential approach to cinema (he keeps making the same movie over and over again and in much the same way).', 'url': 'https://boxd.it/1ITp2Z', 'rating': 4},
{'text': 'Marty (1955)', 'quote': 'A tender portrait of an aging Italo-American momma’s boy that, if made today, would no doubt be decried as centering incel voices. \n\nFeels more like a long episode from the golden age of television, but in a good way.', 'url': 'https://boxd.it/1JfXpR', 'rating': 4},
{'text': 'Stromboli (1950)', 'quote': 'Guys at the DP camp be like “I know a spot” and then take you (Ingrid Bergman) to a volcanic island ghost town where your bourgeois Northern European values will perpetually collide with the preindustrial folkways (lovey ethnographic texture in the fishing scenes though) and menacing landscape of your new “home,” extinguishing any hope of being understood or leading a fulfilling life. Made with the participation of Operation Gladio fellow-traveler Father Félix Morlion.', 'url': 'https://boxd.it/1Jq8p9', 'rating': 4},
{'text': 'Deconstructing Harry (1997)', 'quote': 'Unrelenting bad vibes, jazzy, full of bile — but oddly life affirming. A true testament to the Woodman’s dark alchemical power to render the unpalatable not so. Pivotal scene filmed at a Noodle Kidoodle.\n\nYoung Giamatti and Paulie Gaultieri round out an ensemble cast few other movies of this era could ever hope to compete with.', 'url': 'https://boxd.it/1Nnd6V', 'rating': 4.5},
{'text': 'The Departed (2006)', 'quote': 'Not since <i>True Stories</i> has a film done so much for the microprocessor. Not since <i>Bringing Out The Dead</i> has Scorsese made another movie set in the present. Bush era cinema at its finest. As such, sumptuous T9 textures, bootcut jeans, fitted hats, timbs, etc. Alec Baldwin and Marky Mark truly gobble up the scenery like it’s made out of corned beef and cabbage. Somehow captures the feel of living in New England during this time better than anything else. Looking at the antennas on the flip phones evoked powerful sense memories of drinking like Bacardi and sprite in solo cups. Some moron actually made a kickstarter to digitally remove the rat and was rightly hit with a cease and desist.', 'url': 'https://boxd.it/1PnGiJ', 'rating': 4},
{'text': 'About Endlessness (2019)', 'quote': 'First one back in theaters since <i>Uncut Gems</i> pre-covid. Even more Swedish than that was Jewish. How I missed being part of an audience. Andersson is an old world craftsman of the first order, making extensive use of trompe l’oeil and other ingeniously devised practical effects which imbue this collection of grim little vignettes with an expanse and a sense of wonder. Like the Thorne Rooms at the Art Institute but big. Also, per usual, quite funny.\n\nBrief runtime perfect for having to wear a mask.', 'url': 'https://boxd.it/1RbRoR', 'rating': 4},
{'text': 'Wild at Heart (1990)', 'quote': 'Lynch at his horniest, fun cameos from the <i>Twin Peaks</i> cast (Laura and her mom, Audrey and her uncle) and also Jon Lurie; Isabella Rossellini, Willem Dafoe, Harry Dean Stanton, and so on. Diane Ladd as Lula’s on screen / off screen mom truly great. Cage and Dern are just so good in this. Would love to see this bad boy on the big screen some day soon. A love story for the ages.', 'url': 'https://boxd.it/1RbTJ3', 'rating': 4},
{'text': 'Mystic River (2003)', 'quote': 'Still good despite American Airlines full screen crop from 2.39:1', 'url': 'https://boxd.it/1VHZCx', 'rating': 4},
{'text': 'Thief (1981)', 'quote': 'At 33:11, the original Lincoln avenue location of Potbelly Sandwich Works makes an appearance. For this, and other reasons, hard to think of a Chicago film that’s better than this.\n\nContains the most compelling articulation of the labor theory of value that I am aware of.', 'url': 'https://boxd.it/2ckpTJ', 'rating': 4},
{'text': 'Hester Street (1975)', 'quote': 'lower east side yiddish fuck boi and wannabe yankee yankel\'s style is severely cramped when his greenhorn frum wife and young son get off the boat from russia', 'url': 'https://boxd.it/2cqWCX', 'rating': 4},
{'text': 'Cléo from 5 to 7 (1962)', 'quote': 'Spoiled-but-never-loved Cleo looking like Patti Harrison on the loose in early 60s Paris. Quite nice :)', 'url': 'https://boxd.it/2d0Anj', 'rating': 4.5},
{'text': 'Delicatessen (1991)', 'quote': 'too true! what a debut! caro and jeunet really should get the band back together!', 'url': 'https://boxd.it/2e4Ozv', 'rating': 4},
{'text': 'The Jerk (1979)', 'quote': 'ok so what if in the remake it\'s Jonah Hill raised by a large immigrant Chinese family, upstairs from the popular Chinatown restaurant where they all work? After he\'s mistaken during the Christmas Day lunch rush by a Jewish customer for someone she went to summer camp with, his Chinese parents (in Mandarin) explain that he\'s not their biological son, and so forth...', 'url': 'https://boxd.it/2fch03', 'rating': 4},
{'text': 'The Crying Game', 'quote': 'This thoughtful, haunting mystery grips the viewer', 'url': 'null', 'rating': 3.5},
{'text': '3 Colours: Blue', 'quote': 'Visually arresting, emotionally resonant', 'url': 'null', 'rating': null},
{'text': '3 Colours: White', 'quote': 'Direct, simple, bitter but also precise', 'url': 'null', 'rating': null},
{'text': '3 Colours: Red', 'quote': 'A complex, stirring, and beautifully realized portrait of interconnected lives', 'url': 'null', 'rating': null},
{'text': 'Brigsby Bear', 'quote': 'An earnest – and endearingly original – approach', 'url': 'null', 'rating': null},
{'text': 'Snowpiercer', 'quote': 'Violent, often absurd, but full of brilliant surprises', 'url': 'null', 'rating': null},
{'text': 'Like Father Like Son', 'quote': 'Uses familiar-seeming elements to tell a thought-provoking story', 'url': 'null', 'rating': null},
{'text': 'My Beautiful Laundrette', 'quote': 'It is with some relief that we realize it isn\'t "about" anything', 'url': 'null', 'rating': null},
{'text': 'When Marnie Was There', 'quote': 'Blessed with visual and narrative beauty', 'url': 'null', 'rating': null},
{'text': 'Close-up', 'quote': 'Radically drab cinema-verite', 'url': 'null', 'rating': null},
{'text': 'Mommy', 'quote': 'A flashy, scary, gorgeous little piece of home', 'url': 'null', 'rating': null},
{'text': 'Tom at the Farm', 'quote': 'Intriguing [film] coiled with ardor and fear', 'url': 'null', 'rating': null},
{'text': 'Amour', 'quote': 'An honest, heartwrenching depiction of deep love and responsibility', 'url': 'null', 'rating': null},
{'text': 'Mother (Bong Joon-ho)', 'quote': 'Straddles family drama, horror and comedy', 'url': 'null', 'rating': null},
{'text': 'Welcome to Me', 'quote': 'By turns touching, amusing and genuinely disturbing', 'url': 'null', 'rating': null},
{'text': 'Goodfellas', 'quote': 'Hard-hitting and stylish...a gangster classic', 'url': 'null', 'rating': null},
{'text': 'Force Majeure', 'quote': 'Gleefully uncomfortable...a relationship drama that\'s hard to watch', 'url': 'null', 'rating': null},
{'text': 'Speed Racer', 'quote': ' Brilliant visual cartoon that dares to ask that you take it seriously', 'url': 'null', 'rating': null},
{'text': 'Porco Rosso', 'quote': 'Smooshes fantasy and history into a pastel-pretty yarn', 'url': 'null', 'rating': null},
{'text': 'Only Yesterday', 'quote': 'Psychologically acute', 'url': 'null', 'rating': null},
{'text': 'The first 3 die hard movies', 'quote': 'Yippee-ki-yay, motherfucker', 'url': 'null', 'rating': null},
{'text': 'A Perfect Murder', 'quote': 'A skillfully plotted thriller', 'url': 'null', 'rating': null},
{'text': 'Best of Youth', 'quote': 'A novel. The film is ambitious.', 'url': 'null', 'rating': null},
{'text': 'Long Kiss Goodnight', 'quote': 'Smart, sharp-witted, and fueled by enjoyably over-the-top action', 'url': 'null', 'rating': null},
{'text': 'Hackers', 'quote': 'Knockout images, unabashed eye candy and a riveting look at a complex world', 'url': 'null', 'rating': null},
{'text': 'Party Girl (1995)', 'quote': 'Oh my God, thank you so much. Party Girl made me want to become a librarian.', 'url': 'null', 'rating': null},
{'text': 'Sliding Doors', 'quote': 'It has it all, humour, anger, sadness, love, compassion and a lot of lying.', 'url': 'null', 'rating': null},
{'text': 'Yi Yi', 'quote': 'Reflects the richness of our own lives', 'url': 'null', 'rating': null},
]
// END_RECS

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

$('body').css('background-color', choose(colors))

$('#title').text(`Zev's pick for ${moment().format('dddd, MMMM Do')}`)

const date = moment()
let rec = recs[date.dayOfYear() % recs.length]
if(date.month() === 7 && date.date() === 2) {
  rec = { text: 'The Princess Bride', quote: 'Mawage. Mawage is wot bwings us together today. Mawage, that blessed awangement, that dweam wifin a dweam. And wuv, tru wuv, will fowow you foweva. So tweasure your wuv.' }
}
$('#rec-text').text(rec.text)

if (rec.url) {
  $('#rec-link').attr('href', rec.url)
}

if (rec.rating) {
  let i = 1
  while (i < rec.rating) {
    $('#rec-rating').children().eq(i).addClass('fa fa-star')
    i++
  }

  if (i - rec.rating > 0.001) {
    $('#rec-rating').children().eq(i).addClass('fa fa-star-half-o')
  }
}

if (rec.quote) {
  $('#rec-quote').text('"' + rec.quote + '"')
}
