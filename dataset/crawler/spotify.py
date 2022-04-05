from cmath import sin
from curses.ascii import US
import locale
from re import search
from tokenize import Double
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import pprint
import dataclasses
from dataclasses import dataclass
from dataclasses import field
from bs4 import BeautifulSoup
import requests
import plotly.express as px
import pandas as pd
import plotly.graph_objects as go
import os
import json
import re

# authenticate
auth_manager = SpotifyClientCredentials()
sp = spotipy.Spotify(auth_manager=auth_manager)
pp = pprint.PrettyPrinter(indent=4)

"""
country_codes= ['AD', 'AR', 'AU', 'AT', 'BE', 'BO', 'BR', 'BG', 'CA', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DK', 'DO', 'EC', 'SV', 'EE', 'FI', 'FR', 'DE', 'GR', 'GT', 'HN', 'HK', 'HU', 'IS', 'ID', 'IE', 'IT', 'JP', 'LV', 'LI', 'LT', 'LU', 'MY', 'MT', 'MX', 'MC', 'NL', 'NZ', 'NI', 'NO', 'PA', 'PY', 'PE', 'PH', 'PL', 'PT', 'SG', 'ES', 'SK', 'SE', 'CH', 'TW', 'TR', 'GB', 'US', 'UY']
"""

# API reference
# https://spotipy.readthedocs.io/en/2.19.0/#api-reference


def getFeaturedPlaylists():
    playlists = sp.featured_playlists(
        locale="en_US", country="US", timestamp=None, limit=50)
    # pp.pprint(playlists)

    while playlists:
        for i, item in enumerate(playlists['playlists']['items']):
            print(f"name: {item['name']}")
        if playlists['playlists']['next']:
            playlists = sp.next(playlists)
        else:
            playlists = None


def getCategories():
    categories = sp.categories(locale="en_US", country="US", limit=50)
    # pp.pprint(categories)

    while categories:
        for i, item in enumerate(categories['categories']['items']):
            print(f"name: {item['name']}; id: {item['id']}")
        if categories['categories']['next']:
            categories = sp.next(categories['categories'])
        else:
            categories = None


def getCategoryPlaylists():
    playlists = sp.category_playlists(
        locale="en_US", country="US", timestamp=None, limit=50)
    # pp.pprint(playlists)

    while playlists:
        for i, item in enumerate(playlists['playlists']['items']):
            print(f"name: {item['name']}")
        if playlists['playlists']['next']:
            playlists = sp.next(playlists)
        else:
            playlists = None

# Entry point
# getFeaturedPlaylists()
# getCategories()

### for Zimi ###

# https://stackoverflow.com/questions/35988/c-like-structures-in-python


