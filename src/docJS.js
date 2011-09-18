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

}