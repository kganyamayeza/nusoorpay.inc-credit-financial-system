# Nusoor Inc. Financial Profiling System

## Overview
Nusoor Inc. is developing a comprehensive financial profiling system that allows users to manage their financial profiles effectively. This application provides functionalities for creating, updating, retrieving, and deleting financial profiles, along with calculating savings and managing user authentication.

## Project Structure
The project is organized into several directories and files, each serving a specific purpose:

- **src/**: Contains the main application code.
  - **app.ts**: Entry point of the application.
  - **config/**: Configuration files for the application.
    - **database.ts**: Database connection configuration using Prisma.
  - **controllers/**: Contains the logic for handling requests.
    - **profileController.ts**: Manages CRUD operations for financial profiles.
  - **models/**: Defines the data models.
    - **financialProfile.ts**: Represents the structure of a financial profile.
  - **routes/**: Defines the API routes.
    - **profileRoutes.ts**: Sets up routes for financial profile operations.
  - **services/**: Contains business logic.
    - **profileService.ts**: Manages financial profile operations.
  - **middlewares/**: Contains middleware functions.
    - **authMiddleware.ts**: Handles user authentication.
  - **types/**: Defines TypeScript interfaces.
    - **index.ts**: Contains type definitions used throughout the application.
  
- **prisma/**: Contains the Prisma schema.
  - **schema.prisma**: Defines the database schema and relationships.

- **scripts/**: Contains scripts for database operations.
  - **seed.ts**: Seeds the database with initial data.

- **tsconfig.json**: TypeScript configuration file.

- **package.json**: NPM configuration file.

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd nusoor-financial-profiling
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Database**
   - Ensure you have a database set up and update the connection details in `src/config/database.ts`.
   - Run the Prisma migrations to set up the database schema:
   ```bash
   npx prisma migrate dev
   ```

4. **Seed the Database**
   - To populate the database with initial data, run:
   ```bash
   npx ts-node scripts/seed.ts
   ```

5. **Run the Application**
   ```bash
   npm start
   ```

## Usage
- The API provides endpoints for managing financial profiles. You can create, retrieve, update, and delete profiles using the defined routes.
- Ensure to include authentication tokens in requests that require user authentication.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.