# RentMyCar

A premium car rental marketplace with a customer-facing site and an agency admin portal.

## Project Structure

```
RentMyCar/
├── Client/     → Next.js 16 (App Router, TypeScript, Tailwind CSS 4)
├── Server/     → FastAPI (Python, SQLAlchemy, PostgreSQL)
└── Readme.md
```

The repository contains two separate applications:

| App     | Stack                                             | Purpose                          |
|---------|---------------------------------------------------|----------------------------------|
| Client  | Next.js 16, React 19, TypeScript, Tailwind CSS 4  | Customer UI + agency admin portal |
| Server  | FastAPI, SQLAlchemy, PostgreSQL                   | REST API + user authentication    |

## Features

- **Customer site**: home page with hero, search card, feature highlights and car assets.
- **Agency portal**: dashboard, add vehicle, revenue, and status pages with a sidebar and a revenue chart (recharts).
- **User authentication**: registration and login endpoints with hashed passwords (`pwdlib.PasswordHash`).

## Tech Stack

### Client
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

### Server
- FastAPI
- SQLAlchemy
- PostgreSQL
- Pydantic (pydantic-settings)

## Getting Started

### Client

```bash
cd Client
npm install
npm run dev
```

### Server

```bash
cd Server
# set up your .env with DATABASE_URL
uvicorn main:app --reload
```

## Notes

- The project was migrated from Vite + React to Next.js App Router (see `MIGRATION_GUIDE.md`).
- The `.env` file should not be committed to version control; rotate any credentials that have been exposed.

hello yash bhai tabish bhai