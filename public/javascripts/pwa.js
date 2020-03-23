(function(){
    const onSelect = (e) =>{
        const selected = filter.value;
        history.replaceState({}, '', '?champion=' + selected);
        fetch(window.location.href + '&pwa=true')
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
})()