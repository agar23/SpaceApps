import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Map from '../components/Map'
import ScrollList from '../components/ScrollList';;

const region = {
  latitude: 7.247324,
  longitude: 6.010124,
  latitudeDelta: 0.3,
  longitudeDelta: 0.3
}

export default class EmergencyScreen extends React.Component {
  static navigationOptions = {
    title: 'Top IDP Camps in Nigeria',
  };
  state = {
    location: null,
    region: null,
    startLatitude: null,
    startLongitude: null,
    error:null,
    coords: [],
    camps: [
        {
          "coords": {
            "latitude": 9.27306,
            "longitude": 12.44666
          },
          "idpCamp": "ST THERESAS CATHEDRAL",
          "score": 850
        },
        {
          "coords": {
            "latitude": 11.83418,
            "longitude": 13.13581
          },
          "idpCamp": "EYN CAMP",
          "score": 850
        },
        {
          "coords": {
            "latitude": 12.66615,
            "longitude": 13.62409
          },
          "idpCamp": "NRC 1 \u0026 2",
          "score": 850
        },
        {
          "coords": {
            "latitude": 12.04114,
            "longitude": 13.91272
          },
          "idpCamp": "MOHAMMED KYARIMI",
          "score": 850
        },
        {
          "coords": {
            "latitude": 12.02969,
            "longitude": 13.91728
          },
          "idpCamp": "KULAGARU",
          "score": 850
        },
        {
          "coords": {
            "latitude": 12.66566,
            "longitude": 13.6268
          },
          "idpCamp": "STADIUM CAMP",
          "score": 850
        },
        {
          "coords": {
            "latitude": 9.19624,
            "longitude": 12.38553
          },
          "idpCamp": "MALKOHI CAMP",
          "score": 800
        },
        {
          "coords": {
            "latitude": 11.8258,
            "longitude": 13.11928
          },
          "idpCamp": "NYSC CAMP BORNO",
          "score": 800
        },
        {
          "coords": {
            "latitude": 11.90408,
            "longitude": 13.07953
          },
          "idpCamp": "400 HOUSING ESATE GUBIO",
          "score": 800
        },
        {
          "coords": {
            "latitude": 11.85571,
            "longitude": 13.16191
          },
          "idpCamp": "KAWAR MAILA",
          "score": 800
        },
        {
          "coords": {
            "latitude": 11.16363,
            "longitude": 12.76288
          },
          "idpCamp": "GENERAL HOSPITAL DAMBOA",
          "score": 800
        },
        {
          "coords": {
            "latitude": 12.68426,
            "longitude": 13.61469
          },
          "idpCamp": "WATER BOARD",
          "score": 800
        },
        {
          "coords": {
            "latitude": 12.03809,
            "longitude": 13.92085
          },
          "idpCamp": "KAMCHIJIN PRAYER GROUND",
          "score": 800
        },
        {
          "coords": {
            "latitude": 11.8674,
            "longitude": 13.25057
          },
          "idpCamp": "MUNA DA`ALTI 2B",
          "score": 800
        },
        {
          "coords": {
            "latitude": 12.03095,
            "longitude": 13.92095
          },
          "idpCamp": "AJARI CAMP",
          "score": 800
        },
        {
          "coords": {
            "latitude": 11.23122,
            "longitude": 13.78367
          },
          "idpCamp": "UMBAZAH ROCK SIDE CAMP",
          "score": 800
        },
        {
          "coords": {
            "latitude": 12.04759,
            "longitude": 13.92366
          },
          "idpCamp": "SHEHU MUSTA II",
          "score": 800
        },
        {
          "coords": {
            "latitude": 11.22534,
            "longitude": 13.78606
          },
          "idpCamp": "CAMP 2 (WEGE)",
          "score": 800
        },
        {
          "coords": {
            "latitude": 11.23177,
            "longitude": 13.77628
          },
          "idpCamp": "WEGE ARRIVAL CENTRE",
          "score": 800
        },
        {
          "coords": {
            "latitude": 12.34801,
            "longitude": 14.19412
          },
          "idpCamp": "ARABIC VILLAGE CAMP",
          "score": 800
        },
        {
          "coords": {
            "latitude": 9.20771,
            "longitude": 12.67751
          },
          "idpCamp": "FUFORE CAMP",
          "score": 750
        },
        {
          "coords": {
            "latitude": 11.87722,
            "longitude": 13.1805
          },
          "idpCamp": "MADINATU CAMP",
          "score": 750
        },
        {
          "coords": {
            "latitude": 11.79295,
            "longitude": 13.18053
          },
          "idpCamp": "BALE GALTIMARI PRI SCHOOL",
          "score": 750
        },
        {
          "coords": {
            "latitude": 11.77857,
            "longitude": 13.22406
          },
          "idpCamp": "FEDERAL TRAINING CENTER CAMP",
          "score": 750
        },
        {
          "coords": {
            "latitude": 11.84407,
            "longitude": 13.11736
          },
          "idpCamp": "DCC SHUWARI CAMP",
          "score": 750
        },
        {
          "coords": {
            "latitude": 11.66453,
            "longitude": 13.39605
          },
          "idpCamp": "BOARDING SCHOOL",
          "score": 750
        },
        {
          "coords": {
            "latitude": 12.67954,
            "longitude": 13.62306
          },
          "idpCamp": "GOVERNMENT GIRLS SECONDARY SCHOOL (GGSS)",
          "score": 750
        },
        {
          "coords": {
            "latitude": 11.66571,
            "longitude": 13.38719
          },
          "idpCamp": "MASHAMARI KULUYE",
          "score": 750
        },
        {
          "coords": {
            "latitude": 12.68552,
            "longitude": 13.62026
          },
          "idpCamp": "NGURNO",
          "score": 750
        },
        {
          "coords": {
            "latitude": 12.67141,
            "longitude": 13.62468
          },
          "idpCamp": "GANA ALI",
          "score": 750
        },
        {
          "coords": {
            "latitude": 12.67309,
            "longitude": 13.60536
          },
          "idpCamp": "GOVERNMENT DAY SECONDARY SCHOOL (GDSS)",
          "score": 750
        },
        {
          "coords": {
            "latitude": 11.78975,
            "longitude": 13.13247
          },
          "idpCamp": "KADUWA II",
          "score": 750
        },
        {
          "coords": {
            "latitude": 11.25755,
            "longitude": 14.15444
          },
          "idpCamp": "BANKI CAMP",
          "score": 750
        },
        {
          "coords": {
            "latitude": 11.089,
            "longitude": 13.68757
          },
          "idpCamp": "GWOZA WAKANE PRI. SCH.",
          "score": 750
        },
        {
          "coords": {
            "latitude": 11.79301,
            "longitude": 13.18068
          },
          "idpCamp": "GIDAN YAN BAMA",
          "score": 750
        },
        {
          "coords": {
            "latitude": 11.78282,
            "longitude": 13.13685
          },
          "idpCamp": "KEKENO NON GOVERNMENT IDP CAMP",
          "score": 750
        },
        {
          "coords": {
            "latitude": 12.68006,
            "longitude": 13.61071
          },
          "idpCamp": "GSSSS MONGUNO",
          "score": 750
        },
        {
          "coords": {
            "latitude": 12.35897,
            "longitude": 14.16962
          },
          "idpCamp": "INTERNATIONAL SCHOOL CAMP",
          "score": 750
        },
        {
          "coords": {
            "latitude": 12.03091,
            "longitude": 13.91658
          },
          "idpCamp": "SANGAYA",
          "score": 750
        },
        {
          "coords": {
            "latitude": 12.03685,
            "longitude": 13.90292
          },
          "idpCamp": "AGRIC IDP CAMP",
          "score": 750
        },
        {
          "coords": {
            "latitude": 12.67,
            "longitude": 13.60701
          },
          "idpCamp": "VERTINARY",
          "score": 750
        },
        {
          "coords": {
            "latitude": 12.04361,
            "longitude": 13.91731
          },
          "idpCamp": "SHEHURI MODU KASA CAMP",
          "score": 750
        },
        {
          "coords": {
            "latitude": 11.92033,
            "longitude": 13.59153
          },
          "idpCamp": "GOVERNMENT GIRLS' SECONDARY SCHOOL",
          "score": 750
        },
        {
          "coords": {
            "latitude": 11.16969,
            "longitude": 12.76536
          },
          "idpCamp": "SSS QUARTERS",
          "score": 750
        },
        {
          "coords": {
            "latitude": 11.22047,
            "longitude": 13.78747
          },
          "idpCamp": "DAMARA ARRIVAL CENTRE",
          "score": 750
        },
        {
          "coords": {
            "latitude": 11.80907,
            "longitude": 13.17745
          },
          "idpCamp": "BAKIN LAMBU",
          "score": 750
        },
        {
          "coords": {
            "latitude": 11.22738,
            "longitude": 13.7741
          },
          "idpCamp": "WEGE EXTENSION",
          "score": 750
        },
        {
          "coords": {
            "latitude": 12.04282,
            "longitude": 13.90111
          },
          "idpCamp": "MASARMARI",
          "score": 750
        },
        {
          "coords": {
            "latitude": 11.10531,
            "longitude": 13.69142
          },
          "idpCamp": "GSS CAMP GWOZA",
          "score": 750
        },
        {
          "coords": {
            "latitude": 11.50741,
            "longitude": 13.68856
          },
          "idpCamp": "GSSSS CAMP BAMA",
          "score": 750
        },
        {
          "coords": {
            "latitude": 11.79929,
            "longitude": 13.13576
          },
          "idpCamp": "V.I.O CAMP",
          "score": 750
        },
        {
          "coords": {
            "latitude": 11.6941,
            "longitude": 11.11056
          },
          "idpCamp": "LAYIN TSAMIYA",
          "score": 750
        },
        {
          "coords": {
            "latitude": 9.19288,
            "longitude": 12.37614
          },
          "idpCamp": "MALKOHI VILLAGE",
          "score": 700
        },
        {
          "coords": {
            "latitude": 9.25212,
            "longitude": 12.38243
          },
          "idpCamp": "KILBAJE EXTENSION",
          "score": 700
        },
        {
          "coords": {
            "latitude": 9.217,
            "longitude": 12.66209
          },
          "idpCamp": "WURO AHI",
          "score": 700
        },
        {
          "coords": {
            "latitude": 12.28725,
            "longitude": 10.35695
          },
          "idpCamp": "ANGUWAN SOJIJI CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.79045,
            "longitude": 13.11508
          },
          "idpCamp": "BAKASI CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.84575,
            "longitude": 13.1491
          },
          "idpCamp": "MOGCOLIS CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.86184,
            "longitude": 13.21455
          },
          "idpCamp": "FARM CENTRE",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.78912,
            "longitude": 13.13932
          },
          "idpCamp": "ST. HILLARY",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.85049,
            "longitude": 13.11067
          },
          "idpCamp": "GARBA BUZU QRT",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.80058,
            "longitude": 12.47642
          },
          "idpCamp": "GSS BENISHEIKH",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.8494,
            "longitude": 13.14018
          },
          "idpCamp": "DUJIMA CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.79619,
            "longitude": 13.13454
          },
          "idpCamp": "SULEIMANTI",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.85775,
            "longitude": 13.18104
          },
          "idpCamp": "KASUWA SHANU GIDAN KIFI",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.86843,
            "longitude": 13.25025
          },
          "idpCamp": "MUNA DA'ALTI 2",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.86721,
            "longitude": 13.18123
          },
          "idpCamp": "FARIA GIDAN BLOCK CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.86693,
            "longitude": 13.1655
          },
          "idpCamp": "SHUWARI CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.73458,
            "longitude": 13.28333
          },
          "idpCamp": "KALARI ABULE",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.85561,
            "longitude": 13.14298
          },
          "idpCamp": "GREMA MOHAMMED COMPANY",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.16132,
            "longitude": 12.75653
          },
          "idpCamp": "CENTRAL PRIMARY SCHOOL DAMBOA",
          "score": 700
        },
        {
          "coords": {
            "latitude": 12.66375,
            "longitude": 13.61947
          },
          "idpCamp": "KUYA PRIMARY SCHOOL",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.79113,
            "longitude": 13.13168
          },
          "idpCamp": "KADUWA I",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.79025,
            "longitude": 13.13292
          },
          "idpCamp": "ALI DAWARI II",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.79064,
            "longitude": 13.13281
          },
          "idpCamp": "ALI DAWARI I CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.85567,
            "longitude": 13.15097
          },
          "idpCamp": "GIDAN MANDARA",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.88156,
            "longitude": 13.17708
          },
          "idpCamp": "EL-MISKIN CENTER",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.87226,
            "longitude": 13.17357
          },
          "idpCamp": "OLD MAIDUGURI POLICE STATION CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.7899,
            "longitude": 13.13424
          },
          "idpCamp": "AWULAM CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.79418,
            "longitude": 13.13337
          },
          "idpCamp": "DALWA",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.79093,
            "longitude": 13.13215
          },
          "idpCamp": "KUSHERI BULAMARI",
          "score": 700
        },
        {
          "coords": {
            "latitude": 12.03952,
            "longitude": 13.90478
          },
          "idpCamp": "BULABULIN IDP CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 12.03724,
            "longitude": 13.91043
          },
          "idpCamp": "MOTOR PARK IDP CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.85737,
            "longitude": 13.16797
          },
          "idpCamp": "ALLAMIN DAGASH GARAGE",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.79165,
            "longitude": 13.15148
          },
          "idpCamp": "ABULAM",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.88171,
            "longitude": 13.28239
          },
          "idpCamp": "CUSTOM HOUSE",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.88285,
            "longitude": 13.17695
          },
          "idpCamp": "EL MISKIN TRANSIT CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.86717,
            "longitude": 13.24087
          },
          "idpCamp": "MUNA ETHIOPIA GULUMBA",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.87703,
            "longitude": 13.27814
          },
          "idpCamp": "CUSTOM HOUSE 2",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.80144,
            "longitude": 13.13491
          },
          "idpCamp": "MUSUNE",
          "score": 700
        },
        {
          "coords": {
            "latitude": 12.67535,
            "longitude": 13.60172
          },
          "idpCamp": "FULATARI CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.15973,
            "longitude": 12.75833
          },
          "idpCamp": "MOBILE CLINIC",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.14646,
            "longitude": 12.75608
          },
          "idpCamp": "ESTATE CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.16464,
            "longitude": 12.75885
          },
          "idpCamp": "UPPER COURT",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.79683,
            "longitude": 13.11242
          },
          "idpCamp": "GONI KYARIMI",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.79337,
            "longitude": 13.17182
          },
          "idpCamp": "GOMBOLE SITE 2",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.79978,
            "longitude": 13.11401
          },
          "idpCamp": "KORI CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 12.03647,
            "longitude": 13.90445
          },
          "idpCamp": "TWENTY HOUSING ESTATE",
          "score": 700
        },
        {
          "coords": {
            "latitude": 12.02781,
            "longitude": 13.92117
          },
          "idpCamp": "1000 CAMP DIKWA",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.80138,
            "longitude": 13.11994
          },
          "idpCamp": "TEMPORARY KARSHEN KWALTA CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.80245,
            "longitude": 13.11295
          },
          "idpCamp": "FULATARI FARIN RUWA",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.17004,
            "longitude": 12.76482
          },
          "idpCamp": "LOW COST CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 13.08514,
            "longitude": 13.80245
          },
          "idpCamp": "LAWAN KARTA CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.79443,
            "longitude": 13.1332
          },
          "idpCamp": "ABATCHARI CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 12.26931,
            "longitude": 14.46741
          },
          "idpCamp": "KILAGARU CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 12.03547,
            "longitude": 13.90581
          },
          "idpCamp": "ALHAJI BASHIR CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 12.04225,
            "longitude": 13.92212
          },
          "idpCamp": "SHEWARI CAMP",
          "score": 700
        },
        {
          "coords": {
            "latitude": 11.76023,
            "longitude": 12.23336
          },
          "idpCamp": "KUKARETA PRI SCHOOL",
          "score": 700
        },
        {
          "coords": {
            "latitude": 9.41825,
            "longitude": 12.59718
          },
          "idpCamp": "DAWARE CAMP",
          "score": 650
        },
        {
          "coords": {
            "latitude": 9.20922,
            "longitude": 12.51337
          },
          "idpCamp": "DOKKITILLA WUROCHEKKE",
          "score": 650
        },
        {
          "coords": {
            "latitude": 9.4212,
            "longitude": 12.5971
          },
          "idpCamp": "ANGUWAN MUMUYAWA",
          "score": 650
        },
        {
          "coords": {
            "latitude": 9.35209,
            "longitude": 12.51223
          },
          "idpCamp": "UNGWAN ABUJA",
          "score": 650
        },
        {
          "coords": {
            "latitude": 10.28792,
            "longitude": 9.78542
          },
          "idpCamp": "SABON KAURA CAMP",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.84379,
            "longitude": 13.10027
          },
          "idpCamp": "TEACHERS VILLAGE",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.76859,
            "longitude": 13.23782
          },
          "idpCamp": "250 HOUSING ESTATE",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.86622,
            "longitude": 13.11681
          },
          "idpCamp": "FEDERAL LOW COST CHEZCOAN CAMP",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.83726,
            "longitude": 13.10075
          },
          "idpCamp": "LIVING FAITH CHURCH",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.81613,
            "longitude": 13.06732
          },
          "idpCamp": "GIDAN TALATIN",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.90714,
            "longitude": 13.09186
          },
          "idpCamp": "JAFRA SHAGARI CAMP",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.87318,
            "longitude": 13.25046
          },
          "idpCamp": "MUNA GARAGE EL BADAWE",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.07002,
            "longitude": 13.68992
          },
          "idpCamp": "20 HOUSING UNIT",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.8558,
            "longitude": 13.11008
          },
          "idpCamp": "BULLET QUARTERS CAMP",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.80791,
            "longitude": 12.49842
          },
          "idpCamp": "MAGISTRATE",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.8004,
            "longitude": 13.13365
          },
          "idpCamp": "BULABULIN GAURA",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.79371,
            "longitude": 13.13304
          },
          "idpCamp": "AJIRI  I",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.78872,
            "longitude": 13.13063
          },
          "idpCamp": "YAJIWA CAMP KUSHERI",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.80468,
            "longitude": 13.170328
          },
          "idpCamp": "GIDAN BREDI",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.14815,
            "longitude": 12.75235
          },
          "idpCamp": "HAUSARI PRIMARY SCHOOL DAMBOA",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.7927,
            "longitude": 13.13246
          },
          "idpCamp": "BUSUGU CAMP",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.88072,
            "longitude": 13.11906
          },
          "idpCamp": "DALA STANDARD",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.84494,
            "longitude": 13.18626
          },
          "idpCamp": "ALHAJI ADAMS HOUSE",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.85258,
            "longitude": 13.18114
          },
          "idpCamp": "BAMODU HOUSE",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.8669,
            "longitude": 13.24659
          },
          "idpCamp": "MUNA MOFORO",
          "score": 650
        },
        {
          "coords": {
            "latitude": 12.940123,
            "longitude": 13.674508
          },
          "idpCamp": "QUARTERS CAMP",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.77033,
            "longitude": 13.22645
          },
          "idpCamp": "FULATARI",
          "score": 650
        },
        {
          "coords": {
            "latitude": 12.26702,
            "longitude": 14.47046
          },
          "idpCamp": "BOARDING PRIMARY SCHOOL",
          "score": 650
        },
        {
          "coords": {
            "latitude": 12.26579,
            "longitude": 14.46957
          },
          "idpCamp": "GENERAL HOSPITAL RANN",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.16781,
            "longitude": 12.76223
          },
          "idpCamp": "ABORI",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.87316,
            "longitude": 13.14044
          },
          "idpCamp": "BENI FARIN GIDA",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.79939,
            "longitude": 13.13618
          },
          "idpCamp": "KURU CAMP",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.16253,
            "longitude": 12.7597
          },
          "idpCamp": "OLD SECETARIAT CAMP",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.79117,
            "longitude": 13.13416
          },
          "idpCamp": "AJIRI II",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.15776,
            "longitude": 12.75827
          },
          "idpCamp": "POLICE DOKI",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.86605,
            "longitude": 13.25029
          },
          "idpCamp": "MUNA MALLAM KORI",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.78498,
            "longitude": 13.14913
          },
          "idpCamp": "CAMPO CAMP",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.80627,
            "longitude": 13.17469
          },
          "idpCamp": "N.R.C CAMP",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.86904,
            "longitude": 13.16368
          },
          "idpCamp": "AL-YAKUB",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.80201,
            "longitude": 13.11598
          },
          "idpCamp": "UMARARI CAMP",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.78962,
            "longitude": 13.13348
          },
          "idpCamp": "40 HOUSE CAMP",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.84341,
            "longitude": 13.16508
          },
          "idpCamp": "KANGARMAKA CAMP",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.87176,
            "longitude": 13.18128
          },
          "idpCamp": "ANNUR CAMP",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.86603,
            "longitude": 13.24041
          },
          "idpCamp": "FILLIN BABA MAKINTA",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.16569,
            "longitude": 12.75927
          },
          "idpCamp": "UNITY CAMP",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.85899,
            "longitude": 13.15488
          },
          "idpCamp": "MARTE CAMP",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.86125,
            "longitude": 13.15526
          },
          "idpCamp": "PAMPAS STREET CAMP",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.87771,
            "longitude": 13.16969
          },
          "idpCamp": "SANAWUYA",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.78289,
            "longitude": 13.13282
          },
          "idpCamp": "DARUL QURAN",
          "score": 650
        },
        {
          "coords": {
            "latitude": 8.91798,
            "longitude": 11.34857
          },
          "idpCamp": "JAURO  GBADI PRIMARY SCHOOL CAMP",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.72518,
            "longitude": 11.09382
          },
          "idpCamp": "YAN ITACE PRISON",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.71697,
            "longitude": 11.07073
          },
          "idpCamp": "LAYIN KAWA",
          "score": 650
        },
        {
          "coords": {
            "latitude": 11.72985,
            "longitude": 11.98183
          },
          "idpCamp": "BUKAR ABBA HOUSE",
          "score": 650
        },
        {
          "coords": {
            "latitude": 10.26436,
            "longitude": 13.2954
          },
          "idpCamp": "MUBI BURNT BRICKS FACTORY",
          "score": 600
        },
        {
          "coords": {
            "latitude": 9.28839,
            "longitude": 12.25115
          },
          "idpCamp": "SABON PEGI NGURORE",
          "score": 600
        },
        {
          "coords": {
            "latitude": 9.34264,
            "longitude": 12.51707
          },
          "idpCamp": "SEGERE DUTSE",
          "score": 600
        },
        {
          "coords": {
            "latitude": 12.28825,
            "longitude": 10.34465
          },
          "idpCamp": "OLD HOSPITAL CAMP",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.84707,
            "longitude": 13.10912
          },
          "idpCamp": "SABONGARI BUZU CAMP",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.80318,
            "longitude": 12.49542
          },
          "idpCamp": "LOW COST   SDP",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.78468,
            "longitude": 13.13906
          },
          "idpCamp": "AJIJARI CAMP",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.86817,
            "longitude": 13.25386
          },
          "idpCamp": "MUNA DA'ALTI 3",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.8161,
            "longitude": 13.18971
          },
          "idpCamp": "ORJI KALU HOUSE",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.80358,
            "longitude": 13.16518
          },
          "idpCamp": "GOMBOLE SITE",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.86932,
            "longitude": 13.16474
          },
          "idpCamp": "KORSO BASHIR CAMP",
          "score": 600
        },
        {
          "coords": {
            "latitude": 12.67214,
            "longitude": 13.61943
          },
          "idpCamp": "GARDENER LOW COST",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.86917,
            "longitude": 13.25319
          },
          "idpCamp": "MUNA DA'ALTI 1A",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.86955,
            "longitude": 13.25373
          },
          "idpCamp": "MUNA DA'ALTI 1B",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.82011,
            "longitude": 13.1894
          },
          "idpCamp": "LAYIN ELKA",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.86705,
            "longitude": 13.25275
          },
          "idpCamp": "MUNA DA'ALTI 2A",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.81204,
            "longitude": 12.49902
          },
          "idpCamp": "AISHA BUHARI CAMP",
          "score": 600
        },
        {
          "coords": {
            "latitude": 12.47942,
            "longitude": 13.2072
          },
          "idpCamp": "BAKKASI CAMP",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.87386,
            "longitude": 13.13988
          },
          "idpCamp": "KARANTINA",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.86946,
            "longitude": 13.24108
          },
          "idpCamp": "MUNA KORI BULA YALAYE",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.84418,
            "longitude": 13.18612
          },
          "idpCamp": "ALHAJI ADAM HOUSE 2",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.86962,
            "longitude": 13.25497
          },
          "idpCamp": "ABBA KURA HASSAN",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.85804,
            "longitude": 13.19984
          },
          "idpCamp": "MALA SHERIFF CONSTRUCTION COMPANY",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.85872,
            "longitude": 13.19924
          },
          "idpCamp": "ALHAJI BASHIR LIMAN HOUSE",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.16116,
            "longitude": 12.76115
          },
          "idpCamp": "POLICE BARRACK",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.86565,
            "longitude": 13.23252
          },
          "idpCamp": "BOLORIN BURIN",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.83289,
            "longitude": 13.16105
          },
          "idpCamp": "BIAFRA CAMP",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.86203,
            "longitude": 13.16203
          },
          "idpCamp": "WAKSHAMA",
          "score": 600
        },
        {
          "coords": {
            "latitude": 12.26328,
            "longitude": 13.1046
          },
          "idpCamp": "BARE CAMP",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.86513,
            "longitude": 13.24176
          },
          "idpCamp": "BAKASSI MUNA",
          "score": 600
        },
        {
          "coords": {
            "latitude": 12.48897,
            "longitude": 13.21803
          },
          "idpCamp": "AREA MARKET BULABULIN",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.85072,
            "longitude": 13.1925
          },
          "idpCamp": "KIRENUWA CAMP",
          "score": 600
        },
        {
          "coords": {
            "latitude": 8.95158,
            "longitude": 11.32667
          },
          "idpCamp": "GULLUM CLINIC CAMP",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.72174,
            "longitude": 12.12621
          },
          "idpCamp": "MOH'D GOMBE FARM",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.6861,
            "longitude": 12.04778
          },
          "idpCamp": "KASAISA VILLAGE",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.73905,
            "longitude": 12.01215
          },
          "idpCamp": "HURI VILLAGE CAMP",
          "score": 600
        },
        {
          "coords": {
            "latitude": 11.68188,
            "longitude": 11.19703
          },
          "idpCamp": "BAKIN TRANSFORMER",
          "score": 600
        },
        {
          "coords": {
            "latitude": 12.87613,
            "longitude": 10.42309
          },
          "idpCamp": "GOVERNMENT COLLEGE",
          "score": 600
        },
        {
          "coords": {
            "latitude": 9.30329,
            "longitude": 12.47378
          },
          "idpCamp": "EYN CHURCH VINIKILANG",
          "score": 550
        },
        {
          "coords": {
            "latitude": 9.80547,
            "longitude": 12.6131
          },
          "idpCamp": "SHAGARI QUARTERS CAMP",
          "score": 550
        },
        {
          "coords": {
            "latitude": 9.05765,
            "longitude": 12.05922
          },
          "idpCamp": "ISLAMIYA PRI. SCH.",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.86631,
            "longitude": 13.23638
          },
          "idpCamp": "MUNA PRIMARY",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.81075,
            "longitude": 13.18683
          },
          "idpCamp": "UNI GUEST",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.80819,
            "longitude": 13.18139
          },
          "idpCamp": "BAKIN KOGI CAMP",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.74435,
            "longitude": 13.26588
          },
          "idpCamp": "CHALLUMURI",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.77588,
            "longitude": 13.21718
          },
          "idpCamp": "YAWURI CAMP",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.85286,
            "longitude": 13.17987
          },
          "idpCamp": "GIDAN MONGORO",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.83339,
            "longitude": 13.18742
          },
          "idpCamp": "ADAM KOLO",
          "score": 550
        },
        {
          "coords": {
            "latitude": 12.61493,
            "longitude": 13.33069
          },
          "idpCamp": "GASARWA CAMP",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.87957,
            "longitude": 13.26028
          },
          "idpCamp": "MUSARI CAMP",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.81643,
            "longitude": 12.49407
          },
          "idpCamp": "NRC CAMP",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.85664,
            "longitude": 13.19427
          },
          "idpCamp": "ALHAJI MUSTAPHA BABAGANA HOUSE",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.85776,
            "longitude": 13.19539
          },
          "idpCamp": "BAKURA AHMED HOUSE",
          "score": 550
        },
        {
          "coords": {
            "latitude": 12.25888,
            "longitude": 13.10666
          },
          "idpCamp": "GGSS GAJIGANNA CAMP",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.78066,
            "longitude": 13.21456
          },
          "idpCamp": "SHUWARI",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.748,
            "longitude": 13.26339
          },
          "idpCamp": "DALORIMA",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.74833,
            "longitude": 13.26013
          },
          "idpCamp": "FANNAMRI",
          "score": 550
        },
        {
          "coords": {
            "latitude": 12.25138,
            "longitude": 13.10208
          },
          "idpCamp": "MALAYI CAMP",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.86677,
            "longitude": 13.23919
          },
          "idpCamp": "BAJAURO CAMP",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.8994,
            "longitude": 13.20213
          },
          "idpCamp": "GIDAN MANGORO NEW",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.85866,
            "longitude": 13.21539
          },
          "idpCamp": "ALHAJI TAR 1",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.85765,
            "longitude": 13.21543
          },
          "idpCamp": "ALHAJI TAR 2",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.84964,
            "longitude": 13.19544
          },
          "idpCamp": "WADE -WADE LAYIN BOLA",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.78495,
            "longitude": 13.21019
          },
          "idpCamp": "SHUWARI GAYA",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.88649,
            "longitude": 13.222254
          },
          "idpCamp": "BULAMATARI CAMP",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.85983,
            "longitude": 13.15656
          },
          "idpCamp": "OLD INEC CAMP",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.86192,
            "longitude": 13.15808
          },
          "idpCamp": "RAILWAY TERMINUS CAMP",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.84734,
            "longitude": 13.11052
          },
          "idpCamp": "SABON GARI 2",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.78566,
            "longitude": 13.1344
          },
          "idpCamp": "FULATARI CAMP JERE",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.86425,
            "longitude": 13.14874
          },
          "idpCamp": "ANSAR CAMP",
          "score": 550
        },
        {
          "coords": {
            "latitude": 8.91475,
            "longitude": 11.30571
          },
          "idpCamp": "TUMDIRI",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.72993,
            "longitude": 11.9805
          },
          "idpCamp": "ABARI Y.B.C",
          "score": 550
        },
        {
          "coords": {
            "latitude": 12.98791,
            "longitude": 11.96704
          },
          "idpCamp": "UNGUWAR KWARAWA",
          "score": 550
        },
        {
          "coords": {
            "latitude": 11.67177,
            "longitude": 11.53871
          },
          "idpCamp": "FUNAI",
          "score": 550
        },
        {
          "coords": {
            "latitude": 9.29585,
            "longitude": 12.4091
          },
          "idpCamp": "HULLERE",
          "score": 500
        },
        {
          "coords": {
            "latitude": 9.35204,
            "longitude": 12.51312
          },
          "idpCamp": "NANA VILLA",
          "score": 500
        },
        {
          "coords": {
            "latitude": 9.30613,
            "longitude": 12.4846
          },
          "idpCamp": "WADAI",
          "score": 500
        },
        {
          "coords": {
            "latitude": 9.36791,
            "longitude": 12.55256
          },
          "idpCamp": "LOWCOST QUARTERS",
          "score": 500
        },
        {
          "coords": {
            "latitude": 9.31974,
            "longitude": 12.44136
          },
          "idpCamp": "ANGWAN KARA",
          "score": 500
        },
        {
          "coords": {
            "latitude": 9.28678,
            "longitude": 12.22178
          },
          "idpCamp": "WURO-YANKA",
          "score": 500
        },
        {
          "coords": {
            "latitude": 9.15587,
            "longitude": 12.40353
          },
          "idpCamp": "GUJIBABU SABON GARI",
          "score": 500
        },
        {
          "coords": {
            "latitude": 11.02036,
            "longitude": 8.90065
          },
          "idpCamp": "BURRA",
          "score": 500
        },
        {
          "coords": {
            "latitude": 10.61545,
            "longitude": 12.18285
          },
          "idpCamp": "ZONAL EDUCATION CENTER CAMP, BIU",
          "score": 500
        },
        {
          "coords": {
            "latitude": 11.87071,
            "longitude": 13.18954
          },
          "idpCamp": "FARIA BUZU CAMP",
          "score": 500
        },
        {
          "coords": {
            "latitude": 11.87863,
            "longitude": 13.11927
          },
          "idpCamp": "DOGONGIDA CAMP",
          "score": 500
        },
        {
          "coords": {
            "latitude": 12.61775,
            "longitude": 13.33028
          },
          "idpCamp": "GASARWA PRI SCHOOL",
          "score": 500
        },
        {
          "coords": {
            "latitude": 11.91806,
            "longitude": 13.19204
          },
          "idpCamp": "KESSA KURA",
          "score": 500
        },
        {
          "coords": {
            "latitude": 10.88008,
            "longitude": 12.84496
          },
          "idpCamp": "TEN HOUSING QUARTERS",
          "score": 500
        },
        {
          "coords": {
            "latitude": 11.94668,
            "longitude": 13.22199
          },
          "idpCamp": "KHADDAMARI QTRS",
          "score": 500
        },
        {
          "coords": {
            "latitude": 12.49437,
            "longitude": 13.20564
          },
          "idpCamp": "BUKARTI CAMP",
          "score": 500
        },
        {
          "coords": {
            "latitude": 11.8771,
            "longitude": 13.17646
          },
          "idpCamp": "SHIEK SHERIFF TIJJANI CAMP",
          "score": 500
        },
        {
          "coords": {
            "latitude": 11.87509,
            "longitude": 13.18228
          },
          "idpCamp": "AJIGAB CAMP",
          "score": 500
        },
        {
          "coords": {
            "latitude": 12.49623,
            "longitude": 13.2103
          },
          "idpCamp": "NGURO YALAYE",
          "score": 500
        },
        {
          "coords": {
            "latitude": 12.03976,
            "longitude": 13.92523
          },
          "idpCamp": "MINISTRY OF WORKS CAMP",
          "score": 500
        },
        {
          "coords": {
            "latitude": 12.49473,
            "longitude": 13.21325
          },
          "idpCamp": "KARO KASA",
          "score": 500
        },
        {
          "coords": {
            "latitude": 11.86493,
            "longitude": 13.14631
          },
          "idpCamp": "REAL FORM CAMP",
          "score": 500
        },
        {
          "coords": {
            "latitude": 9.03941,
            "longitude": 11.27557
          },
          "idpCamp": "MURTAI CAMP",
          "score": 500
        },
        {
          "coords": {
            "latitude": 8.63034,
            "longitude": 10.76448
          },
          "idpCamp": "LG QUARTERS",
          "score": 500
        },
        {
          "coords": {
            "latitude": 7.86051,
            "longitude": 9.77552
          },
          "idpCamp": "MECO",
          "score": 500
        },
        {
          "coords": {
            "latitude": 7.86422,
            "longitude": 9.77858
          },
          "idpCamp": "OLD CONCORD",
          "score": 500
        },
        {
          "coords": {
            "latitude": 11.50058,
            "longitude": 11.93129
          },
          "idpCamp": "FULATARI 2",
          "score": 500
        },
        {
          "coords": {
            "latitude": 11.50358,
            "longitude": 11.9378
          },
          "idpCamp": "AJIYARI 2",
          "score": 500
        },
        {
          "coords": {
            "latitude": 11.56666,
            "longitude": 11.91669
          },
          "idpCamp": "KATARKO 2",
          "score": 500
        },
        {
          "coords": {
            "latitude": 9.82975,
            "longitude": 12.61235
          },
          "idpCamp": "GADAMAYO BANGO",
          "score": 450
        },
        {
          "coords": {
            "latitude": 10.87808,
            "longitude": 12.85962
          },
          "idpCamp": "RED-BRICKS (IDP) CAMP",
          "score": 450
        },
        {
          "coords": {
            "latitude": 11.94897,
            "longitude": 13.22214
          },
          "idpCamp": "NGUD  KHADDAMARI",
          "score": 450
        },
        {
          "coords": {
            "latitude": 10.69363,
            "longitude": 13.26958
          },
          "idpCamp": "VOCATIONAL TRAINING CENTRE",
          "score": 450
        },
        {
          "coords": {
            "latitude": 12.25395,
            "longitude": 13.09907
          },
          "idpCamp": "GGSS QUARTERS",
          "score": 450
        },
        {
          "coords": {
            "latitude": 11.92344,
            "longitude": 13.18808
          },
          "idpCamp": "GONGULONG CAMP",
          "score": 450
        },
        {
          "coords": {
            "latitude": 7.86015,
            "longitude": 9.7775
          },
          "idpCamp": "VERTINARY ",
          "score": 450
        },
        {
          "coords": {
            "latitude": 7.72264,
            "longitude": 10.05538
          },
          "idpCamp": "POST OFFICE",
          "score": 450
        },
        {
          "coords": {
            "latitude": 9.37348,
            "longitude": 12.55781
          },
          "idpCamp": "CHEKAMIDERI",
          "score": 400
        },
        {
          "coords": {
            "latitude": 9.80365,
            "longitude": 12.62411
          },
          "idpCamp": "SABON PEGGI",
          "score": 400
        },
        {
          "coords": {
            "latitude": 12.48755,
            "longitude": 13.20949
          },
          "idpCamp": "BEHIND SECRETARIAT",
          "score": 400
        },
        {
          "coords": {
            "latitude": 7.874,
            "longitude": 9.76794
          },
          "idpCamp": "EBENEZER PRIMARY SCHOOL WUKARI",
          "score": 400
        },
        {
          "coords": {
            "latitude": 7.64321,
            "longitude": 10.04586
          },
          "idpCamp": "DONZUMGA PRIMARY SCHOOL",
          "score": 400
        },
        {
          "coords": {
            "latitude": 7.7235,
            "longitude": 10.05387
          },
          "idpCamp": "ABDULLAHI PRI SCH",
          "score": 400
        },
        {
          "coords": {
            "latitude": 8.95697,
            "longitude": 12.06087
          },
          "idpCamp": "MAYO FARRANG",
          "score": 350
        },
        {
          "coords": {
            "latitude": 9.08514,
            "longitude": 12.07284
          },
          "idpCamp": "MAYO SANGANARE",
          "score": 350
        },
        {
          "coords": {
            "latitude": 10.64814,
            "longitude": 12.90757
          },
          "idpCamp": "ZADAWA CAMP",
          "score": 350
        },
        {
          "coords": {
            "latitude": 12.60408,
            "longitude": 13.31782
          },
          "idpCamp": "JIGALTA LAWANTI",
          "score": 300
        },
        {
          "coords": {
            "latitude": 10.31845,
            "longitude": 9.93905
          },
          "idpCamp": "RINDIBIN CAMP",
          "score": 200
        }  
    ]
  }

  setStartCoords = (lat) =>{
    this.setState({
      startLatitude: lat.lat,
      startLongitude: lat.long
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollList 
        camps={this.state.camps}
        setStartCoords={this.setStartCoords} 
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  }
})
