/* eslint-disable */

export default {
    easeInOutQuad(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    },

    easeInCubic(t, b, c, d) {
        var tc = (t/=d)*t*t;
        return b+c*(tc);
    },

    inOutQuintic(t, b, c, d) {
        var ts = (t/=d)*t,
        tc = ts*t;
        return b+c*(6*tc*ts + -15*ts*ts + 10*tc);
    }
}
