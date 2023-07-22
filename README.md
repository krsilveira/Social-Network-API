# NoSQL Social Network API

## Description
This Social Network backend application allows you to perform CRUD functions to manage Users, Thought and Reactions. In addition, it allows you to Add/Delete Friends and Add/Delete Reactions to Thoughts. The application is built using javascript on a NoSQL backend, with; express, mongoose and dayjs libaries operated from Insomia and CLI commands. These are the highlighted proficiencies during development process:
* Mongoose 
* Express.js 
 * Node.js 
 * Schema/Models  
 * ODM  
 * CRUD operations 



## User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```


## Acceptance Criteria
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation/Usage
Users will need to install npm libraries and create a .env file to include entries for the socialDB database as well as a DB_URI for 'mongodb://127.0.0.1:27017/'. Users are expected to have mongoDB installed Set-Up the CLI Commands from project root directory after git cloneing the repo by using:
> npm i <br>
> npm run start <br>

Use Insomia for GET and POSTS commands with the following url: http://localhost:3001/api/users/. 
'Users' 'Friend' 'Thoguhts' 'Reactions' Will be used to control User accounts in order to create/delete/get Users or Friends and Thoughts along with adding Reactions to other users  
Video Demonstration Link Here[https://drive.google.com/file/d/1fEFD7YgnhXnIKy78b6WSgX27WVFPAsH9/view] 



## Review
The URL of the GitHub Repository: (https://github.com/krsilveira/Challenge-18-) <br>
