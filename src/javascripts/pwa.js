import getOfflineUrls from "./offline.js";
import "../stylesheets/style.css";
import champion from '../champion.json';
import manifestwebmanifest from'../manifest-webmanifest.json';

//https://webpack.js.org/guides/dependency-management/#context-module-api
importAll(require.context('../images/', true, /\.(png|jp(e*)g|svg)$/));

(function(){
    const onSelect = (e) =>{
        const selected = filter.value;
        fetch(window.location.href + '&champion=' + selected + '&pwa=true')
            .then(res => res.text())
            .then(html => {
                const main = document.querySelector('main');
                main.innerHTML = html
            })
    }
    
    const filter = document.getElementsByTagName("select")[0];
    const submit = document.querySelector('#filtersubmit');

    const shareButton = document.getElementById("share");
    const onlinestatus = document.getElementById("onlinestatus");

    if(shareButton){
         const title = window.document.title;
         const url = window.document.location.href;

         if(navigator.share){
        shareButton.classList.remove('hidden')

         shareButton.addEventListener('click', () => {
                navigator.share({
                    title: `${title}`,
                    url: `${url}`
                }).then(() =>{
                    console.log('Share succes')
                })
            })
        }
        else{
           //native share is not supported display fallback inside this logic

        }
    }
    if(submit){
    submit.classList.add('hidden');
    }
    if(filter){
        filter.addEventListener("change", onSelect);
    }


    if (navigator.onLine) {
        console.log('online');
      } else {
        console.log('offline');
        onlinestatus.classList.add('visible')
      }

      if(document.querySelector('#url')){
        getOfflineUrls(); 
      }
})()

function importAll (r) {
    r.keys().forEach(r);
  }