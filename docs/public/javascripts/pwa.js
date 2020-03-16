(function(){
    const onSelect = (e) =>{
        const selected = filter.value;
        history.replaceState({}, '', '?champion=' + selected);
        fetch(window.location.href + '&pwa=true')
            .then(res => res.text())
            .then(html => {
                const main = document.querySelector('main');
                main.innerHTML = html
                //Todo: improve this. maybe use createElement from html
                //Todo make submit possible so it works without javascript.
            })
    }
    
    const filter = document.getElementsByTagName("select")[0];
    const submit = document.querySelector('#filtersubmit');
    if(submit){
    submit.classList.add('hidden');
    }
    if(filter){
        filter.addEventListener("change", onSelect);
    }
})()