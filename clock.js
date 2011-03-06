// el - a dom element to render the clock in
// opts - a dict of options
function clock(el, opts) {
    var options = {
        // the clock will be updated every tickInterval ms
        // lower numbers => smoother animation
        tickInterval: 100,
        // [r,g,b]
        // startColor - the color when the minute has just started
        startColor: [0, 255, 0],
        // endColor - the color when the minute has ended
        //endColor: [245, 0, 61]
        endColor: [255, 0, 0]
    }

    // override default options
    for(var key in opts) {
        options[key] = opts[key];
    }

    // bootstrap the container element
    var hours = "<span name='clock.hours'></span>";
    var minutes = "<span name='clock.minutes'></span>";
    el.innerHTML = hours + " : " + minutes;

    // this is where the magic happens
    function tick() {
        function interpolateColor(start, end, pct) {
            return  start + Math.floor((end - start) * pct);
        }
        var d = new Date();
        var hours = el.firstChild;
        var minutes = el.lastChild;

        hours.innerHTML = d.getHours();
        minutes.innerHTML = d.getMinutes();
        var pct = d.getSeconds() / 59;
        var r = interpolateColor(options['startColor'][0], options['endColor'][0], pct);
        var g = interpolateColor(options['startColor'][1], options['endColor'][1], pct);
        var b = interpolateColor(options['startColor'][2], options['endColor'][2], pct);
        minutes.style.color = "rgb("+r+","+g+","+b+")";
    }

    window.setInterval(tick, options['tickInterval']);
}
