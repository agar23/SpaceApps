import pandas as pd
import json

import constants

def readDataForPopulationDensity(populationFileName):
    """
    Should only need to be run once to generate
    json file with calculated population densities
    """
    headers = ["city", "area", "populationCount"]
    popFile = pd.read_csv(populationFileName, names=headers)
    popJsonStr = popFile.to_json(orient="records")
    populations = json.loads(popJsonStr)
    for p in populations:
        popCount = float(p["populationCount"])
        area = float(p["area"])
        popDensity = popCount / (area * 1000)
        p["populationDensity"] = popDensity
    with open('./resources/population_with_densities.json', 'w') as fp:
        json.dump(populations, fp)

def optimalPopDensityScore():
    """
    sort cities by population density relative to optimal density
    """
    with open("./resources/population_with_densities.json") as f:
        cityList = json.load(f)

    summation = 0
    cityDict = {}
    for city in cityList:
        summation += city["populationDensity"]
        diff = abs(city['populationDensity'] - constants.OPTIMAL_DENSITY)
        score = (diff/constants.OPTIMAL_DENSITY) * 100
        score = 100 - score
        cityName = city["city"]
        city["score"] = score
        cityDict[cityName] = city

    return cityDict
