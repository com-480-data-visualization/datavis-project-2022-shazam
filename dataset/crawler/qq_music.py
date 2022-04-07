import requests
import pprint
import os
import json
import time

pp = pprint.PrettyPrinter(indent=4)

def get_lyrics(mid: str, fname: str) -> str:
    fname = fname.replace("/", " ")
    response = requests.get(f'http://localhost/lyric?songmid={mid}', timeout=10)
    # pp.pprint(response.json())

    # save json request
    os.system(f"mkdir -p data/qq/lyrics/")
    with open(f'data/qq/lyrics/{fname}.json', 'w', encoding='utf8') as outfile:
        # json_str = json.dumps(response.json(), indent = 4, ensure_ascii=False).encode('utf8')
        json.dump(response.json(), outfile, ensure_ascii=False)

def fetch_hot_music(id: int): 
    for y in range(2018, 2022 + 1):
        for w in range(1, 52 + 1):
            period = '{:4}_{}'.format(y, w) 
            print(f'fetching {id} {period}')

            while True:
                try:
                    response = requests.get(f'http://localhost/top?id={id}&period={period}', timeout=10)
                    # pp.pprint(json.dumps(response.json(), indent = 4))

                    print(str(response.json()['data']['period']) == period, str(response.json()['data']['period']) == '{:4}_{:02}'.format(y, w))
                    if str(response.json()['data']['period']) == period or str(response.json()['data']['period']) == '{:4}_{:02}'.format(y, w):
                        pass
                    else:
                        tmp = response.json()['data']['period']
                        print(f'mismatch in period {tmp} != {period}, skipping')
                        break

                    # save json request
                    os.system(f"mkdir -p data/qq/{id}")
                    with open(f'data/qq/{id}/{period}.json', 'w', encoding='utf8') as outfile:
                        # json_str = json.dumps(response.json(), indent = 4, ensure_ascii=False).encode('utf8')
                        json.dump(response.json(), outfile, ensure_ascii=False) # https://stackoverflow.com/questions/18337407/saving-utf-8-texts-with-json-dumps-as-utf8-not-as-u-escape-sequence

                    # save lyrics, using `mid` of the track as file name and search query
                    for track in response.json()['data']['list']:
                        print(track['rank'], track['title'], track['mid'])
                        mid = track['mid']
                        title = track['title']
                        while True:
                            try:
                                get_lyrics(track['mid'], fname=f'{mid}_{title}')
                                break
                            except Exception as e:
                                print("error", e)
                                time.sleep(30)
                    break 
                except Exception as e:
                    print("error", e)
                    time.sleep(30)

fetch_hot_music(id=26)
fetch_hot_music(id=108)