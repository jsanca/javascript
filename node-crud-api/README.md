
# Tasks API

A small learning project built with **Node.js**, **Express**, and **SQLite**.

The goal of this project is to expose a simple REST API with a clean structure that is easy to understand and use as a teaching/example project.

## Stack

- Node.js
- Express
- SQLite
- better-sqlite3
- Nodemon
- Bruno for API request testing

## Project goals

This project was created as a lightweight backend example to show:

- How to create an HTTP API with Express
- How to organize a small backend by layers
- How to persist data with SQLite
- How to implement a simple CRUD for tasks
- How to test endpoints with Bruno

## Current features

The API currently supports:

- Health check endpoint
- Create tasks
- List all tasks
- Get a task by id
- Update a task
- Delete a task

## Project structure

```text
.
├── bruno/
│   └── node-tasks/
├── src/
│   ├── controllers/
│   │   └── taskController.js
│   ├── db/
│   │   ├── database.js
│   │   └── init.js
│   ├── repositories/
│   │   └── taskRepository.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── app.js
│   └── server.js
├── package.json
├── tasks.db
└── README.md
```

## Architecture overview

The code is intentionally organized in small layers:

- **Routes**: define the HTTP endpoints
- **Controllers**: receive the request and build the HTTP response
- **Repositories**: interact directly with SQLite
- **DB**: initializes and exposes the database connection

Request flow:

```text
HTTP Request -> Route -> Controller -> Repository -> SQLite
```

## Installation

Make sure you are using the Node version defined for this project.

```bash
nvm use
npm install
```

## Run the project

Development mode:

```bash
npm run dev
```

Production-like run:

```bash
npm start
```

By default, the server runs on:

```text
http://localhost:3000
```

## Available endpoints

### Health check

```http
GET /health
```

Example response:

```json
{
  "status": "ok"
}
```

### Get all tasks

```http
GET /tasks
```

### Get task by id

```http
GET /tasks/:id
```

### Create task

```http
POST /tasks
Content-Type: application/json
```

Example body:

```json
{
  "title": "Learn Express",
  "description": "Build a small CRUD API"
}
```

### Update task

```http
PUT /tasks/:id
Content-Type: application/json
```

Example body:

```json
{
  "title": "Learn Express",
  "description": "Update the task",
  "done": true
}
```

### Delete task

```http
DELETE /tasks/:id
```

## SQLite notes

This project uses a local SQLite database file:

```text
tasks.db
```

The database table is initialized automatically when the server starts.

## Testing with Bruno

API request examples are available under:

```text
bruno/node-tasks
```

Bruno is used in this project as a lightweight open source alternative to Postman.

## Possible next improvements

Some ideas for future iterations:

- Add request validation middleware
- Add centralized error handling middleware
- Return the updated task in `PUT /tasks/:id`
- Add pagination or filters for `GET /tasks`
- Add TypeScript support
- Add tests
- Add environment-based configuration

## Purpose of this repository

This repository is intentionally simple. It is a small educational backend project designed to be easy to read, easy to run, and easy to extend.