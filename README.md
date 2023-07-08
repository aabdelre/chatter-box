# Chatter Box
## Description
This app was developed in the spirit of integrating advanced AI bots in chat applications like My AI in Snapchat and getting a glimpse of the future, where powerful AI bots will be used, not only for corporate work and education but also for entrainment and social interactions.

## Product Spec
### 1. Tech Stack
**Front-end**
* ChatEngine: Chat interface
* Redux Toolkit: State management
* RTK Query: API calls
* React Router: Navigation
* Hero Icons

**Back-end**
* Node.js
* Express.js
* OpenAI API

### 1. User Features
**Required Features**
- [X] Create layouts: 
* Use React, Redux Toolkit, and Redux Toolkit Query to break the project into components
* Integrate ChatEngine's Interface to start the project
* Chat Component: handles the submission of a message and triggers the backend for a response
* Message Form UI: specifies the general layout of the messaging form
* AI Forms (Assist, Code, and Text - 3 Models): specific functionality for AI bots
* Standard Form: specific functionality for human users

- [X] API:
* Use Redux Toolkit Query to build an API that connects the different components to the backend
* Specify endpoints for text, code, assisting, login, and signup.

- [X] Backend:
* Setup navigation between the login/signup page and the chat interface
* Use OpenAI API to request responses from specified models via prompting and send the responses back to ChatEngine

**Stretch Features**
- [ ] Advanced Authentication/Authorization System
- [ ] Voice/Video Chat
- [ ] Advanced AI Models like GPT-4
- [ ] Break the database into contacts

### 2. Screen Archetypes
- Authentication/Authorization Page
    - Users either log in to their account using their own username and password or create a new account
- Chat Page
    - Users have the ability to create new chats, select an active chat, and add other users or bots to it
    - Users send texts or media in the specified active chat
    - Users can be assisted by the AI bots via prompting

### 3. Navigation
**Flow Navigation** (Screen to Screen)
- Authentication/Authorization Page
- ChatEngine Interface

## Demo
<img src='Demo.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' width="500" height="300"/>

## Acknowledgements
- [React Router](https://reactrouter.com/en/main)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview)
- [Hero Icons](https://heroicons.com/)
- [ChatEngine Docs](https://chatengine.io/docs/react/v2)
- [ChatEngine Storybook](https://chatengine-io.github.io/react-chat-engine-advanced/?path=%2Fdocs%2Fmultichatwindow--default-story)
- [ChatEngine API](https://rest.chatengine.io/)
- [ChatEngine Styling](https://chatengine.io/docs/react/v1/customize_ui/custom_css)
- [OpenAI node npm](https://github.com/openai/openai-node)
- [OpenAI Completion Docs](https://platform.openai.com/docs/api-reference/completions/create)
- [OpenAI Playground](https://platform.openai.com/playground)
- [OpenAI API ChatGPT Update New](https://openai.com/blog/introducing-chatgpt-and-whisper-apis)
- [OpenAI API GPT-3.5 Docs](https://platform.openai.com/docs/guides/gpt/chat-completions-api)
