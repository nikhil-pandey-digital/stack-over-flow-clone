

<h1 align="center"> Stack Overflow Clone 🧑‍💻</h1> 


<p align="center">
 Stack Overflow is a web application for developers where they can ask questions and get Relevent answers from the global community of experienced Developers
</p>

<p align="center">
  <a href="https://stack-over-flow-frontend.vercel.app/">Stack Overflow Clone
  </a>
</p>


## Table of Contents

- [Important Links](#important-links-related-to-the-project)
- [Features](#features)
- [Technology Used](#technology-used)
- [Installation](#installation)
- [Contributions](#contributions)
- [Usage](#usage)
- [Feedback](#feedback)


### Important links related to the project

* <b>Deployed website 👉: </b> [Stack-Overflow-Clone](https://stack-over-flow-frontend.vercel.app/)

 
## Features

Features of  Stack Overflow Clone are as follows:
- **Login & SingnUp:** Create account by Signing up or Login if you have an Account Already.
- **Ask Questions:** Post your coding questions inorder to get Answers of your questions from fellow developers.
- **Write Answers:** Provide Answers to  Questions in which you are knowledgeable and Share your knowledge with other Developers
- **Upvote & Downvote:** Upvote helpful questions and answers if it is helpful and DownVote it if it not helpful 
- **Tags & Categories:** Organize content by adding relevant tags and categories to questions.
- **User-Location:** Get to see your current Location on  map in the application
- **User Profiles:** Users can see profiles of each other, user can add & edit information to their profiles.
- **Login History** Users can see their login history under their profile secion 
- **Responsive Design:** Enjoy a seamless experience across devices, from desktop to mobile.


## Technology Used

| Technology | Features |
|------------|----------|
|   React.js      |  Frontend of the application |    
| Redux | State Management|    
| Node.js, Express.js    |  Backend of the application  |   
|    MongoDB Atlas, Mongoose    | Database for the application|
| Bcrypt     |    Password Management      |   
| JSON Web Token     |    Authorization and Authentication |
| Netlify     |     Deployment     |  
| Postman | API Testing, Debugging and Documentation |

<!--
## Top-level directory structure

	├── client                   # Frontend React.js directory
	│   ├── public              # Public assets for the React app (images, etc.)
	│   ├── src                 # React application source code
	│   │   ├── components      # Reusable UI components
	│   │   ├── pages           # Individual page components
	│   │   ├── App.js          # Root component
	│   │   ├── index.js        # Entry point for React app
	│   │   └── ...             # Other React-related files and folders
	├── server                  # Backend Node.js/Express directory
	│   ├── controllers         # Controllers for handling requests
	│   ├── models              # Database models and schemas
	│   ├── routes              # API route handlers
	│   ├── utils               # Utility files
	│   ├── views               # Templates for rendering server-side views
	│   ├── app.js              # Express app setup
	│   ├── package-lock.json   # Node.js package lock
	│   └── package.json        # Node.js package information
	├── .gitignore             
	└── README.md


<div align="center">
<img src="https://i.ibb.co/BK8KLHM/MVC-Architecture.jpg" alt="mvc architecture" height="400"/>
</div>
<br/>
-->
## Screenshots of the project
<table>
  <tr>
    <td>Home Page</td>
    <td>Tags Page</td>
  </tr>
  <tr>
    <td>
   <img src="https://i.ibb.co/gM7xXWr/screely-1692895310281.png" border="0">
    </td>
        <td>
<img src="https://i.ibb.co/t2mPvSw/screely-1692895676919.png" alt="screely-1677925947288" border="0"></td>

  </tr>
</table>
<table>
  <tr>
    <td>SignUp Page</td>
    <td>Login Page</td>
  </tr>
  <tr>
    <td>
<img src="https://i.ibb.co/vd9TjxS/screely-1692895003181.png" alt="screely-1677924790571" border="0"></td>
<td><img src="https://i.ibb.co/nc7vgn1/screely-1692894712324.png" alt="screely-1677925542185" border="0">
</td>
  </tr>
</table>
<table>
  <tr>
    <td>Question Detail Screen</td>
    <td>Posting an Answer Screen</td>
  </tr>
  <tr>
    <td>
<img src="https://i.ibb.co/M1n4dHf/screely-1692897031364.png" alt="screely-1677925947288" border="0"></td>
<td>
   <img src="https://i.ibb.co/TmSPn3k/screely-1692897192656.png" border="0">
    </td>
  </tr>
</table>
<table>
  <tr>
    <td>All Users Screen</td>
    <td>Ask a Question Screen</td>
  </tr>
  <tr>
<td>
   <img src="https://i.ibb.co/Bym2PSg/screely-1692896520603.png" border="0">
    </td>
<td>
   <img src="https://i.ibb.co/YB4VDgq/screely-1692896859187.png" border="0">
    </td>

  </tr>
</table>
<table>
  <tr>
    <td>User Profile Screen</td>
    <td>Other User's Profile Page</td>
  </tr>
  <tr>
     <td>
<img src="https://i.ibb.co/r728nds/image.png" border="0"></td>
    <td>
<img src="https://i.ibb.co/LRv0rQh/screely-1692896637899.png" alt="screely-1677925947288" border="0"></td>
  </tr>
</table>



##  Installation
<br>

To setup the project on your local environment, follow the given steps:

1. Fork the [nikhil-pandey-digital/Stack-Overflow-Clone](https://github.com/nikhil-pandey-digital/stack-over-flow-clone) repository.
2. Clone the repository:
```
https://github.com/<USERNAME>/Stack-Overflow-Clone.git
```

  Replace the `<USERNAME>` with your GitHub username. 

  ### Frontend

Move to the client directory

```bash
  cd client
```

Install the necessary dependencies

```bash
  npm install
```

To start the server in development mode

```
  npm start
```

Go to `localhost:3000` to view the website.
<br>

### Backend

Move to the server directory

```bash
  cd server
```

Install the necessary dependencies

```bash
  npm install
```

Add a config.env file in the root directory and enter your MongoDb Atlas and JWT Secret key 
The format of .env file should be similar to the following
```
CONNECTION_URL = "Mongo db url"
JWT_SECRET = "This could be anything like test"
```
To start the server in development mode

```
  npm start
```

Server will start at `PORT 5000`
<br>

## Contributions

Your worthy contributions are most welcome to this Stack Overflow Clone website. If you have an idea for a new feature or a bug fix, please submit an issue or pull request.


## Feedback

Feel free to send any feedback on [Twitter](https://twitter.com/mr_nikhilpandey) or [file an issue](https://github.com/nikhil-pandey-digital/stack-over-flow-clone/issues/new). 

