from flask import Flask, render_template, request, jsonify
import subprocess
import os

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/cmd")
def cmd():
    return render_template("terminal.html")


@app.route("/docker")
def docker():
    images = subprocess.getoutput("docker images --format '{{ .Repository }}:{{ .Tag }}'")
    return render_template("docker/docker.html", images=images)


@app.route("/images")
def image():
    return render_template("/docker/image.html")


@app.route("/launch", methods=['GET'])
def launch():
    osname = request.args.get("osname")
    osimage = request.args.get("osimage")
    subprocess.getoutput(
        "docker run -dit --name {} {}".format(osname, osimage))
    ps = "<pre>" + subprocess.getoutput("docker ps --format 'table {{ .ID }}\t{{ .Image }}\t{{ .Status }}\t\t{{ .Ports }}\t{{ .Names }}' ") + "</pre>"
    return ps


@app.route("/pull", methods=['GET'])
def pull():
    image = request.args.get("image")
    tag = request.args.get("tag")
    subprocess.getoutput("docker pull {}:{}".format(image, tag))
    output = "<pre>" + subprocess.getoutput("docker images") + "</pre>"
    return output

@app.route("/terminal", methods=['GET'])
def terminal():
    cmd = request.args.get("cmd")
    output = "<pre>" + subprocess.getoutput(cmd) + "</pre>"
    return output


@app.route("/operation", methods=['GET'])
def operation():
    name_id = request.args.get("name")
    action = request.args.get("action")
    ops = "<pre>" + subprocess.getoutput("docker {} {}".format(action, name_id)) + "</pre>"
    return ops





if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
