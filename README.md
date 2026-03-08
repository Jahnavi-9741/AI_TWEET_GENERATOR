## ✍️ Author

**Gorantla Jahnavi Reddy**

📧 **Email:**  
jahnavi0405@gmail.com  

🔗 **GitHub:**  
https://github.com/Jahnavi-9741/AI_TWEET_GENERATOR

## ⌯⌲ TweetCraft AI

TweetCraft AI analyzes a brand’s **industry**, **campaign objective**, and **product description** to generate tweets that match the brand’s **tone**, **personality**, and **communication style**.

-----

## 🖥️ User Interface

### Bright Mode
![UI Bright Mode](src/assets/UI/UI-Bright%20mode.png)

### Dark Mode
![UI Dark Mode](src/assets/UI/UI-Dark%20mode.png)

---
### The system produces:

- **Brand Voice Summary**
- **10 AI-generated tweets**
- Tweets with different styles:
  - Engaging
  - Promotional
  - Conversational
  - Informative
------

## Project Objective

The goal of this project is to build a system where a user can input **brand information** and automatically generate tweets that align with the brand’s **communication style**.

### The system identifies:

- **Brand tone**
- **Target audience**
- **Content themes**
- **Communication style**

and generates **relevant social media content**.

--------

## Key Features

- **AI-generated tweets** based on brand inputs
- **Brand voice analysis**
- **Clean modern UI**
- **Dark mode support**
- **Copy tweet functionality**
- **FastAPI backend API**
- **Local LLM integration using Mistral via Ollama**
- **React + Tailwind frontend**

------
## 🗁 Project Folder Structure
```
AI_TWEET_GENERATOR
│
├── src
│ ├── components
│ │ ├── Navbar.jsx
│ │ ├── BrandForm.jsx
│ │ ├── TweetCard.jsx
│ │ ├── TweetsList.jsx
│ │ ├── VoiceSummary.jsx
│ │ └── Loader.jsx
│ │
│ ├── pages
│ │ └── Home.jsx
│ │
│ ├── context
│ │ ├── ThemeContext.js
│ │ ├── ThemeProvider.jsx
│ │ └── useTheme.js
│ │
│ ├── api
│ │ └── api.js
│ │
│ └── assets
│
├── backend
│ ├── main.py
│ ├── prompts.py
│ └── requirements.txt
│
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md

```
## System Architecture

```
System Architecture

1. User Input 
   The user enters brand information such as brand name, industry, campaign objective, and product description.

2. Frontend Interface (React + Tailwind)
   The React UI collects user input and prepares the request.

3. API Request (Axios)  
   Axios sends the request from the frontend to the backend API.

4. FastAPI Backend 
   The backend receives the request and processes the input data.

5. Prompt Construction
   The system builds a structured prompt using the brand information.

6. Local LLM (Mistral via Ollama) 
   The prompt is sent to the local Mistral model running via Ollama.

7. Generated Tweets Returned to UI 
   The model generates tweets and sends them back to the frontend for display.
```
----

## </> Technologies Used

###  Frontend

| Technology | Logo |
|------------|------|
| React | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40"> |
| Vite | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" width="40"> |
| TailwindCSS | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="40"> |
| Lucide Icons | <img src="https://lucide.dev/logo.dark.svg" width="40"> |
| Axios | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg" width="40"> |

---

###  Backend

| Technology | Logo |
|------------|------|
| Python | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="40"> |
| FastAPI | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" width="40"> |

---

###  AI Model

| Technology | Logo |
|------------|------|
| Mistral LLM | <img src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4" width="40"> |
| Ollama | <img src="https://ollama.com/public/ollama.png" width="40"> |

---

###  Development Tools

| Technology | Logo |
|------------|------|
| Node.js | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40"> |
| Git | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="40"> |
| GitHub | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="40"> |
| VS Code | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="40"> |

---

## Frontend Setup

####  Navigate to the project folder:

```cd ai-tweet-generator```

#### Install dependencies:

``` npm install ```

#### Run the frontend:

```npm run dev```

#### Frontend will start at:
``` http://localhost:5173```

-------

## Backend Setup

#### Navigate to backend folder:

```cd backend```

#### Create virtual environment:

```python -m venv venv```

#### Activate environment:

* Windows:

```venv\Scripts\activate```

#### Install dependencies:

```pip install -r requirements.txt```

#### Run FastAPI server:

``` uvicorn main:app --reload```

#### Backend runs at:

``` http://localhost:8000 ```

---------

## Installing Mistral Model (Ollama)

#### Install Ollama:

```https://ollama.com```

#### Verify installation:

```ollama --version```

#### Download the Mistral model:

```ollama pull mistral```

#### Run the model:

```ollama run mistral```

**The backend will connect to this model for generating tweets.**

-----

## API Endpoint
```
POST /generate-tweets

Example request body:

{
"brand_name": "Zomato",
"industry": "Food Delivery",
"objective": "Engagement",
"product_description": "Online food delivery service"
}
```

**Response includes:**
Brand voice summary
10 generated tweets

-----

## Example — Apple

### Output Screenshots

![Apple Image 1](src/assets/brands/apple/Apple-attached1.png)

![Apple Image 2](src/assets/brands/apple/Apple-attached2.png)

![Apple Image 3](src/assets/brands/apple/Apple-attached3.png)

---

## Example — Zomato

### Output Screenshots

![Zomato Image 1](src/assets/brands/zomato/zomato-attached1.png)

![Zomato Image 3](src/assets/brands/zomato/zomato-attached3.png)

![Zomato Image 2](src/assets/brands/zomato/zomato-attached2.png)



----

## 💻 Terminal Screenshots

### Backend Server
![Backend Terminal](src/assets/Terminal/Backend-Terminal.png)

### Frontend Server
![Frontend Terminal](src/assets/Terminal/Frontend-Terminal.png)

### Model Running (Ollama)
![Model Terminal](src/assets/Terminal/Model-Terminal.png)
----

## How Brand Voice is Analysed

Brand voice is inferred using **prompt-based reasoning**.

### Inputs Used

- **Brand name**
- **Industry**
- **Campaign objective**
- **Product description**

### From this information, the AI determines:

- **Tone** (witty, premium, humorous, informative)
- **Target audience**
- **Content themes**
- **Communication style**

These elements guide the **tweet generation process**, ensuring that the generated tweets align with the brand’s identity and messaging style.


