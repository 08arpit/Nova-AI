import dedent from "dedent";

export default {
  SUGGSTIONS: ['Create ToDo App in React', 'Create Budget Track App', 'Create Gym Managment Portal Dashboard', 'Create Quizz App On History', 'Create Login Signup Screen'],
  HERO_HEADING: 'What do you want to build?',
  HERO_DESC: 'Prompt, run, edit, and deploy full-stack web apps.',
  INPUT_PLACEHOLDER: 'What you want to build?',
  SIGNIN_HEADING: 'Continue With Nova AI',
  SIGNIN_SUBHEADING: 'To use Nova AI you must log into an existing account or create one.',
  SIGNIn_AGREEMENT_TEXT: 'By using Nova AI, you agree to the collection of usage data for analytics.',

  // Merged Colors
  COLORS: {
    LABEL:'#a3a3a3',
    SUBHEADING:'#d1d5db',
    BACKGROUND:'#151515',
    BLUE:'#2ba6ff',
    CHAT_BACKGROUND:'#272727'
  },

  // Merged Prompt
  PROMPT: {
    CHAT_PROMPT: dedent`
      'You are a AI Assistant and experience in React Development.
      GUIDELINES:
      - Tell user what your are building
      - response less than 15 lines. 
      - Skip code examples and commentary'
    `,
    CODE_GEN_PROMPT: dedent`
      You are a senior React developer and AI code assistant.
      Your task is to generate a complete, production-quality React project based on the user's request.

      **Requirements:**
      - Implement ALL features and requirements the user asks for.
      - Use clear, modern, and idiomatic React code (functional components, hooks, etc).
      - Use Tailwind CSS for styling. The UI should be visually appealing, responsive, and user-friendly.
      - Organize code into logical components and folders.
      - Add comments to explain complex logic.
      - Include error handling and input validation where appropriate.
      - If the user asks for charts, use react-chartjs-2.
      - If the user asks for authentication, use a simple mock or placeholder.
      - If the user asks for data persistence, use localStorage or a simple in-memory store.
      - Use only the allowed dependencies: date-fns, react-chartjs-2, firebase, @google/generative-ai, lucide-react for icons.
      - For images, use Unsplash or placeholder images.
      - The code should be ready to run in a Sandpack/CodeSandbox environment.

      **Output Format:**
      - Return a JSON object with a "files" field containing all code files, and a "generatedFiles" array listing all filenames.
      - Each file should have a "code" field with the file's contents.

      **Example Output:**
      {
        "files": {
          "/App.js": { "code": "..." },
          "/components/Feature.js": { "code": "..." }
        },
        "generatedFiles": ["/App.js", "/components/Feature.js"]
      }

      **IMPORTANT:**
      - Do NOT skip any features the user requests.
      - Do NOT generate placeholder or boilerplate code unless the user asks for it.
      - The app should be beautiful, functional, and ready to use.

      User request:
    `
  },
  DEFAULT_FILE: {
    '/public/index.html': {
      code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`
    },
    '/index.js': {
      code: `import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
    },
    '/App.css': {
      code: `
            @tailwind base;
@tailwind components;
@tailwind utilities;`
    },
    '/tailwind.config.js': {
      code: `
            /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`
    },
    '/postcss.config.js': {
      code: `/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
`
    }
  },
  DEPENDANCY: {

    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    autoprefixer: "^10.0.0",
    "uuid4": "^2.0.3",
    "tailwind-merge": "^2.4.0",
    "tailwindcss-animate": "^1.0.7",
    "lucide-react": "^0.469.0",
    "react-router-dom": "^7.1.1",
    "firebase": "^11.1.0",
    "@google/generative-ai": "^0.21.0",
    "date-fns": "^4.1.0",
    "react-chartjs-2": "^5.3.0",
    "chart.js": "^4.4.7",
  },
  PRICING_DESC:'Start with a free account to speed up your workflow on public projects or boost your entire team with instantly-opening production environments.',
  PRICING_OPTIONS:[
    {
      name:'Basic',
      tokens:'50K',
      value:50000,
      desc:'Ideal for hobbyists and casual users for light, exploratory use.',
      price:399
    },
    {
      name:'Starter',
      tokens:'120K',
      value:120000,
      desc:'Designed for professionals who need to use Nova AI a few times per week.',
      price:799
    },
    {
      name:'Pro',
      tokens:'2.5M',
      value:2500000,
      desc:'Designed for professionals who need to use Nova AI a few times per week.',
      price:1599
    },
    {
      name:'Unlimted (License)',
      tokens:'Unmited',
      value:999999999,
      desc:'Designed for professionals who need to use Nova AI a few times per week.',
      price:3999
    }
  ]


}