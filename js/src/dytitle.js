var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="shortcut icon"]').attr('href', "/cheating32.png");
        document.title = '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="shortcut icon"]').attr('href', "/favicon.png");
        document.title = 'Bazinga!!  Enjoy Urself!!';
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});
