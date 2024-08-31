# Tasty Trails

[![Frontend React](https://img.shields.io/badge/frontend-react-%2361DAFB?logo=react&logoColor=white)](https://reactjs.org/) [![UI shadcn/ui](https://img.shields.io/badge/ui-shadcn%2Fui-%23000000)](https://ui.shadcn.com/) [![Styling Tailwind CSS](https://img.shields.io/badge/styling-tailwind%20css-%2338B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) [![Authentication Auth0](https://img.shields.io/badge/authentication-auth0-%23EB5424?logo=auth0&logoColor=white)](https://auth0.com/) [![Backend Node.js](https://img.shields.io/badge/backend-node.js-%23339933?logo=node.js&logoColor=white)](https://nodejs.org/) [![Database MongoDB](https://img.shields.io/badge/database-mongodb-%234ea94b?logo=mongodb&logoColor=white)](https://www.mongodb.com/) [![Language TypeScript](https://img.shields.io/badge/language-typescript-%23007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Containerization Docker](https://img.shields.io/badge/containerization-docker-%230db7ed?logo=docker&logoColor=white)](https://www.docker.com/) [![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/)  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

Tasty Trails is a user-friendly platform connecting users with Manchester and London restaurants. It provides powerful management tools for restaurant owners and administrators while ensuring a seamless ordering experience for customers.

## Table of Contents
- [Description](#description)
- [Target Audience](#target-audience)
- [Why It Was Built](#why-it-was-built)
- [Features](#features)
- [Tech Stack](#tech-stack)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Development Tools](#development-tools)
  - [DevOps](#devops)
- [Deployment](#deployment)
- [Installation and Setup](#installation-and-setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Running with Docker (Optional)](#running-with-docker-optional)
  - [Accessing the Application](#accessing-the-application)
- [Contribution](#contribution)
- [License](#license)
- [Contact](#contact)


## Description
Tasty Trails allows users to discover and order from restaurants in Manchester and London. Restaurant owners can manage their cuisines and menus intuitively, while customers enjoy a smooth ordering process with secure payments.

## Target Audience
- Food enthusiasts in Manchester and London
- Restaurant owners looking to expand their online presence
- Busy professionals seeking convenient food ordering options

## Why It Was Built
To create a user-friendly platform that bridges the gap between local restaurants and hungry customers, while providing powerful management tools for restaurant owners and administrators.

## Features

- **City-Based Restaurant Search**: Search for restaurants in Manchester and London.
- **Search Options**: Search by cuisine or restaurant name to find exactly what you're craving.
- **Filter Options**: Filter by cuisine to narrow down your choices.
- **Sorting**: Sort search results by best match, delivery price, or estimated delivery time.
- **Pagination**: Easily browse through search results with paginated listings.
- **User Authentication**: Register, log in, and manage your profile securely.
- **Manage Restaurant**: 
  - Create and manage your restaurant's profile.
  - Edit restaurant details, including name, address, and contact information.
  - Select the cuisine types your restaurant serves.
  - Customize your restaurant's menu by adding item names, prices, and descriptions.
  - Upload images for your restaurant's listings.
- **Manage Cart**: Add items to your cart and proceed to a secure checkout with Stripe integration.
- **Admin Dashboard**: Manage and edit your restaurant's settings through an intuitive admin dashboard.
- **Responsive Design**: Access Tasty Trails from any device for a seamless experience across all platforms.
## Tech Stack

### Frontend
- **Framework**: [React](https://reactjs.org/) (JavaScript library for building user interfaces)
- **Build Tool**: [Vite](https://vitejs.dev/) (Next generation frontend tooling)
- **UI Libraries**: 
  - [Radix UI](https://www.radix-ui.com/) (Unstyled, accessible component primitives)
  - [shadcn/ui](https://ui.shadcn.com/) (Re-usable components built with Radix UI and Tailwind CSS)
  - [Lucide React](https://lucide.dev/) (Beautiful & consistent icon toolkit)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS framework)
- **State Management**: [React Query](https://tanstack.com/query/latest/) (Powerful data synchronization for React)
- **Routing**: [React Router](https://reactrouter.com/) (Declarative routing for React)
- **Animations**: [React Confetti](https://www.npmjs.com/package/react-confetti) (Confetti celebration effects)
- **Forms**: [React Hook Form](https://react-hook-form.com/) (Performant, flexible and extensible forms)
- **Authentication**: [Auth0 React SDK](https://auth0.com/docs/libraries/auth0-react) (Auth0 authentication for React apps)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) (An opinionated toast component for React)
- **Validation**: [Zod](https://github.com/colinhacks/zod) (TypeScript-first schema validation with static type inference)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/) (JavaScript runtime built on Chrome's V8 JavaScript engine)
- **Framework**: [Express](https://expressjs.com/) (Fast, unopinionated, minimalist web framework for Node.js)
- **Database**: [MongoDB](https://www.mongodb.com/) (Document-based, distributed database)
- **ODM**: [Mongoose](https://mongoosejs.com/) (MongoDB object modeling for Node.js)
- **Authentication/Authorization**: 
  - [express-oauth2-jwt-bearer](https://www.npmjs.com/package/express-oauth2-jwt-bearer) (Validate JWTs and scope claims)
  - [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) (JSON Web Token implementation)
- **Environment Management**: [Dotenv](https://github.com/motdotla/dotenv) (Loads environment variables from .env file)
- **Middleware**: 
  - [CORS](https://expressjs.com/en/resources/middleware/cors.html) (Cross-Origin Resource Sharing)
  - [express-session](https://github.com/expressjs/session) (Session middleware)
  - [connect-mongo](https://github.com/jdesboeufs/connect-mongo) (MongoDB session store for Connect and Express)
- **File Management**: 
  - [Multer](https://github.com/expressjs/multer) (Middleware for handling multipart/form-data)
  - [Cloudinary](https://cloudinary.com/) (Cloud service for image and video management)
- **Validation**: [express-validator](https://express-validator.github.io/) (Set of express.js middlewares for validation and sanitization)
- **Payment Processing**: [Stripe](https://stripe.com/) (Online payment processing for internet businesses)

### Development Tools
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Typed superset of JavaScript)
- **Hot Reloading**: [Nodemon](https://nodemon.io/) (Automatically restarts Node.js server)
- **API Testing**: [Postman](https://www.postman.com/) (Designing and testing APIs)
- **Payment Testing**: [Stripe CLI](https://stripe.com/docs/stripe-cli) (Testing Stripe integrations)

### DevOps
- **Version Control**: [Git](https://git-scm.com/) (Distributed version control system for tracking changes in source code)
- **Package Manager**: [Yarn](https://yarnpkg.com/) (Fast and secure dependency management for JavaScript projects)
- **Containerization**: [Docker](https://www.docker.com/) (Platform for building, shipping, and running applications in isolated containers)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions) (Automated workflows for continuous integration and deployment)

## Deployment
- **Frontend**: [Render](https://render.com/) (Cloud platform for static site and frontend app hosting)
- **Backend**: [Render](https://render.com/) (Deployed separately, see [Backend Repository](https://github.com/ValentineOO/TastyTrails-backend) for details)

## Installation and Setup

To set up and run the Tasty Trails project locally, follow these steps:

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v20.11.1 or higher)
- [Yarn](https://yarnpkg.com/) (or [npm](https://www.npmjs.com/))
- [TypeScript](https://www.typescriptlang.org/) (v5.2.0 or higher)
- [Docker](https://www.docker.com/) (for containerization, optional but highly recommended)

### Backend Setup

 1. Clone the repository:
   ```bash
   git clone https://github.com/ValentineOO/TastyTrails-backend.git
   ```
  
2. Navigate to the backend directory:

    ```
    cd backend
    ```
    1. Install the backend dependencies:
    ```
    yarn install
    ```
    2. Create a .env file based on the .env.example:
    ```
    cp .env.example .env
    ```
    3. Update the .env file with your local environment variables, such as database connection details.
    
    4. Start the server.
    ``` 
    yarn dev
    ```
     ### Frontend Setup
    1. Clone the repository:
   ``` bash
   git clone https://github.com/ValentineOO/TastyTrails-Frontend.git
   ```
   
    2. Navigate to the frontend directory:
    ```
    cd frontend
    ```
    3. Install the frontend dependencies:
    ```
    yarn install
    ```
    4. Create a .env file based on the .env.example:
    ```
   cp .env.example .env
    ```
    5. Update the .env file with your local environment variables, such as API endpoints.
    
    6. Start the frontend development server:
    ```
    yarn dev
    ```
    This will start the frontend server on http://localhost:5173.

4. Running with Docker (Optional)
    1. Ensure Docker is installed and running on your machine.
    2. Build and run the Docker containers:
    
    ```
    docker-compose up --build
    ```
5. Accessing the Application
- Frontend: Open http://localhost:5173 in your browser.
- Backend: The API will be running on http://localhost:8000.

Following these steps, you should have the Tasty Trails project running locally. If you encounter any issues, refer to the documentation or reach out for help and I'll respond whenever I can.

## Contribution
Contributions are welcome! If you have suggestions for new features, bug fixes, or improvements, please follow the steps below:

1. Fork the appropriate repository (frontend or backend) based on the changes you want to make.
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a pull request against the corresponding repository

Please follow the coding style guidelines and update tests as needed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, feel free to reach out:

- Email: [valoladimeji@gmail.com](mailto:valoladimeji@gmail.com)
- LinkedIn: [https://www.linkedin.com/in/valentineoo/](https://www.linkedin.com/in/valentineoo/)
- GitHub: [https://github.com/ValentineOO](https://github.com/ValentineOO)