@dataclass
class Track:
    """
    {   
        'artists': [   {   'external_urls': {   'spotify': 'https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02'},
                        'href': 'https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02',
                        'id': '06HL4z0CvFAxyc27GXpf02',
                        'name': 'Taylor Swift',
                        'type': 'artist',
                        'uri': 'spotify:artist:06HL4z0CvFAxyc27GXpf02'}],
        'available_markets': [  'AD',
                                'AE',
                                'AG',
                                'AL',
                                'AM',
                                'AO',
                                'AR',
                                'AT',
                                'AU',
                                'AZ',
                                'BA',
                                'BB',
                                'BD',
                                'BE',
                                'BF',
                                'BG',
                                'BH',
                                'BI',
                                'BJ',
                                'BN',
                                'BO',
                                'BR',
                                'BS',
                                'BT',
                                'BW',
                                'BY',
                                'BZ',
                                'CA',
                                'CD',
                                'CG',
                                'CH',
                                'CI',
                                'CL',
                                'CM',
                                'CO',
                                'CR',
                                'CV',
                                'CW',
                                'CY',
                                'CZ',
                                'DE',
                                'DJ',
                                'DK',
                                'DM',
                                'DO',
                                'DZ',
                                'EC',
                                'EE',
                                'EG',
                                'ES',
                                'FI',
                                'FJ',
                                'FM',
                                'FR',
                                'GA',
                                'GB',
                                'GD',
                                'GE',
                                'GH',
                                'GM',
                                'GN',
                                'GQ',
                                'GR',
                                'GT',
                                'GW',
                                'GY',
                                'HK',
                                'HN',
                                'HR',
                                'HT',
                                'HU',
                                'ID',
                                'IE',
                                'IL',
                                'IN',
                                'IQ',
                                'IS',
                                'IT',
                                'JM',
                                'JO',
                                'JP',
                                'KE',
                                'KG',
                                'KH',
                                'KI',
                                'KM',
                                'KN',
                                'KR',
                                'KW',
                                'KZ',
                                'LA',
                                'LB',
                                'LC',
                                'LI',
                                'LK',
                                'LR',
                                'LS',
                                'LT',
                                'LU',
                                'LV',
                                'LY',
                                'MA',
                                'MC',
                                'MD',
                                'ME',
                                'MG',
                                'MH',
                                'MK',
                                'ML',
                                'MN',
                                'MO',
                                'MR',
                                'MT',
                                'MU',
                                'MV',
                                'MW',
                                'MX',
                                'MY',
                                'MZ',
                                'NA',
                                'NE',
                                'NG',
                                'NI',
                                'NL',
                                'NO',
                                'NP',
                                'NR',
                                'NZ',
                                'OM',
                                'PA',
                                'PE',
                                'PG',
                                'PH',
                                'PK',
                                'PL',
                                'PS',
                                'PT',
                                'PW',
                                'PY',
                                'QA',
                                'RO',
                                'RS',
                                'RU',
                                'RW',
                                'SA',
                                'SB',
                                'SC',
                                'SE',
                                'SG',
                                'SI',
                                'SK',
                                'SL',
                                'SM',
                                'SN',
                                'SR',
                                'ST',
                                'SV',
                                'SZ',
                                'TD',
                                'TG',
                                'TH',
                                'TJ',
                                'TL',
                                'TN',
                                'TO',
                                'TR',
                                'TT',
                                'TV',
                                'TW',
                                'TZ',
                                'UA',
                                'UG',
                                'US',
                                'UY',
                                'UZ',
                                'VC',
                                'VE',
                                'VN',
                                'VU',
                                'WS',
                                'XK',
                                'ZA',
                                'ZM',
                                'ZW'],
        'disc_number': 1,
        'duration_ms': 242157,
        'explicit': False,
        'external_urls': {   'spotify': 'https://open.spotify.com/track/4qUijfYU8EoIWiY6oSyrgT'},
        'href': 'https://api.spotify.com/v1/tracks/4qUijfYU8EoIWiY6oSyrgT',
        'id': '4qUijfYU8EoIWiY6oSyrgT',
        'is_local': False,
        'name': 'Bye Bye Baby (Taylor’s Version) (From The Vault)',
        'preview_url': None,
        'track_number': 26,
        'type': 'track',
        'uri': 'spotify:track:4qUijfYU8EoIWiY6oSyrgT'
    }
    """

    """
    {   
        'acousticness': 0.315,
        'analysis_url': 'https://api.spotify.com/v1/audio-analysis/06zIBqLC9ZRm5i0iMf0kHI',
        'danceability': 0.341,
        'duration_ms': 231527,
        'energy': 0.726,
        'id': '06zIBqLC9ZRm5i0iMf0kHI',
        'instrumentalness': 6.27e-05,
        'key': 0,
        'liveness': 0.0948,
        'loudness': -7.271,
        'mode': 1,
        'speechiness': 0.0699,
        'tempo': 167.949,
        'time_signature': 4,
        'track_href': 'https://api.spotify.com/v1/tracks/06zIBqLC9ZRm5i0iMf0kHI',
        'type': 'audio_features',
        'uri': 'spotify:track:06zIBqLC9ZRm5i0iMf0kHI',
        'valence': 0.63
    }
    """
    name: str
    id: str
    acousticness: float = 0.0
    danceability: float = 0.0
    duration_ms: float = 0.0
    energy: float = 0.0
    instrumentalness: float = 0.0  # Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.
    # E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.
    key: int = -1
    liveness: float = 0.0
    loudness: float = 0.0
    mode: int = 0  # Major is represented by 1 and minor is 0.
    speechiness: float = 0.0
    tempo: float = 0.0
    time_signature: int = 0
    valence: float = 0.0


