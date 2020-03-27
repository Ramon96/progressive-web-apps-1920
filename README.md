# Progressive Web Apps @cmda-minor-web · 2019-2020

![screenshot of the homepage of the pwa subject](https://github.com/Ramon96/progressive-web-apps-1920/blob/master/readme-sources/pwa.png?raw=true)

<!-- Add a link to your live demo in Github Pages 🌐-->
## Live demo
Link to live demo: [https://progressive-web-apps.herokuapp.com/](https://progressive-web-apps.herokuapp.com/)

<!-- ☝️ replace this description with a description of your own work -->
## Description
During Progressive Web Apps i continue to work on my web app from scratch project and make it progressive. The reason im not using my Oba project is because I made an Voice interface using google assistance there. 

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->
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

<!-- ...but how does one use this project? What are its features 🤔 -->
## Feature's
- [x] Search player
- [x] Filter trough champions
- [x] View the match in details
- [x] Offline usage
- [x] Native share (when supported)
- [x] No javascript support
- [x] Installable

<!-- What external data source is featured in your project and what are its properties 🌠 -->

## Actor Diagram

## Interaction Diagram

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->
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
- [ ] Make an actor diagram.
- [ ] Make an interaction diagram.
- [ ] Adding a favicon

## Audits

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->

## Credits
Declan rec for helping me out with the service worker. Used some functions in his example.

## License 
This project makes use of the MIT License
[License](https://github.com/Ramon96/progressive-web-apps-1920/blob/master/LICENSE)
