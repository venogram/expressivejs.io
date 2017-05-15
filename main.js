const tabs = ['home', 'sample', 'quickstart', 'contact'];

for (let i = 0; i < tabs.length; i += 1) {
  //animate scrolling
  $(`#${tabs[i]}Button`).click(function () {
    $('html, body').animate({
      scrollTop: $(`#${tabs[i]}`).offset().top
    }, 1000);
  });

  //button highlight on hovering on respective tabs
  $(`#${tabs[i]}Button`).hover(
    //1st func: mouseover. 2nd func: mouseout
    function () {
      $(this).css({"background-color": "#383838"});
  }, function () {
      $(this).css({"background-color": "#2B2D33"});
  });
}

const arrows = ['home', 'sample', 'quickstart'];

for (let i = 0; i < arrows.length; i += 1) {
  $(`#${tabs[i]}Arrow`).click(function () {
    $('html, body').animate({
      scrollTop: $(`#${tabs[i + 1]}`).offset().top
    }, 1000);
  });
}