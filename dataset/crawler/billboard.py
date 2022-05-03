# import

import enum
import re
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

### main logic ###

# load QQ billboard data

def load_qq_data(id: int) -> "dict[int, dict[int, dict[int, dict[str, str]]]]":
    base_folder=f'data/qq'
    folder=f"{base_folder}/{id}"
    
    ret = {}
    for y in range(2018, 2022 + 1):
        ret[y] = {}
        for w in range(1, 52 + 1):
            if y == 2022 and w > 14:
                break
            try:
                with open(f'{folder}/{y}_{w}.json', encoding='utf-8') as infile:
                    data = json.load(infile)
                    
                    ret[y][w] = {}
                    for (i, track) in enumerate(data['data']['list']):
                        ret[y][w][i] = {}
                        ret[y][w][i]['title'] = track['title']
                        ret[y][w][i]['singerName'] = track['singerName']
                        ret[y][w][i]['mid'] = track['mid']
                        # try:
                        #     mid = track['mid']
                        #     title = track['title']
                        #     title = title.replace("/", " ")
                        #     with open(f'{base_folder}/lyrics/{mid}_{title}.json', encoding='utf-8') as lyrics_file:
                        #         data = json.load(lyrics_file)
                        #         str_without_brackets = re.sub("[\(\[].*?[\)\]]", "", data['data']['lyric']) # TODO: remove more terms from the first couple of lines
                        #         ret[y][w][i]['lyrics'] = str_without_brackets
                        # except Exception as e:
                        #     print(e, f'{base_folder}/lyrics/{mid}_{title}.json')
                        #     pass
            except Exception as e:
                print(e, f'{folder}/{y}_{w}.json')
                pass
    return ret

print("Start loading trend_data_billboard")
trend_data_billboard = load_qq_data(id=108)
print("Done loading trend_data_billboard")

# for each week of the billboard data
# we take the top x of the tracks
# 1) aggregate the singer data out
# 2) aggregate the track data out
# cutoff: take the top x (inclusive) singers
def aggregateSingers(data: "dict[int, dict[int, dict[int, dict[str, str]]]]", cutoff: int) -> "list[str]":
    distinctSingers = {}
    for y in data:
        for w in data[y]:
            for i in data[y][w]:
                if i < cutoff:
                    singers = data[y][w][i]['singerName']
                    singerList = singers.split("/")
                    for singer in singerList:
                        distinctSingers[singer] = True
    
    ret = []
    for singer in distinctSingers:
        ret.append(singer)
    
    return ret

# distinctSingers = aggregateSingers(data=trend_data_billboard, cutoff=10)
# print(10, len(distinctSingers))
distinctSingers = aggregateSingers(data=trend_data_billboard, cutoff=20)
print(20, len(distinctSingers))
# distinctSingers = aggregateSingers(data=trend_data_billboard, cutoff=30)
# print(30, len(distinctSingers))
# distinctSingers = aggregateSingers(data=trend_data_billboard, cutoff=50)
# print(50, len(distinctSingers))
# distinctSingers = aggregateSingers(data=trend_data_billboard, cutoff=100)
# print(100, len(distinctSingers))

class TrackData:
    def __init__(self, mid: str, track_name: str, singer_name: str, track: customdatatypes.Track) -> None:
        self.mid = mid  
        self.track_name = track_name
        self.singer_name = singer_name
        self.track = track

def aggregateTracks(data: "dict[int, dict[int, dict[int, dict[str, str]]]]", cutoff: int) -> "list[TrackData]":
    ret = []
    seen = {}
    for y in data:
        for w in data[y]:
            for i in data[y][w]:
                if data[y][w][i]['title'] in seen:
                    continue
                seen[data[y][w][i]['title']] = True
                if i < cutoff:
                    ret.append(TrackData(mid=data[y][w][i]['mid'], track_name=data[y][w][i]['title'], singer_name=data[y][w][i]['singerName'], track=None))        
    
    return ret

