import pandas as pd
import json
from pprint import pprint

from google_maps import getDistance

import pandas as pd
import requests

def readDataForNigerianCamps(nigerianCampFileName):
    headers = ["dtmRound","statePcode","state","lgaPcode","lga","wardPcode","ward","siteId","siteName","longitude","latitude","googleMapLink","siteStatus","siteClassification","siteType","siteArea","siteManagementAgency","smaType","registrationActivity","washSupport","cccmSupport","healthSupport","shelterNfiSupport","foodSupport","protectionSupport","educationSupport","livelihoodSupport","landOwnership","mostCommonTypeOfShelter","numberOfHouseholds","numberOfIndividuals","boysUnderOne","girlsUnderOne","boysOneToFive","girlsOneToFive","boysSixToSeventeen","girlsSixToSeventeen","menEighteenToFiftyNine","womenEighteenToFiftyNine","elderlyMenSixtyPlus","elderlyWomenSixtyPlus","haveIdpsBeenDisplacedPreviously","reasonForDisplacementOfMajority","naturalHazardRisks","intendedAreaOfReturn","reasonsToReturnHome","reasonsNotToReturnHome","percentHHLivingOutsideNoShelter","percentHHLivingInEmS","percentHHLivingInMakeshiftSelfMadeShelter","percentHHLivingIndoorsSolidWalls","percentHHHaveAccessToElectricity","percentHHHaveAccessToSafeCookingFacilities","percentHHHavePrivateLivingArea","percentHHHaveMosquitoNets","mostNeededNFI","locationOfSiteMainWaterSource","mainDrinkingWaterSource","avgAmountOfWaterAvailableDayPerPerson","isDrinkingWaterPotable","complaintsAboutDrinkingWaterQuality","conditionOfMostOfTheToilets","percentOfFunctioningToilets","mainGarbageDisposal","garbageAndSolidWasteProblem","availabilityOfHandwashingStation","hygienePromotionCampaign","evidenceOfOpenDefecation","accessToFood","accessToMarketNearFromTheSite","frequencyOfFoodDistribution","mostCommonSourceForObtainingFood","screeningForMalnutrition","mostHealthProblem","regularAccessToMedicine","accessToHealthFacility","locationOfHealthFacilities","mainProviderOfHealthFacilities","accessToEducationServices","locationOfEducationFacilities","percentOfChildrenAttendingSchool","occupationOfMajorityOfIDPs","percentOfHHWithSourceOfIncome","accessToIncomeGeneratingActivities","livestockOnSite","idpsHaveAccessToLandForCultivation","mostTrustedSourceOfInfo","mainTopicCommunityIsRequestingInfo","seriousProblemDueToLackInformation"]
    df = pd.read_csv(nigerianCampFileName, names=headers)
    jsonData = df.to_json(orient='records')
    print(jsonData)
    with open('./resources/nigeria_camps.json', 'w') as fp:
        json.dump(jsonData, fp)
    #print(df['rating'])

def readDataForIdpCamps():
    with open("./resources/nigeria_camps.json") as f:
        data = json.load(f)
    return data

def getDistancesToIdpCamps(userCoordinates):
    '''
    KEEP THIS IN CASE WE NEED IT FOR LATER
    idpCamps = readDataForIdpCamps("./resources/idp_camps.json")
    for idpCamp in idpCamps:
        idpCampCoordinates = idpCamp["coordinates"]
        distance = ""
        try:
            distance = getDistance(userCoordinates, idpCampCoordinates)["value"]
        except Exception as err:
            print("Error getting distance: " + repr(err))
        idpCamp["distance"] = distance
    with open('./resources/idpCampWithDistance.json', 'w') as fp:
        json.dump(idpCamps, fp)
    return idpCamps
    '''
    #with open("./resources/idp_camps_with_distance.json") as f:
    with open("./resources/idpCampWithDistance.json") as f:
        data = json.load(f)
    return data
    """
    idpCamps = readDataForIdpCamps() #"./resources/nigeria_camps.json"
    for idpCamp in idpCamps:
        idpLatitude = idpCamp["latitude"]
        idpLongitude = idpCamp["longitude"]
        idpCampCoordinates = str(idpLatitude) + "," + str(idpLongitude)
        print(idpCampCoordinates)
        distance = ""
        try:
            distance = getDistance(userCoordinates, idpCampCoordinates)["value"]
        except Exception as err:
            print("Error getting distance: " + repr(err))
        idpCamp["distance"] = distance
    with open('./resources/idpCampWithDistance.json', 'w') as fp:
        json.dump(idpCamps, fp)
    return idpCamps
    """

#getDistancesToIdpCamps("7.247324,6.010124")
#readDataForIdpCamps()
