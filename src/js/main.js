window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('preloader_hidden');
});

$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();
    
    $('.section').each((i, el) => {
        
        if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance){
            $('nav a').each((i, el) =>{
                if ($(el).hasClass('active')){
                    $(el).removeClass('active');
                }
            });
            $('nav li:eq(' + i + ')').find('a').addClass('active');
        }
    });
});

//$("modalbutton").click();

function modal() {
    $("#modalbutton").click();
}

setTimeout(modal(), 50000)