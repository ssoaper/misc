/// redirect-frontend.js
/// alias rf.js
/**
 * @example
 * twitter.com##+js(rf, https://nitter.nl)
 * www.reddit.com##+js(rf, https://old.reddit.com)
 * */
(function() {
    "use strict";
    const host = "{{1}}";
    window.location.replace(host + window.location.pathname);
})();
