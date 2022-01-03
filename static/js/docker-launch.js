var ip;
function getip() {
	 ip = document.getElementById("ip").value;
	 console.log(ip)
	 alert(ip);
}	

function myfunction() {
	var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://" + ip + ":8000/launch", true);
        xhr.send();
        xhr.onload = function () {
                var output = xhr.responseText;
                document.getElementById("dockerps").innerHTML = output;
        }
}
window.onload = function() {
	myfunction();
}

function launch() {
        osname = document.getElementById("osname").value
        osimage = document.getElementById("osimage").value
        var xhr = new XMLHttpRequest();
        console.log("working fine")
        xhr.open("GET", "http://" + ip + ":8000/launch?osname=" + osname + "&osimage=" + osimage, true);
        //?osname=" + osname + "&osimage=" + osimage
        xhr.send();
        xhr.onload = function () {
                var output = xhr.responseText;
                document.getElementById("dockerps").innerHTML = output;
        }
}


function operation() {

        name = document.getElementById("name").value
        action = document.getElementById("action").value
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://" + ip + ":8000/operation?name=" + name + "&action=" + action, true);
        xhr.send();
        xhr.onload = function () {
                var output = xhr.responseText;
                document.getElementById("ops_output").innerHTML = output;
		myfunction();
        }

}



