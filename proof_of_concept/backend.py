from flask import Flask  # facilitate flask webserving
from flask import render_template  # facilitate jinja templating
from flask import request  # facilitate form submission
from flask import session
from flask import Response
import sqlite3, requests, os, json, datetime
import pandas as pd
import os
import csv
import json

app = Flask(__name__)

# .mode json
DB_FILE = "sales.db"
db = sqlite3.connect(DB_FILE, check_same_thread=False)
c = db.cursor()


# DB --> Dictionary --> JSON
@app.route("/", methods=["GET", "POST"])
def returnData():
    temp = "Wii" # Temporary for now, will use other platforms later based on user selection
    data = c.execute("SELECT * FROM video_games WHERE Platform=?", (temp, ))
    results = c.fetchall()
    print("ran")
    print(results)
    features = []
    for row in results:
        feature = {
            "Rank": row[0],
            "Name": row[1],
            "Platform": row[2],
            "Year": row[3],
            "Genre": row[4],
            "Publisher": row[5],
            "NA_Sales": row[6],
            "EU_Sales": row[7], 
            "JP_Sales": row[8],
            "Other_Sales": row[9],
            #"Global_Sales": row[10], # Create the Global_Sales in the DB later
        }
        features.append(feature)

    print(features)

    #gamejson = {"type": "FeatureCollection", "features": []}

    #gamejson["features"] = features

    with open("static/thing.json", "w") as f:
        f.write(json.dumps(features[0]))

    print("done")
    
    return render_template('test.html')







if __name__ == "__main__":  # false if this file imported as module
    # enable debugging, auto-restarting of server when this file is modified
    app.debug = True
    app.run(port=3000)

# SELECT json_object( c );
