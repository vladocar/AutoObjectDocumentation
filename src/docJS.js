function docJS(d, n) {
    var keys = Object.keys(d).sort().reverse();
    var i = keys.length;

    var list = "";
    var list1 = "";
    while (i--) {
        list1 += "<li><a href='#" + keys[i] + "'>- " + keys[i] + "</a></li>";
        list += "<li class='l' id=" + keys[i] + "><h3>" + keys[i] + "</h3>:<br><pre>" + d[keys[i]] + "</pre></li>";
    }
    document.getElementsByTagName("body")[0].innerHTML = '<div id="sidebar"><h3 id="o"></h3><ul id="links"></ul></div><ul id="a"></ul>';
    document.getElementById("links").innerHTML = list1;
    document.getElementById("o").innerHTML = n;
    document.getElementById("a").innerHTML = list;
}