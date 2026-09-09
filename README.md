# Mukelani Portfolio

The project is split into a React frontend and an Express backend.

## Structure

- `frontend/`: Vite React application, reusable components, pages, styles, and public assets.
- `backend/`: Express API, SQLite database/session configuration, authentication, and protected image uploads.
- `legacy-static/`: preserved pre-React HTML, JavaScript, CSS, and asset copies for reference.

## Development

1. Copy `backend/.env.example` to `backend/.env` and set `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `SESSION_SECRET`.
2. Run `npm install` in the repository root and `npm install --prefix frontend`.
3. Start the API with `npm run server:dev`.
4. Start the React app with `npm run dev`.

The Vite development server runs on `http://localhost:5173` and proxies `/api` and `/uploads` to the backend on port `3000`.

For production, run `npm run build` followed by `npm start`. The backend serves `frontend/dist`.