import os.path
from google_client import get_google_client, SPREADSHEET_ID
from yaspin import yaspin
import click
import csv
from googleapiclient.errors import HttpError
from pprint import pprint
from google_client import get_google_client, SPREADSHEET_ID

DATA = [{'name': 'Aquarius',
  'quote': 'Showing our almost forgotten resilience',
  'rating': '',
  'url': ''},
 {'name': 'L’havre',
  'quote': 'A charming, deadpan delight',
  'rating': '',
  'url': ''},
 {'name': 'The Illusionist',
  'quote': 'A beautiful movie full of wonder, love, suspense and magic',
  'rating': '',
  'url': ''},
 {'name': 'Playtime',
  'quote': 'A magical mystery tour de force...a life-affirming comedy',
  'rating': '',
  'url': ''},
 {'name': 'Barking Dogs Never Bite',
  'quote': 'A wickedly smart and hilarious black comedy/social satire',
  'rating': '',
  'url': ''},
 {'name': 'Hard Boiled',
  'quote': 'Nirvana for seekers of action',
  'rating': '',
  'url': ''},
 {'name': 'We are the best',
  'quote': 'A film laced with charm, humour and superbly developed characters',
  'rating': '',
  'url': ''},
 {'name': 'Taste of Tea',
  'quote': 'an extremely endearing, poignant case study...packed with humor, '
           "drama, quests to better one's self",
  'rating': '',
  'url': ''},
 {'name': 'Everlasting Moments',
  'quote': 'A story of love and hope, told tenderly and without any great '
           'striving',
  'rating': '',
  'url': ''},
 {'name': 'Hunger',
  'quote': 'A harrowing glimpse of steely resolve',
  'rating': '',
  'url': ''},
 {'name': 'A Dardenne Brothers Film. Just Pick One.',
  'quote': 'known for their starkly realistic approach to working-class themes '
           'and characters',
  'rating': '',
  'url': ''},
 {'name': 'Oslo August 31st',
  'quote': 'Transpires mostly in quiet, engrossing dialogue',
  'rating': '',
  'url': ''},
 {'name': 'Age of Innocence',
  'quote': 'Swelling with exquisite period detail...alternately heartbreaking '
           'and satirical',
  'rating': '',
  'url': ''},
 {'name': "L'enfant",
  'quote': 'A gritty and disturbing look into the lives of the morally '
           'conflicted.',
  'rating': '',
  'url': ''},
 {'name': 'Wind That Shakes the Barley',
  'quote': 'A film about anger and bitterness',
  'rating': '',
  'url': ''},
 {'name': 'Daddy Long Legs',
  'quote': 'Raw, honest, and jarring',
  'rating': '',
  'url': ''},
 {'name': 'Princess Mononoke',
  'quote': 'A landmark in the world of animation',
  'rating': '',
  'url': ''},
 {'name': "Howl's Moving Castle",
  'quote': 'A childlike sense of wonder with sophisticated emotions and '
           'motives',
  'rating': '',
  'url': ''},
 {'name': 'Leviathan',
  'quote': 'A forbidding and intimidating piece of work... a movie with real '
           'grandeur',
  'rating': '',
  'url': ''},
 {'name': 'From up on Poppy Hill',
  'quote': 'Gentle and nostalgic',
  'rating': '',
  'url': ''},
 {'name': 'Sólo con tu pareja',
  'quote': 'Conceives an expressionistic treatment of Mexico City as a '
           'personality',
  'rating': '',
  'url': ''},
 {'name': 'The Crying Game',
  'quote': 'This thoughtful, haunting mystery grips the viewer',
  'rating': '',
  'url': ''},
 {'name': '3 Colours: Blue',
  'quote': 'Visually arresting, emotionally resonant',
  'rating': '',
  'url': ''},
 {'name': '3 Colours: White',
  'quote': 'Direct, simple, bitter but also precise',
  'rating': '',
  'url': ''},
 {'name': '3 Colours: Red',
  'quote': 'A complex, stirring, and beautifully realized portrait of '
           'interconnected lives',
  'rating': '',
  'url': ''},
 {'name': 'Brigsby Bear',
  'quote': 'An earnest – and endearingly original – approach',
  'rating': '',
  'url': ''},
 {'name': 'Snowpiercer',
  'quote': 'Violent, often absurd, but full of brilliant surprises',
  'rating': '',
  'url': ''},
 {'name': 'Like Father Like Son',
  'quote': 'Uses familiar-seeming elements to tell a thought-provoking story',
  'rating': '',
  'url': ''},
 {'name': 'My Beautiful Laundrette',
  'quote': 'It is with some relief that we realize it isn\'t "about" anything',
  'rating': '',
  'url': ''},
 {'name': 'When Marnie Was There',
  'quote': 'Blessed with visual and narrative beauty',
  'rating': '',
  'url': ''},
 {'name': 'Close-up',
  'quote': 'Radically drab cinema-verite',
  'rating': '',
  'url': ''},
 {'name': 'Mommy',
  'quote': 'A flashy, scary, gorgeous little piece of home',
  'rating': '',
  'url': ''},
 {'name': 'Tom at the Farm',
  'quote': 'Intriguing [film] coiled with ardor and fear',
  'rating': '',
  'url': ''},
 {'name': 'Amour',
  'quote': 'An honest, heartwrenching depiction of deep love and '
           'responsibility',
  'rating': '',
  'url': ''},
 {'name': 'Mother (Bong Joon-ho)',
  'quote': 'Straddles family drama, horror and comedy',
  'rating': '',
  'url': ''},
 {'name': 'Welcome to Me',
  'quote': 'By turns touching, amusing and genuinely disturbing',
  'rating': '',
  'url': ''},
 {'name': 'Goodfellas',
  'quote': 'Hard-hitting and stylish...a gangster classic',
  'rating': '',
  'url': ''},
 {'name': 'Force Majeure',
  'quote': "Gleefully uncomfortable...a relationship drama that's hard to "
           'watch',
  'rating': '',
  'url': ''},
 {'name': 'Speed Racer',
  'quote': ' Brilliant visual cartoon that dares to ask that you take it '
           'seriously',
  'rating': '',
  'url': ''},
 {'name': 'Porco Rosso',
  'quote': 'Smooshes fantasy and history into a pastel-pretty yarn',
  'rating': '',
  'url': ''},
 {'name': 'Only Yesterday',
  'quote': 'Psychologically acute',
  'rating': '',
  'url': ''},
 {'name': 'The first 3 die hard movies',
  'quote': 'Yippee-ki-yay, motherfucker',
  'rating': '',
  'url': ''},
 {'name': 'A Perfect Murder',
  'quote': 'A skillfully plotted thriller',
  'rating': '',
  'url': ''},
 {'name': 'Best of Youth',
  'quote': 'A novel. The film is ambitious.',
  'rating': '',
  'url': ''},
 {'name': 'Long Kiss Goodnight',
  'quote': 'Smart, sharp-witted, and fueled by enjoyably over-the-top action',
  'rating': '',
  'url': ''},
 {'name': 'Hackers',
  'quote': 'Knockout images, unabashed eye candy and a riveting look at a '
           'complex world',
  'rating': '',
  'url': ''},
 {'name': 'Party Girl (1995)',
  'quote': 'Oh my God, thank you so much. Party Girl made me want to become a '
           'librarian.',
  'rating': '',
  'url': ''},
 {'name': 'Sliding Doors',
  'quote': 'It has it all, humour, anger, sadness, love, compassion and a lot '
           'of lying.',
  'rating': '',
  'url': ''},
 {'name': 'Yi Yi',
  'quote': 'Reflects the richness of our own lives',
  'rating': '',
  'url': ''},
 {'name': "Can't Get You Out of My Head (2021)",
  'quote': 'One helpful way to think about Adam Curtis’ new 6-part series is '
           'via the “Lord Forgive Me But It’s Time To Go Back To Tha Old Me” '
           'image of Bugs Bunny resting his head on an old pistol, both in '
           'terms of Curtis’ diagnosis of human societies since the neoliberal '
           'turn (we are all, in the absence of a cohering belief in a '
           'positive vision of the future, in a constant retreat into the '
           'past) and also in his essential approach to cinema (he keeps '
           'making the same movie over and over again and in much the same '
           'way).',
  'rating': '4',
  'url': 'https://boxd.it/1ITp2Z'},
 {'name': 'Marty (1955)',
  'quote': 'A tender portrait of an aging Italo-American momma’s boy that, if '
           'made today, would no doubt be decried as centering incel '
           'voices.\xa0\n'
           '\n'
           'Feels more like a long episode from the golden age of television, '
           'but in a good way.',
  'rating': '4',
  'url': 'https://boxd.it/1JfXpR'},
 {'name': 'Stromboli (1950)',
  'quote': 'Guys at the DP camp be like “I know a spot” and then take you '
           '(Ingrid Bergman) to a volcanic island ghost town where your '
           'bourgeois Northern European values will perpetually collide with '
           'the preindustrial folkways (lovey ethnographic texture in the '
           'fishing scenes though) and menacing landscape of your new “home,” '
           'extinguishing any hope of being understood or leading a fulfilling '
           'life. Made with the participation of Operation Gladio '
           'fellow-traveler Father Félix Morlion.',
  'rating': '4',
  'url': 'https://boxd.it/1Jq8p9'},
 {'name': 'Deconstructing Harry (1997)',
  'quote': 'Unrelenting bad vibes, jazzy, full of bile — but oddly life '
           'affirming. A true testament to the Woodman’s dark alchemical power '
           'to render the unpalatable not so. Pivotal scene filmed at a Noodle '
           'Kidoodle.\n'
           '\n'
           'Young Giamatti and Paulie Gaultieri round out an ensemble cast few '
           'other movies of this era could ever hope to compete with.',
  'rating': '4.5',
  'url': 'https://boxd.it/1Nnd6V'},
 {'name': 'The Departed (2006)',
  'quote': 'Not since <i>True Stories</i> has a film done so much for the '
           'microprocessor. Not since <i>Bringing Out The Dead</i> has '
           'Scorsese made another movie set in the present. Bush era cinema at '
           'its finest. As such, sumptuous T9 textures, bootcut jeans, fitted '
           'hats, timbs, etc. Alec Baldwin and Marky Mark truly gobble up the '
           'scenery like it’s made out of corned beef and cabbage. Somehow '
           'captures the feel of living in New England during this time better '
           'than anything else. Looking at the antennas on the flip phones '
           'evoked powerful sense memories of drinking like Bacardi and sprite '
           'in solo cups. Some moron actually made a kickstarter to digitally '
           'remove the rat and was rightly hit with a cease and desist.',
  'rating': '4',
  'url': 'https://boxd.it/1PnGiJ'},
 {'name': 'About Endlessness (2019)',
  'quote': 'First one back in theaters since <i>Uncut Gems</i> pre-covid. Even '
           'more Swedish than that was Jewish. How I missed being part of an '
           'audience. Andersson is an old world craftsman of the first order, '
           'making extensive use of trompe l’oeil and other ingeniously '
           'devised practical effects which imbue this collection of grim '
           'little vignettes with an expanse and a sense of wonder. Like the '
           'Thorne Rooms at the Art Institute but big. Also, per usual, quite '
           'funny.\n'
           '\n'
           'Brief runtime perfect for having to wear a mask.',
  'rating': '4',
  'url': 'https://boxd.it/1RbRoR'},
 {'name': 'Wild at Heart (1990)',
  'quote': 'Lynch at his horniest,\xa0fun cameos from the <i>Twin Peaks</i> '
           'cast (Laura and her mom, Audrey and her uncle) and also Jon Lurie; '
           'Isabella Rossellini, Willem Dafoe, Harry Dean Stanton, and so on. '
           'Diane Ladd as Lula’s on screen / off screen mom truly great. Cage '
           'and Dern are just so good in this.\xa0Would love to see this bad '
           'boy on the big screen some day soon. A love story for the ages.',
  'rating': '4',
  'url': 'https://boxd.it/1RbTJ3'},
 {'name': 'Mystic River (2003)',
  'quote': 'Still good despite American Airlines full screen crop from 2.39:1',
  'rating': '4',
  'url': 'https://boxd.it/1VHZCx'},
 {'name': 'Thief (1981)',
  'quote': 'At 33:11, the original Lincoln avenue location of Potbelly '
           'Sandwich Works makes an appearance. For this, and other reasons, '
           'hard to think of a Chicago film that’s better than this.\n'
           '\n'
           'Contains the most compelling articulation of the labor theory of '
           'value that I am aware of.',
  'rating': '4',
  'url': 'https://boxd.it/2ckpTJ'},
 {'name': 'Hester Street (1975)',
  'quote': "lower east side yiddish fuck boi and wannabe yankee yankel's style "
           'is severely cramped when his greenhorn frum wife and young son get '
           'off the boat from russia',
  'rating': '4',
  'url': 'https://boxd.it/2cqWCX'},
 {'name': 'Cléo from 5 to 7 (1962)',
  'quote': 'Spoiled-but-never-loved Cleo looking like Patti Harrison on the '
           'loose in early 60s Paris. Quite nice :)',
  'rating': '4.5',
  'url': 'https://boxd.it/2d0Anj'},
 {'name': 'Delicatessen (1991)',
  'quote': 'too true! what a debut! caro and jeunet really should get the band '
           'back together!',
  'rating': '4',
  'url': 'https://boxd.it/2e4Ozv'},
 {'name': 'The Jerk (1979)',
  'quote': "ok so what if in the remake it's Jonah Hill raised by a large "
           'immigrant Chinese family, upstairs from the popular Chinatown '
           "restaurant where they all work? After he's mistaken during the "
           'Christmas Day lunch rush by a Jewish customer for someone she went '
           'to summer camp with, his Chinese parents (in Mandarin) explain '
           "that he's not their biological son, and so forth...",
  'rating': '4',
  'url': 'https://boxd.it/2fch03'}]

