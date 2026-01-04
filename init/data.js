const sampleListings = [
  {
    title: "Cozy Apartment in Delhi",
    description: "A fully furnished 2BHK apartment near Connaught Place.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
    },
    price: 18000,
    location: "Connaught Place, Delhi",
    country: "India",
    type: "Apartment"
  },
  {
    title: "Mayfair On Sea, Morjim Beach, Goa",
    description: "Stay at a serene beachfront property offering modern amenities, sea views, and direct access to Morjim Beach.",
    image: {
      filename: "listingimage",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/397050633.jpg?k=962c1cd5ed4b0bc72938bfb0ca5f1b9a45c82d3d39fd84e26c53314567820d54&o="
    },
    price: 35000,
    location: "Morjim, North Goa",
    country: "India",
    type: "Hotel"
  },
  {
    title: "Wolverine - Couple Friendly 1BHK near Bellandur",
    description: "Sofa bed. Ceiling fan. Cleaning available during stay. Free on-street parking. Lift. Long-term stays.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM3NDMxNTUwOTQwMTM3MzUxNg==/original/29c4d08e-43f3-483d-936b-8adec22865ef.jpeg?im_w=960"
    },
    price: 2511,
    location: "Bangalore",
    country: "India",
    type: "Villa"
  },
  {
    title: "Torrey Villas",
    description: "From dramatic sunsets overlooking Torrey Pines State Reserve to the beach-entry pool, enjoy the best of coastal living in this gated Carmel Valley community. Contemporary light-filled residences include private garages and full-size washer/dryers.",
    image: {
      filename: "listingimage",
      url: "https://dynamicmedia.irvinecompany.com/is/image/content/dam/apartments/3-readytopublish/communities/sandiego/torreyvillas/photography/TorreyVillas-CMF-8194.jpg?&crop=0,0,7200,4800&wid=1360&iccEmbed=1&icc=AdobeRGB&resMode=sharp2&fmt=pjpeg&pscan=auto"
    },
    price: 15000,
    location: "Pink City, Jaipur",
    country: "India",
    type: "Villa"
  },
  {
    title: "Cozy Penthouse-Style 1 BHK",
    description: "Entire apartment in Bangalore Urban, India. 2 guests, 1 bedroom, 2 beds, 1 bathroom.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1270314768198309910/original/0cdd2574-c852-4591-af57-a815b502793f.jpeg?im_w=1200"
    },
    price: 12000,
    location: "Bangalore Urban",
    country: "India",
    type: "Apartment"
  },
  {
    title: "Luxury Apartment in Mumbai",
    description: "Modern high-rise apartment with sea view and premium amenities in Bandra.",
    image: {
      filename: "listingimage",
      url: "https://surajestate.com/wp-content/uploads/2024/11/luxury-flats-in-mumbai.jpg"
    },
    price: 40000,
    location: "Bandra, Mumbai",
    country: "India",
    type: "Apartment"
  },
  {
    title: "Jungle Retreat in Wayanad",
    description: "Eco-friendly cottages nestled in the lush greenery of Wayanad’s forests.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0OTyLOtUIEiGROPOLOobvxSPZ5rsKUZhjQ&s"
    },
    price: 9000,
    location: "Wayanad, Kerala",
    country: "India",
    type: "Cottage"
  },
  {
    title: "Desert Camp in Jaisalmer",
    description: "Traditional desert tents with cultural performances and dune safaris.",
    image: {
      filename: "listingimage",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/399638240.jpg?k=833a9f47578d4b5e8fcc929f59a0e17ca58a0381c9dc3410d2647eb46a1c1dfc&o=&hp=1"
    },
    price: 8000,
    location: "Sam Sand Dunes, Jaisalmer",
    country: "India",
    type: "Tent"
  },
  {
    title: "Treehouse in Lonavala",
    description: "A romantic getaway in a luxurious treehouse overlooking the Western Ghats.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2MdiHQ2e4pzTSBTAZLpHkK-mrWNITS9mnjg&s"
    },
    price: 16000,
    location: "Lonavala, Maharashtra",
    country: "India",
    type: "Treehouse"
  },
  {
    title: "Houseboat in Alleppey",
    description: "Stay in a fully furnished houseboat with meals included as you float through Kerala backwaters.",
    image: {
      filename: "listingimage",
      url: "https://alleppeyhouseboat.in/wp-content/uploads/2019/02/houseboat-Copy.jpg"
    },
    price: 14000,
    location: "Alleppey, Kerala",
    country: "India",
    type: "Houseboat"
  },
  {
    title: "Boutique Hotel in Pondicherry",
    description: "Charming French-style boutique hotel in the White Town area of Pondicherry.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfqbU0DPQUMsD503E19EtKkaZK7UENYBkwgA&s"
    },
    price: 13000,
    location: "White Town, Pondicherry",
    country: "India",
    type: "Hotel"
  },
  {
    title: "Eco Resort in Coorg",
    description: "Sustainable resort nestled among coffee plantations with nature trails and organic dining.",
    image: {
      filename: "listingimage",
      url: "https://media-cdn.tripadvisor.com/media/photo-s/17/49/37/b6/heritage-resort-coorg.jpg"
    },
    price: 11000,
    location: "Madikeri, Coorg",
    country: "India",
    type: "Resort"
  },
  {
    title: "Beachfront Villa in Gokarna",
    description: "Private villa with direct beach access and an infinity pool overlooking the Arabian Sea.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhE1muQitcso6rqS4QNOHceaOHUbRdOeUsw&s"
    },
    price: 27000,
    location: "Kudle Beach, Gokarna",
    country: "India",
    type: "Villa"
  },
  {
    title: "Hilltop Homestay in Darjeeling",
    description: "Warm and cozy homestay with panoramic views of the Kanchenjunga range.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQeojjSbNLZm6gVa1x03Yz0d1tArqjPDJVg&s"
    },
    price: 9500,
    location: "Darjeeling, West Bengal",
    country: "India",
    type: "Homestay"
  },
  {
    title: "Luxury Tent in Ranthambore",
    description: "Glamping in the wild with air-conditioned tents and jungle safari experiences.",
    image: {
      filename: "listingimage",
      url: "https://www.ranthamborenationalpark.com/wp-content/uploads/2020/02/hotel-resorts-aman-i-khas-s.jpg"
    },
    price: 18000,
    location: "Ranthambore, Rajasthan",
    country: "India",
    type: "Tent"
  }
];

module.exports = { data: sampleListings };
