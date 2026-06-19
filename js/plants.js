const featuredResidents = [


  {
    project: "tomato",
    title: "Cherry Tomato",
    status: "Flowering",
    author: "Sown 4 Feb 2026",
    image: "/images/garden/tomato-06-2026.jpeg",
  },
  {
    project: "strawberry",
    title: "Albion Strawberries",
    author: "Added 9 Mar 2026",
    image: "/images/garden/strawberry-06-2026.png",
    status: "Safe from Siege",
    note: "Primary victims of the Great Strawberry Heist.",
  },
  {
    project: "basil",
    title: "Sweet Basil",
    status: "Finally Outside",
    author: "Sown 19 Mar 2026",
    image: "/images/garden/basil-06-2026.jpeg",
  },
  {
    project: "aubergine",
    title: "Patio Baby F1 Aubergine",
    author: "Sown 19 Mar 2026",
    image: "/images/garden/aubergine-06-2026.jpeg",
    status: "Still Too Small",
    note: "Currently losing a growth race against a volunteer mushroom.",
  },
];

const plantResidents = [
  {
    id: "blueberry",
    emoji: "🫐",
    name: "Blueberry",
    variety: "Patriot",
    type: "Fruit",
    status: "Growing",
    started: "2026-03-09",
    image: "/images/garden/blueberry-06-2026.jpeg",
    imageSize: "portrait",
    note:
      "One of the first permanent residents. Living its best life in ericaceous soil and patiently waiting to justify the pot space."
  },

  {
    id: "strawberry",
    emoji: "🍓",
    name: "Strawberry",
    variety: "Albion",
    type: "Fruit",
    status: "Safe After Siege",
    started: "2026-03-09",
    image: "/images/garden/strawberry-06-2026.png",
    imageSize: "portrait",
    note:
      "Survived a 40% bare root casualty rate only to become targets of the Great Strawberry Heist."
  },

  {
    id: "raspberry",
    emoji: "❤️",
    name: "Raspberry",
    variety: "Autumn Bliss",
    type: "Fruit",
    status: "Growing",
    started: "2026-03-14",
    image: "/images/garden/raspberry-06-2026.png",
    imageSize: "landscape",
    note:
      "Chosen in the hope of berries sooner rather than later. Hope was successful, and have snacked on a couple raspberries while inspecting the garden already!"
  },

  {
    id: "aubergine",
    emoji: "🍆",
    name: "Aubergine",
    variety: "Patio Baby F1",
    type: "Vegetable",
    status: "Tiny",
    started: "2026-03-19",
    image: "/images/garden/aubergine-06-2026.jpeg",
    imageSize: "square",
    note:
      "Technically alive. Continues to lose growth competitions against mushrooms."
  },

  {
    id: "potato",
    emoji: "🥔",
    name: "Potato",
    variety: "King Edward",
    type: "Vegetable",
    status: "Growing",
    started: "2026-04-01",
    image: "/images/garden/potato-06-2026.jpeg",
    imageSize: "portrait",
    note:
      "Proof that supermarket potatoes and stubbornness can occasionally substitute for seed potatoes."
  },

  {
    id: "bean",
    emoji: "🫘",
    name: "Bean",
    variety: "Cobra",
    type: "Vegetable",
    status: "Missing",
    started: "2026-05-18",
    image: "/images/garden/empty-bean-trough-06-2026.jpeg",
    imageSize: "portrait",
    note:
      "Officially planted. Presence above ground remains suspiciously absent."
  },

  {
    id: "garlic",
    emoji: "🧄",
    name: "Garlic",
    variety: "-",
    type: "Vegetable",
    status: "Growing",
    started: "2026-02-11",
    image: "/images/garden/garlic-06-2026.jpeg",
    imageSize: "portrait",
    note:
      "Relocated multiple times in response to weather forecasts and gardener paranoia."
  },

  {
    id: "comfrey",
    emoji: "🍵",
    name: "Comfrey",
    variety: "Bocking 14",
    type: "Perennial",
    status: "Productive",
    started: "2026-03-13",
    image: "/images/garden/comfrey-06-2026.jpeg",
    imageSize: "portrait",
    note:
      "The fertiliser factory. Frequently harvested and immediately transformed into suspicious tea."
  },

  {
    id: "daylily",
    emoji: "🌸",
    name: "Daylily",
    variety: "Hemerocallis<br>Pink Wing",
    type: "Flower",
    status: "Blooming",
    started: "2026-03-13",
    image: "/images/garden/daylily-flower-05-2026.jpg",
    imageSize: "square",
    note:
      "Produces beautiful edible flowers and an ongoing reluctance to harvest them."
  },

  {
    id: "tomato",
    emoji: "🍅",
    name: "Tomato",
    variety: "Cherry",
    type: "Vegetable",
    status: "Growing",
    started: "2026-02-04",
    image: "/images/garden/tomato-06-2026.jpeg",
    imageSize: "landscape",
    note:
      "The plants that started this entire adventure. Survivors of multiple repottings, weather events, and cat-related incidents."
  },

  {
    id: "basil",
    emoji: "🌿",
    name: "Basil",
    variety: "Sweet Basil",
    type: "Herb",
    status: "Recovering",
    started: "2026-03-19",
    image: "/images/garden/basil-06-2026.jpeg",
    imageSize: "square",
    note:
      "Victim of the Great Heatwave Hardening Incident. Only one survivor remains. Proper plants have been purchased instead."
  },

  {
    id: "mint",
    emoji: "🌿",
    name: "Mint",
    variety: "-",
    type: "Herb",
    status: "Contained",
    started: "2026-03-03",
    image: "/images/garden/mint-06-2026.jpeg",
    imageSize: "square",
    note:
      "After a brief identity crisis in which the mint turned out to be tomatoes, genuine mint has finally emerged (I hope). It remains very small for a plant with such ambitious plans."
  },

  {
    id: "herb",
    emoji: "🌱",
    name: "Kitchen Herbs",
    variety: "Parsley &<br>Coriander",
    type: "Herb",
    status: "Growing",
    started: "2026-03-13",
    image: "/images/garden/mixed-herbs-06-2026.jpeg",
    imageSize: "portrait",
    note:
      "The sensible residents quietly getting on with things while everyone else creates drama."
  },
  {
    id: "med-herb",
    emoji: "🌱",
    name: "Mediterranean Herbs",
    variety: "Greek Oregano,<br>Blue Lagoon Rosemary,<br>Purple Sage",
    type: "Herb",
    status: "Growing",
    started: "2026-05-31",
    image: "/images/garden/mediterranean-trough-06-2026.jpeg",
    imageSize: "landscape",
    note:
      "The newest residents."
  },

  {
    id: "borage",
    emoji: "🌺",
    name: "Borage",
    variety: "-",
    type: "Flower",
    status: "Growing",
    started: "2026-04-16",
    image: "/images/garden/borage-06-2026.jpeg",
    imageSize: "portrait",
    note:
      "Originally chosen for companion planting. Also happens to produce edible flowers."
  },

  {
    id: "leek",
    emoji: "🧅",
    name: "Leek",
    variety: "Lyon",
    type: "Vegetable",
    status: "Trying",
    started: "2026-04-16",
    image: "/images/garden/leeks-06-2026.jpeg",
    imageSize: "square",
    note:
      "Have repeatedly tested the definition of 'germination success'."
  },

  {
    id: "spring-onion",
    emoji: "🧅",
    name: "Spring Onion",
    variety: "-",
    type: "Vegetable",
    status: "Indoor Witness Protection",
    started: "2026-03-10",
    image: "/images/garden/spring-onion-06-2026.jpeg",
    imageSize: "portrait",
    note:
      "After several unsuccessful outdoor campaigns, the seed trough has been relocated indoors. Backup supermarket spring onions have also been enlisted for moral support."
  },

  {
    id: "spinach",
    emoji: "🥬",
    name: "Spinach",
    variety: "-",
    type: "Leafy Green",
    status: "Carrying the Team",
    started: "2026-03-10",
    image: "/images/garden/spinach-06-2026.jpeg",
    imageSize: "portrait",
    note:
      "Despite numerous attempts at succession sowing, only two plants have truly committed to the role. Fortunately those two have been remarkably productive and are currently responsible for the majority of the garden's harvests."
  },

  {
    id: "lambs-lettuce",
    emoji: "🥗",
    name: "Lamb's Lettuce",
    variety: "-",
    type: "Leafy Green",
    status: "Ready",
    started: "2026-03-10",
    image: "/images/garden/lambs-lettuce-06-2026.jpeg",
    imageSize: "landscape",
    note:
      "After a somewhat hesitant start, this patch has grown into a respectable collection of tiny leafy residents. They are technically ready for harvesting, although nobody appears eager to inform them of this."
  }
];