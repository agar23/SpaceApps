import pandas as pd
import requests

def unhcr():
    url = "http://data.unhcr.org/api/whos_doing_what_where/settlements.json?instance_id=liberia"
    response = requests.get(url)
    if (response.status_code == 200):
        data = response.json()
        print(data)
    else:
        raise Exception("GET request failed: " + url)
unhcr()
