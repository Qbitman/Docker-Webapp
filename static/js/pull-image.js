
window.onload = function dockerimg() {
	var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://192.168.184.53:8000/pull", true);
        xhr.send();
        xhr.onload = function () {
                var output = xhr.responseText;
                document.getElementById("show").innerHTML = output;
        }
}


function pull_image() {
        image = document.getElementById("image").value
        tag = document.getElementById("tag").value
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://192.168.184.53:8000/pull?image=" + image + "&tag=" + tag, true);
        xhr.send();
        xhr.onload = function () {
                var output = xhr.responseText;
                document.getElementById("show").innerHTML = output;
        }
}



