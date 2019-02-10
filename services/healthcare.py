import pandas as pd
import requests

def readDataForHealthcare(healthcareFileName):
    headers = ["city", "rating"]
    df = pd.read_csv(healthcareFileName, names=headers)
    return df.to_json(orient='records')

def getUserCoordinates():
    try:
		r = requests.get(url = "http://192.168.43.15:4200/api/getUsername")
		r.raise_for_status()
    except requests.exceptions.HTTPError as err:
        return {'error': 'Error in request'}

	if (r.status_code == 204):
		return {'error': 'None Found'}

    print("returned data")
    data = r.json()
    print(data)


#readDataForHealthcare("./resources/test.csv")
#getUserCoordinates()
