# Gamin Goombas: Matthew Yee, Samanthan Hua, Vivian Graeber, and Vansh Saboo
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

dirname = os.path.dirname(__file__)

data = pd.read_csv("../dataset/vgsales.csv")
df = pd.DataFrame(data)

print(df)

DB_FILE = "sales.db"
db = sqlite3.connect(DB_FILE, check_same_thread=False) #open if file exists, otherwise create
c = db.cursor()

c.execute('''
		CREATE TABLE IF NOT EXISTS products (
			product_id int primary key,
			product_name nvarchar(50),
			price int
			)
        ''')#CHANGE ME TO REPRESENT CSV COLUMNS

for row in df.itertuples():
    c.execute('''
                INSERT INTO products (product_id, product_name, price)
                VALUES (?,?,?)
                ''',
                row.product_id, 
                row.product_name,
                row.price
                )#CHANGE ME TO REFLECT TABLE
conn.commit()


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
