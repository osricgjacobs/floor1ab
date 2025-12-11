# 🦁 Floor 1AB Portal (WarPride)

## 📌 Overview

The Floor 1AB Portal is a single-page application (SPA) built with React and Tailwind CSS. It serves as the official digital hub for the Floor 1AB community, showcasing the floor's leadership, members, and annual awards.

The application uses state-based navigation (without React Router) to provide a smooth, fast user experience, and features a distinctive visual theme based on the iconic **ThunderCats** color scheme (Red, Gold/Amber, and Black/Grey).

## ✨ Features

* **State-Based Navigation:** Fast, seamless switching between sections without page reloads.
* **Three Main Sections:**
    * **Home:** General floor information and pictures.
    * **Members:** Dedicated sections for **Leadership (WarPride)**, **General Members (Shadow Claws)**, and **Newcomers**.
    * **Floor Awards:** Displays the annual floor awards, categorized alongside placeholders for weekly awards.
* **Data Separation:** Uses dedicated JavaScript files to cleanly manage Leader, General Member, and Newcomer data.
* **Themed Design:** Implements a custom color palette using Tailwind CSS to match the specified vibrant Red and Gold/Amber theme.

## 🛠️ Technology Stack

* **Frontend:** React (functional components and hooks)
* **Styling:** Tailwind CSS (utility-first framework)
* **Language:** JavaScript (ES6+)

## 🚀 Getting Started

### Prerequisites

You need **Node.js** and **npm** (or Yarn/pnpm) installed on your machine.

### Installation

1.  **Clone the Repository:**
    ```bash
    git clone [Your Repository URL]
    cd [Your Project Directory]
    ```

2.  **Install Dependencies:**
    Since this project uses Tailwind CSS, ensure all necessary dependencies (React, Tailwind, PostCSS, Autoprefixer) are installed.
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Ensure File Structure:**
    Verify that your data files are correctly placed within the `src/data` folder:
    ```
    src/
    ├── components/
    │   ├── App.jsx
    │   ├── Members.jsx
    │   └── ...
    └── data/
        ├── leaderData.jsx
        ├── memberData.js
        └── newcomerData.js  (Needs to be created/populated)
    ```

### Running the App

Start the development server:

```bash
npm start
# or
yarn start