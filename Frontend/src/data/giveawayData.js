// src/data/giveawayData.js

export const currentUser = {
  id: "VE10025",
  isLoggedIn: true,

  balances: {
    VEs: 850,
    SVEs: 1200,
    Tokens: 5000,
  },
};

export const currentGiveaway = {
  id: "GW-2026-08",
  slug: "summer-rewards",
  title: "Summer Rewards Giveaway",
  label: "EXCLUSIVE GIVEAWAY",

  status: "active",

  description:
    "Complete eligible activities, collect entries and get a chance to win exciting rewards.",

  startDate: "2026-08-25T00:00:00",
  endDate: "2026-09-15T23:59:59",

  participants: 8500,
  totalGiveaways: 24,
  prizesWon: 1200,

  user: {
    joined: false,
    entries: 24,
  },

  prizes: [
    {
      id: "PRIZE-001",
      slug: "iphone-15-pro",
      position: "1st Prize",
      name: "iPhone 15 Pro",
      description: "Premium smartphone with powerful performance.",
      image: "/src/assets/ChatGPT Image Aug 19, 2026, 01_49_05 PM.png",

      type: "PHYSICAL",
      claimType: "ADDRESS",

      winnerCount: 1,
      participants: 2300,

      endDate: "2026-09-20T23:59:59",

      entry: {
        amount: 250,
        currency: "VEs",
      },
    },

    {
      id: "PRIZE-002",
      slug: "apple-watch",
      position: "2nd Prize",
      name: "Apple Watch Series 9",
      description: "Smart fitness and lifestyle companion.",
      image: "/src/assets/ChatGPT Image Aug 19, 2026, 01_55_25 PM.png",

      type: "PHYSICAL",
      claimType: "ADDRESS",

      winnerCount: 3,
      participants: 1800,

      endDate: "2026-09-21T23:59:59",

      entry: {
        amount: 200,
        currency: "VEs",
      },
    },

    {
      id: "PRIZE-003",
      slug: "airpods-pro",
      position: "3rd Prize",
      name: "AirPods Pro",
      description: "Premium wireless audio experience.",
      image: "/src/assets/ChatGPT Image Aug 19, 2026, 02_06_07 PM.png",

      type: "PHYSICAL",
      claimType: "ADDRESS",

      winnerCount: 5,
      participants: 1600,

      endDate: "2026-09-22T23:59:59",

      entry: {
        amount: 500,
        currency: "SVEs",
      },
    },

    {
      id: "PRIZE-004",
      slug: "amazon-2000",
      position: "Lucky Draw",
      name: "₹2,000 Amazon Gift Card",
      description: "Enjoy shopping with a digital Amazon voucher.",
      image: "/src/assets/ChatGPT Image Aug 19, 2026, 03_22_24 PM.png",

      type: "GIFT_CARD",
      claimType: "EMAIL",

      winnerCount: 10,
      participants: 2800,

      endDate: "2026-09-23T23:59:59",

      entry: {
        amount: 500,
        currency: "VEs",
      },
    },

    {
      id: "PRIZE-005",
      slug: "amazon-500",
      position: "Lucky Draw",
      name: "₹500 Amazon Gift Card",
      description: "A digital shopping reward for your next purchase.",
      image: "/src/assets/ChatGPT Image Aug 19, 2026, 03_27_44 PM.png",

      type: "GIFT_CARD",
      claimType: "EMAIL",

      winnerCount: 15,
      participants: 3200,

      endDate: "2026-09-24T23:59:59",

      entry: {
        amount: 300,
        currency: "VEs",
      },
    },
  ],
};

export const winnerAnnouncements = [
  {
    id: 1,
    userId: "VE****21",
    prize: "iPhone 15 Pro",
    message: "won an iPhone 15 Pro!",
  },

  {
    id: 2,
    userId: "VE****83",
    prize: "Apple Watch Series 9",
    message: "won an Apple Watch!",
  },

  {
    id: 3,
    userId: "VE****54",
    prize: "AirPods Pro",
    message: "won AirPods Pro!",
  },

  {
    id: 4,
    userId: "VE****92",
    prize: "₹2,000 Amazon Gift Card",
    message: "won an Amazon Gift Card!",
  },
];

