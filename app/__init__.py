# Gamin Goombas: Matthew Yee, Samantha Hua, Vivian Graeber, and Vansh Saboo
# SoftDev

from flask import Flask, jsonify  # facilitate flask webserving
from flask import render_template  # facilitate jinja templating
from flask import request  # facilitate form submission
from flask import session
from flask import Response
import sqlite3, requests, os, json, datetime
import pandas as pd
# import pyodbc
#from db import get_user_by_username, add_user, check_username, get_orders, get_order, get_users

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
			NA_Sales INTEGER,
			EU_Sales INTEGER,
			JP_Sales INTEGER,
			Other_Sales INTEGER
			)
        ''')

#code will currently replace all values that were previously in the db with the same id
#avoids a not all entries have a unique id error
for row in df.itertuples():
    c.execute('''
                INSERT OR REPLACE INTO video_games (id, game_name, platform, year, genre, publisher, NA_Sales, EU_Sales, JP_Sales, Other_Sales)
                VALUES (?,?,?,?,?,?,?,?,?,?)
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
				row.Other_Sales)
                )
# column in df named Global_Sales is not inserted into db
# Rank column in df was used for ID

# c.execute('''SELECT * FROM video_games WHERE id=1''') # not working. returning a sqlite object

# HAVE NOT CHECKED IF IT IS WORKING AS INTENDED. DOES NOT CREATE ERROR CURRENTLY

db.commit()

#VG_DB_FILE = ".db"
#db = sqlite3.connect(USER_DB_FILE, check_same_thread=False) #open if file exists, otherwise create
#c = db.cursor()

# custom render_template function that adds the username to the template

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/japan', methods=['GET', 'POST'])
def japan():
    return render_template('japan.html')

@app.route('/europe', methods=['GET', 'POST'])
def europe():
    return render_template('europe.html')

@app.route('/northAmerica', methods=['GET', 'POST'])
def northAmerica():
    return render_template('northAmerica.html')

'''
# do we need?
@app.route("/api/products/trending", methods=["GET"])
def trending():
    response = requests.get(
        f"https://api.bestbuy.com/v1/products/trendingViewed?apiKey={bestBuyKey}&format=json&show=sku,name,salePrice,image&pageSize=20"
    )
    data = response.json()
    return data
'''

if __name__ == "__main__":  # false if this file imported as module
    # enable debugging, auto-restarting of server when this file is modified
    app.debug = True
    app.run()
