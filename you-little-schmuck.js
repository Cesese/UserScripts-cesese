// ==UserScript==
// @name         You Little Schmuck!
// @namespace    https://github.com/Cesese/UserScripts-cesese
// @version      0.3
// @description  Improve the google logo
// @author       A little schmuck
// @match        https://www.google.com/*
// @grant        none
// @icon         https://www.google.com/favicon.ico
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var text = "You Little Schmuck";

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    function getRandomIntExcept(min, max, exc) {
        var result = exc;
        while ( result == exc ) {
            result = getRandomInt(min, max);
        }
        return result;
    }

    var pictures = document.getElementsByTagName("IMG");
    for (var i = 0; (i < pictures.length) && (pictures[i].alt != "Google"); i++) {}
    var box = pictures[i].parentElement;
    pictures[i].remove();
    var div = document.createElement('div');
    var btext = "";
    var colors = ["blue", "red", "yellow", "green"];
    var randomNumber = 0;
    for (i = 0; i < text.length; i++) { // going through text
        randomNumber = getRandomIntExcept(0, colors.length, randomNumber);
        var c = colors[randomNumber]; // c is one of the colors
        var t = '<span style="color:' + c + '">' + text[i] + '</span>' // t is the i-th letter in the text, space included
        btext = btext + t; // good letter goes into beautiful text
    }
    div.style = "font-size: 90px; font-weight: bold" // big font size, same padding as google's logo //padding-top: 109px
    div.innerHTML = btext;

    box.appendChild(div);
})();
