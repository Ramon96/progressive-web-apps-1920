# Progressive Web Apps @cmda-minor-web · 2019-2020

![screenshot of the homepage of the pwa subject](https://github.com/Ramon96/progressive-web-apps-1920/blob/master/readme-sources/pwa.png?raw=true)

## Feedback

Er is niet echt feedback waar ik naar opzoek ben maar ik wil wel delen waar ik mee bezig ben geweest deze week

### trots1
Wanneer de service worker een nieuwe naam heeft verschrijnt er een update knop, dit is super nice. Als ik namelijk m'n website overhaul kan ik me service worker een nieuwe versie geven.
De gebruiker laadt dan nog wel de gecachde versie. Daarna laat de worker een bericht zien van 'jo er is een nieuwe update van de site, je kijkt nog naar een oude versie. Druk op de knop om de nieuwe versie binnen te halen'

### trots2
Het is me ook gelukt om met de service worker een network first approach aan te pakken. Wanneer jij een pagina bezoekt word de pagina in de cache opgeslagen. Wanneer je offline bent word je naar een offline pagina gestuurd. Daar vind je een lijst me alle opgeslagen url's die de gebruiker kan bezoeken.

### minitrots3
Ik heb ook native share gehanteerd en het werkt. Laat de app net meer appie voelen.

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

To deploy the project, navigate to the root folder of this project and use the command.

`git subtree push --prefix docs heroku master` 

<!-- ...but how does one use this project? What are its features 🤔 -->
## Feature's
- [x] Search player
- [x] Filter trough champions
- [x] view the match in details

<!-- What external data source is featured in your project and what are its properties 🌠 -->

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
- [ ] show a loading state when the program is fetching data (skeleton ui maybe?)
- [ ] Make an actor diagram.
- [ ] Make an interaction diagram.
- [ ] Error handling, what if the user enters a username that does not exist.
- [ ] Webpack intergration
- [ ] Adding a favicon

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
## License 
This project makes use of the MIT License
[License](https://github.com/Ramon96/progressive-web-apps-1920/blob/master/LICENSE)
