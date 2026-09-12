# 🎁 VELOOP Rewards — Giveaway Page

A modern, responsive and premium **Giveaway & Rewards experience** built for VELOOP Rewards.

The project focuses on creating a trustworthy and engaging giveaway platform where users can explore active giveaways, view prizes, check winners, and participate through a clear user journey.

## 🚀 Live Demo

Add your deployed project URL here:

`https://your-project-url.vercel.app`

## 📌 Features

* 🎁 Giveaway Hero Section
* 🏆 Featured Giveaways
* 💰 Giveaway Statistics
* ⏳ Live Countdown Timer
* 🎯 Prize Cards
* 👥 Winners Section
* 🥇 Previous Winners
* 📋 Giveaway Rules
* ❓ FAQ Section
* 🔐 Trust & Security Section
* 📱 Fully Responsive Design
* ✨ Modern fintech-inspired UI
* 🧩 Reusable React Components
* 🔄 API-ready mock giveaway data
* 🚀 Navigation to individual giveaway detail pages

## 🛠️ Tech Stack

* React.js
* Vite
* JavaScript
* Bootstrap
* CSS Modules
* React Hooks
* React Router
* Lucide React Icons

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── giveawayHero/
│   ├── giveawayStats/
│   ├── prizeCard/
│   ├── featuredGiveaways/
│   ├── howToParticipate/
│   ├── winnerSlider/
│   ├── winnersTabs/
│   ├── winnerCard/
│   ├── previousWinnerCard/
│   ├── prizeClaimModal/
│   ├── giveawayRules/
│   ├── faq/
│   ├── trustSection/
│   └── countdown/
│
├── data/
│   └── giveawayData.js
│
├── pages/
│   ├── GiveawayHome.jsx
│   └── GiveawayDetails.jsx
│
├── App.jsx
└── main.jsx
```

## 🎨 Design Approach

The UI is designed with a **premium fintech/rewards platform style** instead of a casino-like giveaway design.

The design focuses on:

* Clean layouts
* Strong visual hierarchy
* Trustworthy colors
* Clear CTA buttons
* Minimal gradients
* Responsive cards
* Easy-to-understand prize information
* Smooth user navigation

## 🔄 User Journey

```text
Giveaway Home
      ↓
View Prize
      ↓
Click "Join Now"
      ↓
Giveaway Details Page
      ↓
View Rules & Eligibility
      ↓
Join Giveaway
      ↓
Participation Confirmation
      ↓
Winner Announcement
      ↓
Claim Prize
```

## 🎁 Giveaway Status

The application supports different giveaway states:

### ACTIVE

Giveaway is currently available for participation.

### UPCOMING

Giveaway has not started yet.

### ENDED

Giveaway has finished and winners can be displayed.

## 🏆 Prize Examples

Example prizes used in the application:

* iPhone 15 Pro
* Apple Watch
* AirPods
* Amazon ₹2,000 Gift Card
* Amazon ₹500 Gift Card
* Amazon ₹20 Reward

## 📊 Giveaway Data

The giveaway data is structured in an API-friendly format so that it can easily be replaced with real backend APIs in the future.

Example:

```js
{
  id: "giveaway-001",
  title: "Win iPhone 15 Pro",
  status: "ACTIVE",
  endDate: "2026-09-30",
  prizes: [],
  participants: 8500
}
```

## 📱 Responsive Design

The interface is designed to work across different screen sizes:

* Mobile: 320px+
* Tablet
* Laptop
* Desktop
* Large screens up to 1920px

## ⚙️ Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project:

```bash
cd veloop-giveaway
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will run on the local Vite development server.

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🔮 Future Improvements

The frontend is structured to support future backend integration.

Possible improvements include:

* Node.js & Express backend
* MongoDB database
* JWT authentication
* Real giveaway participation
* One participation per user
* Transaction and audit tracking
* Fraud detection
* Real-time winner updates
* Prize claim processing
* Email notifications
* Admin giveaway management
* Real-time participation statistics

## 👨‍💻 Developer

**Nikkey Kumar**

MERN Stack Developer — Fresher / Entry-Level

GitHub: `https://github.com/nikkeykumar`

LinkedIn: `https://linkedin.com/in/nikkey-prajapati-9762b326`

## 📄 License

This project was developed as part of an internship/learning project for VELOOP Rewards.