distinctTracks = aggregateTracks(data=trend_data_billboard, cutoff=10)
print(10, len(distinctTracks))
distinctTracks = aggregateTracks(data=trend_data_billboard, cutoff=20)
print(20, len(distinctTracks))
distinctTracks = aggregateTracks(data=trend_data_billboard, cutoff=30)
print(30, len(distinctTracks))
distinctTracks = aggregateTracks(data=trend_data_billboard, cutoff=50)
print(50, len(distinctTracks))
distinctTracks = aggregateTracks(data=trend_data_billboard, cutoff=100)
print(100, len(distinctTracks))

# for all aggregated singer data
# check if spotify has the singer's discography

### code duplcation with spotify.py ###
def search_for_artist(name: str) -> customdatatypes.Singer:
    results = sp.search(q='artist:' + name, type='artist')
    # pp.pprint(results)

    items = results['artists']['items']
    if len(items) > 0:
        artist = items[0]
        # print(f"{name} = {artist['name']}, {artist['id']}, {artist['uri']}")
        return customdatatypes.Singer(name=artist['name'], id=artist['id'], link=artist['uri'], albums=[])
    return None

### code duplcation with spotify.py ###
def get_albums_for_artist(artist_id: str):
    results = sp.artist_albums(
        artist_id=artist_id, album_type="album,single", limit=50)
    # pp.pprint(results)

    ret = []
    while results:
        for i, item in enumerate(results['items']):
            # print(f"name: {item['name']}, id: {item['id']}, release_date: {item['release_date']}")
            album = customdatatypes.Album(item['name'], item['id'], item['release_date'], tracks=[])
            # issue: 'out/Miley Cyrus/Heart Of Glass / Midnight Sky.svg'
            album.name = album.name.replace("/", " ")
            ret.append(album)

        if results['next']:
            results = sp.next(results)
        else:
            results = None

    return ret

### code duplcation with spotify.py ###
# https://peps.python.org/pep-0484/#forward-references
def get_album_tracks(album: customdatatypes.Album) -> 'list[customdatatypes.Track]':
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

