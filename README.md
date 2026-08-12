# Dhilipkumar — MERN Portfolio

Full-stack portfolio site built with MongoDB, Express, React (Vite + Tailwind), and Node.js.

## Structure

```
Mern-portfolio/
├── backend/     Express API + Mongoose models + seed script
└── frontend/    React (Vite) + Tailwind UI
```

## Setup

### 1. MongoDB

Have MongoDB running locally (`mongodb://127.0.0.1:27017`) or set `MONGO_URI` in `backend/.env` to an Atlas connection string.

### 2. Backend

```bash
cd backend
npm install
cp .env.example .env      # edit if needed
npm run seed               # populates the database with profile/skills/projects
npm run dev                 # starts API on http://localhost:5000
```

### 3. Frontend

```bash
cd frontend
npm install
cp .env.example .env      # edit VITE_API_URL if backend runs elsewhere
npm run dev                 # starts app on http://localhost:5173
```

## API Endpoints

| Method | Route             | Description                    |
|--------|--------------------|--------------------------------|
| GET    | /api/profile        | Get profile/about/stats/contact |
| PUT    | /api/profile        | Update profile                 |
| GET    | /api/skills          | List skills                    |
| POST   | /api/skills          | Add skill                      |
| GET    | /api/projects        | List projects                  |
| POST   | /api/projects        | Add project                    |
| GET    | /api/experience      | List experience entries        |
| POST   | /api/contact          | Submit contact form            |
| GET    | /api/contact          | List contact messages          |

## Notes

- All portfolio content (name, about, skills, projects, stats, contact info) lives in MongoDB and is edited via the seed script or the API — nothing is hardcoded in the UI.
- The contact form saves messages to the `contacts` collection. Wire up an email service (e.g. Nodemailer) in `backend/routes/contact.js` if you also want email notifications.
- Update `backend/seed/seed.js` with your real project links, resume URL, and avatar image, then re-run `npm run seed`.
