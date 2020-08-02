// ==UserScript==
// @name         You Little Schmuck!
// @version      0.1
// @description  Improve the google logo
// @author       A little schmuck
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    document.getElementById("hplogo").remove(); // remove Google logo
    var box = document.getElementById("lga");
    var div = document.createElement('div');
    var text = "you little schmuck";
    var btext = "";
    var colors = ["blue", "red", "yellow", "green"];
    for (var i = 0; i < text.length; i++) { // going through text
        var c = colors[getRandomInt(0, colors.length)]; // c is one of the colors
        var t = '<span style="color:' + c + '">' + text[i] + '</span>' // t is the i-th letter in the text, space included
        btext = btext + t; // good letter goes into beautiful text
    }
    div.style = "font-size: 90px; padding-top: 109px" // big font size, same padding as google's logo
    div.innerHTML = btext;

    box.appendChild(div);
})();
