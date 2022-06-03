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
import time

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
    ok = {}
    failed = {}
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
                        
                        # get audio features
                        mid = track['mid']
                        try:
                            with open(f'data/tracks/{mid}.json', encoding='utf-8') as infile2:
                                audioFeatures = json.load(infile2)
                                ret[y][w][i]['audioFeatures'] = audioFeatures
                                ret[y][w][i]['lyrics'] = audioFeatures['lyrics']
                                # print(f'Found {folder}/{y}_{w}.json')
                                ok[mid] = True
                        except Exception as e:
                            # print(e, f'{folder}/{y}_{w}.json')
                            failed[mid] = True
                            pass
            except Exception as e:
                # print(e, f'{folder}/{y}_{w}.json')
                pass
    print(len(ok), len(failed))
    return ret

print("Start loading trend_data_billboard")
trend_data_billboard = load_qq_data(id=108)
print("Done loading trend_data_billboard")

cutoffCount = 20

# get a list of available singers
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
    
    # save it
    json_string = json.dumps(ret)
    os.system(f"mkdir -p data/singers")
    with open(f'data/singers/all_singers.json', 'w') as outfile:
        outfile.write(json_string)
    
    return ret

distinctSingers = aggregateSingers(data=trend_data_billboard, cutoff=cutoffCount)
# print(cutoffCount, len(distinctSingers), distinctSingers)

import requests
import urllib.parse
for singer in distinctSingers:
    try:
        with open(f'data/singers/{singer}.json', encoding='utf-8') as infile2:
            # print("file ok")
            pass
    except:
        print("file error", singer, f"data/singers/{singer}.json")
    
    url = f"https://raw.githubusercontent.com/com-480-data-visualization/datavis-project-2022-shazam/main/dataset/crawler/data/singers/{urllib.parse.quote(singer)}.json"
    try:
        # print(url)
        x = requests.get(url)
        # print(x.status_code)
        if x.status_code != 200:
            print("url", singer, url)
    except Exception as e:
        print("url error", e, singer, url)

# calculates distinct singers - track count in that week
def generateBubbleChartSingerData(data: "dict[int, dict[int, dict[int, dict[str, str]]]]", cutoff: int) -> "list[str]":
    for y in data:
        for w in data[y]:
            singersHistogram = {}
            for i in data[y][w]:
                if i < cutoff:
                    singers = data[y][w][i]['singerName']
                    singerList = singers.split("/")
                    for singer in singerList:
                        if singer in singersHistogram:
                            cnt = singersHistogram[singer]
                            cnt += 1
                            singersHistogram[singer] = cnt
                        else:
                            singersHistogram[singer] = 1
    
            # save it
            output = []
            for k, v in singersHistogram.items():
                output.append({
                    'name': k,
                    'count': v,
                })

            json_string = json.dumps(output)
            os.system(f"mkdir -p data/singers/weekly")
            with open(f'data/singers/weekly/{y}_{w}.json', 'w') as outfile:
                outfile.write(json_string)
            
# generateBubbleChartSingerData(data=trend_data_billboard, cutoff=cutoffCount)

# calculates accumulated for all singers, total distinct tracks, for every week since 2018
def generateBarChartAccumulatedSingerHistoryDataPerWeek(data: "dict[int, dict[int, dict[int, dict[str, str]]]]", cutoff: int) -> "list[str]":
    tracks = {} # singer -> {track name: 1}
    for y in data:
        for w in data[y]:
            for i in data[y][w]:
                if i < cutoff:
                    singers = data[y][w][i]['singerName']
                    trackName = data[y][w][i]['title']
                    singerList = singers.split("/")
                    for singer in singerList:
                        if singer in tracks:
                            if trackName not in tracks[singer]:
                                tracks[singer][trackName] = 1
                            else:
                                val = tracks[singer][trackName]
                                val += 1
                                tracks[singer][trackName] = val
                        else:
                            tracks[singer] = {trackName: 1}
            
            singerData = []
            for k, v in tracks.items():
                singerData.append((k, len(v)))
            singerData.sort(reverse=True, key=lambda element: (element[1], element[0]))

            # save it
            output = []
            for k, v in singerData:
                output.append({
                    'name': k,
                    'count': v,
                })

            json_string = json.dumps(output)
            os.system(f"mkdir -p data/singers/distinct_historical")
            with open(f'data/singers/distinct_historical/{y}_{w}.json', 'w') as outfile:
                outfile.write(json_string)
            
# generateBarChartAccumulatedSingerHistoryDataPerWeek(data=trend_data_billboard, cutoff=cutoffCount)

