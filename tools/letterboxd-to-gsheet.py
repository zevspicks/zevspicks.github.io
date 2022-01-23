import os.path
from google_client import get_google_client, SPREADSHEET_ID
from yaspin import yaspin
import click
import csv
from googleapiclient.errors import HttpError


@click.command()
@click.argument('letterboxd_dir', type=click.Path(exists=True))
def upload(letterboxd_dir):
    with open(os.path.join(letterboxd_dir, 'reviews.csv')) as f:
        reader = csv.DictReader(f)
        upload_rows = [[r['Name'], r['Year'], r['Letterboxd URI'], r['Rating'], r['Review']] for r in reader if
                       float(r['Rating'] or '0') >= 4]
        upload_rows.insert(0, ['Name', 'Year', 'URI', 'Rating', 'Review'])

    with yaspin(text='Uploading...', color='cyan') as spinner:
        try:
            google_api = get_google_client()
            request = google_api.spreadsheets().values().update(spreadsheetId=SPREADSHEET_ID,
                                                                valueInputOption='USER_ENTERED',
                                                                range=f'Letterboxd!A1:E{len(upload_rows)}',
                                                                body={'values': upload_rows})
            request.execute()
            spinner.ok("✔")
        except HttpError as e:
            spinner.fail('X')


if __name__ == '__main__':
    upload()
