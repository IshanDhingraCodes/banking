export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    route: "/my-banks",
    label: "My Banks",
  },
  {
    imgURL: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    imgURL: "/icons/money-send.svg",
    route: "/payment-transfer",
    label: "Transfer Funds",
  },
];
export const Mobile = [
  {
    route: "home",
    label: "Home",
  },
  {
    route: "features",
    label: "Features",
  },
  {
    route: "faq",
    label: "FAQ",
  },
  {
    route: "/sign-in",
    label: "Sign-In",
  },
];

// good_user / good_password - Bank of America
export const TEST_USER_ID = "6627ed3d00267aa6fa3e";

// custom_user -> Chase Bank
// export const TEST_ACCESS_TOKEN =
//   "access-sandbox-da44dac8-7d31-4f66-ab36-2238d63a3017";

// custom_user -> Chase Bank
export const TEST_ACCESS_TOKEN =
  "access-sandbox-229476cf-25bc-46d2-9ed5-fba9df7a5d63";

export const ITEMS = [
  {
    id: "6624c02e00367128945e", // appwrite item Id
    accessToken: "access-sandbox-83fd9200-0165-4ef8-afde-65744b9d1548",
    itemId: "VPMQJKG5vASvpX8B6JK3HmXkZlAyplhW3r9xm",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "X7LMJkE5vnskJBxwPeXaUWDBxAyZXwi9DNEWJ",
  },
  {
    id: "6627f07b00348f242ea9", // appwrite item Id
    accessToken: "access-sandbox-74d49e15-fc3b-4d10-a5e7-be4ddae05b30",
    itemId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
  },
];

export const topCategoryStyles = {
  "Food and Drink": {
    bg: "bg-blue-25",
    circleBg: "bg-blue-100",
    text: {
      main: "text-blue-900",
      count: "text-blue-700",
    },
    progress: {
      bg: "bg-blue-100",
      indicator: "bg-blue-700",
    },
    icon: "/icons/monitor.svg",
  },
  Travel: {
    bg: "bg-success-25",
    circleBg: "bg-success-100",
    text: {
      main: "text-success-900",
      count: "text-success-700",
    },
    progress: {
      bg: "bg-success-100",
      indicator: "bg-success-700",
    },
    icon: "/icons/coins.svg",
  },
  default: {
    bg: "bg-pink-25",
    circleBg: "bg-pink-100",
    text: {
      main: "text-pink-900",
      count: "text-pink-700",
    },
    progress: {
      bg: "bg-pink-100",
      indicator: "bg-pink-700",
    },
    icon: "/icons/shopping-bag.svg",
  },
};

export const transactionCategoryStyles = {
  "Food and Drink": {
    borderColor: "border-pink-600",
    backgroundColor: "bg-pink-500",
    textColor: "text-pink-700",
    chipBackgroundColor: "bg-inherit",
  },
  Payment: {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  "Bank Fees": {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  Transfer: {
    borderColor: "border-red-700",
    backgroundColor: "bg-red-700",
    textColor: "text-red-700",
    chipBackgroundColor: "bg-inherit",
  },
  Processing: {
    borderColor: "border-[#F2F4F7]",
    backgroundColor: "bg-gray-500",
    textColor: "text-[#344054]",
    chipBackgroundColor: "bg-[#F2F4F7]",
  },
  Success: {
    borderColor: "border-[#12B76A]",
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-[#027A48]",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  Travel: {
    borderColor: "border-[#0047AB]",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  default: {
    borderColor: "",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-inherit",
  },
};

export const logos = [
  { image: "chase.png", alt: "chase" },
  { image: "bankOfAmerica.png", alt: "Bank of America" },
  { image: "wellFargo.png", alt: "Well Fargo" },
  { image: "citibank.png", alt: "Citibank" },
  { image: "usbank.png", alt: "US Bank" },
  { image: "capitalone.png", alt: "Capital One" },
];

export const features = [
  {
    name: " Seamless Bank Integrations",
    icon: "bank-card.svg",
    description:
      "Connect with your bank accounts securely through Plaid and access your balances, transactions, and financial data from multiple institutions.",
  },
  {
    name: "Effortless Money Transfers",
    icon: "money.svg",
    description:
      "Send and receive money securely with ACH transfers via Dwolla, making it quick and easy to manage funds between accounts.",
  },
  {
    name: "Real-Time Transaction History",
    icon: "real-time.svg",
    description:
      "Track your transactions instantly, view merchant details, amounts, and dates, all in one place.",
  },
  {
    name: "Automated Expense Categorization",
    icon: "graph.svg",
    description:
      "Automatically categorize your spending into relevant groups like Groceries, Dining, Entertainment, and more to analyze your financial habits.",
  },
  {
    name: "Secure & Private",
    icon: "secure.svg",
    description:
      "Your data security matters: We use advanced encryption to protect your personal and financial information.",
  },
  {
    name: "Multi-Account Support",
    icon: "link.svg",
    description:
      "Link and manage multiple accounts from various banks on a single platform, simplifying your financial overview.",
  },
];

export const faqs = [
  {
    question: "What is this app and how does it work?",
    answer:
      "This app allows you to securely link your bank accounts, view your transaction history, track your spending, and transfer funds between accounts. It uses Plaid to connect to your bank and fetch transaction data, while Dwolla handles transfers between accounts.",
  },
  {
    question: "How do I link my bank account?",
    answer:
      "To link your bank account, simply log in to the app and select 'Link Bank Account.' You'll be prompted to enter your bank login credentials securely through Plaid. Once authenticated, your bank account will be connected to the app.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Yes, your financial data is secure. We use Plaid and Dwolla, both of which follow industry-leading security protocols. Your bank credentials are never stored by us, and all data is encrypted using secure technologies.",
  },
  {
    question: "Can I link multiple bank accounts?",
    answer:
      "Yes, you can link multiple bank accounts from different financial institutions to the app. Each account will be listed separately, allowing you to track transactions from all your linked accounts.",
  },
  {
    question: "Can I transfer money between my accounts using the app?",
    answer:
      "Yes, you can transfer funds between your linked accounts. Using Dwolla's secure transfer system, you can send ACH payments and manage your finances directly through the app.",
  },
  {
    question:
      "Can I see the transaction history from multiple bank accounts in one place?",
    answer:
      "Yes, once you've linked multiple accounts, you can view all of your transactions in one dashboard. The app aggregates data from all your linked accounts, allowing you to see your full transaction history in one place.",
  },
  {
    question: "Can I use this app to send money to someone else?",
    answer:
      "Yes, you can send money to another person if they are linked to the app and have a Dwolla account. Simply initiate a transfer to their bank account via the app.",
  },
  {
    question: "Is this app free to use?",
    answer: "Yes, the app is free to use.",
  },
];