# calculates accumulated for all singers, total distinct tracks, per year
def generateBarChartAccumulatedSingerHistoryDataPerYear(data: "dict[int, dict[int, dict[int, dict[str, str]]]]", cutoff: int) -> "list[str]":
    for y in data:
        tracks = {} # singer -> {track name: 1}
        for w in data[y]:
            for i in data[y][w]:
                if i < cutoff:
                    singers = data[y][w][i]['singerName']
                    trackName = data[y][w][i]['title']
                    singerList = singers.split("/")
                    for singer in singerList:
                        if singer in tracks:
                            if trackName not in tracks[singer]:
                                tracks[singer][trackName] = 1
                            else:
                                val = tracks[singer][trackName]
                                val += 1
                                tracks[singer][trackName] = val
                        else:
                            tracks[singer] = {trackName: 1}
            
        singerData = []
        for k, v in tracks.items():
            singerData.append((k, len(v)))
        singerData.sort(reverse=True, key=lambda element: (element[1], element[0]))

        # save it
        output = []
        for k, v in singerData:
            output.append({
                'name': k,
                'count': v,
            })

        json_string = json.dumps(output)
        os.system(f"mkdir -p data/singers/distinct_historical")
        with open(f'data/singers/distinct_historical/{y}.json', 'w') as outfile:
            outfile.write(json_string)
            
# generateBarChartAccumulatedSingerHistoryDataPerYear(data=trend_data_billboard, cutoff=100)

# calculates the weeks that the songs stayed on the board
def generateBarChartAccumulatedSongsHistoryDataPerYear(data: "dict[int, dict[int, dict[int, dict[str, str]]]]", cutoff: int) -> "list[str]":
    for y in data:
        tracks = {} # track -> singer, count
        for w in data[y]:
            for i in data[y][w]:
                if i < cutoff:
                    trackName = data[y][w][i]['title']
                    singers = data[y][w][i]['singerName']
                    if trackName not in tracks:
                        tracks[trackName] = (1, singers)
                    else:
                        val = tracks[trackName]
                        tracks[trackName] = (val[0] + 1, val[1])
            
        trackData = []
        for k, v in tracks.items():
            trackData.append((k, v))
        trackData.sort(reverse=True, key=lambda element: (element[1][0], element[0]))

        # save it
        output = []
        for k, v in trackData:
            output.append({
                'name': k,
                'count': v[0],
                'singer': v[1],
            })

        json_string = json.dumps(output)
        os.system(f"mkdir -p data/tracks/historical")
        with open(f'data/tracks/historical/{y}_weeks.json', 'w') as outfile:
            outfile.write(json_string)
            
# generateBarChartAccumulatedSongsHistoryDataPerYear(data=trend_data_billboard, cutoff=100)

# audio features of all tracks this year# calculates the weeks that the songs stayed on the board
def generateAudioFeaturesPerYear(data: "dict[int, dict[int, dict[int, dict[str, str]]]]", cutoff: int) -> "list[str]":
    for y in data:
        tracks = []
        for w in data[y]:
            for i in data[y][w]:
                if i < cutoff:
                    if 'audioFeatures' in data[y][w][i]:
                        tracks.append(data[y][w][i])
        
        json_string = json.dumps(tracks)
        os.system(f"mkdir -p data/tracks/historical")
        with open(f'data/tracks/historical/{y}_audio_features.json', 'w') as outfile:
            outfile.write(json_string)
            
# generateAudioFeaturesPerYear(data=trend_data_billboard, cutoff=100)

# authenticate
auth_manager = SpotifyClientCredentials()
sp = spotipy.Spotify(auth_manager=auth_manager)
pp = pprint.PrettyPrinter(indent=4)
genius = lyricsgenius.Genius()

def search_for_artist(name: str) -> customdatatypes.Singer:
    results = sp.search(q='artist:' + name, type='artist')
    # pp.pprint(results)

    items = results['artists']['items']
    if len(items) > 0:
        artist = items[0]
        url = None
        if 'spotify' in artist['external_urls']:
            url = artist['external_urls']['spotify']
        image = None
        if len(artist['images']) > 0:
            image = artist['images'][0]['url']
        print(f"{url}, {artist['followers']['total']} {artist['genres']} {image} {artist['popularity']} {artist['name']}, {artist['id']}, {artist['uri']}")
        
        data = {
            'singer': name,
            'spotifyURL': url, 
            'image': image,
            'followers': artist['followers']['total'],
            'genres': artist['genres'],
            'popularity': artist['popularity'],
        }

        #return customdatatypes.Singer(name=artist['name'], id=artist['id'], link=artist['uri'])

        json_string = json.dumps(data)
        os.system(f"mkdir -p data/singers/info")
        with open(f'data/singers/info/{name}.json', 'w') as outfile:
            outfile.write(json_string)

        time.sleep(1)
        return True

    return False

# failed = []
# distinctSingers = ["Bruno Mars"]
# for singer in distinctSingers:
#     try:
#         if search_for_artist(singer) == False:
#             failed.append(singer)
#     except:
#         failed.append(singer)
# print(json.dumps(failed))
# search_for_artist("Taylor Swift")