@dataclass
class Album:
    """
    {   
        'album_group': 'album',
        'album_type': 'album',
        'artists': [   {   'external_urls': {   'spotify': 'https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02'},
                        'href': 'https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02',
                        'id': '06HL4z0CvFAxyc27GXpf02',
                        'name': 'Taylor Swift',
                        'type': 'artist',
                        'uri': 'spotify:artist:06HL4z0CvFAxyc27GXpf02'}],
        'available_markets': ['BE', 'CH', 'DE', 'ES', 'GR', 'SE'],
        'external_urls': {   'spotify': 'https://open.spotify.com/album/6tgMb6LEwb3yj7BdYy462y'},
        'href': 'https://api.spotify.com/v1/albums/6tgMb6LEwb3yj7BdYy462y',
        'id': '6tgMb6LEwb3yj7BdYy462y',
        'images': [   {   'height': 640,
                        'url': 'https://i.scdn.co/image/ab67616d0000b2736ff72554305455511e786687',
                        'width': 640},
                    {   'height': 300,
                        'url': 'https://i.scdn.co/image/ab67616d00001e026ff72554305455511e786687',
                        'width': 300},
                    {   'height': 64,
                        'url': 'https://i.scdn.co/image/ab67616d000048516ff72554305455511e786687',
                        'width': 64}],
        'name': 'Fearless',
        'release_date': '2008-11-11',
        'release_date_precision': 'day',
        'total_tracks': 17,
        'type': 'album',
        'uri': 'spotify:album:6tgMb6LEwb3yj7BdYy462y'
    }
    """
    name: str
    id: str
    release_date: str
    tracks: list[Track] = field(default_factory=list[Track])


@dataclass
class Singer:
    name: str
    id: str
    link: str
    albums: list[Album] = field(default_factory=list[Album])


def search_for_artist(name: str):
    results = sp.search(q='artist:' + name, type='artist')
    # pp.pprint(results)

    items = results['artists']['items']
    if len(items) > 0:
        artist = items[0]
        print(f"{artist['name']}, {artist['id']}, {artist['uri']}")


def get_albums_for_artist(artist_id: str):
    results = sp.artist_albums(
        artist_id=artist_id, album_type="album,single", limit=50)
    # pp.pprint(results)

    ret = []
    while results:
        for i, item in enumerate(results['items']):
            # print(f"name: {item['name']}, id: {item['id']}, release_date: {item['release_date']}")
            album = Album(item['name'], item['id'], item['release_date'])
            # issue: 'out/Miley Cyrus/Heart Of Glass / Midnight Sky.svg'
            album.name = album.name.replace("/", " ")
            ret.append(album)

        if results['next']:
            results = sp.next(results)
        else:
            results = None

    return ret


def get_album_tracks(album: Album) -> list[Track]:
    results = sp.album_tracks(album_id=album.id, limit=50)
    # pp.pprint(results)

    ret = []
    while results:
        for i, item in enumerate(results['items']):
            # print(f"name: {item['name']}, id: {item['id']}")
            ret.append(Track(item['name'], item['id']))

        if results['next']:
            results = sp.next(results)
        else:
            results = None

    return ret

