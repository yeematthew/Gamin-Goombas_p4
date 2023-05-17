from flask import Flask, jsonify  # facilitate flask webserving
from flask import render_template  # facilitate jinja templating
import json, sqlite3
import pandas as pd

app = Flask(__name__)  # create Flask object

DB_FILE = "sales.db"
db = sqlite3.connect(DB_FILE, check_same_thread=False)
c = db.cursor()

@app.route('/', methods=['GET'])
def index():
    return render_template('test.html')
'''
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
            # "Global_Sales": row[10], # Create the Global_Sales in the DB later
        }
        features.append(feature)

    print(features)

    #gamejson = {"type": "FeatureCollection", "features": []}

    #gamejson["features"] = features

    with open("static/thing.json", "w") as f:
        f.write(json.dumps(features))
'''
    # return render_template('test.html')

if __name__ == "__main__":  # false if this file imported as module
    # enable debugging, auto-restarting of server when this file is modified
    app.debug = True
    app.run()