def sanitize(s):
    return s.replace('\n', r'\n').replace("'", r"\'")

def pull_data():
    google_api = get_google_client()
    request = google_api.spreadsheets().values().batchGet(spreadsheetId=SPREADSHEET_ID, ranges=['Picks!A:C', 'Letterboxd!A:E'])
    response = request.execute()

    manual_data = [{ 'name': sanitize(r[0]), 'quote': sanitize(r[1]), 'url': '', 'rating': ''} for r in response['valueRanges'][0]['values'][1:]]
    letterboxd = [{ 'name': sanitize(f'{r[0]} ({r[1]})'), 'quote': sanitize(r[4]), 'url': r[2], 'rating': r[3]} for r in response['valueRanges'][1]['values'][1:]]

    return manual_data + letterboxd


def update_script_file(script_file_in, script_file_out, data):
    input_lines = script_file_in.readlines()
    begin = input_lines.index('// BEGIN_RECS\n')
    end = input_lines.index('// END_RECS\n')
    new_lines = [f"{{'text': '{d['name']}', 'quote': '{d['quote']}', 'url': '{d['url']}', 'rating': {d['rating'] or 'null'}}},\n" for d in data]
    script_file_out.writelines(input_lines[0:begin+2] + new_lines + input_lines[end-1:])


@click.command()
@click.argument('script_file_in', type=click.File('r'))
@click.argument('script_file_out', type=click.File('w'))
@yaspin(text='Working...', color='cyan')
def cli(script_file_in, script_file_out):
    with yaspin(text='Working...', color='cyan') as spinner:
        data = pull_data()
        pprint(data)
        spinner.write('Pulled data from Google')

        update_script_file(script_file_in, script_file_out, data)
        spinner.write(f'Updated {script_file_out}')
        spinner.ok()


if __name__ == '__main__':
    cli()