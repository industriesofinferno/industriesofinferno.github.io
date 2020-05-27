$(document).scroll(function () {
    /*Show element after user scrolls 800px
    var y = $(this).scrollTop();
    if (y > 800) {
        $('.bottomMenu').fadeIn();
    } else {
        $('.bottomMenu').fadeOut();
    }*/

    // Show element after user scrolls past 
    // the top edge of its parent 
    var y = $(this).scrollTop();
    $('#belobara').each(function () {
        var t = $('#deiktis1').offset().top;
        if (y > t) {
            $(this).fadeIn();
        } else {
            $(this).fadeOut();
        }
    });
});



$(document).ready(function(){

    $("#buttondown").click(function() {
        $('html, body').animate({
            scrollTop: $("#blogposts").offset().top-50
        }, 1000);
    });
  
  }); 

$(document).ready(function(){

  $(".buttontoggle").click(function(){
    $(".paneli").toggle('medium', function() {
        if ($(this).is(':visible'))
            $(this).css('display','inherit');
    });
  });

});

$(document).ready(function(){

    $(".mobilnavbutton").click(function(){
      $(".barheia").toggle('medium');
      $(".kleise").toggle();
    });
  
  });