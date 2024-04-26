/// redirect-frontend.js
/// alias rf.js
/**
 * @example
 * www.youtube.com##+js(rf, https://poketube.fun)
 * www.reddit.com##+js(rf, https://troddit.com)
 * */
(function() {
    "use strict";
    const host = "{{1}}";
    window.location.replace(host + window.location.pathname);
})();