export const currentWinners = [
  {
    id: "WIN-001",
    userId: "VE10025",
    displayId: "VE****25",
    prizeId: "PRIZE-002",
    prize: "Apple Watch Series 9",
    giveaway: "Summer Rewards Giveaway",
    date: "2026-09-16",
    status: "winner",
  },
];

export const previousWinners = [
  {
    id: "PREV-001",
    userId: "VE10082",
    displayId: "VE****82",
    prize: "iPhone 15 Pro",
    giveaway: "August Reward Rush",
    date: "2026-08-05",
    category: "Physical",
    status: "Prize Delivered",
  },

  {
    id: "PREV-002",
    userId: "VE10042",
    displayId: "VE****42",
    prize: "Apple Watch Series 9",
    giveaway: "Summer Rewards",
    date: "2026-08-06",
    category: "Physical",
    status: "Prize Delivered",
  },

  {
    id: "PREV-003",
    userId: "VE10091",
    displayId: "VE****91",
    prize: "AirPods Pro",
    giveaway: "August Reward Rush",
    date: "2026-08-10",
    category: "Physical",
    status: "Prize Delivered",
  },

  {
    id: "PREV-004",
    userId: "VE10027",
    displayId: "VE****27",
    prize: "₹2,000 Amazon Gift Card",
    giveaway: "Summer Rewards",
    date: "2026-08-10",
    category: "Gift Card",
    status: "Completed",
  },
];

export const participationSteps = [
  {
    id: 1,
    number: "01",
    title: "Sign Up / Login",
    description: "Create or access your VELOOP Rewards account.",
  },

  {
    id: 2,
    number: "02",
    title: "Complete Tasks",
    description: "Complete eligible activities to earn rewards.",
  },

  {
    id: 3,
    number: "03",
    title: "Earn Entries",
    description: "Use your eligible rewards to participate.",
  },

  {
    id: 4,
    number: "04",
    title: "Join Giveaway",
    description: "Confirm your participation before the deadline.",
  },

  {
    id: 5,
    number: "05",
    title: "Win Rewards",
    description: "Winners are selected after the giveaway ends.",
  },
];

export const trustPoints = [
  {
    id: 1,
    title: "Transparent",
    description:
      "Giveaway rules and participation requirements are clearly displayed.",
  },

  {
    id: 2,
    title: "Secure",
    description:
      "Only information required for prize fulfillment is collected.",
  },

  {
    id: 3,
    title: "Fair Participation",
    description: "Participation rules are clearly explained before joining.",
  },

  {
    id: 4,
    title: "Reward Transparency",
    description: "Prize details and winner information are presented clearly.",
  },
];

export const faqData = [
  {
    id: 1,
    question: "How do I participate?",
    answer:
      "Choose a giveaway, review the requirements, check your balance and confirm your participation.",
  },

  {
    id: 2,
    question: "How are winners selected?",
    answer:
      "Winners are selected after the giveaway ends according to the configured giveaway rules.",
  },

  {
    id: 3,
    question: "When are winners announced?",
    answer:
      "Winner announcements become available after the giveaway has ended and winner selection is completed.",
  },

  {
    id: 4,
    question: "What happens if I win?",
    answer:
      "Eligible winners will see a personalized claim area with the required prize-claim information.",
  },

  {
    id: 5,
    question: "How do I claim my prize?",
    answer:
      "Physical prizes require delivery details, while digital gift cards require an email address.",
  },

  {
    id: 6,
    question: "Can I participate in multiple giveaways?",
    answer: "Participation depends on the rules configured for each giveaway.",
  },
];

export const giveawayRules = [
  "Users must meet the eligibility requirements before participating.",
  "The required entry currency and amount must be available before joining.",
  "Participation is subject to the configured giveaway rules.",
  "Winner selection takes place after the giveaway ends.",
  "Winners must claim eligible prizes within the specified claim period.",
  "Suspicious, fraudulent or abusive activity may result in disqualification.",
  "Prize fulfillment information should only be submitted through the official claim flow.",
];

export const claimStatuses = [
  "NOT_SUBMITTED",
  "SUBMITTED",
  "PROCESSING",
  "COMPLETED",
  "EXPIRED",
];
