<<<<<<< HEAD
function docJS(d, n) {
    var keys = Object.keys(d).sort().reverse();
    var i = keys.length;
    var list = "";
    var list1 = "";
    var numOfLines = "";
    var numOfCharacters = "";
    var numOfArguments = 0;
    var x = 0;
    var pp = (typeof prettyPrintOne === 'function');
    while (i--) {
        if (typeof d[keys[i]] === "object") {
            x += 0;
            numOfLines = "undefined";
            numOfCharacters = "undefined";
            numOfArguments = 0;
        } else if (typeof d[keys[i]] === "function") {
            x += d[keys[i]].toString().length;
            numOfLines = d[keys[i]].toString().split('\n').length;
            numOfCharacters = d[keys[i]].toString().length;
            numOfArguments = d[keys[i]].length;
        } else {
            x += d[keys[i]].toString().length;
            numOfLines = d[keys[i]].toString().split('\n').length;
            numOfCharacters = d[keys[i]].toString().length;
            numOfArguments = 0;
        }
        list1 += "<li><a href='#" + keys[i] + "'>- " + keys[i] + "</a></li>";
        list += "<li class='l' id=" + keys[i] + "><h3>" + n + "." + keys[i] + ":<i> ( lines: " + numOfLines + " characters: " + numOfCharacters + " arguments: " + numOfArguments + " )</i></h3><br><pre>  " + (pp ? prettyPrintOne(String(d[keys[i]]).replace(/\n/g, '<br/>'), 'js', false) : d[keys[i]]) + "</pre></li>";
    }
    if (!document.getElementById("sidebar")){
        document.getElementsByTagName("body")[0].innerHTML = '<div id="sidebar"></div><ul id="a"></ul>';
    }
    document.getElementById("sidebar").innerHTML += '<h3 id="o">' + n + '</h3><ul id="links">' + list1 + '<br/></ul>';
    document.getElementById("a").innerHTML += list;
    
    console.log(x / 1024 + " Kb - It doesn't calculate nested objects");
=======
function docJS(obj, name) {
  var keys = Object.keys(obj).sort().reverse();
  var prettyPrint = (typeof prettyPrintOne === 'function');

  if (!document.getElementById('sidenav')) {
    document.getElementsByTagName('body')[0].innerHTML = '<div id="sidenav"></div><ul id="content"></ul>';
  }
  var key, val, _i, _len, lines, args, str, out, code, sidenav = '',
    content = '';
  for (_i = 0, _len = keys.length; _i < _len; _i++) {
    key = keys[_i];
    val = obj[key];
    out = JSON.stringify(val, null, 4);
    type = typeof val;

    if (!out) {
      out = val.toString();
    }

    code = prettyPrint ? prettyPrintOne(out.replace(/\n/g, '<br/>'), 'js', false) : out;
    lines = out.split('\n').length;
    args = (type === 'function') ? val.length : 0;

    sidenav += '<li><a href="#' + name + '.' + key + '">- ' + key + '</a></li>';
    content += '<li class="name" id="' + name + '.' + key + '"><h3>' + key + ':<i><br/>';
    content += '(Type: ' + type + ', Lines: ' + lines;
    if (args > 0) {
      content += ', Arguments: ' + args;
    }

    content += ')</i></h3><br><pre>' + code + '</pre></li>';
  }
  document.getElementById('sidenav').innerHTML += '<h3 id="namehead">' + name + '</h3><ul id="links">' + sidenav + '<br/></ul>';
  document.getElementById('content').innerHTML += '<h2>' + name + '</h2>' + content;
>>>>>>> Contra/master
}