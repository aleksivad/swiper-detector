function SwipeLeftRightDetector(el, swipeLeft, swipeRight) {

    var start, end;

    el.addEventListener('touchstart', handleStart);
    el.addEventListener("touchmove", handleMove);
    el.addEventListener('touchend', handleEnd);

    function handleStart(evt) {
        start = evt.touches[0].clientX;
    };

    function handleMove(evt) {
        end = evt.touches[0].clientX;
    };

    function handleEnd(evt) {
        if(start > end) {
            swipeLeft();
        } else {
            swipeRight();
        };
    };

    this.dispose = function() {
        el.removeEventListener('touchstart', handleStart);
        el.removeEventListener("touchmove", handleMove);
        el.removeEventListener('touchend', handleEnd);
    }
};