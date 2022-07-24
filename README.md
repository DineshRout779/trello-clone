# Todo App
## Description

### Motivation
This project is built as an assignment for a internship.

### What the app does?
This is a simple todo app where one can manage one's task.

### Technology used

 - Frontend
   - React
   - redux-toolkit
   - React-beautiful-dnd
 - Backend
	 - nodejs
	 - express
	 - mongodb
	 - jsonwebtoken
	 
### Features
 - Authentication
 - Form Validations
 - Drag and drop
 - create todo 
 - update todo
 - change todo status
 


## Installation / use


**Live application** :- [click here](https://youshd-task.vercel.app/)

**Credentials**

 - email: dinesh@gmail.com	
 - password: 12345

or

**To install** this application on your local machine 

    git clone https://github.com/DineshRout779/youshd-task.git

Install the app (backend)

    npm install
also navigate to '/frontend' in terminal and install the react app

    cd frontend
    npm install
create .env files in both root directory and inside frontend subdirectory and put these below variables



```
// .env
MONGO_URL=mongodb url goes here...
// frontend/.env
REACT_APP_API=backend url goes here...
```

Now its time to run our app, to run backend

    npm run dev
to run frontend  

    cd frontend
    npm start




    

