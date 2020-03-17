// ==UserScript==
// @name         MastoFE light theme
// @version      0.1
// @description  Change MastoFE's theme to light on pleroma
// @author       @cesese@pleroma.bunni.eu
// @match        https://pleroma.bunni.eu/web/*
// @grant        none
// ==/UserScript==

// change the @match to your instance's mastofe (should be <instance>/web/*)

(function() {
    'use strict';

    // Your code here...
    // <link rel="stylesheet" media="all" href="/packs/skins/glitch/mastodon-light/common.css">
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.media = "all";
    link.href = "/packs/skins/glitch/mastodon-light/common.css";
    document.head.appendChild(link);

})();
