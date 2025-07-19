# ⚡️🧠 Nova AI - Your Open Source Micro SaaS AI Code Companion

<div align="center">

<img src="public/logo1.png" alt="Nova AI Logo" width="100" />

</div>

## 👋 Introduction

Welcome to **Nova AI**! 🚀

**Nova AI** is a personal micro SaaS application designed to revolutionize the way developers interact with code. Inspired by the groundbreaking Bolt.New and powered by cutting-edge AI, Nova AI is your ultimate coding companion. This project is built for fun, learning, and to showcase AI-powered coding to recruiters and friends.

## ✨ Features

- **AI-powered code generation**: Describe what you want to build, and Nova AI will generate a full React project for you.
- **Demo mode (Skip Sign In)**: Try Nova AI instantly with limited tokens—no account required! Perfect for recruiters and friends.
- **Google Sign In**: Sign in to save your workspaces and get more tokens.
- **Live code preview**: See your generated app instantly with Sandpack.
- **Modern, beautiful UI**: Responsive, dark-themed, and recruiter-ready.
- **Loading indicators**: Clear feedback when generating code or creating workspaces.
- **Help Center, Settings, and My Subscription pages**: Professional navigation and onboarding experience.
- **Personal touch**: Friendly Help Center, easy contact options, and a focus on user experience.

## 🛠 Technologies Powering Nova AI

Nova AI is built with a modern stack designed for performance, scalability, and an excellent developer experience:

- **[Next.js](https://nextjs.org/)**: For building server-side rendered, SEO-friendly, and highly performant React applications.
- **[React](https://reactjs.org/)**: The core of our UI, providing a declarative and component-based approach to building interfaces.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid, custom UI development.
- **[Convex](https://www.convex.dev/)**: Backend platform for seamless data storage, real-time updates, and serverless functions.
- **[Google Generative AI](https://ai.google/)**: Advanced AI for natural language processing and code generation.
- **[Sandpack](https://sandpack.codesandbox.io/)**: Live, interactive code editing and preview.
- **[Lucide React](https://lucide.dev/docs/lucide-react)**: Beautiful, open-source icons.

## 📂 Project Structure

```
app/            # Main application logic (pages, API, layout)
components/     # Reusable UI and custom components
configs/        # AI model and other configuration
context/        # React context for global state
convex/         # Convex backend functions
public/         # Static assets (images, icons)
data/           # Static data (prompts, lookups, colors)
hooks/          # Custom React hooks
lib/            # Utility functions
```

## 🚀 Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/08arpit/Nova-AI.git
   cd Nova-AI
   ```
2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Configure Environment Variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your API keys and configuration
   ```
   - `NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID_KEY` – Google OAuth client ID
   - `NEXT_PUBLIC_CONVEX_URL` – Convex backend URL
   - `CONVEX_DEPLOYMENT` – Convex deployment name
   - `NEXT_PUBLIC_GEMINI_API_KEY` – Google Gemini API key
4. **Run the Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

## 🧑‍💻 Usage

- **Try instantly**: Click "Skip Sign In" for demo mode (limited tokens, no account needed).
- **Sign in with Google**: Save your workspaces and get more tokens.
- **Type your project idea**: Nova AI will generate a full React project outline and code.
- **Preview and edit code**: Live preview with Sandpack, edit and experiment instantly.
- **Navigate**: Use the sidebar for Help Center, Settings, and Subscription info.
- **Loading indicators**: See clear feedback when code is being generated or workspaces are created.

## 🛠 Troubleshooting & FAQ

- **App not starting?** Ensure all environment variables are set and dependencies installed.
- **Convex errors?** Double-check your Convex deployment and URL.
- **Google login issues?** Verify your OAuth credentials and redirect URIs.
- **AI code generation slow or fails?** Check your Gemini API key and server logs for errors.
- **Other issues?** Check the [issues](https://github.com/08arpit/Nova-AI/issues) page or open a new one.

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a Pull Request describing your changes.

## 👤 About & Contact

Nova AI is a personal project by [Arpit Garg](https://www.linkedin.com/in/arpitgarg08/).
- Email: [8arpitgarg@gmail.com](mailto:8arpitgarg@gmail.com)
- LinkedIn: [linkedin.com/in/arpitgarg08](https://www.linkedin.com/in/arpitgarg08/)

Crafted with ❤️ by Arpit. Let's revolutionize coding together with Nova AI! 🎉