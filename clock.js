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
    var hours = "<div name='clock.hours'></div>";
    var minutes = "<div name='clock.minutes'></div>";
    el.innerHTML = minutes + " : " + seconds;

    function tick() {
        var d = new Date();
        for(var i = 0, l = el.childNodes.length; i < l; i++) {
            var child = el.childNodes[i];
            switch(child) {
                case "clock.hours":
                    child.innerHTML = d.getHours();
                    break;
            }
        }
    }

    window.setInterval(tick, options['tickInterval']);
}
