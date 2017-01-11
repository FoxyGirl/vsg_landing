;(function () {
    'use strict';

    /** @constant
     *  @type {number} HEIGHT_SHOW : min height for window scrolling 680px
     */
    var HEIGHT_SHOW = 680,
        /** trigger for using function toUp in callback
         *  @type {boolean}
         */
        comeBack = document.getElementById('comeback'),
        link_2 = document.getElementById('link_2'),
        link_3 = document.getElementById('link_3'),
        link_4 = document.getElementById('link_4');

    //if window scrolling more than HEIGHT_SHOW to show toUp anchor
    comeBack.style.display = (window.pageYOffset > HEIGHT_SHOW ? 'block' : 'none');

    window.onscroll = function () {
        comeBack.style.display = (window.pageYOffset > HEIGHT_SHOW ? 'block' : 'none');
    };

   // var V = 0.2; // скорость, может иметь дробное значение через точку

    var scrollElem = function(e) {
        e.preventDefault();
        console.log(this.href);
        var V = 0.2, // скорость, может иметь дробное значение через точку
            TOP_OFFSET = 10; // отступ от окна браузера
        var w = window.pageYOffset,  // прокрутка
            hash,
            arr = this.href.split('/');
        hash = arr[arr.length - 1];
        console.log('hash= ' + hash);

        var    t = document.querySelector(hash).getBoundingClientRect().top - TOP_OFFSET,  // отступ от окна браузера до id
            start = null;
        console.log('t= ' + t);
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    };

    comeBack.addEventListener('click', scrollElem, false);

    link_2.addEventListener('click', scrollElem, false);

    link_3.addEventListener('click', scrollElem, false);

    link_4.addEventListener('click', scrollElem, false);
})();