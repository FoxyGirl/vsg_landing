;(function () {
    'use strict';
console.log('test');
    /** @constant
     *  @type {number} HEIGHT_SHOW : min height for window scrolling 50px
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

    var V = 0.2; // скорость, может иметь дробное значение через точку

    comeBack.addEventListener('click', function(e) {
        e.preventDefault();
        var w = window.pageYOffset,  // прокрутка
            hash = '#advertising',
            // hash = this.href.replace(/[^#]*(.*)/, '#advertising'),  // id элемента, к которому нужно перейти
            t = document.querySelector(hash).getBoundingClientRect().top - 10,  // отступ от окна браузера до id
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
    }, false);

    link_2.addEventListener('click', function(e) {
        e.preventDefault();
        var w = window.pageYOffset,  // прокрутка
            hash = '#description',
            // hash = this.href.replace(/[^#]*(.*)/, '#advertising'),  // id элемента, к которому нужно перейти
            t = document.querySelector(hash).getBoundingClientRect().top - 10,  // отступ от окна браузера до id
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
    }, false);

    link_3.addEventListener('click', function(e) {
        e.preventDefault();
        var w = window.pageYOffset,  // прокрутка
            hash = '#capabilities',
            // hash = this.href.replace(/[^#]*(.*)/, '#advertising'),  // id элемента, к которому нужно перейти
            t = document.querySelector(hash).getBoundingClientRect().top - 10,  // отступ от окна браузера до id
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
    }, false);

    link_4.addEventListener('click', function(e) {
        e.preventDefault();
        var w = window.pageYOffset,  // прокрутка
            hash = '#benefits',
            // hash = this.href.replace(/[^#]*(.*)/, '#advertising'),  // id элемента, к которому нужно перейти
            t = document.querySelector(hash).getBoundingClientRect().top - 10,  // отступ от окна браузера до id
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
    }, false);

})();