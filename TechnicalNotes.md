# Technical notes

# Spotify API

## Obtaining the client secret

* Obtain the client secret using your Spotify account by following the steps [here](https://developer.spotify.com/documentation/general/guides/authorization/app-settings/) to create an app
* Set the environment variable in the terminal, so we don't expose the credentials to the world!
```bash
export SPOTIPY_CLIENT_ID='your-spotify-client-id'
export SPOTIPY_CLIENT_SECRET='your-spotify-client-secret'
```

## Using [spotipy](https://spotipy.readthedocs.io/en/2.19.0/#getting-started) to access the web api

* Install by running `pip3 install spotipy BeautifulSoup4`
* The sample code is [here](https://spotipy.readthedocs.io/en/2.19.0/#client-credentials-flow)

# QQ Music API

TODO

# [Genius API](https://towardsdatascience.com/become-a-lyrical-genius-4362e7710e43)

* Activate API token [here](https://docs.genius.com/#/getting-started-h1)
* Use `pip3 install lyricsgenius` to obtain and fetch lyrics
# Graphing

* `pip3 install plotly pandas kaleido`