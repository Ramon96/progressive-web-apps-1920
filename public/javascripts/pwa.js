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

    if(shareButton){
         const title = window.document.title;
         const url = window.document.location.href;

         shareButton.addEventListener('click', () => {
             if(navigator.share){
                navigator.share({
                    title: `${title}`,
                    url: `${url}`
                }).then(() =>{
                    console.log('Share succes')
                })
             }
             else{
                 //fallback share]
                shareButton.classList.remove('hidden')
                 console.log('no support')
             }
         })
    }
    if(submit){
    submit.classList.add('hidden');
    }
    if(filter){
        filter.addEventListener("change", onSelect);
    }
})()