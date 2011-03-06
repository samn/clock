// el - a dom element to render the clock in
// opts - a dict of options
function clock(el, opts) {
    var options = {
        // the clock will be updated every tickInterval ms
        // lower numbers => smoother animation
        tickInterval: 100
    }

    // override default options
    for(var key in opts) {
        options[key] = opts[key];
    }

    // bootstrap the container element
    var hours = "<span name='clock.hours'></span>";
    var minutes = "<span name='clock.minutes'></span>";
    el.innerHTML = hours + " : " + minutes;

    function tick() {
        var d = new Date();
        var hours = el.firstChild;
        var minutes = el.lastChild;

        hours.innerHTML = d.getHours();
        minutes.innerHTML = d.getMinutes();
    }

    window.setInterval(tick, options['tickInterval']);
}
