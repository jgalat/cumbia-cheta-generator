var first, cumbia;

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

$(function () {
  cumbia = function () {
    var i, result = "";
    var lyric = $('#actual-lyric');
    var title = $('#title');
    var animationEntrance = 'bounceInLeft',
        animationExit = 'bounceOutRight';

    title.fadeOut(500, function () {
      $(this).html(markovtitles.makeChain(1).capitalize()).fadeIn(500);
    });

    var result = "";
    for (i = 0; i < 6; i++)
      result += '<span>' +  markovlyrics.makeChain(7).capitalize() + '</span>';

    lyric.removeClass(animationEntrance)
      .addClass(animationExit)
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function (){
              $(this)
                .empty()
                .removeClass(animationExit)
                .html(result)
                .addClass(animationEntrance);
            });

  };

  first = function () {
    var button = $('#button'),
        ribbon = $('#ribbon'),
        title = $('#title'),
        lyric = $('.lyric');

    var curr = ribbon.height();
    ribbon.css('height', 'auto');
    var auto = ribbon.height();

    ribbon.height(curr).animate({ height : auto }, 450, function () {
      $('.main').toggle(0, function (){
        title.css('min-height', '3rem');
        lyric.css('min-height', '30rem');
        $('html, body').animate({ scrollTop : $('#title').offset().top }, 1000);
        cumbia();
      });
      button.attr("onclick", "cumbia();");
    });
  };
});
