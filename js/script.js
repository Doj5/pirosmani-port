$(function () {
  var mySwiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var menuSwiper = new Swiper('.swiper-container-menu', {
    slidesPerView: 'auto',
    spaceBetween: 76,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  var swiperReviews = new Swiper(".slider-reviews", {
    slidesPerView: 2,
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next",
    },
  });
})

$('.play_yt').click(function () {
  $(this).hide();
  $('.ytvideo').attr('src', 'https://www.youtube.com/embed/0mRhdV3ldVM?autoplay=1' )
})

jQuery(function(){
  var j = jQuery; //Just a variable for using jQuery without conflicts

  var n =1;

  j('.input_range input').val(n + 'шт.')

  j('.plus').on('click' , function(){
    var gg = j(this).parent('.input_range').find('input').val().replace('шт.', '');
    j(this).parent('.input_range').find('input').val(++gg + 'шт.');
  })

  j('.min').on('click' , function(){
    var gg = j(this).parent('.input_range').find('input').val().replace('шт.', '');
    if (gg >= 1) {
      j(this).parent('.input_range').find('input').val(--gg + 'шт.');
    }  else{
      // Otherwise do nothing
    }
  })
});


const multiDefault = () => {
  const elements = document.querySelectorAll('.multi-default');
  elements.forEach(el => {
    const choices = new Choices(el , {
      searchEnabled: false,
      itemSelectText: '', 
      String: true,
    });
  });
}

multiDefault();

jQuery('.line-block-buttons .tab-b-1').on('click' ,function(){
  jQuery('.line-block-buttons button').removeClass('active')
  jQuery(this).addClass('active');
  jQuery('.line-tab-1').addClass('active');
  jQuery('.line-tab-2').removeClass('active');
});

jQuery('.line-block-buttons .tab-b-2').on('click' ,function(){
  jQuery('.line-block-buttons button').removeClass('active')
  jQuery(this).addClass('active');
  jQuery('.line-tab-2').addClass('active');
  jQuery('.line-tab-1').removeClass('active');
});



if($(window).width() <= 767){
  jQuery('.open-info').on('click' , function(){
    jQuery(this).parents('.block-order').find('.order-items').show();
  });
  
  jQuery('.back-mob').on('click' , function(){
    jQuery(this).parents('.block-order').find('.order-items').hide();
  });
}

$('.navbar-toggler').on('click' , function(){
  $(this).toggleClass('change-button');
})


$('.cart-mob').on('click' , function(){
  $('.cart-popup').toggleClass('active');
})

$('.close-cart-popup').on('click' , function(){
  $('.cart-popup').toggleClass('active');
})