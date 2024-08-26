let observer =  new IntersectionObserver((e)=>{
    e.forEach((박스)=>{
        박스.target.scroll.style = 0.5;
    })
})

let header = document.querySelectorAll('header');
observer.observer(header[0]);