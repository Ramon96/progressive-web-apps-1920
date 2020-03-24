function getOfflineUrls(){
    caches.open('pwa-cache25').then(urls => {
        return urls.keys().then(res => {
           return res;
        })
    }).then( urlList => {
        return urlList.filter(key => { 
            if(!key.url.includes('.png') &&  !key.url.includes('.css') && !key.url.includes('.json') && !key.url.includes('.js') && !key.url.includes('.jpg')){
                return key.url;
            }
        })
        
    }).then(res => {
        const ul = document.getElementById('url');
        res.map(item => {
            console.log(item.url)
                const el = document.createElement("li");
                el.innerHTML = `<a href="${item.url}">${item.url}</a>`;
                ul.appendChild(el);
        })
    })

}

export default getOfflineUrls;
