// ==UserScript==
// @name         Batch Download
// @version      0.1
// @description  You can now batch download on horriblesubs.info
// @author       Cesese
// @match        https://horriblesubs.info/shows/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    function download(x, y=-1, suffix="720p") {
        var usage = 'Usage :\n>> download (first_episode, last_episode)\nor\n>> download (first_episode, last_episode, "<quality>")\nExample :\n>> download (1, 12, "480p")'
        if (y == -1 || x > y) {
            // wrong / no arguments
            console.log(usage);
            return false;
        }
        var prefix = "";
        suffix = "-" + suffix;
        for (var i = y ; i >= x ; i--) {
            if (i < 10) {
                prefix = "0";
            }
            var str = prefix + String(i) + suffix; // looks like "01-720p"
            var link = document.getElementById(str); // gives the <div> of episode i
            if (link != null) {
                // opens the magnet link in current tab (so this calls transmission-remote-gui for me)
                window.open(link.children[1].children[0].href, "_self")
                //console.log("<downloading " + str + ">");
            } else {
                // error : either i out of range or quality doesn't exist or both
                console.log(usage);
                return false;
            }
        }
        return true;
    }

    function auto_download(a, b, c) {
      var q;
      	if (document.getElementsByName(c)[0].checked)
          q = document.getElementsByName(c)[0].value;
      	else if (document.getElementsByName(c)[1].checked)
          q = document.getElementsByName(c)[1].value;
      	else 
          q = document.getElementsByName(c)[2].value;
        if (!(download(document.getElementsByName(a)[0].value, document.getElementsByName(b)[0].value, q))) {
            // it didn't work
            alert("Wrong range");
        }
    }

    function button_download() {
      	var dialog = document.createElement("DIALOG");
      	dialog.setAttribute("open", "open");
      
        var f = document.createElement("form");
        f.setAttribute('method',"post");
        f.setAttribute('action',"submit.php");

        var x = document.createElement("input"); //input element, number
        x.setAttribute('type',"number");
        x.setAttribute('name',"first");
        x.setAttribute('value','1');
        x.setAttribute('min','1');

        var y = document.createElement("input"); //input element, number
        y.setAttribute('type',"number");
        y.setAttribute('name',"last");
        y.setAttribute('value','1');
        y.setAttribute('min','1');
      
      	var d = document.createElement("DIV");
				var bra = document.createElement("BR");
      	var brb = document.createElement("BR");
     	
  			var ta = document.createTextNode("480p");
      	var qa = document.createElement("input"); //input element, radio
      	qa.setAttribute('type',"radio");
      	qa.setAttribute('name',"quality");
      	qa.setAttribute('value',"480p");
      	
  			var tb = document.createTextNode("720p");
      	var qb = document.createElement("input"); //input element, radio
      	qb.setAttribute('type',"radio");
      	qb.setAttribute('name',"quality");
      	qb.setAttribute('value',"720p");
      	qb.setAttribute('checked',"true");
      	
  			var tc = document.createTextNode("1080p");
      	var qc = document.createElement("input"); //input element, radio
      	qc.setAttribute('type',"radio");
      	qc.setAttribute('name',"quality");
      	qc.setAttribute('value',"1080p");
      
      	d.appendChild(ta);
      	d.appendChild(qa);
      	d.appendChild(bra);
      	d.appendChild(tb);
      	d.appendChild(qb);
      	d.appendChild(brb);
      	d.appendChild(tc);
      	d.appendChild(qc);
      
        var s = document.createElement("input"); //input element, Submit button
        s.setAttribute('type',"button");
        s.setAttribute('value',"Download");
        s.setAttribute('onclick','auto_download("first", "last", "quality")');

        f.appendChild(x);
        f.appendChild(y);
      	f.appendChild(d);
        f.appendChild(s);
      
      	dialog.appendChild(f);

        //and some more input elements here
        //and dont forget to add a submit button

        //document.getElementById("main").insertBefore(dialog, document.getElementById("main").childNodes[0]);
      	document.getElementsByClassName("well hidden-xs")[0].insertBefore(dialog, document.getElementsByClassName("well hidden-xs")[0].childNodes[0]);

    }

    var script = document.createElement('script');
    script.type="text/javascript";
    script.innerHTML = download;
    (document.body || document.head || document.documentElement).appendChild(script);
    script = document.createElement('script');
    script.type="text/javascript";
    script.innerHTML = auto_download;
    (document.body || document.head || document.documentElement).appendChild(script);

    button_download();
})();
