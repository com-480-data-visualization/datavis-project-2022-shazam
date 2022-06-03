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
 
[PDF version](https://github.com/com-480-data-visualization/datavis-project-2022-shazam/blob/main/PDF/milestone2.pdf) is available, too. It contains the same content as the current markdown file. 

Due to using automatic conversion tools, the PDF is longer than 2 pages, though the character count requirement is not violated (requirement posted on Zulip regarding Markdown report writing).
### Core Visualization Sketches
 
#### [Data set](https://github.com/com-480-data-visualization/datavis-project-2022-shazam/tree/main/dataset/crawler/data) augmentation
 
Our website is dedicated to analyzing billboard ranking data to make recommendations for new pop music lovers. The billboard weekly ranking data from 2018 to 2022 has been obtained. 
 
The audio features and lyrics data for all top 20 tracks from each week, along with the singers' data that occurs within the time range, have been augmented to the dataset in preparation for milestone 3. The [augmented](https://github.com/com-480-data-visualization/datavis-project-2022-shazam/blob/main/dataset/crawler/billboard.py) data set includes around 280 distinct singers (in total, about 4000 tracks from all singers) and 300 distinct tracks from Billboard weekly top 20.

Due to the slowness and rating limiting of the Genius API, current data set stored on the website is mostly without the lyrics data.
 
#### Sketch 
 
![Core Visualization Sketches](https://i.imgur.com/kommLWv.jpg)
> Figure 1
 
As depicted in `Figure 1`, we attempt to make a Single-Page Application (SPA), which will have a fluid that guides the user to explore music with ease. 
 
The main flow of our website is as followed: upon loading the website, the user will be presented with an introduction text to explain our goals and ideas (`Figure 1, top left`). With a click on the button to start the exploration, the user will be presented with a time slider, in which the user can select a specific week between 2018 and 2022 (`Figure 1, top right`). Upon the selection of a week, the top singers of the week will show up, and the accumulated ranking leaderboard, presenting the most favored singer, will show up on the screen. The user can then click on the singer to view the singer's complete analysis (`Figure 1, lower right`), including general audio feature analysis, and lyrics analysis, with a breakdown with time, album, and all-time being available to the user to switch around.
 
The user can also select the years 2018, 2019, 2020, 2021, and 2022, to view the yearly music report (`Figure 1, lower left`), which will present the trends of the music, top songs, etc. so it's easy to see how the music evolves over time.
 
An alternative exploration can be done using the search bar by searching the singer's name. If the singer happens to be in the database, the same singer analysis data (`Figure 1, lower right`), will be presented. 
 
### Website [prototype](https://com-480-data-visualization.github.io/datavis-project-2022-shazam/) 
 
The [prototype](https://com-480-data-visualization.github.io/datavis-project-2022-shazam/) roughly presents our current experiment in the flow mentioned above. The style and functionalities will be heavily tuned and amended.
 
![Main](https://i.imgur.com/Iue9dO5.png)
> Figure 2
 
`Figure 2` presents the idea in `Figure 1, top left`.
 
![Start exploring](https://i.imgur.com/kioMyBo.png)
> Figure 3
 
`Figure 3` presents the idea in `Figure 1, top right`, before selecting a time on the time slider.
 
![Exploring week](https://i.imgur.com/Go9OtuY.png)
> Figure 4
 
`Figure 4` presents the idea in `Figure 1, top right`, after selecting a time on the time slider.
 
The singer and yearly report are still work-in-progress at the time of writing, but it will be using the tools listed in the following section `List of tools in use for each visualization`.
### List of tools in use for each visualization
 
To showcase the singers who have the most popular songs during the selected week, we will use a bubble chart to represent the singers whose songs figured in the top 20. The size of the bubble represents the number of songs in the top 20 from the corresponding singer. We are planning to use d3.js to accomplish the task. (Reference links: [[1]](https://observablehq.com/@d3/bubble-chart) [[2]](https://d3-graph-gallery.com/bubble.html))
 
Radar chart will be used to present the musical characteristics (audio features), we take inspiration from the following links: [[1](https://d3-graph-gallery.com/spider)] [[2](https://github.com/alangrafu/radar-chart-d3)] [[3](https://www.chartjs.org/docs/latest/charts/radar.html)]

To complete our exploration on audio features, we would like to visualize the tempo and key of each song for a given singer using a scatter plot with tempo on x-axis and key on y-axis, this will give us a sense about the artist's favorite keys and tempos, as well as the relation between them. (Reference link: [[1]](https://observablehq.com/@d3/brushable-scatterplot)) 

The lyrics analysis will be carried out using a word cloud, which provides a direct view of the most frequently occurring words. (Reference link: [[1]](https://github.com/jasondavies/d3-cloud))
 
The Lecture 6 slides are useful for us since they talked about the different marks and channels, and how to choose them to achieve high effectiveness. We understand that the position is the strongest mark, so we will make use of it to represent the timeline in our work.
 
The Lecture 11 slides are particularly helpful because it gives us inspiration on visualizations of musical data, such as [the color of sound](https://www.behance.net/gallery/35686979/The-Color-of-Sound-A-Data-Visualization) and [the evolution of music taste](https://pudding.cool/2017/03/music-history/). We also learned about star plots and bubble plots in the Tabular data in this lecture.
 
Bootstrap is used to set up the main nav bar and miscellaneous parts of the website. It has decent CSS templates and alignment containers that we can use to structure our website. The current prototype is relying on Bootstrap heavily, especially aligning components using containers.  
 
The interaction and data loading is accomplished using Vue.js since it supports convenient DOM manipulation. The website prototype is actually already leveraging using Vue.js, which allows us to animate the button actions and time slider actions, and easily load data and render the HTML code dynamically.

The data in use will be stored on Github course project repo, using Vue.js to fetch the raw files from it, and then parse the data and process it to feed it into the d3.js visualization. The data format being stored in the repo is always JSON, which is friendly to be operated on.
 
### Potential Extra Visualization
 
* ![The color of sound](https://i.imgur.com/9PLgoKK.png) Reference: [Tweaking [1](https://observablehq.com/@d3/cluster)] 
* We are considering replacing the name of singers in the bubble chart with their profile picture, which will be much more interaction-friendly and recognizable to the user.


## Milestone 3 

* Website: [Website](https://com-480-data-visualization.github.io/datavis-project-2022-shazam/)
* Process book: [Process book](https://github.com/com-480-data-visualization/datavis-project-2022-shazam/blob/main/Dataviz%20Report%20Shazam.pdf)
* Screencast: [Screencast](https://youtu.be/QkOrxwI-qDw)
