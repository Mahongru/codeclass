$(function() {

  function SetHeight(){
      const h = $(window).height();
      const n = $('.navbar').height();
      const m = $('.user-count-container').height() + $('.control-container').height() + $('.message-compose-container').height();
      const vh = ((h - n) / h) * 100 - 0.1;
      const mvh = ((h - n - m) / h) * 100 - 0.1;
      $('.chat-container').css('height', vh + 'vh');
      $('.env-container').css('height', vh + 'vh');
      $('.message-list-container').css('height', mvh + 'vh')
  }

  function SetWidth(){
    const w = $(window).width();
    const m = $('.chat-container').width();
    const wh = ((w - m) / w) * 100 - 0.1;
    $('.editor').css('width', wh + 'wh');
  }

  $(document).ready(SetHeight);
  $(window).resize(SetHeight);
  $(window).resize(SetWidth);

});