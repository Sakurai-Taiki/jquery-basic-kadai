$(function() {
  //文字色変化ボタンで赤色に変わる
  $('#change-color').on('click', function() {
    $('#target').css('color', 'red');
  });

  //文字内容変化ボタンで英語に変わる
  $('#change-text').on('click', function() {
    $('#target').text('Hello!');
  });

  //フェードアウトボタンで文字が消える
  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });

  //フェードインボタンで文字が出る
  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });
});