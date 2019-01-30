var $ = jQuery;

$( document ).ready(function(){
    // Open accordion if link to anchor from another page
    if(window.location.hash){
      openIfAccordion(window.location.href);
    }

    // Open accordions if link to anchor from this page
    $("a").click(function(){
      var url = String($(this).attr("href"));
      openIfAccordion(url);
    });

  // Anchor scrolling
  $("a").on('click', function(event) {
    if ($(this).parent().prop("tagName") != "SECTION" && this.hash !== "") {
      if(window.location.pathname == this.pathname) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
          window.location.hash = hash;
        });
      }
    }
  });
});

function openIfAccordion(url){
  var linkID = url.substring(url.lastIndexOf("#"));
  if(linkID){
    openAccordion($(linkID));
  }
}

function openAccordion(accordionWrapper){
  accordionWrapper.find('a:first').removeClass('au-accordion--closed');
  accordionWrapper.find('a:first').addClass('au-accordion--open');
  accordionWrapper.find('div:first').removeClass('au-accordion--closed');
  accordionWrapper.find('div:first').addClass('au-accordion--open');
}
