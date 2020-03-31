# Progressive Web Apps @cmda-minor-web · 2019-2020

![screenshot of the homepage of the pwa subject](https://github.com/Ramon96/progressive-web-apps-1920/blob/master/readme-sources/pwa.png?raw=true)

## Live demo
Link to live demo: [https://progressive-web-apps.herokuapp.com/](https://progressive-web-apps.herokuapp.com/)


## Description
During Progressive Web Apps i continue to work on my web app from scratch project and make it progressive. The reason im not using my Oba project is because I made an Voice interface using google assistance there. 

## Installation
To install the project clone to project usining 

`git clone https://github.com/Ramon96/progressive-web-apps-1920.git`

After that use your CLI to navigate to thet project and hit `npm install` to install the used depedencie's

This project also makes use of a .env file. Ask the developer for its content.

## Deployement

To deploy the project simply push your work to master and heroku will take care of the rest.

## Api
Im using the league of legends api 
The endpoint should look something like this. 

`https://euw1.api.riotgames.com/lol/`

For the league of legends you need an api key (This may expire after 24 hours if you haven't been manually reviewed) 
And you need an league of legends account to login on the developer portal. 

### Endpoints
Warning! 
An endpoint can be down.
You can check that here [Api Status](https://developer.riotgames.com/api-status/)

`summoner/v4/summoners/by-name/${name}`
`match/v4/matchlists/by-account/${summonerData.accountId}`
`match/v4/matches/${gameKey}`

### Rate limit
20 requests every 1 seconds(s)
100 requests every 2 minutes(s)


## Feature's
- [x] Search player
- [x] Filter trough champions
- [x] View the match in details
- [x] Offline usage
- [x] Native share (when supported)
- [x] No javascript support
- [x] Installable

## Checklist
- [x] Express installation
- [x] Adding image's
- [x] improve the styling.
- [x] add a manifest.json
- [x] make the filter system server sided when javascript is disabled
- [x] Update button when a new version is available
- [x] Offline page
- [x] Native share (when supported)
- [x] Feedback when the user is visiting in offline mode
- [x] Error handling, what if the user enters a username that does not exist.
- [x] Webpack intergration
- [ ] show a loading state when the program is fetching data (skeleton ui maybe?)
- [ ] Adding a favicon
- [ ] Install button

## Audits
![audits](https://github.com/Ramon96/progressive-web-apps-1920/blob/master/readme-sources/pwa-audits.png?raw=true)

Only thing I'm losing points on is best practises
Im not serving my content on http2 (which I dont know how to fix _yet_)

![best practices](https://github.com/Ramon96/progressive-web-apps-1920/blob/master/readme-sources/bestpractices.png?raw=true)

## Credits
Declan rec for helping me out with the service worker. Used some functions in his example.

## Conclussion 
### Difference between client side rendering and server side rendering 
When you load the data from the client you have to create a node for every element you want to display. However when you load the data from the server you will be able to load the data before the page is rendered and fill in a templating engine to show the data dynamically. In WAFS the client would first fetch the data (then show a boring loading bar) then create an elements for every datapoint and then display it to the user. The client was also responsible for enhancements like filtering.

Now the server will get the data. show this data to the user (without the boring loading bar) and present the user the recieved data. The client is now only being used to enhance for example with filtering data.

### How does a server worker work 
A service worker is a script that runs in the background. The serice worker works seperate from the web page.
You can use the service worker to applie differnet caching strategies, so when your website is offline the service worker will serve the user with information form the storage. 

A service worker will not work when javascript is enabled. 

Additional your service worker can also send push notifications  to the user and do periodic background syncs.


I use the service worker to precache the images from the client (I don't think this was a great idea. I should only store the images when these are being used in the browsers instead of storing all of them at once)
and to store html pages visited. When the user is offline the service worker will redirect the user to a precached offline page and display's all the pages stored in the cache. The user will be able to visit previously visited pages with ease. pretty neat.

You can read the service worker [here](https://github.com/Ramon96/progressive-web-apps-1920/blob/master/src/sw.js) 

### Critical rendering path
When using a frameworks like react or vue, then everything will be rendered using javascript. But when this gets too heavy then the user will experience a long waiting time, why? Because javascript is blocking the first paint. To solve this you want to render with help of the server. The server will generate the required html file.

Additionally your css and client sided javascript can still block the first paint. 
You wanna keep an eye on your network tap to see what is slowing down the first useable state.

adding defer to your javascript script tag helps (or putting it at the bottom of the body). 
Little tricks like minifying scripts, concatenating scripts together as one, loading async and optimizing images might helps aswell. 

## License 
This project makes use of the MIT License
[License](https://github.com/Ramon96/progressive-web-apps-1920/blob/master/LICENSE)
