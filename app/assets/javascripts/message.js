$(function(){
  function buildHTML(message){
    if ( message.image) {
      let html = 
        `<div class="Main__message_list__box">
          <div class="Main__message_list__box__top">
            <div class="Main__message_list__box__top__down">
              ${message.user_name}
            </div>
            <div class="Main__message_list__box__top__second">
              ${message.created_at}
            </div>
          </div>
    
          <div class="Main__message_list__box__bottom">
            <div class="Main__message_list__box__bottom__second">
              ${message.content}
            </div>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
        return html;
    } else {
      let html = 
        `<div class="Main__message_list__box">
          <div class="Main__message_list__box__top">
            <div class="Main__message_list__box__top__down">
              ${message.user_name}
            </div>
            <div class="Main__message_list__box__top__second">
              ${message.created_at}
            </div>
          </div>
    
          <div class="Main__message_list__box__bottom">
            <div class="Main__message_list__box__bottom__second">
              ${message.content}
            </div>
            
          </div>
        </div>`
        return html;
    }
    
  }

  $('.Main__footer__form').on('submit', function(e) {

    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST", 
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      let html = buildHTML(message);
      $('.Main__message_list').append(html)
      $('form')[0].reset();
      $('.box').animate({'height' : '200px'});
      $('.Main__message_list').animate({ scrollTop: $('.Main__message_list')[0].scrollHeight});
      $('.Main__footer__form__box__submit-btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  });
});