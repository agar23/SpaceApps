import constants
import requests
import time
import datetime
import json

def agroData(polyId):
    now = datetime.datetime.now()
    lastMonth = now - datetime.timedelta(days=30)
    nowUnix = int(time.mktime(now.timetuple()))
    lastMonthUnix = int(time.mktime(lastMonth.timetuple()))
     
    #url = constants.AGROMONITORING_NDVI_API + "polyid=" + polyId + "&start=" + str(lastMonthUnix) + "&end=" + str(nowUnix) + "&appid=" + constants.AGROMONITORING_API_KEY
    response = requests.get("http://api.agromonitoring.com/agro/1.0/ndvi/history?polyid=" + polyId + "&start=946684800&end=1540103851&appid=b5663a79a19a902ad50c8a81eb765fbe")
    if (response.status_code == 200):
        data = response.json()
        return(data[0]['data']['mean'])

    else:
        #print(url)
        print(response)
        raise Exception("GET request failed")

def getVegetationMean():
    with open("./resources/polygon_ids.json") as f:
        polygonIds = json.load(f)
    
    result = []
    for polygonId in polygonIds:
        for key in polygonId.keys():
            mean = agroData(polygonId[key])
            result.append({
                "city": key,
                "ndvi": mean
            })
    result = sorted(result, key=lambda k: k['ndvi'], reverse=True) 

    with open('./resources/vegetation_means.json', 'w') as fp:
        json.dump(result, fp)
    
getVegetationMean()