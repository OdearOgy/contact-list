# Contact List

Simple crud app with React + Ts (tailwind, tanstack - router, query, form)

## Getting Started

Follow these steps to set up the project locally.

### 1. Clone the Repository

```bash
git clone git@gitlab.com:OdearOgy/contact-list.git
```

### 2. Install Dependencies

Install node modules.

```bash
 npm install

```

### 3. Configure the Database File

Create a `db.json` file in the `/public` folder and add the following content:

```json
{
  "users": [
    {
      "id": 1,
      "name": "Jon Doe",
      "phone": 1213124
    }
  ]
}
```

This file will act as the database for the json-server.

### 4. Configure Environment Variables

Create a `.env.local` file in the root of the project and set the VITE_API_URL variable. This variable will be used to define the base URL for the API.

```bash
VITE_API_URL="http://localhost:3000"
```

### 5. Run JSON Server

Start the json-server with the following command:

```bash
npx json-server --watch db.json --port 3000
```

### 6. Run the app

start app by using

```bash
npm run dev
```

## General Structure

- The structure is feature-based, meaning each major feature (e.g., `contacts`) is self-contained, including its components, queries, and styles.
- Pages and routes are neatly organized in the `pages/` directory.

## TODO

- [*] Initialize the repo
- [*] Create the app using vite and react.ts template
- [*] Install and configure tailwind
- [*] Install tanstack (form, query, router) + zod
- [*] Configure tanstack-router
- [*] Configure tanstack-form + zod
- [*] Configure tanstack-query + JSONplaceholder
- [*] Create app ui
  - [*] create sidebar
  - [*] create contact details
  - [*] add contact creation modal
  - [*] add contact edit modal
  - [*] add contact deletion modal
