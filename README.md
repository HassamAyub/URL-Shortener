# Project Documentation: URL Shortener System
# Project Objective:
The main goal of this project is to provide a web application where users can sign up, sign in, and shorten URLs. The shortened URLs can be managed by the user, with options to view all shortened URLs, and track the number of clicks each shortened URL receives. The application will be developed using Node.js, Express.js, EJS (Embedded JavaScript), MongoDB, and will be developed in Visual Studio Code.

# Table of Contents
Project Overview
Technology Stack
Functional Requirements
Non-Functional Requirements
API Endpoints
Database Design
Frontend Overview
Setup and Installation
NPM Libraries
Future Enhancements
# 1. Project Overview
This project provides users with an intuitive platform to create shortened URLs. The system includes user authentication (signup/signin), URL shortening functionality, and a dashboard to track all shortened URLs along with their click counts.

# Key Features:
User Authentication: Signup and signin functionality using local authentication.
URL Shortening: Allow users to input a long URL, which the system will then shorten.
URL Management: Users can view a list of their shortened URLs.
Click Tracking: Track how many times each shortened URL has been clicked.

# 2. Technology Stack
Backend:
Node.js: Server-side runtime environment.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database for storing user information and shortened URLs.

Frontend:
EJS (Embedded JavaScript): Template engine for generating dynamic HTML pages.

Development Tools:
Visual Studio Code: Development environment.

# 3. Functional Requirements
3.1 User Authentication
Signup: New users can register by providing an email and password.
Signin: Existing users can log in with their credentials.
Session Management: Maintain user sessions during their time on the platform.
3.2 URL Shortening
Input URL: User inputs a long URL.
Generate Shortened URL: The system generates a unique, shortened URL.
Store URL: The original and shortened URLs are stored in the database.
3.3 URL Management
View Shortened URLs: Users can see all their shortened URLs.
Click Tracking: Each shortened URL has an associated click count that increments every time the shortened link is clicked.

# 4. Non-Functional Requirements
Security: The system should ensure that user passwords are securely hashed and user sessions are properly managed.
Performance: The system should be capable of handling multiple URL shortening requests efficiently.
Scalability: The system should be designed to handle an increasing number of users and shortened URLs.

# 5. API Endpoints
5.1 Authentication Endpoints
POST /signup: Register a new user.
Input: email, password
Output: Success or failure message.
POST /signin: Authenticate an existing user.
Input: email, password
Output: Success message, user session.
5.2 URL Shortening Endpoints
POST /shorten: Shorten a given URL.
Input: originalUrl
Output: shortenedUrl
5.3 URL Management Endpoints
GET /urls: Fetch all shortened URLs for a user.
Output: List of original and shortened URLs, click counts.
GET /urls/
: Redirect the shortened URL to the original URL and increment the click count.
Input: shortUrl
Output: Redirect to the original URL.

# 6. Database Design
Collections:

Users
Fields:
_id: User ID (ObjectId)
email: User email
password: Hashed password
urls: Array of URLs shortened by the user

URLs
Fields:
_id: URL ID (ObjectId)
originalUrl: The original long URL
shortenedUrl: The generated shortened URL
clicks: Number of clicks on the shortened URL
userId: ID of the user who created the shortened URL (Foreign Key)

# 7. Frontend Overview
The frontend will be developed using EJS for server-side rendering. This will allow dynamic content to be displayed on the following pages:

Signup/Signin Pages: Forms for user registration and login.
Dashboard: Displays all of the user's shortened URLs and their associated click counts.
URL Input Form: A form for submitting a long URL to be shortened.

# 8. Setup and Installation
Prerequisites:
Node.js and npm
MongoDB
Visual Studio Code

Steps:
Clone the Repository:
bash
Copy code
git clone <repository-url>
Install Dependencies: Navigate to the project directory and install the necessary dependencies:

bash
Copy code
npm init
Set up Environment Variables: Create a .env file to store database connection strings and other sensitive data:
makefile
Copy code
PORT=3000
MONGO_URI=<your-mongodb-connection-string>
SESSION_SECRET=<your-session-secret>

Run the Application: Start the server using:
bash
Copy code
npm start
The application will be available on http://localhost:3000.

# 9. NPM Libraries
Here are the key npm libraries used in this project:

Express.js: A fast, unopinionated, minimalist web framework for Node.js.

Installation: npm install express

Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
Installation: npm install mongoose

EJS (Embedded JavaScript Templates): A template engine for rendering dynamic content on web pages.
Installation: npm install ejs

bcrypt.js: For password hashing and securing user credentials.
Installation: npm install bcryptjs

express-session: Middleware to manage user sessions.
Installation: npm install express-session

connect-mongo: MongoDB session store for Express sessions.
Installation: npm install connect-mongo

dotenv: Loads environment variables from a .env file into process.env.
Installation: npm install dotenv

shortid: A unique ID generator used for creating shortened URLs.
Installation: npm install shortid

10. Future Enhancements
Social Media Sharing: Allow users to directly share their shortened URLs on social media platforms.
Custom URL Aliases: Enable users to create custom names for their shortened URLs.
Analytics Dashboard: Provide more detailed analytics, such as the geographic location of clicks, device types, etc.
API Access: Expose an API for third-party integration to programmatically shorten URLs.
This documentation outlines the main objectives, design, npm libraries, and implementation details for the URL Shortener project.