# Project of Data Visualization (COM-480)

###### tags: `DataViz`

> Team [Shazam!](https://github.com/com-480-data-visualization/datavis-project-2022-shazam)

| Student's name | SCIPER |
| -------------- | ------ |
| Duan Yingxuan | 282512 |
| Liu Zimi | 343914 |
| Tseng Chun-Hung | 340758 |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 

### Dataset

The [dataset](https://www.kaggle.com/datasets/mrmorj/dataset-of-songs-in-spotify) that we looked into was from Kaggle, but it provided far too less information, and more information can be obtained from a combined usage of Spotify API, Genius API, and QQ music API, so we decided to assemble our own dataset.

The main data source that we used is [Spotify API](https://developer.spotify.com/documentation/web-api/reference/#/), [Genius API](https://docs.genius.com/#songs-h2), and [QQ Music API](https://jsososo.github.io/QQMusicApi/#/?id=_1%e3%80%81%e8%8e%b7%e5%8f%96%e6%a6%9c%e5%8d%95%e5%88%97%e8%a1%a8). For the purpose of our visualization, we need data of some particular singers and the top 100 tracks from the past years. In detail, we utilize the data source in the following ways:
* From Spotify API, we gather all albums and track data related to a singer, along with audio features for each track. 
* From Genius API, we fetch the lyrics of tracks that we obtained on Spotify API, as Spotify doesn't have lyrics retrieval API endpoint.
* From QQ music API, we gather data on `billboard weekly top 100` tracks and `weekly top 100 trending tracks in the Chinese market` since 2018. The lyrics are available with each track with the QQ music API, but no audio features are available, so we query each track's audio features from the Spotify API.

All the fetched data are stored in the [Github repo](https://github.com/com-480-data-visualization/datavis-project-2022-shazam/tree/main/dataset/crawler/data) in JSON file format. The API fetching code [for Spotify](https://github.com/com-480-data-visualization/datavis-project-2022-shazam/blob/main/dataset/crawler/qq_music.py) and [QQ Music](https://github.com/com-480-data-visualization/datavis-project-2022-shazam/blob/main/dataset/crawler/spotify.py) are listed inlined.

Most of the data returned by all APIs is relatively clean regarding the preprocessing. The only part that requires some preprocessing is the lyrics coming from Genius API and QQ music API. Since both of them are returned with timestamps (pointing to the time when the lyrics are sung) and/or some miscellaneous information (e.g. singer, album company, etc.), we will need to strip them out before analyzing the lyrics.

### Problematic

More and more people are turning listening to music into a daily habit, and it is our intention to help these groups find the music they like. By introducing them **to the evolution of pop songs over four years** and **to the genres and cultures of famous pop artists**, we enable them to find their favourite artists and genres to facilitate their next musical exploration. 

We, therefore, visualise the following five aspects：

* `The general characteristics of all the singer’s songs` showing the musical style and characteristics of each singer
* `The frequency statistics of the lyrics` showing the different moods and cultural expressions of the singer
* `The evolution of the singer’s musical style` to facilitate a quick overview of the singer’s musical style from period to period
* `The variations in the characteristics of popular music` to facilitate rapid grasp of pop trends
* `The song which is long-standing in the top 100 music board` since 2018 showing the popularity and the common taste


### Exploratory Data Analysis

Please check our [Jupyter Notebook](https://github.com/com-480-data-visualization/datavis-project-2022-shazam/blob/main/dataset/crawler/notebook.ipynb) for analysis.

### Related Work

There exist some previous works about lyrical and audio analysis. Namely [the study of js](https://github.com/com-480-data-visualization/com-480-project-js) which chose five hit artists and analyzed their music style with the Spotify and genius datasets. It focused on the pairwise comparison of artists by visualizing the audio features of their songs.

Another source of inspiration would be [the work of Adam Reevesman](https://towardsdatascience.com/spotify-wrapped-data-visualization-and-machine-learning-on-your-top-songs-1d3f837a9b27), he visualized his personal annual top songs from 2016 to 2021. Some of the features are interesting for our study and since we focus on popular artists and songs, we believe that it represents a greater interest for general public than exploring personal playlists.

Our approach differs from the other ones in several aspects. First, we include the QQ music data set which we obtained from QQ API. This allows us to show the evolution of popular music in China and the whole world. Secondly, we want to depict the musical style evolution of different artists in a chronological order. We did not find other works that represent the development of artists' style in similar way. 

## Milestone 2 

**10% of the final grade**

## Milestone 3 

**80% of the final grade**
