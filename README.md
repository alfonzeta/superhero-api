
# Humble Superhero API

## Overview

This project is a Humble Superhero API that allows users to add new superheroes with their name, superpower, and humility score, and fetch the list of superheroes ordered by their humility score in descending order. 

The project is available at www.alfzatech.com
The swagger documentation is available at www.alfzatech.com/documentation 


## Objective

The objective of this project is to create a simple API that lets users:

-   Add a new superhero, specifying their name, superpower, and a "humility score" (e.g., a rating out of 10 that shows how humble they are).
-   Fetch the list of superheroes, ordered by their humility score in descending order.

In addition to fulfilling the core requirements, the project is also an opportunity for me to showcase my skills and stand out during the assessment. To demonstrate my capabilities, I’ve included several extra features that go beyond the initial scope of the task, adding "bells and whistles" to highlight my proficiency in various areas. These include:

-   Dockerizing the project and integrating it with a PostgreSQL database using Prisma ORM.
-   Implementing Domain-Driven Design (DDD) and dependency injection to structure the project more robustly.
-   Adding Swagger documentation for an interactive API interface.
-   Writing unit tests using Jest to ensure the reliability of key features.
-   Developing a small React frontend to enable real-time interaction with the API.
- Deploying everything in a cloud provider under my own domain name.

By incorporating these additional elements, I aim to provide a more comprehensive, scalable, and professional solution while demonstrating my ability to approach a task from multiple angles.

## Branches
Durint this assessment, I decided to move forward with each task in different branches. In total there are 6 branches. I created them as long as I was adding functionality to the project. 

### 1. **main**

-   **Description**: This branch contains the most straightforward implementation of the Humble Superhero API. There is no connection to a database, and instead, superhero data is managed in memory using a simple array.
-   **Purpose**: The goal of this branch is to demonstrate a quick, minimal working solution for adding and retrieving superheroes. The routing and endpoint logic are handled in a single `index.ts` file, making it easy to follow for those who want to understand the basic mechanics of the API without complex setup.

### 2. **docker-prisma**

-   **Description**: In this branch, the project is Dockerized to provide a more production-like environment and connected to a PostgreSQL database using Prisma ORM. The API endpoints are now integrated with the database, allowing superheroes to be stored and retrieved persistently.
-   **Purpose**: The objective here is to improve the project’s scalability and ensure that the superhero data is stored in a relational database, making it more suitable for real-world applications. Docker also simplifies deployment and ensures that the development environment is consistent across different setups.

### 3. **ddd-arch**

-   **Description**: This branch adopts a Domain-Driven Design (DDD) approach, with the project structure organized around business domains and entities. Dependency injection is introduced to manage service dependencies and ensure a flexible, maintainable architecture.
-   **Purpose**: This branch showcases a more complex and structured approach, highlighting the use of DDD and dependency injection to promote separation of concerns, testability, and scalability. It’s designed to demonstrate how the API can evolve into a more robust and modular system, even if it may be seen as overengineering for a small task.

### 4. **testing**

-   **Description**: This branch adds Jest-based unit tests to ensure that key functionalities of the API work correctly. Specifically, the tests focus on the "POST new superhero" use case to verify that superheroes can be successfully added to the system.
-   **Purpose**: The aim of this branch is to fulfill the requirement for testing while also improving the reliability of the application. Unit tests help catch bugs early in the development process and ensure that the logic behind superhero creation functions as expected.

### 5. **swagger**

-   **Description**: Swagger documentation is integrated into the API in this branch, providing an interactive interface for users to explore and test the API endpoints. The API documentation can be accessed at [alfzatech.com/documentation](http://alfzatech.com/documentation).
-   **Purpose**: The addition of Swagger not only improves the user experience for developers interacting with the API but also serves as a valuable tool for testing and understanding how the endpoints work. The goal is to make the API self-explanatory and easy to use for anyone who needs to consume it.

### 6. **front**

-   **Description**: In this branch, a small React frontend is created to interact with the API. It allows users to add new superheroes and view the sorted list of superheroes in real-time, reflecting any updates made to the backend data.
-   **Purpose**: The goal of this branch is to provide a user-friendly interface to interact with the backend. By creating a simple React frontend, the project demonstrates how a full-stack application can function, giving users a visual representation of the superhero data sorted by humility score.

## Requirements

### Backend

-   **Framework**: The backend is built using Fastify, a Node.js framework.
-   **Database**: The superhero data is stored in a PostgreSQL database using Prisma ORM.
-   **Endpoints**:
    -   `POST /superheroes`: Add a new superhero (name, superpower, and humility score required).
    -   `GET /superheroes`: Fetch the list of superheroes sorted by humility score.

### Frontend

-   **Framework**: The frontend is built using React with TypeScript.
-   **Functionality**: Users can add superheroes and see the sorted list in real-time.

## Bonus Points

-   **Validation**: Validation is added to ensure the humility score is a number between 1 and 10.
-   **Testing**: Jest is used to write tests for the  CreateHeroUseCase.

## Backend

### Endpoints

-   **POST /superheroes**: Adds a new superhero.
-   **GET /superheroes**: Fetches the list of superheroes sorted by humility score.

### Validation

-   The  superhero_name  cannot be empty.
-   The  superpower  must be at least 10 characters long.
-   The  humility_score  must be between 0 and 10.

### Testing
![image](https://github.com/user-attachments/assets/4b84c92c-3eb3-4e3b-b821-0d6a9b217aae)

-   Jest is used to write tests for the  CreateHeroUseCase.

## Frontend

### Components

-   **HeroForm**: A form to add new superheroes.
-   **HeroList**: A list to display superheroes sorted by humility score.

### Functionality

-   Users can add superheroes and see the sorted list in real-time.

## If I Had More Time

If I had more time, I would:

-   Add more comprehensive tests for all endpoints and use cases.
-   Implement user authentication and authorization.
-   Add more detailed error handling and logging.
-   Improve the frontend UI/UX with better styling and user feedback.

## Collaboration

To collaborate with a teammate, I would:

-   Use Git for version control and create feature branches for new features.
-   Conduct code reviews to ensure code quality and share knowledge.
-   Use a project management tool like Jira or Trello to track tasks and progress.


## Conclusion

This project reflects the values of collaboration, humility, and a drive to create extraordinary experiences. I hope this solution demonstrates my technical skills, eagerness to learn, and ability to work as a team player. Thank you for the opportunity to work on this challenge.
