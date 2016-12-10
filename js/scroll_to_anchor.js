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
        upTrigger,
        comeBack = document.getElementById('comeback');

    //if window scrolling more than HEIGHT_SHOW to show toUp anchor
    comeBack.style.display = (window.pageYOffset > HEIGHT_SHOW ? 'block' : 'none');
    upTrigger = (window.pageYOffset > HEIGHT_SHOW ? 'true' : 'false');

    window.onscroll = function () {
        comeBack.style.display = (window.pageYOffset > HEIGHT_SHOW ? 'block' : 'none');
    };

    //set handler for click on scrolling anchor
    comeBack.addEventListener('click', function(e) {
        e.preventDefault();
        if (!upTrigger) { return; }
        toUp();
    }, false);

    /*
    var V = 2; // скорость, может иметь дробное значение через точку

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
*/
    //function window scrolling
    /** @function toUp
     *  To scroll window to up using requestAnimationFrame
     *  Change upTrigger according condition (window.pageYOffset > 0) ? false : true
     */
    function toUp(stopYOffset) {
        var stopYOffset = stopYOffset || 0;
        upTrigger = false;
        console.log('stopYOffset= ' + stopYOffset);
        //speed depends from distance to top
        var speed = window.pageYOffset/10;
        window.scrollBy(0,-speed);
        if (window.pageYOffset > 0) {
            requestAnimationFrame(toUp);
        } else {
            upTrigger = true;
        }
    }

})();