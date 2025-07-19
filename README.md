# ⚡️🧠 Nova AI - Your Open Source Micro SaaS AI Code Companion

<div align="center">

<img src="https://nova-ai.vercel.app/logo.png" alt="Nova AI Logo" width="100" />

</div>

## 👋 Introduction

Welcome to **Nova AI**! 🚀

**Nova AI** is an **micro SaaS** application designed to revolutionize the way developers interact with code. Inspired by the groundbreaking Bolt.New and powered by cutting-edge AI, Nova AI is your ultimate coding companion.

## 🛠 Technologies Powering Nova AI

Nova AI is built with a modern stack designed for performance, scalability, and an excellent developer experience:

- **[Next.js](https://nextjs.org/)**: For building server-side rendered, SEO-friendly, and highly performant React applications.

- **[React](https://reactjs.org/)**: The core of our UI, providing a declarative and component-based approach to building interfaces.

- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework that allows for rapid and custom UI development without leaving your HTML.

- **[Convex](https://www.convex.dev/)**: Our backend platform of choice for seamless data storage, real-time updates, and serverless functions.

- **[Google Generative AI](https://ai.google/)**: Brings advanced AI capabilities, including natural language processing and code generation, to your fingertips.

- **[Sandpack](https://sandpack.codesandbox.io/)**: Enables live, interactive code editing and preview capabilities.

- **[PayPal API](https://developer.paypal.com/docs/api/overview/)**: For secure and straightforward payment processing, making plan upgrades a breeze.

- **[Lucide React](https://lucide.dev/docs/lucide-react)**: A library of beautiful, open-source icons to enhance the visual appeal of your projects.

## 📂 Project Structure: A Deep Dive

Understanding the project structure helps with contributions and customizations:

```
code-mind-ai-bolt-clone/
├── app/                      # Main application logic
│   ├── (main)/               # Main app routes and layouts
│   │   ├── pricing/          # Pricing page
│   │   └── workspace/        # Workspace page for projects
│   ├── api/                  # API routes
│   │   ├── ai-chat/          # AI chat API endpoint
│   │   └── gen-ai-code/      # Code generation API endpoint
│   ├── ConvexClientProvider.jsx # Convex provider setup
│   ├── globals.css           # Global styles
│   ├── layout.js             # Root layout
│   ├── page.js               # Home page
│   └── provider.jsx          # Global state providers
├── components/               # Reusable UI components
│   ├── custom/               # Custom application-specific components
│   └── ui/                   # Shadcn UI components
├── configs/                  # Configuration for AI models and other settings
├── context/                  # React context for global state
├── convex/                   # Convex backend functions
│   ├── schema.js             # Database schema
│   ├── users.js              # User-related database operations
│   ├── workspace.js          # Workspace-related database operations
│   └── _generated/           # Auto-generated Convex files
├── data/                     # Static data (prompts, lookups, colors)
├── hooks/                    # Custom React hooks
├── lib/                      # Utility functions
├── public/                   # Public assets (images, icons)
├── .env.example              # Example environment variables
├── components.json           # Shadcn UI components configuration
├── jsconfig.json             # JavaScript configuration
├── next.config.mjs           # Next.js configuration
├── package.json              # Project dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration
└── tailwind.config.mjs       # Tailwind CSS configuration

## 🚀 Getting Started

Follow these steps to set up and run Nova AI locally:

### 1. Clone the Repository

```bash
git clone https://github.com/08arpit/Nova-AI.git
cd Nova-AI
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### 3. Configure Environment Variables

Copy the example environment file and fill in your credentials:

```bash
cp .env.example .env.local
# Edit .env.local with your API keys and configuration
```

**Required variables:**
- `NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID_KEY` – Google OAuth client ID
- `NEXT_PUBLIC_CONVEX_URL` – Convex backend URL
- `CONVEX_DEPLOYMENT` – Convex deployment name
- `NEXT_PUBLIC_GEMINI_API_KEY` – Google Gemini API key

### 4. Run the Development Server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## 🧑‍💻 Usage

- **Sign in** with Google to access your workspace.
- **Create or join workspaces** to collaborate and generate code with AI.
- **Chat with the AI** for code suggestions, explanations, and more.
- **Preview and edit code** live with Sandpack integration.
- **Upgrade plans** securely via PayPal for additional features.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a Pull Request describing your changes.

## 🛠 Troubleshooting & FAQ

- **App not starting?** Ensure all environment variables are set and dependencies installed.
- **Convex errors?** Double-check your Convex deployment and URL.
- **Google login issues?** Verify your OAuth credentials and redirect URIs.
- **Other issues?** Check the [issues](https://github.com/08arpit/Nova-AI/issues) page or open a new one.


---

Crafted with ❤️ by Arpit. Let's revolutionize coding together with Nova AI! 🎉