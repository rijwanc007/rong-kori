function _(x){
    return document.getElementById(x);
}
jQuery(document).ready(function(){
    jQuery('#slider').skdslider({
        slideSelector: '.slide',
        delay:5000,
        animationSpeed:2000,
        showNextPrev:true,
        showPlayButton:true,
        autoSlide:true,
        animationType:'fading'
    });
});