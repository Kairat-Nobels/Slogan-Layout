$(function ()
{
    let header = $("#headerJs");
    let intro = $("#introJs");
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function ()
    {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        if (scrollPos > introH) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
        // introH 
    }) 
});
const press = document.querySelector('.btn');
const radio = document.querySelector('#muzic');
var a = 1;
press.addEventListener('click', () =>
{
    a++;
    if (a % 2 == 0) {
        radio.play();
    }
    else {
        radio.pause();
    }

});

const burger = document.querySelector('.burger');
const active = document.querySelector('.row');

burger.addEventListener('click', function ()
{
    active.classList.toggle('nav-active');
})


$("[data-scroll]").on("click", function (event)
{
    event.preventDefault();
    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;
    active.classList.toggle('nav-active');
    $("html, body").animate({
        scrollTop: elementOffset - 100
    }, 800)
})