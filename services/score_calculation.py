from un_clusters import *
from population_density import optimalPopDensityScore
import json

"""
    Given a latitude and longitude we calculate the scores for each potential
    displacement camp location based on measures such as distance from UN clusters,
    distance from healthcare facilities, accessibility score and population density
"""
def score_calculation(userCoordinates):
    #Score Calculation - Based on Distance from IDP Camps
    unClusterDistances = getDistancesToIdpCamps(userCoordinates)

    #Get shortest distance IDP Camp value
    shortestDistance = unClusterDistances[0]["distance"]
    for unClusterDistancesJson in unClusterDistances:
        if (unClusterDistancesJson["distance"] < shortestDistance):
            shortestDistance = unClusterDistancesJson["distance"]

    overallScoreList = []

    #Score Calculation - Based on Population density scores
    populationDensityScores = optimalPopDensityScore()

    #Iterate through the list of IDP camps and combine scores from each measure
    supportScore = 0
    for unClusterDistancesJson in unClusterDistances:
        latitude = float(unClusterDistancesJson["latitude"])
        longitude = float(unClusterDistancesJson["longitude"])
        existingDistance = unClusterDistancesJson["distance"]
        nearbyIdpCamp = unClusterDistancesJson["siteName"]

        #IDP Camp score
        if existingDistance != "":
            percentageIDPCampDiff = (existingDistance - shortestDistance)/shortestDistance
        else:
            percentageIDPCampDiff = 100
        unScore = 100 - percentageIDPCampDiff

        #Support score
        if unClusterDistancesJson["washSupport"] == "Yes":
            supportScore += 1
        if unClusterDistancesJson["cccmSupport"] == "Yes":
            supportScore += 1
        if unClusterDistancesJson["healthSupport"] == "Yes":
            supportScore += 1
        if unClusterDistancesJson["shelterNfiSupport"] == "Yes":
            supportScore += 1
        if unClusterDistancesJson["foodSupport"] == "Yes":
            supportScore += 1
        if unClusterDistancesJson["protectionSupport"] == "Yes":
            supportScore += 1
        if unClusterDistancesJson["educationSupport"] == "Yes":
            supportScore += 1
        if unClusterDistancesJson["livelihoodSupport"] == "Yes":
            supportScore += 1

        #Site Status Code Score
        formalScore = 0
        if unClusterDistancesJson["siteStatus"] == "Formal":
            formalScore += 1

        #Site Type Score
        siteTypeScore = 0
        if unClusterDistancesJson["siteType"] in ['Collective Settlement/Centre','Transitional Centre']:
            siteTypeScore += 1
        
        #Most Common Shelter Type Score
        mostCommonShelterTypeScore = 0
        if unClusterDistancesJson["mostCommonTypeOfShelter"] != "Self-made/makeshift shelter":
            mostCommonShelterTypeScore += 1

        #Most Common Shelter Type Score
        mostCommonShelterTypeScore = 0
        if unClusterDistancesJson["mostCommonTypeOfShelter"] != "Self-made/makeshift shelter":
            mostCommonShelterTypeScore += 1

        #Natural Hazard Risks Score
        naturalHazardScore = 0
        if unClusterDistancesJson["naturalHazardRisks"] not in ['Fire', 'Flood', 'Storm']:
            naturalHazardScore += 1

        #Location of Site Main Water Source Score
        siteMainWaterSourceLocationScore = 0
        if unClusterDistancesJson["locationOfSiteMainWaterSource"] in ['On-site (<10 mn)', 'Off-site (<10 mn)']:
            siteMainWaterSourceLocationScore += 1

        #Avg Amount of Water Available /day/person Score
        avgAmountOfWaterAvailableDayPerPersonScore = 0
        if unClusterDistancesJson["avgAmountOfWaterAvailableDayPerPerson"] != "<5 ltr":
            avgAmountOfWaterAvailableDayPerPersonScore += 1

        #Portable Drinking Water Available Score
        portableDrinkingWaterScore = 0
        if unClusterDistancesJson["isDrinkingWaterPotable"] == "Yes":
            portableDrinkingWaterScore += 1

        #Complaints About Drinking Water Quality Score
        complaintsAboutDrinkingWaterQualityScore = 0
        if unClusterDistancesJson["complaintsAboutDrinkingWaterQuality"] == "No":
            complaintsAboutDrinkingWaterQualityScore += 1

        #Condition of Toilets Score
        conditionOfMostOfTheToiletsScore = 0
        if unClusterDistancesJson["conditionOfMostOfTheToilets"] == "Good (Hygienic)":
            conditionOfMostOfTheToiletsScore += 1

        #Garbage and Solid Waste Problem Score
        garbageAndSolidWasteProblemScore = 0
        if unClusterDistancesJson["garbageAndSolidWasteProblem"] == "No":
            garbageAndSolidWasteProblemScore += 1

        #Hand Washing Station Available Score
        availabilityOfHandwashingStationScore = 0
        if unClusterDistancesJson["availabilityOfHandwashingStation"] == "Yes":
            availabilityOfHandwashingStationScore += 1
        
        #Open Defication Evidence Score
        evidenceOfOpenDefecationScore = 0
        if unClusterDistancesJson["evidenceOfOpenDefecation"] == "No":
            evidenceOfOpenDefecationScore += 1

        #Access to Food Score
        accessToFoodScore = 0
        if unClusterDistancesJson["accessToFood"] != "No":
            accessToFoodScore += 1

        #Screening For Malnutrition Score
        screeningForMalnutritionScore = 0
        if unClusterDistancesJson["screeningForMalnutrition"] == "Yes":
            screeningForMalnutritionScore += 1

        #Access to Medicine Score
        regularAccessToMedicineScore = 0
        if unClusterDistancesJson["regularAccessToMedicine"] == "Yes":
            regularAccessToMedicineScore += 1

        #Access to Health Facilities Score
        accessToHealthFacilityScore = 0
        if unClusterDistancesJson["accessToHealthFacility"] == "Yes":
            accessToHealthFacilityScore += 1

        #Access to Education Score
        accessToEducationServicesScore = 0
        if unClusterDistancesJson["accessToEducationServices"] == "Yes":
            accessToEducationServicesScore += 1

        #Access to Work Score
        accessToIncomeGeneratingActivitiesScore = 0
        if unClusterDistancesJson["accessToIncomeGeneratingActivities"] == "Yes":
            accessToIncomeGeneratingActivitiesScore += 1



        overallSupportScore = (supportScore/8)*100
        overallFormalScore = formalScore * 100
        overallsiteTypeScore = siteTypeScore * 100
        overallmostCommonShelterTypeScore = mostCommonShelterTypeScore * 100
        overallnaturalHazardScore = naturalHazardScore * 100
        overallsiteMainWaterSourceLocationScore = siteMainWaterSourceLocationScore * 100
        overallavgAmountOfWaterAvailableDayPerPersonScore = avgAmountOfWaterAvailableDayPerPersonScore * 100
        overallportableDrinkingWaterScore = portableDrinkingWaterScore * 100
        overallcomplaintsAboutDrinkingWaterQualityScore = complaintsAboutDrinkingWaterQualityScore * 100
        overallconditionOfMostOfTheToiletsScore = conditionOfMostOfTheToiletsScore * 100
        overallgarbageAndSolidWasteProblemScore = garbageAndSolidWasteProblemScore * 100
        overallavailabilityOfHandwashingStationScore = availabilityOfHandwashingStationScore * 100
        overallevidenceOfOpenDefecationScore = evidenceOfOpenDefecationScore * 100
        overallaccessToFoodScore = accessToFoodScore * 100
        overallscreeningForMalnutritionScore = screeningForMalnutritionScore * 100
        overallregularAccessToMedicineScore = regularAccessToMedicineScore * 100
        overallaccessToHealthFacilityScore = accessToHealthFacilityScore * 100
        overallaccessToEducationServicesScore = accessToEducationServicesScore * 100
        overallaccessToIncomeGeneratingActivitiesScore = accessToIncomeGeneratingActivitiesScore * 100

        #Population Density score
        #popDensityScore = populationDensityScores[city]["score"]

        #Overall Score - taking weights into account
        #score = (unScore * 0.6) + (popDensityScore * 0.4)

        coords = {"longitude": longitude, "latitude": latitude}
        overallconditionOfMostOfTheToiletsScore = conditionOfMostOfTheToiletsScore * 100
        overallaccessToEducationServicesScore = accessToEducationServicesScore * 100
        score = unScore*.5 + overallSupportScore*.5 + overallFormalScore*.5 + overallsiteTypeScore*.5 + overallmostCommonShelterTypeScore*.5 + overallnaturalHazardScore*.5 + overallsiteMainWaterSourceLocationScore*.5 + overallavgAmountOfWaterAvailableDayPerPersonScore*.5 + overallportableDrinkingWaterScore*.5 + overallcomplaintsAboutDrinkingWaterQualityScore*.5 + overallconditionOfMostOfTheToiletsScore*.5 + overallgarbageAndSolidWasteProblemScore*.5 + overallavailabilityOfHandwashingStationScore*.5 + overallevidenceOfOpenDefecationScore*.5 + overallaccessToFoodScore*.5 + overallscreeningForMalnutritionScore*.5 + overallregularAccessToMedicineScore*.5 + overallaccessToHealthFacilityScore*.5 + overallaccessToEducationServicesScore*.5 + overallaccessToIncomeGeneratingActivitiesScore*.5
        scoreDict = {"idpCamp": nearbyIdpCamp, "score": score,  "coords": coords }
        supportScore = 0
        overallScoreList.append(scoreDict)

    overallScoreList = sorted(overallScoreList, key=lambda k: k['score'], reverse=True)
    with open('./resources/score_list.json', 'w') as fp:
        json.dump(overallScoreList, fp)
    return json.dumps(overallScoreList)

score_calculation("7.247324,6.010124")
