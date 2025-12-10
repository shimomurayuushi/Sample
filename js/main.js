$(function() {
    const $pagetop = $('#page-top');
    const scrollThreshold = 200; // 200pxスクロールしたらボタンを表示
    const scrollSpeed = 500; // スクロール速度（0.5秒）

    // 1. スクロール時の処理
    $(window).scroll(function () {
        if ($(this).scrollTop() > scrollThreshold) {
            // スクロール量がしきい値を超えたら表示
            $pagetop.addClass('is-active');
        } else {
            // しきい値以下なら非表示
            $pagetop.removeClass('is-active');
        }
    });
    
    // 2. クリック時の処理（スムーススクロール）
    $pagetop.click(function (e) {
        e.preventDefault(); // aタグのデフォルト動作をキャンセル
        
        // ページトップ（scrollTop: 0）まで滑らかにスクロール
        $('body,html').animate({
            scrollTop: 0
        }, scrollSpeed);
    });
});