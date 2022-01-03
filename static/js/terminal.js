

function command() {
  cmd = document.getElementById("cmd").value;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://192.168.184.53:8000/terminal?cmd=" + cmd, true);
  xhr.send();
  xhr.onload = function () {
  	var output = xhr.responseText;
    document.getElementById("output").innerHTML = output;
  }
}

