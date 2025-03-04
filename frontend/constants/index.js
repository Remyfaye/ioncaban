const listings = [
  {
    id: "01",
    image: "/home/house1.png",
    bedrooms: "3",
    name: "Modern 4-Bedroom Duplex",
    description:
      "Built in 2021, this modern duplex is just 3 years old and remains in excellent condition, thanks to a recent renovation with cutting-edge fittings. The home boasts premium marble flooring in the living areas and hardwood floors in the bedrooms, providing both luxury and durability. With 12-foot ceilings and double-glazed windows, the property feels spacious and offers exceptional soundproofing and energy efficiency.",
    meters: "472",
    street: "25 Ayodele Crescent.",
    price: "1,500,000",
    seller: {
      name: "john Doe",
      image: "/pers.png",
    },
    specifications: {
      size: "245 Sq metres",
      Bedrooms: 4,
      Bathrooms: 5,
      Toilets: 6,
      PowerSupply: "24 / 7",
      WaterSupply: "Stable",
      AirConditioner: 4,
      Furnishing: "Fully Furnished",
      Parkingspace: "Available",
    },
    city: "Ikeja GRA, lagos, Nigeria",
  },
  {
    image: "/home/house3.png",
    id: "02",
    name: "Modern 4-Bedroom Duplex",
    bedrooms: "3",
    description:
      "Built in 2021, this modern duplex is just 3 years old and remains in excellent condition, thanks to a recent renovation with cutting-edge fittings. The home boasts premium marble flooring in the living areas and hardwood floors in the bedrooms, providing both luxury and durability. With 12-foot ceilings and double-glazed windows, the property feels spacious and offers exceptional soundproofing and energy efficiency.",
    meters: "472",
    street: "25 Ayodele Crescent.",
    price: "1,500,000",
    specifications: {
      size: "245 Sq metres",
      Bedrooms: 4,
      Bathrooms: 5,
      Toilets: 6,
      PowerSupply: "24 / 7",
      WaterSupply: "Stable",
      AirConditioner: 4,
      Furnishing: "Fully Furnished",
      Parkingspace: "Available",
    },
    seller: {
      name: "john Doe",
      image: "/pers.png",
    },
    city: "Ikeja GRA, lagos, Nigeria",
  },
  {
    image: "/home/house4.png",
    name: "Modern 4-Bedroom Duplex",
    id: "03",
    description:
      "Built in 2021, this modern duplex is just 3 years old and remains in excellent condition, thanks to a recent renovation with cutting-edge fittings. The home boasts premium marble flooring in the living areas and hardwood floors in the bedrooms, providing both luxury and durability. With 12-foot ceilings and double-glazed windows, the property feels spacious and offers exceptional soundproofing and energy efficiency.",
    bedrooms: "3",
    meters: "472",
    street: "25 Ayodele Crescent.",
    price: "1,500,000",
    specifications: {
      size: "245 Sq metres",
      Bedrooms: 4,
      Bathrooms: 5,
      Toilets: 6,
      PowerSupply: "24 / 7",
      WaterSupply: "Stable",
      AirConditioner: 4,
      Furnishing: "Fully Furnished",
      Parkingspace: "Available",
    },
    seller: {
      name: "john Doe",
      image: "/pers.png",
    },
    city: "Ikeja GRA, lagos, Nigeria",
  },
  {
    image: "/home/house5.png",
    id: "04",
    bedrooms: "3",
    name: "Modern 4-Bedroom Duplex",
    description:
      "Built in 2021, this modern duplex is just 3 years old and remains in excellent condition, thanks to a recent renovation with cutting-edge fittings. The home boasts premium marble flooring in the living areas and hardwood floors in the bedrooms, providing both luxury and durability. With 12-foot ceilings and double-glazed windows, the property feels spacious and offers exceptional soundproofing and energy efficiency.",
    meters: "472",
    street: "25 Ayodele Crescent.",
    price: "1,500,000",
    specifications: {
      size: "245 Sq metres",
      Bedrooms: 4,
      Bathrooms: 5,
      Toilets: 6,
      PowerSupply: "24 / 7",
      WaterSupply: "Stable",
      AirConditioner: 4,
      Furnishing: "Fully Furnished",
      Parkingspace: "Available",
    },
    seller: {
      name: "john Doe",
      image: "/pers.png",
    },
    city: "Ikeja GRA, lagos, Nigeria",
  },
  {
    image: "/home/house6.png",
    bedrooms: "3",
    name: "Modern 4-Bedroom Duplex",
    description:
      "Built in 2021, this modern duplex is just 3 years old and remains in excellent condition, thanks to a recent renovation with cutting-edge fittings. The home boasts premium marble flooring in the living areas and hardwood floors in the bedrooms, providing both luxury and durability. With 12-foot ceilings and double-glazed windows, the property feels spacious and offers exceptional soundproofing and energy efficiency.",
    id: "05",
    meters: "472",
    specifications: {
      size: "245 Sq metres",
      Bedrooms: 4,
      Bathrooms: 5,
      Toilets: 6,
      PowerSupply: "24 / 7",
      WaterSupply: "Stable",
      AirConditioner: 4,
      Furnishing: "Fully Furnished",
      Parkingspace: "Available",
    },
    seller: {
      name: "john Doe",
      image: "/pers.png",
    },
    street: "25 Ayodele Crescent.",
    price: "1,500,000",
    city: "Ikeja GRA, lagos, Nigeria",
  },
  {
    image: "/home/house7.png",
    id: "06",
    specifications: {
      size: "245 Sq metres",
      Bedrooms: 4,
      Bathrooms: 5,
      Toilets: 6,
      PowerSupply: "24 / 7",
      WaterSupply: "Stable",
      AirConditioner: 4,
      Furnishing: "Fully Furnished",
      Parkingspace: "Available",
    },
    name: "Modern 4-Bedroom Duplex",
    description:
      "Built in 2021, this modern duplex is just 3 years old and remains in excellent condition, thanks to a recent renovation with cutting-edge fittings. The home boasts premium marble flooring in the living areas and hardwood floors in the bedrooms, providing both luxury and durability. With 12-foot ceilings and double-glazed windows, the property feels spacious and offers exceptional soundproofing and energy efficiency.",
    bedrooms: "3",
    meters: "472",
    street: "25 Ayodele Crescent.",
    price: "1,500,000",
    city: "Ikeja GRA, lagos, Nigeria",
    seller: {
      name: "john Doe",
      image: "/pers.png",
    },
  },
];

