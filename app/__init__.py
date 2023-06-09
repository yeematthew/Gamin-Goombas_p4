# Gamin Goombas: Matthew Yee, Samantha Hua, Vivian Graeber, and Vansh Saboo
# SoftDev

from flask import Flask, jsonify  # facilitate flask webserving
from flask import render_template  # facilitate jinja templating
from flask import request  # facilitate form submission
from flask import session
from flask import Response
import sqlite3, requests, os, json, datetime
import pandas as pd

app = Flask(__name__)  # create Flask object

# dirname = os.path.dirname(__file__)

data = pd.read_csv("../dataset/vgsales.csv")
df = pd.DataFrame(data)

# print(df)

DB_FILE = "sales.db"
db = sqlite3.connect(DB_FILE, check_same_thread=False) #open if file exists, otherwise create
c = db.cursor()

# c.execute('''DROP TABLE video_games''') # allows for repopulation of db. will not need later on. can research alternatives where the table is simply overwritten or we only populate once at the start

c.execute('''
		CREATE TABLE IF NOT EXISTS video_games (
			id INTEGER primary key,
			game_name TEXT,
			platform TEXT,
			year INTEGER,
			genre TEXT,
			publisher TEXT,
			NA_Sales REAL,
			EU_Sales REAL,
			JP_Sales REAL,
			Other_Sales REAL,
            Global_Sales REAL
			)
        ''')

#code will currently replace all values that were previously in the db with the same id
#avoids a not all entries have a unique id error
for row in df.itertuples():
    c.execute('''
                INSERT OR REPLACE INTO video_games (id, game_name, platform, year, genre, publisher, NA_Sales, EU_Sales, JP_Sales, Other_Sales, Global_Sales)
                VALUES (?,?,?,?,?,?,?,?,?,?,?)
                ''',
                (row.Rank,
                row.Name,
				row.Platform,
				row.Year,
				row.Genre,
				row.Publisher,
				row.NA_Sales,
				row.EU_Sales,
				row.JP_Sales,
				row.Other_Sales,
                row.Global_Sales)
                )
# column in df named Global_Sales is not inserted into db
# Rank column in df was used for ID

db.commit()

#SQL to JSON conversion
def sqlToJSON(category, query):
    # select = ""
    # query = "Wii" # Temporary for now, will use other platforms later based on user selection

    if category=="year":
        data = c.execute("SELECT * FROM video_games WHERE Year=?", (query,))
    elif category=="genre":
        data = c.execute("SELECT * FROM video_games WHERE Genre=?", (query,))
    elif category=="platfrom":
        data = c.execute("SELECT * FROM video_games WHERE Platform=?", (query,))
    elif category=="publisher":
        data = c.execute("SELECT * FROM video_games WHERE Publisher=?", (query,))

    results = c.fetchall()
    
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
            "Global_Sales": row[10], 
        }
        features.append(feature)

    return features
    
#SQL to JSON conversion
def sqlToJSON2():
    c.execute("SELECT * FROM video_games")
    results = c.fetchall()
    
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
            "Global_Sales": row[10], 
        }
        features.append(feature)

    return features

# custom render_template function that adds the username to the template
@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html', americanSalesin2011=sqlToJSON2())

@app.route('/japan', methods=['GET', 'POST'])
def japan():
    return render_template('japan.html', japaneseSales=sqlToJSON2())

@app.route('/europe', methods=['GET', 'POST'])
def europe():
    return render_template('europe.html', europeSales=sqlToJSON2())

@app.route('/northAmerica', methods=['GET', 'POST'])
def northAmerica():
    return render_template('northAmerica.html', americanSales=sqlToJSON2())


if __name__ == "__main__":  # false if this file imported as module
    # enable debugging, auto-restarting of server when this file is modified
    app.debug = True
    app.run()

