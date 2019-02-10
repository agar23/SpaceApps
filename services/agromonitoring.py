import json
import requests
import time

import constants

def createPolygon():
    with open("./resources/polygon_coordinates_payload_closed.json") as f:
        polygonPayload = json.load(f)
    polygonIds = []
    counter = 1
    skip = 0
    length = len(polygonPayload)
    for p in polygonPayload:
        city = p["name"]
        print(city)
        print(str(counter) + ' out of ' + str(length))
        coordinates = p["geo_json"]["geometry"]["coordinates"]

        if (len(coordinates) > 0):
            url = constants.AGROMONITORING_POLYGON_API + "?appid=" + constants.AGROMONITORING_API_KEY
            headers = {'Content-Type': 'application/json'}
            response = requests.post(url, data=json.dumps(p), headers=headers)
            print(response.status_code)
            if (response.status_code == 201):
                data = response.json()
                print('SUCCESS: ' + data["id"])
                temp = {}
                temp[city] = data["id"]
                polygonIds.append(temp)
            else:
                skip += 1
                print("skipping: " + city + " " + str(skip))
        counter += 1
        time.sleep(5)
    with open('./resources/polygon_ids.json', 'w') as fp:
        json.dump(polygonIds, fp)

createPolygon()