// DISABLE MOUSE SCROLL IN MAPS
// enable the pointer events only on click;
$('.gmap-wrapper').on('click', function () {
  $('.gmap-wrapper iframe').removeClass('scrolloff'); // set the pointer events true on click
});
// you want to disable pointer events when the mouse leave the canvas area;
$(".gmap-wrapper").mouseleave(function () {
  $('.gmap-wrapper iframe').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
});
