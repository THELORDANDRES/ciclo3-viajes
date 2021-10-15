'use strict';

window.addEventListener('load', function(){
    new Glider(this.document.querySelector('.carousel__lista'),{
        slidesToShow: 1,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        }
    }); 
})