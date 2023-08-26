   
   document.addEventListener('DOMContentLoaded', function(event)
   {
      var ThemeableMenu1_dropdownToggle = document.querySelectorAll('#ThemeableMenu1 .dropdown-toggle');
      ThemeableMenu1_dropdownToggle.forEach(item => 
      {
         var dropdown = new bootstrap.Dropdown(item, {popperConfig:{placement:item.getAttribute('data-bs-placement')}});
      });
      var ThemeableMenu1_dropdown = document.querySelectorAll('#ThemeableMenu1 .dropdown');
      ThemeableMenu1_dropdown.forEach(item => 
      {
         item.addEventListener('shown.bs.dropdown', function(e)
         {
            e.currentTarget.classList.add('show');
         });
         item.addEventListener('hidden.bs.dropdown', function(e)
         {
            e.currentTarget.classList.remove('show');
         });
      });
      var SlideShow1 = new bootstrap.Carousel("#SlideShow1", {interval:3000, ride: true});
   });
   
   $(document).ready(function()
   {
      $("a[href*='#LayoutGrid1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid1').offset().top }, 600, 'easeInSine');
      });
      $("a[href*='#LayoutGrid8']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid8').offset().top }, 600, 'easeInSine');
      });
      $("a[href*='#LayoutGrid10']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid10').offset().top }, 600, 'easeInSine');
      });
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#wb_LayoutGrid9').css('background-attachment', 'scroll');
      }
      if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {$('#preloader').remove();}
   });
   $(window).on('load', function()
   {
      $('#preloader').remove();
   });
