from flask import Flask, render_template, request
from optimizer import optimize_portfolio

app = Flask(__name__)

@app.route("/", methods=["GET","POST"])
def home():

    result = None

    if request.method == "POST":

        risk = int(request.form["risk"])

        result = optimize_portfolio(
            risk
        )

    return render_template(
        "index.html",
        result=result
    )


if __name__ == "__main__":
    app.run(debug=True)
