function _(x){
    return document.getElementById(x);
}
_('offer_status').style.display = 'block';
_('grantee_status').style.display = 'none';
_('standard_status').style.display = 'none';
$(document).on('click','.offer_icon',function(){
    var id = $(this).data('id');
    if(id == 'grantee'){
        _('offer_status').style.display = 'none';
        _('grantee_status').style.display = 'block';
        _('standard_status').style.display = 'none';
    }
    else if(id == 'provide'){
        _('offer_status').style.display = 'none';
        _('grantee_status').style.display = 'none';
        _('standard_status').style.display = 'block';
    }
    else{
        _('offer_status').style.display = 'block';
        _('grantee_status').style.display = 'none';
        _('standard_status').style.display = 'none';
    }
});
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
var right = 0;
var maxMargin;
var jumpMargin = 150;
function setWidth(){
    var boxwidth = document.querySelector(".container_o").offsetWidth;
    var displaywidth = document.querySelector(".row_o").offsetWidth;
    var displayheight = document.querySelector(".row_o").offsetHeight;
    var children = document.querySelectorAll(".row-container > .container_o").length;
    var outerboxwidth = children * boxwidth + (children*10);
    document.querySelector(".row-container").style.width = outerboxwidth+"px";
    document.querySelectorAll("button")[0].style.height = displayheight+"px";
    document.querySelectorAll("button")[1].style.height = displayheight+"px";
    maxMargin = outerboxwidth - displaywidth;
}
function slideLeft(event){
    var rowcont = document.querySelector(".row-container");
    if(right <= -maxMargin){
        event.preventDefault();
    }
    else{
        right -= jumpMargin;
    }
    rowcont.style.marginLeft = right+"px";
}
function slideRight(event){
    var rowcont = document.querySelector(".row-container");
    if(right==0){
        event.preventDefault();
    }
    else if(right >= maxMargin){
        event.preventDefault();
    }
    else{
        right += jumpMargin;
    }
    rowcont.style.marginLeft = right+"px";
}
window.onload=setWidth;
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});