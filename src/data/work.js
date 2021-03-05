//import { GOOGLE_DRIVE_URL } from "../constants";

const WORK_CATEGORIES = {
  HOSPITALITY: {
    BANNER: {
      IMAGE: require("../assets/images/carousel1.jpg"),
      TEXT: ["Hospitality"],
    },
    OFFER: [
      "We are known for successfully integrating bold and beautiful designs for prestigious clients in the hospitality sector. We engage in creating traditional design layouts for our clients that meet their expectations.",
      "We understand that the best interior designing style should speak with the customers and tell a tale of luxury.",
    ],
    ETHICS: [
      {
        TITLE: "Heritage",
        IMAGE: require("../assets/images/Heritage_Hospitality.png"),
        DESCRIPTION:
          "An irreplaceable source of creativity and inspiration for us.",
      },
      {
        TITLE: "Grandeur",
        IMAGE: require("../assets/images/Grandeur_Hospitality.png"),
        DESCRIPTION: "Expertise in giving attention to meticulous details.",
      },
      {
        TITLE: "Premium",
        IMAGE: require("../assets/images/Premium_Hospitality.png"),
        DESCRIPTION: "Delivering excellence is our personal motto.",
      },
    ],
    FEATURED_PROJECTS: [
      {
        IMAGE: require("../assets/images/Hospitality/JW Marriot Mumbai  /JW-marriot01.jpg"),
        TITLE: "JW MARRIOTT",
        DESCRIPTION:
          "JW Marriott Mumbai Sahar, a 5-star luxury hotel located in Andheri East. The hotel houses 588 rooms and offers a melange of facilities from dining to spaces to conduct social gatherings such as weddings. ",
        LINK: "/work/hospitality/jw-marriott-mumbai",
      },
      {
        IMAGE: require("../assets/images/Hospitality/Westin Chennai  /westinchennai01.jpg"),
        TITLE: "The Westin Chennai",
        DESCRIPTION:
          "This luxury hotel is centerally located in one of the city's developing commercial areas. The Westin Chennai has 215 beautifully-appointed guest rooms and suites ensure relaxing stays in pleasant surroundings.",
        LINK: "/work/hospitality/westin-chennai",
      },
    ],
    PROJECTS: [
      {
        TITLE: "Taj Coromandel",
        DESCRIPTION:
          "With 212 rooms and suites, the Taj Coromandel is one of the best 5-star hotels in Chennai, that presents an urban oasis of bespoke experiences for every guests.",
        IMAGE: require("../assets/images/Hospitality/Taj Coromandel Chennai/DSC_0068.jpg"),
        LINK: "/work/hospitality/taj-coromandel",
      },
      {
        TITLE: "GRT Temple Bay",
        DESCRIPTION:
          "Situated just steps away from the shore, Temple Bay is set on 44 acres of lush landscpaced gardens.",
        IMAGE: require("../assets/images/Hospitality/GRT Temple Bay/DSCF0013.jpg"),
        LINK: "/work/hospitality/grt-templebay",
      },
      {
        TITLE: "ITC Royal Bengal",
        DESCRIPTION:
          "One of a Kind ITC Royal Bengal is an ode to the region’s cultural heritage and lineage. The hotel houses 456 rooms and 6 dining destinations.",
        IMAGE: require("../assets/images/Hospitality/ITC Royal Bengal (Kolkata)/LRM_EXPORT_20190829_172210.jpg"),
        LINK: "/work/hospitality/itc-royalbengal",
      },
      {
        TITLE: "Taj Club House",
        DESCRIPTION:
          "A strikingly contemporary business hotel with 220 rooms including 16 suites, located in Chennai.",
        IMAGE: require("../assets/images/Hospitality/Taj GVK/DSC_2884.jpg"),
        LINK: "/work/hospitality/taj-clubhouse",
      },
      {
        TITLE: "ITC Welcomhotel",
        DESCRIPTION:
          "From contemporary interiors to exquisite fine dining to a rejuvenating spa, ITC Welcomhotel offers a unique experience and comfortable stay.",
        IMAGE: require("../assets/images/Hospitality/Fortune Bangalore  /20151231455.jpg"),
        LINK: "/work/hospitality/itc-welcomhotel-bangalore",
      },
      {
        TITLE: "Novotel Sipcot",
        DESCRIPTION:
          "Belonging to the Accor international group of hotels, Novotel offers 180 guest rooms and suites.",
        IMAGE: require("../assets/images/Hospitality/Novotel sipcot  /NovotelSipcot01.jpg"),
        LINK: "/work/hospitality/novotel-sipcot",
      },
      {
        TITLE: "The Trident",
        DESCRIPTION:
          "A luxury hotel with 167 rooms that are tastefully appointed in muted and earthy tones, combined with handcrafted furniture and convenient amenities.",
        IMAGE: require("../assets/images/Hospitality/The Trident/DSCN0332.jpg"),
        LINK: "/work/hospitality/trident-chennai",
      },
      {
        TITLE: "Taj Mount Road",
        DESCRIPTION:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        IMAGE: require("../assets/images/Hospitality/Taj Mount Road/IMG_0017.jpg"),
        LINK: "/work/hospitality/taj-mountroad",
      },
      {
        TITLE: "Westin Hyderabad",
        DESCRIPTION:
          "Experience a spectacular wellness escape staycation at The Westin Hyderabad Mindspace, a 5-star accommodation where style and comfort intersect.",
        IMAGE: require("../assets/images/Hospitality/Westin Hyderabad  /Bathtub.jpg"),
        LINK: "/work/hospitality/westin-hyderabad",
      },
    ],
  },
  CORPORATES: {
    BANNER: {
      IMAGE: require("../assets/images/carousel3.jpg"),
      TEXT: ["Corporates"],
    },
    OFFER: [
      "When it comes to office interiors, we ensure that each of our design is enthralling for the onlooker and bring an aura of beauty. Our office interior designs are quirky in nature and produce an impressive look from the perspective of commercial purposes.",
      "We aim to provide you with all kinds of commercial interior designs that will fulfill the need of your organization.",
    ],
    ETHICS: [
      {
        TITLE: "Growth",
        IMAGE: require("../assets/images/Growth_Corporates.png"),
        DESCRIPTION: "Ensuring your workplace is a space to grow.",
      },
      {
        TITLE: "Culture",
        IMAGE: require("../assets/images/Culture_Corporates.png"),
        DESCRIPTION:
          "Designing spaces to relate to the emotional environment of your workplace.",
      },
      {
        TITLE: "Efficiency",
        IMAGE: require("../assets/images/Efficiency_Corporates.png"),
        DESCRIPTION: "Creating workspaces for productive outcomes.",
      },
    ],
    FEATURED_PROJECTS: [
      {
        IMAGE: require("../assets/images/Corporates/TCI CHN  /DSCF0070.jpg"),
        TITLE: "TCI Chennai",
        DESCRIPTION:
          "Established in 1995, TCI Seaways caters to the coastal cargo requirements for transporting container and bulk cargo from Ports on the West coast to the East coast of India.",
        LINK: "/work/corporates/tci-chennai",
      },
      {
        IMAGE: require("../assets/images/Corporates/Elken  /IMG_0062.jpg"),
        TITLE: "Elken",
        DESCRIPTION:
          "Elken is one of the leading direct selling companies in Malaysia, operating across the the Asia Pacific region. Elken primarily deals with the distribution of healthcare and beauty products.",
        LINK: "/work/corporates/elken",
      },
    ],
    PROJECTS: [
      {
        TITLE: "Surbana International",
        DESCRIPTION:
          "Surbana is a global consultancy company that focuses on infrastructure and urban development.",
        IMAGE: require("../assets/images/Corporates/CESMA HYD  /DSC01465.jpg"),
        LINK: "/work/corporates/surbana-hyderabad",
      },
      {
        TITLE: "eCosway",
        DESCRIPTION:
          "eCosway is a rapidly growing international company based out of Kuala Lumpur, Malaysia and operates throughout Asia.",
        IMAGE: require("../assets/images/Corporates/Ecosway/IMG_0090.jpg"),
        LINK: "/work/corporates/ecosway",
      },
      {
        TITLE: "Mission Kakatiya Office",
        DESCRIPTION:
          "Mission Kakatiya is a programme for restoring all the minor irrigation tanks and lakes in Telangana State, India.",
        IMAGE: require("../assets/images/Corporates/Kakatiya CM Off Hyd/DSC01494.jpg"),
        LINK: "/work/corporates/kakatiya-hyderabad",
      },
    ],
  },
  RESIDENTIAL: {
    BANNER: {
      IMAGE: require("../assets/images/carousel2.jpg"),
      TEXT: ["Residential"],
    },
    OFFER: [
      "We take pride in designing innovative homes that create a very intimate connection to our clients. Each home starts with a unique concept that directly correlates to our client’ss needs and their personalized style.",
      "We pay close attention to the needs and wants of clients who will be living in our designed spaces. Our interior designers are extremely skilled in sculpting the interiors of elite residences",
    ],
    ETHICS: [
      {
        TITLE: "Comfort",
        IMAGE: require("../assets/images/Comfort_Residential.png"),
        DESCRIPTION: "Home means comfort, and we bring you just that.",
      },
      {
        TITLE: "Excellence",
        IMAGE: require("../assets/images/Excellency_Residential.png"),
        DESCRIPTION: "It is our forte, and we promise on delivering it.",
      },
      {
        TITLE: "Luxury",
        IMAGE: require("../assets/images/Luxury_Residential.png"),
        DESCRIPTION: "Don't compromise on your living.",
      },
    ],
    FEATURED_PROJECTS: [
      {
        IMAGE: require("../assets/images/coming-soon-image.jpg"),
        TITLE: "Coming Soon",
        DESCRIPTION:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        LINK: "/",
      },
      {
        IMAGE: require("../assets/images/coming-soon-image.jpg"),
        TITLE: "Coming Soon",
        DESCRIPTION:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        LINK: "/",
      },
    ],
    PROJECTS: [
      {
        TITLE: "Coming Soon",
        DESCRIPTION:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        IMAGE: require("../assets/images/coming-soon-image.jpg"),
        LINK: "/",
      },
      {
        TITLE: "Coming Soon",
        DESCRIPTION:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        IMAGE: require("../assets/images/coming-soon-image.jpg"),
        LINK: "/",
      },
      {
        TITLE: "Coming Soon",
        DESCRIPTION:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        IMAGE: require("../assets/images/coming-soon-image.jpg"),
        LINK: "/",
      },
    ],
  },
  FURNITURE: {
    BANNER: {
      IMAGE: require("../assets/images/carousel4.jpg"),
      TEXT: ["Furniture"],
    },
    OFFER: [
      "Tech Workshop is a distributor of highly sophisticated modular display furniture for commercial environments. Our expertise also lies in designing solid wood furniture for our residential projects.",
      "Our collaborative team of professionals, designers & partners ceaselessly innovate and develop new solutions for the high-end commercial and residential requirements.",
    ],
    ITEMS: [
      {
        TITLE: "Centre Table",
        IMAGES: [
          {
            IMAGE: require("../assets/images/coming-soon-image.jpg"),
            NAME: "Image 1",
          },
          {
            IMAGE: require("../assets/images/coming-soon-image.jpg"),
            NAME: "Image 2",
          },
          {
            IMAGE: require("../assets/images/coming-soon-image.jpg"),
            NAME: "Image 3",
          },
          {
            IMAGE: require("../assets/images/coming-soon-image.jpg"),
            NAME: "Image 4",
          },
        ],
      },
      {
        TITLE: "Sofa Sets",
        IMAGES: [
          {
            IMAGE: require("../assets/images/coming-soon-image.jpg"),
            NAME: "Image 1",
          },
          {
            IMAGE: require("../assets/images/coming-soon-image.jpg"),
            NAME: "Image 2",
          },
          {
            IMAGE: require("../assets/images/coming-soon-image.jpg"),
            NAME: "Image 3",
          },
          {
            IMAGE: require("../assets/images/coming-soon-image.jpg"),
            NAME: "Image 4",
          },
        ],
      },
      {
        TITLE: "Wardrobes",
        IMAGES: [
          {
            IMAGE: require("../assets/images/coming-soon-image.jpg"),
            NAME: "Image 1",
          },
          {
            IMAGE: require("../assets/images/coming-soon-image.jpg"),
            NAME: "Image 2",
          },
          {
            IMAGE: require("../assets/images/coming-soon-image.jpg"),
            NAME: "Image 3",
          },
          {
            IMAGE: require("../assets/images/coming-soon-image.jpg"),
            NAME: "Image 4",
          },
        ],
      },
      {
        TITLE: "Dining Table",
        IMAGES: [
          {
            IMAGE: require("../assets/images/coming-soon-image.jpg"),
            NAME: "Image 1",
          },
          {
            IMAGE: require("../assets/images/coming-soon-image.jpg"),
            NAME: "Image 2",
          },
          {
            IMAGE: require("../assets/images/coming-soon-image.jpg"),
            NAME: "Image 3",
          },
          {
            IMAGE: require("../assets/images/coming-soon-image.jpg"),
            NAME: "Image 4",
          },
        ],
      },
    ],
  },
};

export default WORK_CATEGORIES;
