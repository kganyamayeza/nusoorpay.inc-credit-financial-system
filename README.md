# Financial Profiling System

## Overview

This project is a financial profiling system built with TypeScript and Express. It provides a RESTful API for managing user profiles, allowing for the creation, retrieval, updating, and deletion of profiles.

## Instructions to Set Up and Run the Application

1. **Install Dependencies**: Navigate to the project directory in your terminal and run:
   ```
   npm install
   ```

2. **Compile TypeScript**: Ensure TypeScript is installed globally or as a dev dependency. Compile the TypeScript files by running:
   ```
   npx tsc
   ```

3. **Run the Application**: Start the server with the following command:
   ```
   node dist/app.js
   ```

4. **View in Browser**: Open your web browser and navigate to `http://localhost:3000/profiles` to access the profile routes.

## Additional Configuration

- Ensure that your `package.json` includes the necessary scripts for starting the application. You can add a script like this:
  ```json
  "scripts": {
    "start": "node dist/app.js",
    "build": "tsc"
  }
  ```

- In `tsconfig.json`, ensure that the output directory is set to `dist`:
  ```json
  {
    "compilerOptions": {
      "outDir": "./dist",
      ...
    }
  }
  ```

## Logo Attachment

You can attach the company logo in the `README.md` file or serve it through your application if needed, but it is not necessary for running the application.