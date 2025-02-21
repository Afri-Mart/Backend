# Afri-Mart Backend

This is a Node.js/Express backend for an African food marketplace application. Let me walk you through the key components:

## Architecture Overview

The codebase follows a modular architecture with clear separation of concerns:

### 1. API Layer (`/api`)
- **Auth Module**: Handles user authentication and authorization
  - JWT-based authentication
  - Role-based access control (admin, student, instructor roles)
  - Password hashing using bcryptjs
  
- **Items Module**: Manages food items/products
  - CRUD operations for food items
  - Each item has title, price, quantity, and image URL
  
- **Users Module**: Handles user management
  - User creation and retrieval
  - Role management
  - Uses transactions for data integrity when creating users

### 2. Controllers (`/controllers`)
- Separates business logic from routes
- Handles error responses and success states
- Currently implements items-related operations

### 3. Data Layer (`/data`)
- Uses Knex.js as the query builder
- Configurable for different environments (development, testing, production)
- Supports both PostgreSQL and SQLite databases

### 4. Database Schema (`/migrations`)
Two main tables:
1. **Users/Roles Tables** (20220308130032_initial-migration.js)
   - Many-to-one relationship between users and roles
   - Role-based authorization system

2. **Items Table** (20211115082418_items.js)
   - Stores food items with properties like:
     - Title (unique)
     - Price
     - Quantity
     - Image URL

### 5. Seed Data (`/seeds`)
- Includes cleanup utility
- Populates initial roles (admin, student, instructor)
- Creates test users
- Adds sample food items (African dishes like Jollof Rice)

## Key Technical Features

1. **Security**
   - JWT authentication
   - Password hashing
   - Role-based access control
   - Helmet for HTTP security headers

2. **Database**
   - Knex migrations for version control
   - Transaction support
   - Relationship management
   - Data seeding

3. **API Design**
   - RESTful endpoints
   - Middleware for authentication and validation
   - Error handling
   - Response standardization

## Development Features
- Environment configuration using dotenv
- Hot reloading with nodemon
- Database migration and seeding scripts
- ESLint for code quality

This architecture allows for scalability, maintainability, and separation of concerns while providing a secure and efficient API for the frontend application.

## Setup and Running Instructions

### Prerequisites
- Node.js (v12 or higher)
- npm or yarn
- PostgreSQL (for production) or SQLite (for development)

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/Afri-Mart/Backend.git
cd Backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```env
PORT=5001
JWT_SECRET=your_secret_here
NODE_ENV=development
```

4. **Set up the database**
```bash
# Run migrations to create database tables
npm run migrate

# Seed the database with initial data
npm run seed
```

### Running the Application

1. **Development mode** (with hot reload)
```bash
npm run server
```

2. **Production mode**
```bash
npm start
```

The server will start on `http://localhost:5001`

### Available Scripts
- `npm start` - Runs the server in production mode
- `npm run server` - Runs the server with nodemon for development
- `npm run migrate` - Runs database migrations
- `npm run rollback` - Rolls back the last migration
- `npm run seed` - Seeds the database with initial data
- `npm run reset` - Rolls back, migrates, and seeds the database (full reset)

### Testing the API

#### Authentication Endpoints
```bash
# Register a new user
POST http://localhost:5001/api/auth/register
{
    "username": "testuser",
    "password": "password123",
    "role_name": "student"
}

# Login
POST http://localhost:5001/api/auth/login
{
    "username": "testuser",
    "password": "password123"
}
```

#### Items Endpoints
```bash
# Get all items
GET http://localhost:5001/api/items

# Get specific item
GET http://localhost:5001/api/items/:id
```

#### Users Endpoints (Requires Authentication)
```bash
# Get all users (requires auth token)
GET http://localhost:5001/api/users

# Get specific user (requires admin role)
GET http://localhost:5001/api/users/:user_id
```

### Database Reset
If you need to reset the database to its initial state:
```bash
npm run reset
```

### Common Issues and Solutions

1. **Port Already in Use**
If you see `EADDRINUSE` error:
```bash
# Change the port in package.json scripts
"start": "PORT=5002 node index.js",
"server": "PORT=5002 nodemon index.js"
```

2. **Database Connection Issues**
- Ensure PostgreSQL is running (if using PostgreSQL)
- Check database credentials in knexfile.js
- For development, SQLite database will be created automatically

### Project Structure
```
├── api/
│   ├── auth/         # Authentication related files
│   ├── items/        # Items related files
│   ├── users/        # Users related files
│   └── secrets/      # Environment secrets
├── controllers/      # Business logic
├── data/            # Database configuration
├── migrations/      # Database migrations
├── seeds/           # Seed data
└── package.json     # Project dependencies and scripts
```

### Deployment
The application is ready for deployment on platforms like Heroku, AWS, or any Node.js hosting service. Make sure to:
1. Set appropriate environment variables
2. Configure the database connection
3. Run migrations on deployment
4. Set up proper security measures (HTTPS, etc.)
