/**
 *
 * @param {*} el HTMLElement
 * @param {*} args {onSwipeLeft: ?Function, onSwipeRight: ?Function, threshold: ?Number, onMove: ?Function}
 */
 function SwipeRightLeftDetector(el, args) {

    var start, end = null;
    var threshold = args.threshold || 100;
    el.addEventListener('touchstart', handleStart);
    el.addEventListener("touchmove", handleMove);
    el.addEventListener('touchend', handleEnd);

    function handleStart(evt) {
        start = evt.touches[0].clientX;
        end = null;
    };

    function handleMove(evt) {
        end = evt.touches[0].clientX;
        typeof args.onMove == 'function' && args.onMove(start - end);
    };

    function handleEnd(evt) {
        if(end === null)
            return;
        if (Math.abs(start - end) < threshold || !end) {
            return;
        }
        if(start > end) {
            (typeof args.onSwipeLeft == 'function') && args.onSwipeLeft();
        } else {
            (typeof args.onSwipeRight == 'function') && args.onSwipeRight();
        };
    };

    this.dispose = function() {
        el.removeEventListener('touchstart', handleStart);
        el.removeEventListener("touchmove", handleMove);
        el.removeEventListener('touchend', handleEnd);
    }
};