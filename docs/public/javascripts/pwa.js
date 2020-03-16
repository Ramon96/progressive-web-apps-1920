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
    if(filter){
        filter.addEventListener("change", onSelect);
    }
})()