//import { GOOGLE_DRIVE_URL } from "../constants";

const PROJECTS = [
  {
    ID: "jw-marriott-mumbai",
    TITLE: "JW Marriott",
    LOCATION: "Mumbai, India",
    BANNER_IMAGE: require("../assets/images/Hospitality/JW Marriot Mumbai  /JW-marriot01.jpg"),
    DESCRIPTION:
      "67 Guest Rooms, 15 Suite Rooms & corridor, GM Apartment & Executive Lounge",
    IMAGES: [
      {
        IMAGE: require("../assets/images/Hospitality/JW Marriot Mumbai  /JW-marriot02.jpg"),
        ALT_TEXT: "TWI CAROUSEL 01",
      },
      {
        IMAGE: require("../assets/images/Hospitality/JW Marriot Mumbai  /JW-marriot03.jpg"),
        ALT_TEXT: "TWI CAROUSEL 02",
      },
      {
        IMAGE: require("../assets/images/Hospitality/JW Marriot Mumbai  /JW-marriot04.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Hospitality/JW Marriot Mumbai  /JW-marriot05.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/JW Marriot Mumbai  /JW-marriot06.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/JW Marriot Mumbai  /JW-marriot07.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/JW Marriot Mumbai  /JW-marriot09.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
    ],
  },
  {
    ID: "westin-chennai",
    TITLE: "The Westin Chennai",
    LOCATION: "Chennai, India",
    BANNER_IMAGE: require("../assets/images/Hospitality/Westin Chennai  /westinchennai01.jpg"),
    DESCRIPTION: "3 excutive floors & Public Area such as lobby and lounge.",
    IMAGES: [
      {
        IMAGE: require("../assets/images/Hospitality/Westin Chennai  /westinchennai02.jpg"),
        ALT_TEXT: "TWI CAROUSEL 01",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Westin Chennai  /westinchennai04.jpg"),
        ALT_TEXT: "TWI CAROUSEL 02",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Westin Chennai  /westinchennai13.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Westin Chennai  /westinchennai11.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Westin Chennai  /westinchennai12.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Westin Chennai  /westinchennai03.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Westin Chennai  /westinchennai05.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Westin Chennai  /westinchennai06.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Westin Chennai  /westinchennai07.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Westin Chennai  /westinchennai08.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Westin Chennai  /westinchennai09.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Westin Chennai  /westinchennai10.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Westin Chennai  /westinchennai01.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
    ],
  },
  {
    ID: "taj-coromandel",
    TITLE: "Taj Coromandel",
    LOCATION: "Chennai, India",
    BANNER_IMAGE: require("../assets/images/Hospitality/Taj Coromandel Chennai/DSC_0068.jpg"),
    DESCRIPTION:
      "Executive lounge, The Chambers at Taj and event hall (Willingdon)",
    IMAGES: [
      {
        IMAGE: require("../assets/images/Hospitality/Taj Coromandel Chennai/DSC_0042.jpg"),
        ALT_TEXT: "TWI CAROUSEL 01",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj Coromandel Chennai/DSC_0059.jpg"),
        ALT_TEXT: "TWI CAROUSEL 02",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj Coromandel Chennai/DSC_0068.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj Coromandel Chennai/DSC_0071.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj Coromandel Chennai/DSC_0078.jpg"),
        ALT_TEXT: "TWI CAROUSEL 01",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj Coromandel Chennai/DSC_0029.jpg"),
        ALT_TEXT: "TWI CAROUSEL 02",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj Coromandel Chennai/DSC_0030.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj Coromandel Chennai/DSC_0079.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj Coromandel Chennai/DSC_0006.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
    ],
  },
  {
    ID: "grt-templebay",
    TITLE: "GRT Temple Bay",
    LOCATION: "Mahabalipuram, India",
    BANNER_IMAGE: require("../assets/images/Hospitality/GRT Temple Bay/DSCF0013.jpg"),
    DESCRIPTION: "Bar, boardroom, cottages and suite rooms.",
    IMAGES: [
      {
        IMAGE: require("../assets/images/Hospitality/GRT Temple Bay/DSCF0014.jpg"),
        ALT_TEXT: "TWI CAROUSEL 01",
      },
      {
        IMAGE: require("../assets/images/Hospitality/GRT Temple Bay/DSCF0016.jpg"),
        ALT_TEXT: "TWI CAROUSEL 02",
      },
      {
        IMAGE: require("../assets/images/Hospitality/GRT Temple Bay/DSCF0017.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Hospitality/GRT Temple Bay/DSCF0020.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/GRT Temple Bay/DSCF0003.jpg"),
        ALT_TEXT: "TWI CAROUSEL 01",
      },
      {
        IMAGE: require("../assets/images/Hospitality/GRT Temple Bay/DSCF0006.jpg"),
        ALT_TEXT: "TWI CAROUSEL 02",
      },
      {
        IMAGE: require("../assets/images/Hospitality/GRT Temple Bay/DSCF0007.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Hospitality/GRT Temple Bay/DSCF0008.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Hospitality/GRT Temple Bay/DSCF0010.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Hospitality/GRT Temple Bay/DSCF0027.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Hospitality/GRT Temple Bay/DSCF0029.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Hospitality/GRT Temple Bay/DSCF0032.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Hospitality/GRT Temple Bay/DSCF0034.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Hospitality/GRT Temple Bay/DSCF0035.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Hospitality/GRT Temple Bay/DSCF0013.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
    ],
  },
  {
    ID: "itc-royalbengal",
    TITLE: "ITC Royal Bengal",
    LOCATION: "Kolkata, India",
    BANNER_IMAGE: require("../assets/images/Hospitality/ITC Royal Bengal (Kolkata)/LRM_EXPORT_20190829_172210.jpg"),
    DESCRIPTION: "80 service Apartments along with 4 floor corridors.",
    IMAGES: [
      {
        IMAGE: require("../assets/images/Hospitality/ITC Royal Bengal (Kolkata)/LRM_EXPORT_20190829_165754.jpg"),
        ALT_TEXT: "TWI CAROUSEL 01",
      },
      {
        IMAGE: require("../assets/images/Hospitality/ITC Royal Bengal (Kolkata)/LRM_EXPORT_20190829_174748.jpg"),
        ALT_TEXT: "TWI CAROUSEL 02",
      },
      {
        IMAGE: require("../assets/images/Hospitality/ITC Royal Bengal (Kolkata)/LRM_EXPORT_20190829_180208.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Hospitality/ITC Royal Bengal (Kolkata)/LRM_EXPORT_20190829_191848.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/ITC Royal Bengal (Kolkata)/LRM_EXPORT_20190829_191720.jpg"),
        ALT_TEXT: "TWI CAROUSEL 01",
      },
      {
        IMAGE: require("../assets/images/Hospitality/ITC Royal Bengal (Kolkata)/LRM_EXPORT_20190829_172210.jpg"),
        ALT_TEXT: "TWI CAROUSEL 02",
      },
      {
        IMAGE: require("../assets/images/Hospitality/ITC Royal Bengal (Kolkata)/LRM_EXPORT_20190829_194510.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
    ],
  },
  {
    ID: "tci-chennai",
    TITLE: "TCI Chennai",
    LOCATION: "Chennai, India",
    BANNER_IMAGE: require("../assets/images/Corporates/TCI CHN  /DSCF0070.jpg"),
    DESCRIPTION: "Complete office space and cabins.",
    IMAGES: [
      {
        IMAGE: require("../assets/images/Corporates/TCI CHN  /DSCF0069.jpg"),
        ALT_TEXT: "TWI CAROUSEL 01",
      },
      {
        IMAGE: require("../assets/images/Corporates/TCI CHN  /DSCF0061.jpg"),
        ALT_TEXT: "TWI CAROUSEL 02",
      },
      {
        IMAGE: require("../assets/images/Corporates/TCI CHN  /DSCF0065.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Corporates/TCI CHN  /DSCF0067.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/TCI CHN  /DSCF0072.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/TCI CHN  /DSCF0070.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
    ],
  },
  {
    ID: "elken",
    TITLE: "Elken",
    LOCATION: "Chennai, India",
    BANNER_IMAGE: require("../assets/images/Corporates/Elken  /IMG_0062.jpg"),
    DESCRIPTION: "Complete office space and cabins.",
    IMAGES: [
      {
        IMAGE: require("../assets/images/Corporates/Elken  /IMG_0028.jpg"),
        ALT_TEXT: "TWI CAROUSEL 01",
      },
      {
        IMAGE: require("../assets/images/Corporates/Elken  /IMG_0028.jpg"),
        ALT_TEXT: "TWI CAROUSEL 02",
      },
      {
        IMAGE: require("../assets/images/Corporates/Elken  /IMG_0035.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Corporates/Elken  /IMG_0059.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/Elken  /IMG_0038.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/Elken  /IMG_0049.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/Elken  /IMG_0050.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/Elken  /IMG_0064.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/Elken  /IMG_0060.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/Elken  /IMG_0062.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
    ],
  },
  {
    ID: "surbana-hyderabad",
    TITLE: "Surbana International",
    LOCATION: "Hyderabad, India",
    BANNER_IMAGE: require("../assets/images/Corporates/CESMA HYD  /DSC01465.jpg"),
    DESCRIPTION: "Complete office space and cabins.",
    IMAGES: [
      {
        IMAGE: require("../assets/images/Corporates/CESMA HYD  /DSC01462.jpg"),
        ALT_TEXT: "TWI CAROUSEL 01",
      },
      {
        IMAGE: require("../assets/images/Corporates/CESMA HYD  /DSC01466.jpg"),
        ALT_TEXT: "TWI CAROUSEL 02",
      },
      {
        IMAGE: require("../assets/images/Corporates/CESMA HYD  /DSC01469.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Corporates/CESMA HYD  /DSC01470.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/CESMA HYD  /DSC01475.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/CESMA HYD  /DSC01476.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/CESMA HYD  /DSC01477.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/CESMA HYD  /DSC01482.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/CESMA HYD  /DSC01488.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/CESMA HYD  /DSC01485.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
    ],
  },
  {
    ID: "ecosway",
    TITLE: "eCosway",
    LOCATION: "Hyderabad, India",
    BANNER_IMAGE: require("../assets/images/Corporates/Ecosway/IMG_0090.jpg"),
    DESCRIPTION: "Complete office space and cabins.",
    IMAGES: [
      {
        IMAGE: require("../assets/images/Corporates/Ecosway/IMG_0066.jpg"),
        ALT_TEXT: "TWI CAROUSEL 01",
      },
      {
        IMAGE: require("../assets/images/Corporates/Ecosway/IMG_0073.jpg"),
        ALT_TEXT: "TWI CAROUSEL 02",
      },
      {
        IMAGE: require("../assets/images/Corporates/Ecosway/IMG_0081.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Corporates/Ecosway/IMG_0082.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/Ecosway/IMG_0087.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/Ecosway/IMG_0090.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/Ecosway/IMG_0098.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/Ecosway/IMG_0102.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/Ecosway/IMG_0106.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/Ecosway/IMG_0107.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/Ecosway/IMG_0109.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
    ],
  },
  {
    ID: "kakatiya-hyderabad",
    TITLE: "Mission Kakatiya Office",
    LOCATION: "Hyderabad, India",
    BANNER_IMAGE: require("../assets/images/Corporates/Kakatiya CM Off Hyd/DSC01494.jpg"),
    DESCRIPTION: "Complete office space and cabins.",
    IMAGES: [
      {
        IMAGE: require("../assets/images/Corporates/Kakatiya CM Off Hyd/DSC01491.jpg"),
        ALT_TEXT: "TWI CAROUSEL 01",
      },
      {
        IMAGE: require("../assets/images/Corporates/Kakatiya CM Off Hyd/DSC01493.jpg"),
        ALT_TEXT: "TWI CAROUSEL 02",
      },
      {
        IMAGE: require("../assets/images/Corporates/Kakatiya CM Off Hyd/DSC01497.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Corporates/Kakatiya CM Off Hyd/DSC01501.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/Kakatiya CM Off Hyd/DSC01503.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/Kakatiya CM Off Hyd/DSC01505.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/Kakatiya CM Off Hyd/DSC01508.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/Kakatiya CM Off Hyd/DSC01510.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Corporates/Kakatiya CM Off Hyd/DSC01494.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
    ],
  },
  {
    ID: "westin-hyderabad",
    TITLE: "The Westin Hyderabad Mindspace",
    LOCATION: "Hyderabad, India",
    BANNER_IMAGE: require("../assets/images/Hospitality/Westin Hyderabad  /Bathtub.jpg"),
    DESCRIPTION: "Rooms and Suites.",
    IMAGES: [
      {
        IMAGE: require("../assets/images/Hospitality/Westin Hyderabad  /bedroom.jpg"),
        ALT_TEXT: "TWI CAROUSEL 01",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Westin Hyderabad  /TVframe.jpg"),
        ALT_TEXT: "TWI CAROUSEL 02",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Westin Hyderabad  /furniture.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Westin Hyderabad  /Bathtub.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
    ],
  },
  {
    ID: "taj-mountroad",
    TITLE: "Taj Mount Road",
    LOCATION: "Chennai, India",
    BANNER_IMAGE: require("../assets/images/Hospitality/Taj Mount Road/IMG_0017.jpg"),
    DESCRIPTION: "All guest rooms and suites.",
    IMAGES: [
      {
        IMAGE: require("../assets/images/Hospitality/Taj Mount Road/IMG_0029.jpg"),
        ALT_TEXT: "TWI CAROUSEL 01",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj Mount Road/IMG_0017.jpg"),
        ALT_TEXT: "TWI CAROUSEL 02",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj Mount Road/IMG_0056.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj Mount Road/IMG_0001.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj Mount Road/IMG_0009.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj Mount Road/IMG_0047.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj Mount Road/IMG_0094.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj Mount Road/IMG_0074.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj Mount Road/IMG_0012.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
    ],
  },
  {
    ID: "taj-clubhouse",
    TITLE: "Taj Club House",
    LOCATION: "Chennai, India",
    BANNER_IMAGE: require("../assets/images/Hospitality/Taj GVK/DSC_2884.jpg"),
    DESCRIPTION: "All guest rooms and suites.",
    IMAGES: [
      {
        IMAGE: require("../assets/images/Hospitality/Taj GVK/DSC_2895.jpg"),
        ALT_TEXT: "TWI CAROUSEL 01",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj GVK/DSC_2898.jpg"),
        ALT_TEXT: "TWI CAROUSEL 02",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj GVK/DSC_2887.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj GVK/DSC_2881.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj GVK/DSC_2900.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj GVK/DSC_2902.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj GVK/DSC_2905.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj GVK/DSC_2913.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj GVK/DSC_2917.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj GVK/DSC00061.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Taj GVK/DSC_2884.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
    ],
  },
  {
    ID: "itc-welcomhotel-bangalore",
    TITLE: "ITC Welcomhotel",
    LOCATION: "Bangalore, India",
    BANNER_IMAGE: require("../assets/images/Hospitality/Fortune Bangalore  /20151231455.jpg"),
    DESCRIPTION: "All Public Areas such as restaurant, lobby and cafe.",
    IMAGES: [
      {
        IMAGE: require("../assets/images/Hospitality/Fortune Bangalore  /20151231419.jpg"),
        ALT_TEXT: "TWI CAROUSEL 01",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Fortune Bangalore  /2016118122096-46.jpg"),
        ALT_TEXT: "TWI CAROUSEL 02",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Fortune Bangalore  /2016118124548-46.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Fortune Bangalore  /2016118129891-46.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Fortune Bangalore  /20161181253743-46.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Fortune Bangalore  /20161251436352-46.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Fortune Bangalore  /20161251446149-46.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
    ],
  },
  {
    ID: "novotel-sipcot",
    TITLE: "Novotel Sipcot",
    LOCATION: "Chennai, India",
    BANNER_IMAGE: require("../assets/images/Hospitality/Novotel sipcot  /NovotelSipcot01.jpg"),
    DESCRIPTION: "All Guest Rooms.",
    IMAGES: [
      {
        IMAGE: require("../assets/images/Hospitality/Novotel sipcot  /NovotelSipcot02.jpg"),
        ALT_TEXT: "TWI CAROUSEL 01",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Novotel sipcot  /NovotelSipcot01.jpg"),
        ALT_TEXT: "TWI CAROUSEL 02",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Novotel sipcot  /NovotelSipcot03.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Novotel sipcot  /NovotelSipcot04.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
    ],
  },
  {
    ID: "trident-chennai",
    TITLE: "The Trident",
    LOCATION: "Chennai, India",
    BANNER_IMAGE: require("../assets/images/Hospitality/The Trident/DSCN0332.jpg"),
    DESCRIPTION: "Samumudra Resturant and gym.",
    IMAGES: [
      {
        IMAGE: require("../assets/images/Hospitality/The Trident/DSCN0329.jpg"),
        ALT_TEXT: "TWI CAROUSEL 01",
      },
      {
        IMAGE: require("../assets/images/Hospitality/The Trident/DSCN0336.jpg"),
        ALT_TEXT: "TWI CAROUSEL 02",
      },
      {
        IMAGE: require("../assets/images/Hospitality/The Trident/DSCN0344_1.jpg"),
        ALT_TEXT: "TWI CAROUSEL 03",
      },
      {
        IMAGE: require("../assets/images/Hospitality/The Trident/DSCN0347.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/The Trident/DSCN0350.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/The Trident/DSCN03391.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
      {
        IMAGE: require("../assets/images/Hospitality/The Trident/DSCN03401.jpg"),
        ALT_TEXT: "TWI CAROUSEL 04",
      },
    ],
  },
];

export default PROJECTS;
