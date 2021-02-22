import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const GOOGLE_DRIVE_URL = "https://drive.google.com/uc?id=";

const Strings = {
  APPLICATION: {
    ROUTES: {
      HOME: "/",
      ALL: "*",
      WORK: "/work/:category",
      PROJECT: "/work/:category/:projectId",
      ABOUT: "/about",
      CONTACT: "/contact-us",
      FURNITURE: "/work/furniture",
      ERROR: "/error",
    },
    SHARED: {
      NAVBAR: [
        {
          NAME: "Home",
          LINK: "/",
        },
        {
          NAME: "About",
          LINK: "/about",
        },
        {
          NAME: "Work",
          LINK: "/work/hospitality",
          CHILD_PAGES: [
            {
              NAME: "Hospitality",
              LINK: "/work/hospitality",
            },
            {
              NAME: "Corporates",
              LINK: "/work/corporates",
            },
            {
              NAME: "Residential",
              LINK: "/work/residential",
            },
            {
              NAME: "Furniture",
              LINK: "/work/furniture",
            },
          ],
        },
        {
          NAME: "Contact",
          LINK: "/contact-us",
        },
      ],
      FOOTER: [
        {
          NAME: "Home",
          LINK: "/",
        },
        {
          NAME: "About",
          LINK: "/about",
        },
        {
          NAME: "Hospitality",
          LINK: "/work/hospitality",
        },
        {
          NAME: "Corporates",
          LINK: "/work/corporates",
        },
        {
          NAME: "Residential",
          LINK: "/work/residential",
        },
        {
          NAME: "Furniture",
          LINK: "/work/furniture",
        },
        {
          NAME: "Contact",
          LINK: "/contact-us",
        },
      ],
    },
    HOME: {
      CAROUSEL: [
        {
          IMAGE: require("../assets/images/carousel1.jpg"),
          ALT_TEXT: "Interior 1",
          DISPLAY_TEXT: ["Redefining spaces with finesse.", ""],
        },
        {
          IMAGE: require("../assets/images/carousel2.jpg"),
          ALT_TEXT: "Interior 2",
          DISPLAY_TEXT: ["Desire meets design.", ""],
        },
        {
          IMAGE: require("../assets/images/carousel4.jpg"),
          ALT_TEXT: "Interior 3",
          DISPLAY_TEXT: ["Making spaces magnificent", "FOR EVERY SPACE"],
        },
        {
          IMAGE: require("../assets/images/carousel5.jpg"),
          ALT_TEXT: "Interior 4",
          DISPLAY_TEXT: ["Innovate design build", "FOR EVERY SPACE"],
        },
      ],
      WORK: [
        {
          NAME: "HOSPITALITY",
          IMAGE: require("../assets/images/TWI CAROUSEL 01.jpg"),
          PATH: "/work/hospitality",
        },
        {
          NAME: "CORPORATES",
          IMAGE: require("../assets/images/TWI CAROUSEL 02.jpg"),
          PATH: "/work/corporates",
        },
        {
          NAME: "RESIDENTIAL",
          IMAGE: require("../assets/images/TWI CAROUSEL 03.jpg"),
          PATH: "/work/residential",
        },
        {
          NAME: "FURNITURE",
          IMAGE: require("../assets/images/TWI CAROUSEL 04.jpg"),
          PATH: "/work/furniture",
        },
      ],
      BANNER: {
        CLIENT_LOGOS: [
          require("../assets/images/ClientLogos/White Color Logos/Apollo.png"),
          require("../assets/images/ClientLogos/White Color Logos/ITC.png"),
          require("../assets/images/ClientLogos/White Color Logos/JW MARRIOTT.png"),
          require("../assets/images/ClientLogos/White Color Logos/Taj_Hotels.png"),
          require("../assets/images/ClientLogos/White Color Logos/Westin_Hotels_and_Resorts_logo.png"),
        ],
      },
      FEATURED_PROJECTS: [
        {
          NAME: "JW Marriott, Mumbai",
          IMAGE: require("../assets/images/TWI CAROUSEL 01.jpg"),
          PATH: "/work/hospitality/jw-marriot-mumbai",
        },
        {
          NAME: "The Westin Chennai",
          IMAGE: require("../assets/images/TWI CAROUSEL 02.jpg"),
          PATH: "/work/hospitality/westin-chennai",
        },
        {
          NAME: "ITC Royal Bengal",
          IMAGE: require("../assets/images/TWI CAROUSEL 03.jpg"),
          PATH: "/work/hospitality/itc-royalbengal",
        },
        {
          NAME: "TCI Chennai",
          IMAGE: require("../assets/images/TWI CAROUSEL 04.jpg"),
          PATH: "/work/corporates/tci-chennai",
        },
      ],
    },
    TEXT: {
      SECTION1: {
        TITLE: "WHAT WE OFFER",
        SUB_TITLE: "Transform Your Space with Sophistication",
        DESCRIPTION:
          "Tec Workshop Interiors provides interior designs, consultancy services, and turnkey interior solutions. With extremely strong values in our work ethic, we aim to create design-savvy interior spaces with high-quality standards from conceptualization to execution.",
      },
      SECTION2: {
        TITLE: "OUR PROJECTS",
        SUB_TITLE: "Our notable creations",
        DESCRIPTION:
          "Being in the industry for over a decade, gave us the opportunity to work for some of the greatest players in the hospitality and commercial sectors. Below are some of those projects.",
      },
    },
    SOCIAL: {
      FACEBOOK: {
        ICON: faFacebookF,
        LINK: "https://facebook.com/",
      },
      YOUTUBE: {
        ICON: faYoutube,
        LINK: "https://youtube.com/",
      },
      INSTAGRAM: {
        ICON: faInstagram,
        LINK: "https://instagram.com/",
      },
      TWITTER: {
        ICON: faTwitter,
        LINK: "",
      },
      LINKEDIN: {
        ICON: faLinkedin,
        LINK: "",
      },
    },
    ABOUT_US_PAGE: {
      ETHICS: [
        {
          TITLE: "Mission",
          IMAGE: require("../assets/images/twi assets-02.png"),
          DESCRIPTION:
            "To be committed to our projects and adhere to prescribed industrial standards to deliver high quality products in the given stipulated time.",
        },
        {
          TITLE: "Vision",
          IMAGE: require("../assets/images/twi assets-06.png"),
          DESCRIPTION:
            "To enhance the quality of life for our people by empowering and enabling them, and improve living standards for a better tomorrow.",
        },
        {
          TITLE: "Values",
          IMAGE: require("../assets/images/twi assets-05.png"),
          DESCRIPTION:
            " Reliability, authenticity, mutual respect and excellence are the core values of our company.",
        },
      ],
      OUR_CLIENTS: {
        TITLE: "OUR CLIENTS",
        SUB_TITLE: "Our Valued Clientelle",
        DESCRIPTION:
          "Amongst many, our portfolio includes a number of prestigious Indian and Foreign brands like :",
        CLIENT_LOGOS: [
          require("../assets/images/ClientLogos/Apollo.png"),
          require("../assets/images/ClientLogos/Crowne Plaza.png"),
          require("../assets/images/ClientLogos/eCosway.png"),
          require("../assets/images/ClientLogos/ITC.png"),
          require("../assets/images/ClientLogos/Elken Global.png"),
          require("../assets/images/ClientLogos/Herbalife.png"),
          require("../assets/images/ClientLogos/JW MARRIOTT.png"),
          require("../assets/images/ClientLogos/Novotel.png"),
          require("../assets/images/ClientLogos/Oberoi.png"),
          require("../assets/images/ClientLogos/Radisson.png"),
          require("../assets/images/ClientLogos/Saint Gobain.png"),
          require("../assets/images/ClientLogos/Trident.png"),
          require("../assets/images/ClientLogos/Taj_Hotels.png"),
          require("../assets/images/ClientLogos/TCI.png"),
          require("../assets/images/ClientLogos/Westin_Hotels_and_Resorts_logo.png"),
        ],
      },
    },
    CONTACT_US_PAGE: {
      TITLE: "Contact",
      OFFICE_LOCATIONS: [
        {
          TITLE: "Mumbai",
          ADDRESS:
            "D/5, Amar Deep CHSL., Charkop Kandivali West, Plot No.714/0-24, Sector-7, Mumbai, (M.CORP) - 400067",
        },
        {
          TITLE: "LUCKNOW",
          ADDRESS:
            "C2/314, Sector-F Jankipuram, Gomtinagar, Lucknow - 226021",
        },
        {
          TITLE: "Kolkata",
          ADDRESS:
            "Metropolitan Co-op, Housing Society Limited, B-73, Canal South Road, Kolkata - 700105",
        },
        {
          TITLE: "Bangalore",
          ADDRESS:
            "6, Dharmanna Garden, Near HMT Layout, Dinnur, R.T. Nagar, Bangalore - 560032",
        },
      ],
      CONTACT_DETAILS: [
        {
          TITLE: "Corporate Office",
          TEXT:
            "Tec Workshop Interiors India Pvt Ltd. 224/1 Kamarajan Street, Mettukupam, Thoraipakkam, Chennai (TN), India - 600097",
        },
        {
          TITLE: "Telephone",
          TEXT: "+91 92822 48955",
        },
        {
          TITLE: "Email",
          TEXT: "twich@twiindia.com",
        },
      ],
    },
  },
};
export default Strings;
