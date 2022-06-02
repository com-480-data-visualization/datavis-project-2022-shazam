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
    
    # save it
    json_string = json.dumps(ret)
    os.system(f"mkdir -p data/singers")
    with open(f'data/singers/all_singers.json', 'w') as outfile:
        outfile.write(json_string)
    
    return ret

distinctSingers = aggregateSingers(data=trend_data_billboard, cutoff=20)
print(20, len(distinctSingers))