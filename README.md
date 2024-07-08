Telegram Clone
Telegram Clone is a React application that displays chat messages fetched from an API. The application features a sidebar with a search bar and a list of users with their messages. Clicking on a user in the sidebar displays their messages in the main content area.

Table of Contents
Installation
Usage
Project Structure
Components
API
Contributing
License
Installation
Prerequisites
Node.js (v12 or later)
npm or yarn
Steps
Clone the repository:

sh
Copy code
git clone https://github.com/yourusername/Telegram Clone.git
cd Telegram Clone
Install dependencies:

sh
Copy code
npm install
# or
yarn install
Start the development server:

sh
Copy code
npm start
# or
yarn start
Open your browser and navigate to http://localhost:3000.

Usage
Running the Project
Development: npm start or yarn start
Build for Production: npm run build or yarn build
Project Structure
java
Copy code
Telegram Clone/
├── public/
│   ├── index.html
│   ├── logo512.png
│   └── ...
├── src/
│   ├── components/
│   │   ├── App.js
│   │   ├── Messages.js
│   │   ├── SendMessage.js
│   │   └── ...
│   ├── App.css
│   ├── index.js
│   ├── logo512.png
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
Components
App: The main component that fetches message data and displays the sidebar with users and their messages.

Messages: Displays the messages for the selected user.

SendMessage: Handles input and submission of new messages.

API
The application fetches chat messages from the following API:

arduino
Copy code
GET https://devapi.Telegram Clone.com/api/get_chat_messages?chat_id=3888
Example Data
json
Copy code
{
  "status": "success",
  "status_code": 200,
  "message": "User messages fetched successfully!",
  "data": [
    {
      "id": 14022,
      "sender_id": 1,
      "role_id": 9,
      "message": "Hi there! Welcome to BeyondChats\nWhat brings you here today?\nAsk me anything about BeyondChats",
      "unanswered": 0,
      "vote": null,
      "chat_id": 3888,
      "action_id": null,
      "is_corrected": 0,
      "created_at": "2024-07-04T09:41:48.000000Z",
      "updated_at": "2024-07-04T09:41:48.000000Z",
      "sender": {
        "id": 1,
        "name": "BeyondChat",
        "email": "contact@beyondchat.com",
        "phone": null,
        "email_verified_at": null,
        "password_updated": 0,
        "created_at": null,
        "updated_at": "2023-04-26T12:43:24.000000Z",
        "device": null,
        "browser": null,
        "os": null,
        "city": null,
        "country": null
      }
    },
    ...
  ]
}
Contributing
Steps to Contribute
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
Guidelines
Follow the code style and conventions used in the project.
Write clear and concise commit messages.
Update documentation if necessary.
License
This project is licensed under the MIT License. See the LICENSE file for more information.

