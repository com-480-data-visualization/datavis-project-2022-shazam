# Technical notes

# Nuxt

## Setup

```bash
brew install node@16
```

If you are using zsh, replace `~/.bashrc` with `~/.zshrc`

```bash
echo 'export PATH="/usr/local/opt/node@16/bin:$PATH"' >> ~/.bashrc
```

```bash
yarn add d3
```

## Run

- [`npm rebuild`](https://flaviocopes.com/should-commit-node-modules-git/)
- For local development:
    - Go to `dataviz` directory
    - Setup dev server by running `yarn dev`
- To build and push to Github page:
    - Go to `dataviz` directory
    - Run `yarn generate`
    - Commit on `git` with all the changes and generated files

For TypeScript users, see [here](https://typescript.nuxtjs.org/cookbook/components/)

For VSCode users, [uninstall Vetur and install Volar](https://stackoverflow.com/questions/71372991/cannot-find-module-components-helloworld-vue-or-its-corresponding-type-decla)

### Notes

- [Github page](https://nuxtjs.org/deployments/github-pages/)
- [d3.js for Vue example](https://github.com/gywgithub/vue-d3-examples)
- [Change `dist` folder](https://nuxtjs.org/docs/directory-structure/dist)
- [Module not found: Error: Can't resolve 'encoding' in '[path]/node_modules/node-fetch/lib'](https://github.com/vercel/next.js/issues/7621)
- [Adding image](https://nuxtjs.org/docs/directory-structure/assets/)
- [Highchart for Vue](https://github.com/highcharts/highcharts-vue)

# Python

The python library uses virtual environment `venv`.

**Make sure you run `virtualenv venv && source venv/bin/activate && pip install -r requirements.txt` for the first time**

**Make sure you activate the virtual environment by running `source venv/bin/activate` first if you have a fresh terminal**

## [`venv`](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/)

* `sudo apt-get install python3-pip`
* `sudo pip3 install virtualenv`

## Notes

* create a new virtual environment `virtualenv venv`
* activate `source venv/bin/activate`
* deactivate `deactivate`
* install from environment file `pip install -r requirements.txt`
* generate requirement file `pip freeze > requirements.txt`

# Spotify API

* [Official reference](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-several-audio-features)
* [Python lib reference](https://spotipy.readthedocs.io/en/2.19.0/#api-reference)

## Obtaining the client secret

* Obtain the client secret using your Spotify account by following the steps [here](https://developer.spotify.com/documentation/general/guides/authorization/app-settings/) to create an app
* Set the environment variable in the terminal, so we don't expose the credentials to the world!
```bash
export SPOTIPY_CLIENT_ID='your-spotify-client-id'
export SPOTIPY_CLIENT_SECRET='your-spotify-client-secret'
```

## Using [spotipy](https://spotipy.readthedocs.io/en/2.19.0/#getting-started) to access the web api

* Install by running `pip3 install spotipy BeautifulSoup4 dataclasses_json`
* The sample code is [here](https://spotipy.readthedocs.io/en/2.19.0/#client-credentials-flow)

# [QQ Music API](https://jsososo.github.io/QQMusicApi/#/?id=%e6%ad%8c%e8%af%8d)

* `git clone https://github.com/jsososo/QQMusicApi.git`
* `cd` into the folder
* build docker image `sudo docker build -t qq-music-api .`
* `sudo docker run -it --rm -p 8080:80 qq-music-api`
* Check the [reference](https://jsososo.github.io/QQMusicApi/#/?id=%e6%ad%8c%e8%af%8d)
    * In the browser, for example, visit `http://localhost:8080/lyric?songmid=0039MnYb0qxYhV` to access the lyrics API

# [Genius API](https://towardsdatascience.com/become-a-lyrical-genius-4362e7710e43)

* Activate API token [here](https://docs.genius.com/#/getting-started-h1)
* Use `pip3 install lyricsgenius` to obtain and fetch lyrics

# Jyputer

* `sudo docker run -it --rm -p 8888:8888 -v "${PWD}":/home/jovyan/work jupyter/datascience-notebook`