def get_audio_features_for_tracks(tracks: list[Track]):
    track_ids = []
    for track in tracks:
        track_ids.append(track.id)

    assert(len(track_ids) <= 100)

    results = sp.audio_features(tracks=track_ids)
    # pp.pprint(results)

    for i, item in enumerate(results):
        ok = False
        for track in tracks:
            if track.id == item['id']:
                track.acousticness = item['acousticness']
                track.danceability = item['danceability']
                track.duration_ms = item['duration_ms']
                track.energy = item['energy']
                # Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.
                track.instrumentalness = item['instrumentalness']
                # E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.
                track.key = item['key']
                track.liveness = item['liveness']
                track.loudness = item['loudness']
                # Major is represented by 1 and minor is 0.
                track.mode = item['mode']
                track.speechiness = item['speechiness']
                track.tempo = item['tempo']
                track.time_signature = item['time_signature']
                track.valence = item['valence']

                ok = True
                break

        assert(ok is True)


# searchForArtist("Taylor Swift") # Taylor Swift, 06HL4z0CvFAxyc27GXpf02, spotify:artist:06HL4z0CvFAxyc27GXpf02
# searchForArtist("Justin Bieber") # Justin Bieber, 1uNFoZAHBGtllmzznpCI3s, spotify:artist:1uNFoZAHBGtllmzznpCI3s
# searchForArtist("Sia") # Sia, 5WUlDfRSoLAfcVSX1WnrxN, spotify:artist:5WUlDfRSoLAfcVSX1WnrxN
# searchForArtist("Miley Cyrus") # Miley Cyrus, 5YGY8feqx7naU7z4HrwZM6, spotify:artist:5YGY8feqx7naU7z4HrwZM6
# searchForArtist("Jay Chou") # Jay Chou, 2elBjNSdBE2Y3f0j1mjrql, spotify:artist:2elBjNSdBE2Y3f0j1mjrql
# searchForArtist("JJ Lin") # JJ Lin, 7Dx7RhX0mFuXhCOUgB01uM, spotify:artist:7Dx7RhX0mFuXhCOUgB01uM

singers = [
    Singer("Taylor Swift", "06HL4z0CvFAxyc27GXpf02", "spotify:artist:06HL4z0CvFAxyc27GXpf02"),
    Singer("Justin Bieber", "1uNFoZAHBGtllmzznpCI3s", "spotify:artist:1uNFoZAHBGtllmzznpCI3s"),
    Singer("Sia", "5WUlDfRSoLAfcVSX1WnrxN", "spotify:artist:5WUlDfRSoLAfcVSX1WnrxN"),
    Singer("Miley Cyrus", "5YGY8feqx7naU7z4HrwZM6", "spotify:artist:5YGY8feqx7naU7z4HrwZM6"),
    Singer("Jay Chou", "2elBjNSdBE2Y3f0j1mjrql",
           "spotify:artist:2elBjNSdBE2Y3f0j1mjrql"),
    Singer("JJ Lin", "7Dx7RhX0mFuXhCOUgB01uM",
           "spotify:artist:7Dx7RhX0mFuXhCOUgB01uM"),
]


def draw_audio_feature_of_all_songs_from_a_singer(singer: Singer):
    categories = [
        'acousticness',
        'danceability',
        'energy',
        'instrumentalness',
        'liveness',
        'speechiness',
        'valence'
    ]
    fig = go.Figure()

    for album in singer.albums:
        for track in album.tracks:
            fig.add_trace(go.Scatterpolar(
                r=[
                    track.acousticness,
                    track.danceability,
                    track.energy,
                    track.instrumentalness,
                    track.liveness,
                    track.speechiness,
                    track.valence
                ],
                theta=categories,
                fill='toself',
                name=f"{track.name}"
            ))

    fig.update_layout(
        polar=dict(
            radialaxis=dict(
                visible=True,
                range=[0, 1]
            )),
        showlegend=False
    )

    fig.update_layout(title_text=f"{singer.name}")
    # fig.show()
    os.system(f"mkdir -p out/radar")
    fig.write_image(f"out/radar/{singer.name}.svg")


