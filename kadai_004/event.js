  $(function() {
  });//ドキュメント読み込み処理の為ここで;

//HTMLドキュメントが読み込みをしたときの処理
  $(window).on('load', function(){
    console.log('loadイベントが発生しました');
  });

//画面をスクロールをしたときの処理
    $(document).on('scroll', function(){
      console.log('scrollイベントが発生しました');
    });

