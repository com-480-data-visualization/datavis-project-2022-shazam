from cmath import sin
from curses.ascii import US
import locale
from re import search
from tokenize import Double
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import pprint
import dataclasses
import customdatatypes
from bs4 import BeautifulSoup
import requests
import os
import json
import lyricsgenius
from dataclasses_json import dataclass_json

# authenticate
auth_manager = SpotifyClientCredentials()
sp = spotipy.Spotify(auth_manager=auth_manager)
pp = pprint.PrettyPrinter(indent=4)
genius = lyricsgenius.Genius()

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

def search_for_artist(name: str) -> customdatatypes.Singer:
    results = sp.search(q='artist:' + name, type='artist')
    # pp.pprint(results)

    items = results['artists']['items']
    if len(items) > 0:
        artist = items[0]
        print(f"{artist['name']}, {artist['id']}, {artist['uri']}")
        return customdatatypes.Singer(name=artist['name'], id=artist['id'], link=artist['uri'])
    return None

def get_albums_for_artist(artist_id: str):
    results = sp.artist_albums(
        artist_id=artist_id, album_type="album,single", limit=50)
    # pp.pprint(results)

    ret = []
    while results:
        for i, item in enumerate(results['items']):
            # print(f"name: {item['name']}, id: {item['id']}, release_date: {item['release_date']}")
            album = customdatatypes.Album(item['name'], item['id'], item['release_date'])
            # issue: 'out/Miley Cyrus/Heart Of Glass / Midnight Sky.svg'
            album.name = album.name.replace("/", " ")
            ret.append(album)

        if results['next']:
            results = sp.next(results)
        else:
            results = None

    return ret


def get_album_tracks(album: customdatatypes.Album) -> list[customdatatypes.Track]:
    results = sp.album_tracks(album_id=album.id, limit=50)
    # pp.pprint(results)

    ret = []
    while results:
        for i, item in enumerate(results['items']):
            # print(f"name: {item['name']}, id: {item['id']}")
            ret.append(customdatatypes.Track(item['name'], item['id']))

        if results['next']:
            results = sp.next(results)
        else:
            results = None

    return ret

def get_audio_features_for_tracks(tracks: list[customdatatypes.Track]):
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

def get_lyrics_url_for_track(singer: str, track: str) -> str: 
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
    if remote_song_info is None:
        return ""
    song_url = remote_song_info['result']['url']
    return song_url

def get_lyrics_from_url(song_url: str) -> str: 
    return genius.lyrics(song_url=song_url)
    
# main logic
singers = [
    search_for_artist("Taylor Swift"), # Taylor Swift, 06HL4z0CvFAxyc27GXpf02, spotify:artist:06HL4z0CvFAxyc27GXpf02
    search_for_artist("Justin Bieber"), # Justin Bieber, 1uNFoZAHBGtllmzznpCI3s, spotify:artist:1uNFoZAHBGtllmzznpCI3s
    search_for_artist("Sia"), # Sia, 5WUlDfRSoLAfcVSX1WnrxN, spotify:artist:5WUlDfRSoLAfcVSX1WnrxN
    search_for_artist("Miley Cyrus"), # Miley Cyrus, 5YGY8feqx7naU7z4HrwZM6, spotify:artist:5YGY8feqx7naU7z4HrwZM6
    search_for_artist("Jay Chou"), # Jay Chou, 2elBjNSdBE2Y3f0j1mjrql, spotify:artist:2elBjNSdBE2Y3f0j1mjrql
    search_for_artist("JJ Lin"), # JJ Lin, 7Dx7RhX0mFuXhCOUgB01uM, spotify:artist:7Dx7RhX0mFuXhCOUgB01uM
]

for singer in singers:
    albums = get_albums_for_artist(singer.id)
    singer.albums = albums
    for album in albums:
        tracks = get_album_tracks(album)
        album.tracks = tracks

        for track in tracks:
            print(f"Processing {singer.name} {track.name}")
            song_url = get_lyrics_url_for_track(singer=singer.name, track=track.name)
            if len(song_url) == 0:
                print(f"Can't find track on Genius for {singer.name} {track.name}")
            else:
                try:
                    lyrics = get_lyrics_from_url(song_url=song_url)
                except Exception as e:
                    print(f"Can't fetch lyrics from Genius for {singer.name} {track.name} with error {e}")
                
                if lyrics is None:
                    print(f"Can't find lyrics on Genius for {singer.name} {track.name}")
                else:
                    track.lyrics = lyrics
        
        get_audio_features_for_tracks(tracks=tracks)

        # pp.pprint(tracks)

    # pp.pprint(singer)  

    # save it
    json_string = singer.to_json()
    os.system(f"mkdir -p data")
    with open(f'data/{singer.name}.json', 'w') as outfile:
        outfile.write(json_string)