def draw_audio_feature_of_all_albums_from_a_singer(singer: Singer):
    categories = [
        'acousticness',
        'danceability',
        'energy',
        'instrumentalness',
        'liveness',
        'speechiness',
        'valence'
    ]
    fig = go.Figure()

    for album in singer.albums:
        for track in album.tracks:
            fig.add_trace(go.Scatterpolar(
                r=[
                    track.acousticness,
                    track.danceability,
                    track.energy,
                    track.instrumentalness,
                    track.liveness,
                    track.speechiness,
                    track.valence
                ],
                theta=categories,
                fill='toself',
                name=f"{track.name}"
            ))

        fig.update_layout(
            polar=dict(
                radialaxis=dict(
                    visible=True,
                    range=[0, 1]
                )),
            showlegend=False
        )

        fig.update_layout(title_text=f"{singer.name} - {album.name}")
        # fig.show()
        os.system(f"mkdir -p \"out/{singer.name}\"")
        fig.write_image(f"out/{singer.name}/{album.name}.svg")

def get_lyrics_url_for_track(singer: str, track: str) -> str: # broken
    base_url = 'https://api.genius.com'
    headers = {'Authorization': 'Bearer ' + os.getenv('GENIUS_ACCESS_TOKEN')}
    search_url = base_url + '/search'
    data = {'q': track + ' ' + singer}
    response = requests.get(search_url, data=data, headers=headers)

    json = response.json()
    remote_song_info = None
    for hit in json['response']['hits']:
        if singer.lower() in hit['result']['primary_artist']['name'].lower():
            remote_song_info = hit
            break
    print(json)
    if remote_song_info is None:
        return ""
    song_url = remote_song_info['result']['url']
    return song_url

def get_lyrics_from_url(song_url: str) -> str: # broken
    page = requests.get(song_url)
    html = BeautifulSoup(page.text, 'html.parser')
    lyrics1 = html.find(name="div", class_="lyrics")
    # lyrics2 = html.find(name="div", class_="Lyrics__Container-sc-1ynbvzw-2 jgQsqn")
    lyrics2 = html.findAll("div", {"class" : re.compile('Lyrics__Container-sc-*')})

    if lyrics1:
        lyrics = lyrics1.get_text()
    elif lyrics2:
        lyrics = ""
        for i, tmp in enumerate(lyrics2):
            if i != 0:
                lyrics += " "
            # lyrics += tmp.get_text() # FIXME: space

            print(tmp)
            candidates = tmp.findAll('p')
            for (j, candidate) in enumerate(candidates):
                if j != 0:
                    lyrics += " "
                lyrics += candidate.get_text()
    else:
        lyrics = None
    return lyrics
    
for singer in singers:
    print(f"Processing {singer.name}")
    albums = get_albums_for_artist(singer.id)
    singer.albums = albums
    for album in albums:
        tracks = get_album_tracks(album)
        album.tracks = tracks

        for track in tracks:
            song_url = get_lyrics_url_for_track(singer=singer.name, track=track.name)
            if len(song_url) == 0:
                print(f"No lyrics for {singer.name} {track.name}")
            else:
                lyrics = get_lyrics_from_url(song_url=song_url)
                print(lyrics)
        
        get_audio_features_for_tracks(tracks=tracks)

        # pp.pprint(tracks)

    # pp.pprint(singer)

    # https://stackoverflow.com/questions/51286748/make-the-python-json-encoder-support-pythons-new-dataclasses
    class EnhancedJSONEncoder(json.JSONEncoder):
        def default(self, o):
            if dataclasses.is_dataclass(o):
                return dataclasses.asdict(o)
            return super().default(o)

    json_string = json.dumps(singer, cls=EnhancedJSONEncoder)
    os.system(f"mkdir -p data")
    with open(f'data/{singer.name}.json', 'w') as outfile:
        outfile.write(json_string)

    draw_audio_feature_of_all_songs_from_a_singer(singer=singer)
    draw_audio_feature_of_all_albums_from_a_singer(singer=singer)
