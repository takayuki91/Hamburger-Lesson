/* global $ */
$(function(){
  $('.menu-trigger').on('click',function(event){
    // 指定したactiveclassをトグル処理
    // アイコンクリックでactiveclass追加、サイクリックで削除
    // thisによって、発生した要素のみ変化
    $(this).toggleClass('active');
    // フェードイン・アウトの切替
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});