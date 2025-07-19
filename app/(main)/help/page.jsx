import React from 'react';
import { HelpCircle, Smile, User, LogIn, Trash2, Mail, Linkedin } from 'lucide-react';

const faqs = [
  {
    icon: <Smile className="w-5 h-5 text-blue-400 inline-block mr-2" />, 
    q: "How do I use Nova AI?",
    a: "Just type what you want to build on the homepage and Nova AI will generate a project outline and code for you!"
  },
  {
    icon: <LogIn className="w-5 h-5 text-blue-400 inline-block mr-2" />, 
    q: "Can I try Nova AI without signing in?",
    a: "Yes! Click 'Skip Sign In' to use demo mode with limited tokens."
  },
  {
    icon: <Trash2 className="w-5 h-5 text-blue-400 inline-block mr-2" />, 
    q: "What happens to my data?",
    a: "For demo users, all data is cleared when you log out. For signed-in users, your workspaces are saved securely."
  },
  {
    icon: <User className="w-5 h-5 text-blue-400 inline-block mr-2" />, 
    q: "Who built this?",
    a: "Nova AI is a personal project by Arpit, built for fun and to showcase AI-powered coding."
  },
  {
    icon: <Mail className="w-5 h-5 text-blue-400 inline-block mr-2" />, 
    q: "How do I contact you?",
    a: "Just reach out on LinkedIn or email if you have feedback or want to connect!"
  }
];

export default function HelpPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4">
      <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl shadow-2xl p-10 max-w-2xl w-full flex flex-col items-center">
        <HelpCircle className="w-14 h-14 text-blue-400 mb-4" />
        <h1 className="text-4xl font-extrabold mb-2 text-white tracking-tight">Help Center</h1>
        <p className="text-gray-300 text-center text-lg mb-8 max-w-xl">
          Welcome! Nova AI is designed to be simple and fun. Here are some quick answers to common questions. If you need more help, just ask Arpit directly!
        </p>
        <div className="w-full space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-neutral-800/80 rounded-xl p-5 shadow flex items-start gap-3">
              <div>{faq.icon}</div>
              <div>
                <h2 className="text-lg font-semibold text-blue-200 mb-1">{faq.q}</h2>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm mb-2">Still have questions or want to connect?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="mailto:8arpitgarg@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
              target="_blank" rel="noopener noreferrer"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/arpitgarg08/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-medium transition-colors"
              target="_blank" rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 