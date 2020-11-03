// Preloder
$(window).on('load',function(){
	$('#status').delay(1000).fadeOut();
	$('#loader').delay(1000).fadeOut();
});

// Owl Carousel Member Slider
$(function(){
  $("#team-members").owlCarousel({
  	items:2,
  	autoplay:true,
  	smartSpeed:700,
  	loop:true,
  	autoplayHoverPause : true,
  	nav : true,
  	dots : false,	
  	navText : ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right></i>']
  });
});

// Progress Bar

$(function(){
  $('#progress-element').waypoint(function(){
    $('.progress-bar').each(function(){
    $(this).animate({
      width : $(this).attr("aria-valuenow") + "%"
    },1000); 
  })  //end of each method
    this.destroy();
  },{   
      offset : 'bottom-in-view'    
  });
  
}) //end of document
