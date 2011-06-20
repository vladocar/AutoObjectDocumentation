function docJS(d, n) {
    var keys = Object.keys(d).sort().reverse();
    var i = keys.length;

    var list = "";
    var list1 = "";
    var pp = (typeof prettyPrintOne === 'function');
    while (i--) {
        list1 += "<li><a href='#" + keys[i] + "'>- " + keys[i] + "</a></li>";
        list += "<li class='l' id=" + keys[i] + "><h3>" + keys[i] + "</h3>:<br><pre>  " + 
			(pp ? prettyPrintOne(String(d[keys[i]]).replace(/\n/g, '<br/>'), 'js', false) : d[keys[i]]) + "</pre></li>";
    }
    document.getElementsByTagName("body")[0].innerHTML = '<div id="sidebar"><h3 id="o">' + n + '</h3><ul id="links">' + list1 + '</ul></div><ul id="a">' + list + '</ul>';

}