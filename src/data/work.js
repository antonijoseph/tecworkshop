import { GOOGLE_DRIVE_URL } from "../constants";

const WORK_CATEGORIES = {
  HOSPITALITY: {
    BANNER: {
      IMAGE: require("../assets/images/carousel1.jpg"),
      TEXT: ["Hospitality", "Serving Loreum ipsum"],
    },
    OFFER: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ],
    ETHICS: [
      {
        TITLE: "Mission",
        IMAGE: require("../assets/images/twi assets-02.png"),
        DESCRIPTION: "Lorem ipsum dolor sit amet ipsum dolor sit",
      },
      {
        TITLE: "Vision",
        IMAGE: require("../assets/images/twi assets-06.png"),
        DESCRIPTION: "Lorem ipsum dolor sit amet ipsum dolor sit",
      },
      {
        TITLE: "Values",
        IMAGE: require("../assets/images/twi assets-05.png"),
        DESCRIPTION: "Lorem ipsum dolor sit amet ipsum dolor sit",
      },
    ],
    FEATURED_PROJECTS: [
      {
        IMAGE: GOOGLE_DRIVE_URL + "1iokcCixWeq7xP4kolyXZhGmz0Jf9kGTH",
        TITLE: "JW MARRIOT",
        DESCRIPTION:
          "JW Marriott Mumbai Sahar, a 5-star luxury hotel located in Andheri East. The hotel houses 588 rooms and offers a melange of facilities from dining to spaces to conduct social gatherings such as weddings. ",
        LINK: "/work/hospitality/jw-marriot-mumbai",
      },
      {
        IMAGE: GOOGLE_DRIVE_URL + "1eILGuZZD1iWWEoYwBtR-gUi2Xn6de67Q",
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
        IMAGE: GOOGLE_DRIVE_URL + "1FzwdgUc5XgMJbuFWEhHEq87LKz4XOJ0l",
        LINK: "/work/hospitality/taj-coromandel",
      },
      {
        TITLE: "GRT Temple Bay",
        DESCRIPTION:
          "Situated just steps away from the shore, Temple Bay is set on 44 acres of lush landscpaced gardens.",
        IMAGE: GOOGLE_DRIVE_URL + "1eQC72ovsGkDKiCL-UODvDkBQWwh3g6er",
        LINK: "/work/hospitality/grt-templebay",
      },
      {
        TITLE: "ITC Royal Bengal",
        DESCRIPTION:
          "One of a Kind ITC Royal Bengal is an ode to the region’s cultural heritage and lineage. The hotel houses 456 rooms and 6 dining destinations.",
        IMAGE: GOOGLE_DRIVE_URL + "10PzXFjnlMuQZY1vrMkxNf-Op7PjOuZ8J",
        LINK: "/work/hospitality/itc-royalbengal",
      },
      {
        TITLE: "Taj Club House",
        DESCRIPTION:
          "A strikingly contemporary business hotel with 220 rooms including 16 suites, located in Chennai.",
        IMAGE: GOOGLE_DRIVE_URL + "1wkBezFr6WSQMQNNKcYt4xF58eAr2imeK",
        LINK: "/work/hospitality/taj-clubhouse",
      },
      {
        TITLE: "ITC Welcomhotel",
        DESCRIPTION:
          "From contemporary interiors to exquisite fine dining to a rejuvenating spa, ITC Welcomhotel offers a unique experience and comfortable stay.",
        IMAGE: GOOGLE_DRIVE_URL + "1EtbjD7PvRYIAuMuJTM4jgZXYj4ZxN0zn",
        LINK: "/work/hospitality/itc-welcomhotel-bangalore",
      },
      {
        TITLE: "Novotel Sipcot",
        DESCRIPTION:
          "Belonging to the Accor international group of hotels, Novotel offers 180 guest rooms and suites.",
        IMAGE: GOOGLE_DRIVE_URL + "1tkHWwhGSwTV5hLxi0MOUFrwZl0X5VZWW",
        LINK: "/work/hospitality/novotel-sipcot",
      },
      {
        TITLE: "The Trident",
        DESCRIPTION:
          "A luxury hotel with 167 rooms that are tastefully appointed in muted and earthy tones, combined with handcrafted furniture and convenient amenities.",
        IMAGE: GOOGLE_DRIVE_URL + "1uQjlv1oZFbO98svYhqISOqkvz0k1f5nH",
        LINK: "/work/hospitality/trident-chennai",
      },
      {
        TITLE: "Taj Mount Road",
        DESCRIPTION:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        IMAGE: GOOGLE_DRIVE_URL + "1xqNj-XQTQdtugQ34OdWC9zz_1USbqE47",
        LINK: "/work/hospitality/taj-mountroad",
      },
      {
        TITLE: "Westin Hyderabad",
        DESCRIPTION:
          "Experience a spectacular wellness escape staycation at The Westin Hyderabad Mindspace, a 5-star accommodation where style and comfort intersect.",
        IMAGE: GOOGLE_DRIVE_URL + "1cfs0EPfCeMY9fYof7yLmf5vU-IRrqBTO",
        LINK: "/work/hospitality/westin-hyderabad",
      },
    ],
  },
  CORPORATES: {
    BANNER: {
      IMAGE: require("../assets/images/carousel3.jpg"),
      TEXT: ["Corporates", "Serving Loreum ipsum"],
    },
    OFFER: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ],
    ETHICS: [
      {
        TITLE: "Mission",
        IMAGE: require("../assets/images/twi assets-02.png"),
        DESCRIPTION: "Lorem ipsum dolor sit amet ipsum dolor sit",
      },
      {
        TITLE: "Vision",
        IMAGE: require("../assets/images/twi assets-06.png"),
        DESCRIPTION: "Lorem ipsum dolor sit amet ipsum dolor sit",
      },
      {
        TITLE: "Values",
        IMAGE: require("../assets/images/twi assets-05.png"),
        DESCRIPTION: "Lorem ipsum dolor sit amet ipsum dolor sit",
      },
    ],
    FEATURED_PROJECTS: [
      {
        IMAGE: GOOGLE_DRIVE_URL + "1Np_14v1sxolsWbFzfKF2z5P_xA98Yzxp",
        TITLE: "TCI Chennai",
        DESCRIPTION:
          "Established in 1995, TCI Seaways caters to the coastal cargo requirements for transporting container and bulk cargo from Ports on the West coast to the East coast of India.",
        LINK: "/work/corporates/tci-chennai",
      },
      {
        IMAGE: GOOGLE_DRIVE_URL + "1iiHftbxlZCtpvBzXywsksENkr68WrfvC",
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
        IMAGE: GOOGLE_DRIVE_URL + "1hm85i0YXgCIKWNjQqi5uyyaHtNrUwl4O",
        LINK: "/work/corporates/surbana-hyderabad",
      },
      {
        TITLE: "eCosway",
        DESCRIPTION:
          "eCosway is a rapidly growing international company based out of Kuala Lumpur, Malaysia and operates throughout Asia.",
        IMAGE: GOOGLE_DRIVE_URL + "1rSARpRbREmKeQ7MtiVx6k1TrT3de0t0K",
        LINK: "/work/corporates/ecosway",
      },
      {
        TITLE: "Mission Kakatiya Office",
        DESCRIPTION:
          "Mission Kakatiya is a programme for restoring all the minor irrigation tanks and lakes in Telangana State, India.",
        IMAGE: GOOGLE_DRIVE_URL + "1aAkO5SePQVkAOetB5zD2Los9dgWSe2MO",
        LINK: "/work/corporates/kakatiya-hyderabad",
      },
    ],
  },
  RESIDENTIAL: {
    BANNER: {
      IMAGE: require("../assets/images/carousel2.jpg"),
      TEXT: ["Residential", "Serving Loreum ipsum"],
    },
    OFFER: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ],
    ETHICS: [
      {
        TITLE: "Mission",
        IMAGE: require("../assets/images/twi assets-02.png"),
        DESCRIPTION: "Lorem ipsum dolor sit amet ipsum dolor sit",
      },
      {
        TITLE: "Vision",
        IMAGE: require("../assets/images/twi assets-06.png"),
        DESCRIPTION: "Lorem ipsum dolor sit amet ipsum dolor sit",
      },
      {
        TITLE: "Values",
        IMAGE: require("../assets/images/twi assets-05.png"),
        DESCRIPTION: "Lorem ipsum dolor sit amet ipsum dolor sit",
      },
    ],
    FEATURED_PROJECTS: [
      {
        IMAGE: require("../assets/images/TWI CAROUSEL 02.jpg"),
        TITLE: "JW MARRIOT",
        DESCRIPTION:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        LINK: "/",
      },
      {
        IMAGE: require("../assets/images/TWI CAROUSEL 04.jpg"),
        TITLE: "JW MARRIOT",
        DESCRIPTION:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        LINK: "/",
      },
    ],
    PROJECTS: [
      {
        TITLE: "JW Marriott",
        DESCRIPTION:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        IMAGE: require("../assets/images/TWI CAROUSEL 01.jpg"),
        LINK: "/",
      },
      {
        TITLE: "JW Marriott",
        DESCRIPTION:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        IMAGE: require("../assets/images/TWI CAROUSEL 01.jpg"),
        LINK: "/",
      },
      {
        TITLE: "JW Marriott",
        DESCRIPTION:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        IMAGE: require("../assets/images/TWI CAROUSEL 01.jpg"),
        LINK: "/",
      },
      {
        TITLE: "JW Marriott",
        DESCRIPTION:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        IMAGE: require("../assets/images/TWI CAROUSEL 01.jpg"),
        LINK: "/",
      },
      {
        TITLE: "JW Marriott",
        DESCRIPTION:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        IMAGE: require("../assets/images/TWI CAROUSEL 01.jpg"),
        LINK: "/",
      },
      {
        TITLE: "JW Marriott",
        DESCRIPTION:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        IMAGE: require("../assets/images/TWI CAROUSEL 01.jpg"),
        LINK: "/",
      },
    ],
  },
  FURNITURE: {
    BANNER: {
      IMAGE: require("../assets/images/carousel4.jpg"),
      TEXT: ["Furniture", "Serving Loreum ipsum"],
    },
    OFFER: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
