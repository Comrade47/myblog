$(document).ready(function(){
  $('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<i class="fas fa-chevron-left prev-arrow"></i>',
    nextArrow:'<i class="fas fa-chevron-right next-arrow"></i>',
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
         
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
       

    //   nav

    $('.nav-icon a').click(function(){
        $('nav').slideToggle(600);
    })


    // top btn
    
    $('#top').click(function(){
      $('html, body').animate({
        scrollTop:0
      },1000)
    })

    $(window).scroll(function(){
      var scroll_top=$(this).scrollTop()

      if(scroll_top>500){
          $('#top').fadeIn(300)
      }

      else{
        $('#top').hide()
      }
    })
})

