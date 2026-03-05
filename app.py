from flask import Flask , request , jsonify , render_template
import pandas as pd
import pulp
import os
app = Flask(__name__)
@app.route('/')
def home():
    return render_template('index.html')
# The main logic code is hidden
port = int(os.environ.get("PORT" , 5000))
if(__name__ == "__main__"):
    app.run(host="0.0.0.0" , port= port)
