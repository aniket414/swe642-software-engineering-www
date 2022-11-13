# Assignment 3: Angular Front End Survey Form with Spring Boot Backend REST API

The project is done using Angular, Spring Boot, RDS and AWS

Steps:

1. Write REST API for GET and POST using Spring Boot framework on Spring Tool Suite 4.
    > GET api/v1.0/surveys
    >
    > POST api/v1.0/surveys
    ```json
        {
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@mail.com",
            "address": "9155 Walnut St",
            "city": "New York",
            "state": "NY",
            "zip": "22031",
            "telephone": "8888888888",
            "dateOfSurvey": "04-28-2022",
            "recommendation": "Very Likely",
            "interest": "Friends",
            "likings": "Students",
            "comment": "Good University"
        }
2. Create MySQL RDMS using AWS RDS and copy the URL, Port No, Username and Password.
3. Using MySQLWorkbench the Database records can be viewed by connecting to the database using the above URL.
4. Create a front end using Angular.
5. Start the spring-boot application.
6. Start the Angular application using ng serve
7. Navigate to http://localhost:4200 and survey form should be visible over there.