from flask import Flask, jsonify  # facilitate flask webserving
from flask import render_template  # facilitate jinja templating
from flask import request  # facilitate form submission
from flask import session
from flask import Response
import sqlite3, requests, os, json, datetime
import pandas as pd

app = Flask(__name__)

@app.route("/", methods=["POST"])
def returnData():
    # data = request.get_json() #fix
    # data = jsonify(data) #fix
    # data = json.dump('sales.db')
    data = jsonify('sales.db')
    return data



if __name__ == "__main__":  # false if this file imported as module
    # enable debugging, auto-restarting of server when this file is modified
    app.debug = True
    app.run(port=3000)
