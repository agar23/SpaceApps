import json
import requests

import constants

def getDistance(originCoordinates, destinationCoordinates):
    """
    Returns distance between two coordinates

    Args:
        originCoordinates (str): coordinate of origin eg: 'lat,long'
        destinationCoordinates (str): coordinate of destination

    Returns:
        {
            text (str): friendly human-readable representation of the distance i.e. "2000 km"
            value (long): distance in meters
        }
    """
    url = constants.GOOGLE_MAPS_DISTANCE_API \
        + "?" + constants.GOOGLE_MAPS_KEY_URI \
        + "&origins=" + originCoordinates \
        + "&destinations=" + destinationCoordinates
    response = requests.get(url)
    if (response.status_code == 200):
        data = response.json()
        if (len(data["rows"]) > 0 and len(data["rows"][0]["elements"]) > 0):
            return data["rows"][0]["elements"][0]["distance"]
        else:
            raise Exception("GET request did not return distance: " + url)
    else:
        raise Exception("GET request failed: " + url)
