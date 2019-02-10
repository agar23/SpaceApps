import constants
import requests
import json

def getCoordinates(cityName):
    url = constants.POLYGON_COORDS_BASE + "q=" + cityName + "+Nigeria&polygon_geojson=1&format=json"
    print(url)
    response = requests.get(url)
    if (response.status_code == 200):
        data = response.json()
        coordinates = []
        for d in data:
            if (d["geojson"]["type"] == "Polygon"):
                coordinates = d["geojson"]["coordinates"]
        return coordinates
    else:
        raise Exception("GET request failed: " + url)

def getPolygonArea(corners):
   n = len(corners) # of corners
   area = 0.0
   for i in range(n):
       j = (i + 1) % n
       area += corners[i][0] * corners[j][1]
       area -= corners[j][0] * corners[i][1]
   area = abs(area) / 2.0
   return area

def createPolygonsPayload():
    with open("./resources/top100CitiesNigeria.json") as f:
        cities = json.load(f)
    payload = []
    for city in cities:
        cityName = city["city"]
        polygonCoordinates = getCoordinates(cityName)

        if (len(polygonCoordinates) > 0):
            realCoordinates = polygonCoordinates[0]
            if (len(realCoordinates) > 15):
                myNum = int(round(len(realCoordinates) / 3))
                newList = []
                for index in range(0, len(realCoordinates), myNum):
                    newList.append(realCoordinates[index])
                realCoordinates = newList[:3]
                firstCoordinate = realCoordinates[0]
                realCoordinates.append(firstCoordinate)
                area = getPolygonArea(realCoordinates)

                print(area)
        
                polygonCoordinates = []
                polygonCoordinates.append(realCoordinates)
                print(len(polygonCoordinates[0]))
        
        payload.append({
            "name": cityName,
            "geo_json": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": polygonCoordinates
                }
            }
        })
    with open('./resources/polygon_coordinates_payload_closed.json', 'w') as fp:
        json.dump(payload, fp)

createPolygonsPayload()