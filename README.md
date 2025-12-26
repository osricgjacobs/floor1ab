# 🦁 Floor 1AB Portal (WarPride)

## 📌 Overview
The Floor 1AB Portal is a secure, single-page application (SPA) built to serve as the digital headquarters for the 1AB community. It manages leadership data, resident directories, and monthly chronicles, while protecting sensitive floor history via a custom authentication layer.

## ✨ Features

### 🔐 Secure Multi-Tier Access
The portal uses a custom Appwrite-backed authentication system:
* **Guests:** Access to the Home page, Member directory (Shadow Claws/Newcomers), and the Monthly Blog.
* **Thundercats (Members):** Full access to all sections, including the restricted **Floor Awards** page.

### 📰 Dynamic Floor Chronicles
A live blog feed powered by Appwrite.
* Supports rich text content and image hosting.
* Automatically sorts posts by "Newest First" using database indexes.

### 👥 Member Directory
Categorized views for the floor hierarchy:
* **WarPride Leadership:** Highlighted cards for floor heads.
* **Shadow Claws:** Interactive list of general floor members.
* **Newcomers:** A dedicated section for the latest residents.

---

## 🛠️ Technology Stack

* **Frontend:** React.js (Functional Components & Hooks)
* **Backend-as-a-Service:** [Appwrite Cloud](https://appwrite.io/)
* **Styling:** Tailwind CSS (Utility-first CSS)
* **Build Tool:** Vite
* **Icons/Images:** Standard URL mapping and local assets.

---

## ⚙️ Backend Configuration (Appwrite)

### 1. Authentication (Members Table)
**Collection ID:** `members`
| Attribute | Type | Size | Index |
| :--- | :--- | :--- | :--- |
| **Username** | String | 255 | Key Index |
| **Password** | String | 255 | Key Index |

### 2. Database (Blogs Table)
**Collection ID:** `694ea7b80026d5e9f678`
| Attribute | Type | Size | Description |
| :--- | :--- | :--- | :--- |
| **title** | String | 255 | Headline of the post |
| **content** | String | 5000 | Body text |
| **author** | String | 255 | Poster's Username |
| **imgURL** | String | 500 | Image URL |
| **$createdAt**| DateTime| - | Indexed for sorting|

## 🎨 Visual Identity

* **Primary Red:** `#991b1b` (Tailwind `red-800`)
* **Accent Gold:** `#f59e0b` (Tailwind `amber-500`)
* **Dark Base:** `#111827` (Tailwind `gray-900`)

