import pandas as pd
import json
from pprint import pprint

from google_maps import getDistance

def readDataForTopCities(topCitiesFileName):
    with open(topCitiesFileName) as f:
        data = json.load(f)
    return data

def getDistanceFromTopCities(userCoordinates):
    topCities = readDataForTopCities("./resources/top100CitiesNigeria.json")
    for topCity in topCities:
        lat = str(topCity["latitude"])
        lon = str(topCity["longitude"])
        topCityCoordinates = lat + ',' + lon
        distance = ""
        try:
            distance = getDistance(userCoordinates, topCityCoordinates)["value"]
        except Exception as err:
            print("Error getting distance: " + repr(err))
        topCity["distanceFromUser"] = distance
        
    with open('./resources/top_100_cities_with_distance.json', 'w') as fp:
        json.dump(topCities, fp)

def readNigeriaCampData():
    with open("./resources/nigeria_camps.json") as f:
        data = json.load(f)
    return data

def deliverNigeriaCampData():
    camps = readNigeriaCampData()
    resultCamps = {}
    for camp in camps:
        resultCamps[camp["siteName"]] = {
            "siteName": camp["siteName"],
            "potableWater": camp["isDrinkingWaterPotable"],
            "siteType": camp["siteType"],
            "healthSupport": camp["healthSupport"],
            "foodSupport": camp["foodSupport"],
            "percentOfFunctioningToilets": camp["percentOfFunctioningToilets"],
            "frequencyOfFoodDistribution": camp["frequencyOfFoodDistribution"],
            "accessToIncomeGeneratingActivities": camp["accessToIncomeGeneratingActivities"]
        }
    with open('./resources/camp_info.json', 'w') as fp:
        json.dump(resultCamps, fp)

deliverNigeriaCampData()