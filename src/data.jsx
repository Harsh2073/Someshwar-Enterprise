import {
  FaTree,FaVideo,FaCar,FaFireExtinguisher,FaFilm,
  FaChild,FaUmbrellaBeach,FaWheelchair,FaDumbbell,FaBaby,
  FaWater
} from "react-icons/fa";
import { MdSportsCricket, MdSportsEsports ,MdMeetingRoom,MdSportsTennis,
  MdEvStation,MdPower,MdDirectionsWalk,MdSolarPower,MdPark } from "react-icons/md";
import { FaPersonPraying } from "react-icons/fa6";

export const projects = [
  {
    id: 1,
    title: "SunSetu Sky",
    location: "Shilaj",
    type: "4BHK Apartments",
    year: "2025",
    status: "Ongoing",
    category: "Residential & Commercial",
    image: "/src/assets/projectimg/sunsetusky/sss5.jpg",
    images: [
      "/src/assets/projectimg/sunsetusky/sss1.jpg",
      "/src/assets/projectimg/sunsetusky/sss2.jpg",
      "/src/assets/projectimg/sunsetusky/sss3.jpg",
      "/src/assets/projectimg/sunsetusky/sss4.jpg",
      "/src/assets/projectimg/sunsetusky/sss5.jpg",
      "/src/assets/projectimg/sunsetusky/sss6.jpg",
      "/src/assets/projectimg/sunsetusky/sss7.jpg",
      "/src/assets/projectimg/sunsetusky/sss8.jpg",
      "/src/assets/projectimg/sunsetusky/sss9.jpg",
      "/src/assets/projectimg/sunsetusky/sss10.jpg",
      "/src/assets/projectimg/sunsetusky/sss11.jpg",
      "/src/assets/projectimg/sunsetusky/sss12.jpg",
    ],
    description: `Nestled in the elite surroundings of Shilaj, SunSetu Sky exclusive residential and commercial development redefines luxury living with expansive 4BHK residences spread across four elegantly crafted blocks. Designed with contemporary architecture and superior detailing, each home offers generous space, abundant natural light, and a seamless blend of comfort and sophistication for a refined urban lifestyle.
    Featuring over 24 world-class amenities, the project delivers a resort-like living experience curated for exclusivity and     convenience. From wellness and leisure zones to thoughtfully designed social and recreational spaces, every aspect reflects  elegance, security, and modern indulgence—creating a prestigious address for those who seek elevated living.`,
    amenities: [
      { name: "Garden", icon: <MdPark /> },
      { name: "24/7 CCTV Surveillance", icon: <FaVideo /> },
      { name: "Gazebo", icon: <FaUmbrellaBeach /> },
      { name: "Allotted Parking", icon: <FaCar /> },
      { name: "Box Cricket", icon: <MdSportsCricket /> },
      { name: "Fire Safety", icon: <FaFireExtinguisher /> },
      { name: "EV Charger", icon: <MdEvStation/> },
      { name: "Yoga Room", icon: <FaPersonPraying /> },
      { name: "Play Zone", icon: <FaChild /> },
      { name: "Indoor Game", icon: <MdSportsEsports /> },
      { name: "Multi-Purpose Room", icon: <MdMeetingRoom/> },
      { name: "Badminton Court", icon: <MdSportsTennis/> },
      { name: "Power Backup", icon: <MdPower/> },
      { name: "Walkway", icon: <MdDirectionsWalk/> },
      { name: "Gym", icon: <FaDumbbell/> },
      { name: "Senior Citizen Seating Area", icon: <FaWheelchair/> },
      { name: "Solar Panel", icon: <MdSolarPower/> },
      {name: "Toddle Zone",icon:<FaBaby/>}
    ],
    specification: [
      { name: "112", subhead: "Total Units" },
      { name: "4", subhead: "Towers" },
      { name: "14", subhead: "Story Heights" },
      { name: "3450 SqFt", subhead: "Of Area" },
      { name: "Abundant", subhead: "Natural Light" },
      { name: "270°", subhead: "View Project" },
    ],
    connectivity: [
      "1 min from SP Ring Road",
      "5 mins to Science City",
      "Pure Residential Area",
      "Close proximity to hospitals",
      "Top Schools",
    ],
    mapaddress: [
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.848988672243!2d72.47538337510541!3d23.06326497914528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d00393c1971%3A0x755175c4d67b83ac!2sSunSetu%20Sky!5e1!3m2!1sen!2sin!4v1767544362920!5m2!1sen!2sin",
    ],
  },

  {
    id: 2,
    title: "Sun Sierra",
    location: "Bhadaj",
    type: "2BHK & 3BHK Apartments",
    year: "2021-2024",
    status: "Completed",
    category: "Residential & Commercial",
    image:
      "/src/assets/projectimg/sunsierra/ss1.jpeg",
    images:[
      "/src/assets/projectimg/sunsierra/ss1.jpeg",
      "/src/assets/projectimg/sunsierra/ss2.jpeg",
      "/src/assets/projectimg/sunsierra/ss3.jpeg",
    ],
    description: "This thoughtfully planned residential complex offers spacious and well-designed 2BHK & 3BHK apartments, created to meet the needs of modern families. The project blends contemporary architecture with smart layouts, ensuring ample natural light, ventilation, and a comfortable living environment. Each home is crafted with quality materials and attention to detail, providing functional spaces that balance style, privacy, and everyday convenience.The development also features well-planned common areas and essential lifestyle amenities that support a safe, peaceful, and community-focused living experience. With an emphasis on comfort, sustainability, and long-term value, this residential complex is designed to enhance quality of life and offer a harmonious living space for families and professionals alike.",
    amenities: [
      { name: "Garden", icon: <FaTree /> },
      { name: "Open Theater", icon: <FaFilm /> },
      { name: "24/7 CCTV Surveillance", icon: <FaVideo /> },
      { name: "Gazebo", icon: <FaUmbrellaBeach /> },
      { name: "Allotted Parking", icon: <FaCar /> },
      { name: "Box Cricket", icon: <MdSportsCricket /> },
      { name: "Fire Safety", icon: <FaFireExtinguisher /> },
    ],
    specification: [
      { name: "99", subhead: "Total Units" },
      { name: "2", subhead: "Towers" },
      { name: "13", subhead: "Story Heights" },
      { name: "1368 SqFt", subhead: "Of 2BHK" },
      { name: "1800 SqFt", subhead: "of 3BHK" },
      { name: "Abundant", subhead: "Natural Light" },
    ],
    connectivity: [
      "1 min from SP Ring Road",
      "5 mins to Science City",
      "Pure Residential Area",
      "Close proximity to hospitals",
      "Top Schools",
    ],
    mapaddress:["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6996.350817689115!2d72.48416221452327!3d23.08915737988152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9db73f2fb97f%3A0x98231216f454d965!2sSun%20Sierra!5e1!3m2!1sen!2sin!4v1767604349318!5m2!1sen!2sin"]
  },

  {
    id: 3,
    title: "Sun Setu",
    location: "Vaishnodevi",
    year: "2018-2021",
    category: "Residential & Commercial",
    type: "2BHK & 3BHK Apartments",
    units: "203",
    block: "3",
    status: "Completed",
    image:
      "/src/assets/projectimg/sunsetu/setu1.png",
    images:["/src/assets/projectimg/sunsetu/setu1.png",
      "/src/assets/projectimg/sunsetu/setu2.jpg",
      "/src/assets/projectimg/sunsetu/setu3.jpg"
    ],
    description: "This thoughtfully designed residential project offers spacious and well-planned 2 BHK and 3 BHK apartments, tailored to suit the needs of modern families. Each home features smart layouts, ample natural light, and proper ventilation, creating a comfortable and refreshing living environment. High-quality construction, contemporary design, and functional interiors ensure a perfect balance of style and practicality for everyday living.The project is complemented by carefully planned common spaces and essential lifestyle amenities that enhance convenience, safety, and community living. Designed with a focus on long-term comfort and sustainability, this residential development provides a peaceful yet connected lifestyle, making it an ideal choice for families and professionals seeking quality living spaces.",
    amenities: [
      { name: "Garden", icon: <FaTree /> },
      { name: "24/7 CCTV Surveillance", icon: <FaVideo /> },
      { name: "Allotted Parking", icon: <FaCar /> },
      { name: "Fire Safety", icon: <FaFireExtinguisher /> },
      { name: "Water Supply", icon:<FaWater/> }
    ],
    specification: [
      { name: "203", subhead: "Total Units" },
      { name: "3", subhead: "Towers" },
      { name: "7", subhead: "Story Heights" },
      { name: "120 SqFt", subhead: "Of 2BHK" },
      { name: "757 SqFt", subhead: "of 3BHK" },
      { name: "2", subhead: "Road Access" },
    ],
    connectivity: [
      "1 min from SP Ring Road",
      "Pure Residential Area",
      "Close proximity to hospitals",
      "Top Schools & Universities",
    ],
    mapaddress:["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55970.166545700806!2d72.48169668238577!3d23.090694106009767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e82a332603943%3A0x4a16cfb18654b625!2sSun%20Setu%20Apartment!5e1!3m2!1sen!2sin!4v1767614032984!5m2!1sen!2sin"]
  },

  {
    id: 4,
    title: "Sun Siesta",
    location: "Vaishnodevi",
    year: "2016-2018",
    type: "2BHK Apartments",
    status: "Completed",
    category: "Residential",
    image:
      "/src/assets/projectimg/sunsiesta/siesta1.png",
    images:[
      "/src/assets/projectimg/sunsiesta/siesta1.png",
      "/src/assets/projectimg/sunsiesta/siesta2.jpg",
    ],
    description: "This well-planned 2 BHK apartment is located in a modern 7-floor residential building, offering a comfortable and functional living space. The home features airy bedrooms, a spacious living area, and a practical kitchen designed for everyday convenience.The building provides a secure and pleasant environment with well-maintained common areas, making it suitable for families and professionals alike. It’s an ideal choice for those seeking modern urban living with long-term value.",
    amenities: [
      { name:"Garden", icon:<FaTree/>},
      { name:"Fire Satfy", icon: <FaFireExtinguisher />},
      { name:"Alloted Parking", icon: <FaCar />},
      { name:"Water Management", icon: <FaWater/>},
    ],
    specification:[
      { name: "47", subhead: "Total Units" },
      { name: "1", subhead: "Towers" },
      { name: "7", subhead: "Story Heights" },
      { name: "990 SqFt", subhead: "Of 2BHK" },
      { name: "Main", subhead: "Road Access" },
    ],
    connectivity: [
      "1 min from SP Ring Road",
      "Pure Residential Area",
      "2 mins from KD Hospitals",
      "Top Schools & Universities",
      "Easy access to public facilities"
    ],
    mapaddress:["https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6993.780754955971!2d72.53843!3d23.138478000000003!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDA4JzE4LjUiTiA3MsKwMzInMTguNCJF!5e1!3m2!1sen!2sus!4v1767681687865!5m2!1sen!2sus"]
  },

  {
    id: 5,
    title: "SunResidency Bunglows",
    location: "Thaltej",
    year: "2011-2014",
    category: "Residential",
    type: "3BHK Villa",
    status: "Completed",
    image:
      "/src/assets/projectimg/sunresidency/residency1.jpg",
    images:[
      "/src/assets/projectimg/sunresidency/residency1.jpg",
      "/src/assets/projectimg/sunresidency/residency2.jpg"
    ],
    description: "These elegant 3 BHK bungalows are designed to offer spacious, independent living with a perfect balance of comfort and privacy. Each bungalow features well-sized bedrooms, a large living and dining area, and a thoughtfully planned kitchen, allowing ample natural light and ventilation throughout the home.Ideal for families seeking a peaceful lifestyle, the bungalows provide a serene residential environment with quality construction and modern design. With generous space and a sense of exclusivity, these 3 BHK bungalows are perfect for those who value comfort, privacy, and long-term living.",
    amenities: [
      { name:"Garden",icon:<FaTree/>},
      { name:"CCTV Camera", icon:<FaVideo />},
      { name:"Kids Playzone",icon:<FaChild />}
    ],
    specification:[
      { name: "15", subhead: "Total Units" },
      { name: "3", subhead: "Bedrooms" },
      { name: "3", subhead: "Bathrooms" },
      { name: "2", subhead: "Balcony" },
      { name: "Main", subhead: "Road Access" },
      { name: "2385 SqFt", subhead: "Build Up Area"},
    ],
    connectivity: [
      "Pure Residential Area",
      "2 mins from Zydus Hospital",
      "Top Schools & Universities",
      "Easy access to public facilities"
    ],
    mapaddress:["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d874.7748466278615!2d72.49673947691916!3d23.05363267979773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b5ff2532ac3%3A0x362f0e3d6ad97135!2sSun%20Residency!5e1!3m2!1sen!2sin!4v1767683075721!5m2!1sen!2sin"]
  },

  {
    id: 6,
    title: "SunFlower Bunglows",
    location: "Thaltej",
    year: "2009-2011",
    category: "Residential",
    type: "3BHK Bunglows",
    status: "Completed",
    image:"/src/assets/projectimg/sunflower/flower1.png",
    images:["/src/assets/projectimg/sunflower/flower1.png"],
    description: "These premium 3 BHK bungalows offer a refined living experience with spacious layouts and independent homes designed for comfort and privacy. Each unit includes generously sized bedrooms, an open living and dining space, and a well-organized kitchen, ensuring a bright and airy atmosphere throughout.Perfect for families looking for a calm and private setting, these bungalows combine modern architecture with quality craftsmanship. The thoughtful design and ample space make them an excellent choice for relaxed, long-term residential living.",
    amenities: [
      { name:"Garden", icon: <FaTree/>},
      { name:"Parking", icon:<FaCar/>}
    ],
    specification:[
      { name: "24", subhead: "Total Units" },
      { name: "3", subhead: "Bedrooms" },
      { name: "3", subhead: "Bathrooms" },
      { name: "1", subhead: "Balcony" },
      { name: "Main", subhead: "Road Access" },
      { name: "2250 SqFt", subhead:"Build Up Area"},
    ],
    connectivity: [
      "5 mins from Zydus Hospital",
      "Top Schools & Universities",
      "Easy access to public facilities"
    ],
    mapaddress:["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8322.352414865545!2d72.49766836179094!3d23.05291049950121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b004dad154b%3A0x91a5fd137d909000!2sSunflower%20Bunglows!5e1!3m2!1sen!2sin!4v1767684000926!5m2!1sen!2sin"]
  },

  {
    id: 7,
    title: "SunVilla Bunglows",
    location: "Thaltej",
    year: "2006-2008",
    category: "Residential",
    type: "3BHK Bunglows",
    status: "Completed",
    image:"/src/assets/projectimg/Sunvilla/villa1.png",
    images:["/src/assets/projectimg/Sunvilla/villa1.png"],
    description: "These premium 3 BHK bungalows offer a refined living experience with spacious layouts and independent homes designed for comfort and privacy. Each unit includes generously sized bedrooms, an open living and dining space, and a well-organized kitchen, ensuring a bright and airy atmosphere throughout.Perfect for families looking for a calm and private setting, these bungalows combine modern architecture with quality craftsmanship. The thoughtful design and ample space make them an excellent choice for relaxed, long-term residential living.",
    amenities: [
      { name:"Garden",icon:<FaTree/>},
      { name:"Car Park",icon:<FaCar/>},
      { name:"Water Management",icon:<FaWater/>}
    ],
    specification:[
      { name: "29", subhead: "Total Units" },
      { name: "3", subhead: "Bedrooms" },
      { name: "3", subhead: "Bathrooms" },
      { name: "2", subhead: "Balcony" },
      { name: "Main", subhead: "Road Access" },
      { name: "2385 SqFt", subhead:"Build Up Area"},
    ],
    connectivity: [
      "5 mins from Zydus Hospital",
      "Top Schools & Universities",
      "Easy access to public facilities",
      "Main Road connection"
    ],
    mapaddress:["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.040532937245!2d72.50264245!3d23.055897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d759b61efad%3A0x6a3dfa9c245421ee!2sSUN%20VILLA!5e1!3m2!1sen!2sin!4v1767684897474!5m2!1sen!2sin"]
  },
];