### code duplcation with spotify.py ###
def get_audio_features_for_tracks(tracks: 'list[customdatatypes.Track]'):
    track_ids = []
    for track in tracks:
        track_ids.append(track.id)

    for idx in range(0, (len(tracks) - 1) // 100 + 1):
        starting_index = idx * 100
        ending_index = min(starting_index + 100, len(tracks))
        print(starting_index, ending_index)

        results = sp.audio_features(tracks=track_ids[starting_index:ending_index])
        # pp.pprint(results)

        for i, item in enumerate(results):
            # print(tracks, item)

            if item is None:
                print("No audio feature")

                track.acousticness = 0
                track.danceability = 0
                track.duration_ms = 0
                track.energy = 0
                # Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.
                track.instrumentalness = 0
                # E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.
                track.key = 0
                track.liveness = 0
                track.loudness = 0
                # Major is represented by 1 and minor is 0.
                track.mode = 0
                track.speechiness = 0
                track.tempo = 0
                track.time_signature = 0
                track.valence = 0
            else:
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

### code duplcation with spotify.py ###
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

### code duplcation with spotify.py ###
def get_lyrics_from_url(song_url: str) -> str: 
    return genius.lyrics(song_url=song_url)

def fetchSingersDiscography(singers: "list[str]"):
    # check spotify for available singers
    print("Start checking for available singers on Spotify")
    spotify_singers = []
    for singer in singers:
        ret = search_for_artist(singer)
        if ret is None:
            print(f"[Spotify] Can't find singer = {singer}")
        else:
            spotify_singers.append(ret)
    print("Done checking for available singers on Spotify")
    
    # fetch singer's discography
    for idx_singer, singer in enumerate(spotify_singers):
        # if the data is on disk, skip
        os.system(f"mkdir -p data")
        try:
            with open(f'data/{singer.name}.json', 'r') as outfile:
                print(f"Singer {singer.name} already fetched, skipping")
                continue
        except Exception as e: 
            print(f"Start fetching {idx_singer}/{len(spotify_singers)} {singer.name}")

        # fetch
        albums = get_albums_for_artist(singer.id)
        singer.albums = albums
        for idx_album, album in enumerate(albums):
            print(f"Fetching {album.name}, {idx_album}/{len(albums)}")

            tracks = get_album_tracks(album)
            album.tracks = tracks
            print(f"Track count {len(tracks)}")

            # TODO: run this later
            # for track in tracks:
            #     # print(f"Getting lyrics for {singer.name} {track.name}")
            #     song_url = get_lyrics_url_for_track(singer=singer.name, track=track.name)
            #     if len(song_url) == 0:
            #         print(f"Can't find track on Genius for {singer.name} {track.name}")
            #     else:
            #         try:
            #             lyrics = get_lyrics_from_url(song_url=song_url)
            #         except Exception as e:
            #             print(f"Can't fetch lyrics from Genius for {singer.name} {track.name} with error {e}")
                    
            #         if lyrics is None:
            #             print(f"Can't find lyrics on Genius for {singer.name} {track.name}")
            #         else:
            #             track.lyrics = lyrics
            
            get_audio_features_for_tracks(tracks=tracks)

            # pp.pprint(tracks)

        # pp.pprint(singer)  

        # save it
        json_string = singer.to_json()
        os.system(f"mkdir -p data/singers")
        with open(f'data/singers/{singer.name}.json', 'w') as outfile:
            outfile.write(json_string)

        print(f"Done fetching {singer.name}")

# fetchSingersDiscography(singers=distinctSingers)


# for all aggregated track data
# check if spotify has the track's audio feature
def search_for_track(track_name: str, singer_name: str) -> customdatatypes.Singer:
    print(f"Query={track_name} {singer_name}")

    singer_name_split = ""
    singer_name = singer_name.split("/")
    for n in singer_name:
        singer_name_split += " " + n
    results = sp.search(q=f'{track_name} {singer_name_split}', type='track')
    # pp.pprint(results['tracks']['items'])

    items = results['tracks']['items']
    if len(items) > 0:
        track = items[0]
        # print(f"{track_name} {singer_name} = {track['name']}, {track['id']}")
        return customdatatypes.Track(name=track['name'], id=track['id'])
    return None

def sanitizeTrackName(name: str) -> str:
    return re.sub(r'\([^()]*\)', '', name)

def fetchAllTracks(tracks: "list[TrackData]") -> "list[TrackData]":
    # check spotify for available singers
    failed = []

    print("Start checking for available tracks on Spotify")
    spotify_tracks = []
    for (idx_track, track) in enumerate(tracks):        
        print(f"{idx_track}/{len(tracks)} Searching for {track.track_name} {track.singer_name}")
        ret = search_for_track(track_name=sanitizeTrackName(name=track.track_name), singer_name=track.singer_name)
        if ret is None:
            print(f"[Spotify] Can't find track = {track.track_name} {track.singer_name}")
            failed.append(track)
        else:
            track.track = ret
            spotify_tracks.append(track)
    print("Done checking for available tracks on Spotify")

    # fetch audio feature for the tracks
    print("Start fetching for audio features on Spotify")
    for track in spotify_tracks:
        # record the tracks using QQ mid, with audio feature
        get_audio_features_for_tracks(tracks=[track.track])
        
        # TODO: run this later
        # print(f"Getting lyrics for {singer.name} {track.name}")
        # singers = ""
        # for singer in track.singer_name.split("/"):
        #     singers += " " + singer
        # song_url = get_lyrics_url_for_track(singer=singers, track=sanitizeTrackName(name=track.track_name))
        # if len(song_url) == 0:
        #     print(f"Can't find track on Genius for {track.singer_name} {track.track_name}")
        # else:
        #     try:
        #         lyrics = get_lyrics_from_url(song_url=song_url)
        #     except Exception as e:
        #         print(f"Can't fetch lyrics from Genius for {track.singer_name} {track.track_name} with error {e}")
            
        #     if lyrics is None:
        #         print(f"Can't find lyrics on Genius for {track.singer_name} {track.track_name}")
        #     else:
        #         track.lyrics = lyrics

        json_string = track.track.to_json()
        os.system(f"mkdir -p data/tracks")
        with open(f'data/tracks/{track.mid}.json', 'w') as outfile:
            outfile.write(json_string)
    print("Done fetching for audio features on Spotify")

    return failed
    
failed = fetchAllTracks(tracks=distinctTracks)
print(f"Failed {len(failed)}/{len(distinctTracks)}")
for track in failed:
    print(track.track_name)
