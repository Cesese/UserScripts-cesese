// ==UserScript==
// @name         MastoFE light theme
// @version      0.3
// @description  Change MastoFE's theme to light on pleroma
// @author       Cesese
// @match        https://<instance>/web*
// @grant        none
// ==/UserScript==

// change the @match to your instance's mastofe (should be <instance>/web*)

(function() {
    'use strict';

    // Your code here...
    // <link rel="stylesheet" media="all" href="/packs/skins/glitch/mastodon-light/common.css">
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.media = "all";
    link.href = "/packs/skins/glitch/mastodon-light/common.css";
    //link.href = "/packs/skins/glitch/contrast/common.css"; // comment last line and uncomment this one for contrast theme
    document.head.appendChild(link);
    // <body class='app-body no-reduce-motion system-font skin-mastodon-light'>
    document.body.classList += " skin-mastodon-light"
    //document.body.classList += " skin-contrast" // comment last line and uncomment this one for contrast theme

})();
