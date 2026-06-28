
# 📈 AI-Based Mutual Fund Allocation

> **An AI-powered mutual fund portfolio optimization system that identifies the optimal combination of mutual funds based on historical performance while respecting user-defined annual downside risk constraints.**

---

## 🚀 Overview

The **AI-Based Mutual Fund Allocation** project is a Python-based portfolio optimization system that leverages historical mutual fund performance to construct an optimized investment portfolio.

Unlike conventional mutual fund screeners that simply rank funds individually, this application intelligently searches through **700+ mutual funds** to determine the combination of funds that historically generated the **highest average return** while ensuring that the portfolio never exceeded the user's specified annual risk tolerance.

The application also recommends the optimal capital allocation among the selected funds and displays the historical year-wise performance of the generated portfolio.

---

## ✨ Features

- 🤖 AI-driven portfolio optimization
- 📊 Historical analysis using 10 years of mutual fund data
- ⚖️ User-defined annual downside risk constraint
- 💰 Optimal allocation across selected mutual funds
- 📈 Displays historical portfolio returns (2015–2024)
- 🎯 Maximizes historical average return within risk limits
- 🌐 Interactive Flask web interface
- 🖼️ Modern responsive UI with slideshow and FAQ section
- ☁️ Deployable on Render

---

# 🧠 How It Works

The user specifies the **maximum acceptable loss** that they are willing to tolerate in any calendar year.

The optimization engine then:

1. Reads historical performance of over **700 mutual funds**
2. Evaluates thousands of possible portfolio combinations
3. Eliminates portfolios violating the user's annual downside limit
4. Identifies the portfolio that generated the **highest historical average return**
5. Computes the optimal allocation to each selected fund
6. Displays:

- Selected Mutual Funds
- Allocation Percentage
- Historical Portfolio Returns
- Average Portfolio Return

---

# 🏗️ Project Architecture

```

```
                    User

                      │
                      ▼

            Flask Web Application

                      │

          User Risk Constraint Input

                      │

                      ▼

          Portfolio Optimization Engine
                (PuLP Solver)

                      │

                      ▼

        Historical Mutual Fund Dataset
               (CSV - 700+ Funds)

                      │

                      ▼

      Optimized Portfolio Recommendation

                      │

                      ▼

    Allocation + Historical Returns + CAGR
```

```

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Python | Core Programming Language |
| Flask | Web Framework |
| Pandas | Data Processing |
| PuLP | Linear Programming Optimization |
| HTML5 | Frontend |
| CSS3 | Styling |
| JavaScript | Slideshow & Interactive FAQ |
| Gunicorn | Production WSGI Server |
| Render | Deployment |

---

# 📂 Project Structure

```

AI-Based-Mutual-Fund-Allocation/

│

├── app.py

├── optimizer.py

├── final_data.csv

├── requirements.txt

├── Procfile

│

├── templates/

│      └── index.html

│

├── static/

│      ├── css/

│      │      └── styles.css

│      │

│      ├── images/

│      │      ├── logo.png

│      │      └── background.jpg

│      │

│      └── slides/

│             ├── slide1.jpg

│             ├── ...

│             └── slide7.jpg

│

└── README.md

```

---

# ⚙️ Optimization Workflow

```

Historical Dataset

```
    │

    ▼
```

Load CSV

```
    │

    ▼
```

Read User Risk Constraint

```
    │

    ▼
```

Formulate Linear Programming Problem

```
    │

    ▼
```

Solve using PuLP

```
    │

    ▼
```

Optimal Portfolio

```
    │

    ▼
```

Display Results

````

---

# 📊 Inputs

The application currently accepts:

| Input | Description |
|--------|-------------|
| Maximum Acceptable Annual Loss (%) | User-defined downside risk limit |

---

# 📈 Outputs

The application generates:

- Recommended Mutual Funds
- Allocation Percentage
- Historical Returns (2015–2024)
- Average Historical Return

---

# 📚 Dataset

The optimization is performed on historical mutual fund data consisting of:

- 700+ Mutual Funds
- 10 Years of Performance Data
- Calendar Year Returns
- Fund-wise Historical Performance

---

# 🖥️ User Interface

The web application provides:

- Modern glassmorphism-inspired design
- Background image
- Automatic slideshow
- Interactive FAQ section
- Responsive portfolio tables
- Loading animation during optimization

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/yourusername/AI-Based-Mutual-Fund-Allocation.git
````

Move into the project

```bash
cd AI-Based-Mutual-Fund-Allocation
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run the application

```bash
python app.py
```

Visit

```
http://127.0.0.1:5000
```

---

# ☁️ Deployment

The project can be deployed for free using:

* Render
* Railway (if free tier is available)
* PythonAnywhere (limited free tier)

Deployment requires:

* requirements.txt
* Procfile
* GitHub repository

---

# 📸 Application Flow

```
Home Page

     │

     ▼

Enter Risk Capacity

     │

     ▼

Optimize Portfolio

     │

     ▼

Processing...

     │

     ▼

Recommended Portfolio

     │

     ├── Selected Funds

     ├── Allocation %

     ├── Historical Returns

     └── Average Return
```

---

# 💡 Use Cases

* Individual Investors
* Financial Advisors
* Portfolio Managers
* Mutual Fund Research
* Educational Demonstrations
* AI-Based Financial Analytics

---

# ⚠️ Disclaimer

This project performs optimization using **historical mutual fund performance**.

The generated portfolios are based entirely on historical data and **do not constitute financial or investment advice**.

Past performance is **not** a guarantee of future returns. Users should conduct their own research and consult qualified financial professionals before making investment decisions.

---

# 🔮 Future Enhancements

* Live NAV integration
* Real-time mutual fund data
* Multiple optimization objectives
* Efficient Frontier visualization
* Portfolio comparison
* Export portfolio to PDF/Excel
* User authentication
* Cloud database integration
* Portfolio rebalancing recommendations
* AI-powered market insights

---

# 👨‍💻 Author

Developed as an AI-powered portfolio optimization project demonstrating the application of optimization techniques and historical financial data analysis for mutual fund allocation.

---

## ⭐ If you found this project useful, consider giving it a star on GitHub!

```
```
