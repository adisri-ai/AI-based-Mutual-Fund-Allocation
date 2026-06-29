import pandas as pd
data = pd.read_excel(f"names_final.xlsx")
data2 = pd.read_excel("NAV_2016-01-01.xlsx")
pd.merge(data , data2 , on="NAV Name" , how="left")
for i in range(2015 , 2027):
    temp = pd.read_excel(f"NAV_{i}-01-01.xlsx")
    data = pd.merge(data , temp , on="NAV Name" , how = "left")
    data.rename(columns={"Net Asset Value" : f"{i}"} , inplace = True)
for i in range(2015 , 2026):
    data[f"{i}_return"] = round(((data[f"{i+1}"] - data[f"{i}"])/data[f"{i}"])*100 ,4)
data[["NAV Name"] + [f"{i}_return" for i in range(2015 , 2026)]].to_csv("final_data.csv")