const faq = [
  {
    question: "What is Prime Real Estate?",
    answer:
      "We are a platform that connects property owners with buyers and renters, simplifying the process of listing and discovering properties.",
  },
  {
    question: "How does the platform work?",
    answer:
      "We are a platform that connects property owners with buyers and renters, simplifying the process of listing and discovering properties.",
  },
  {
    question: "Who can list properties on the website?",
    answer:
      "We are a platform that connects property owners with buyers and renters, simplifying the process of listing and discovering properties.",
  },
  {
    question: "How do I list my property?",
    answer:
      "We are a platform that connects property owners with buyers and renters, simplifying the process of listing and discovering properties.",
  },
  {
    question: "Is there a fee for listing properties?",
    answer:
      "We are a platform that connects property owners with buyers and renters, simplifying the process of listing and discovering properties.",
  },
];

const footerLinks = [
  {
    header: "Company",
    links: ["About", "Listings", "Properties", "Contact Us", "FAQ"],
  },
  {
    header: "Properties",
    links: ["For Rent", "For Sale", "Estates", "Resell"],
  },
  {
    header: "Agents",
    links: ["Lagos", "Port Harcourt", "Abuja", "Enugu", "Kaduna", "Benin"],
  },
  {
    header: "Legal",
    links: ["Terms of service", "Terms of use", "Private Policy"],
  },
];

export { listings, faq, footerLinks };
