$(function(){
    function buildHTML(message){
      if ( message.image ) {
        var html =
        `<div class="message" data-message-id=${message.id}>
            <div class="upper-info">
              <div class="upper-info__user">
                ${message.user_name}
              </div>
              <div class="upper-info__date">
                ${message.date}
              </div>
            </div>
            <div class="main-message">
              <p class="main-message__text">
                ${message.body}
              </p>
            </div>
            <asset_path src=${message.image} >
          </div>`
        return html;
      } else {
        var html =
        `<div class="message" data-message-id=${message.id}>
            <div class="upper-info">
              <div class="upper-info__user">
                ${message.user_name}
              </div>
              <div class="upper-info__date">
                ${message.date}
              </div>
            </div>
            <div class="main-message">
              <p class="main-message__text">
                ${message.body}
              </p>
            </div>
          </div>`
        return html;
      };
    }
  $('.form').on('submit', function(e){
    debugger;
    e.preventDefault();
    var formData = new FormData();
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false 
    })
     .done(function(data){
       console.log(data);
       var html = buildHTML(data);
        $('.messages').append(html);
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        $('.form__message')[0].reset();
       })
     .fail(function(){
        alert('error');
      });
    
    return false;
   });
});
