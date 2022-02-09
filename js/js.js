window.onscroll = function showHeader(){
    let header = document.querySelector('.header');


    if(window.pageYOffset>180){
        header.classList.add('menu');
    }else{
        header.classList.remove('menu');
    }
}

