from flask import Flask, jsonify  # facilitate flask webserving
from flask import render_template  # facilitate jinja templating
from flask import request  # facilitate form submission
from flask import session
from flask import Response
import sqlite3, requests, os, json, datetime
import pandas as pd

app = Flask(__name__)

# .mode json
DB_FILE = "sales.db"
db = sqlite3.connect(DB_FILE, check_same_thread=False)
c = db.cursor()

# c.execute('''.mode json''')

@app.route("/", methods=["POST"])
def returnData():
    # data = request.get_json() #fix
    # data = jsonify(data) #fix
    # data = json.dump('sales.db')
    # data = c.execute('SELECT * FROM video_games')
    data = c.execute('''SELECT json_group_array(json_object('game_name', game_name, 'platform', platform)) AS json_result
FROM (SELECT * FROM video_games)''')
    return data

if __name__ == "__main__":  # false if this file imported as module
    # enable debugging, auto-restarting of server when this file is modified
    app.debug = True
    app.run(port=3000)

# SELECT json_object( c );
