# <img src="https://i.ibb.co/HpqKHdv4/logo.png" width="60" title="Planto"> Planto — Server API

A simple, robust Express.js REST API for the [Planto Plant Care Tracker](https://green-3f4f3.web.app/).  
This backend handles plant CRUD operations, user data segregation, and serves as the backbone for all plant management features in Planto.

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (NoSQL)
- **ODM:** Native MongoDB Driver (no Mongoose)
- **Authentication:** Client-side (Firebase Auth)
- **Deployment:** Vercel, Render, or traditional Node hosting

---

## 🚀 API Endpoints

All endpoints expect/return JSON unless specified otherwise.  
**Base URL:** `https://<your-server-domain>` (or `http://localhost:3000` in dev)

| Method | Endpoint                   | Description                              |
| ------ | -------------------------- | ---------------------------------------- |
| POST   | `/plant`                   | Add a new plant                          |
| GET    | `/`                        | Get all plants                           |
| GET    | `/plants?sort=<level>`     | Get plants by care-level                 |
| GET    | `/latest-plants`           | Get latest 6 added plants                |
| GET    | `/my-plants/:email`        | Get plants added by a specific user      |
| GET    | `/plant/:id`               | Get single plant by ID                   |
| PUT    | `/plant/:id`               | Update plant by ID                       |
| DELETE | `/plant/:id`               | Delete plant by ID                       |

### 🔑 Example Plant Object

```json
{
  "name": "Snake Plant",
  "species": "Sansevieria trifasciata",
  "photo": "https://i.ibb.co/xyz123/snake-plant.jpg",
  "last_watered": "2024-06-25",
  "watering_fequency" : "2",
  "next_watering" : "2024-06-25",
  "health_status" : "healthy",
  "care-level": "easy",
  "Description": "Sanseviera are extremely robust houseplants that thrive in most indoor settings. They grow upright and eventually reach a maximum height of ~1m. Snake plants do not have spines or thorns, but the tips of the leaves can be sharp",
  "userEmail": "user@example.com",
  "createdAt": "2024-06-25T14:23:00.000Z"
}

```
### ⚡ Getting Started

```bash
## 1. Clone & Install

git clone https://github.com/monishaRema/Planto-server.git
cd Planto-server
npm install

## Setup Environment Variable

PORT=3000
DB_USER=your_mongodb_user
DB_PASS=your_mongodb_password


## Start Server 

npm start
# Or, for development with auto-reload:
npm run dev

```
Server runs at http://localhost:3000 by default.