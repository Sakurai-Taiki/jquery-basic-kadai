//クリックしたらメッセージを表示する
$(document).ready(function () {
  //クリックをして動く仕組み
  $('.btn').on('click', function (){
    //メッセージを表示
    $('.text-box').val('クリックしました！');
  });
});