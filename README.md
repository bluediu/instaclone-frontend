# Instaclone 📷

Instaclone is a photo-sharing social platform inspired by Instagram. It allows users to share their favorite moments, follow others, and engage with content through likes and comments. This project is built with React and demonstrates the implementation of key social media features.

## Features

- **Photo Sharing:** Users can upload and display their favorite images.
- **User Profiles:** View personalized user profiles with photo grids.
- **Follow System:** Follow other users to see their posts in your feed.
- **Likes and Comments:** Interact with posts through likes and comments.
- **Search Functionality:** Find users by their usernames or full names.

## Technologies Used

- **Frontend:** React with modern hooks and components.
- **Styling:** SASS for styling with responsive design.
- **State Management:** Context API for managing global state.
- **Backend API:** Django Rest Framework (DRF) for handling user authentication and data.
- **Database:** PostgreSQL for storing user data, posts, and interactions.
- **Image Hosting:** Cloudinary for managing and hosting images.
- **Authentication:** JWT-based authentication for secure login and session management.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/bluediu/instaclone-frontend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd instaclone
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Start the development server:

   ```bash
   yarn dev
   ```

5. Configure the backend API and database connection as per your requirements.

## Project Structure

```
src/
├── apps/
│   ├── Posts/          # Module for managing posts
│   ├── UI/             # Shared user interface components
│   ├── Users/          # Module for user management (authentication, profiles, etc.)
│       ├── api/        # API services specific to users
│       ├── components/ # Reusable components within the Users module
│       ├── pages/      # Pages related to user functionalities (profiles, settings, etc.)
│       ├── hooks/      # Custom hooks related to user logic
│       ├── context/    # Context providers for user-related state
│       ├── interfaces/ # TypeScript interfaces for user-related types
│       ├── services/   # Business logic and services for users
├── constants/          # Application-wide constants
├── context/            # Global state management using React Context
├── hooks/              # Reusable custom hooks
├── interfaces/         # Global TypeScript interface definitions
├── layouts/            # Layout components like headers, footers, etc.
├── routes/             # Route definitions and navigation structure
├── sass/               # Global and modular SCSS styles
├── shared/             # Components shared across different modules
├── types/              # Global TypeScript type definitions
├── utils/              # Utility functions and helpers
```

## Backend project 🗝️

https://github.com/bluediu/instaclone-backend

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it.

---
