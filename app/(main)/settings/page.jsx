import React from 'react';
import { Settings, Moon, Bell, FlaskConical } from 'lucide-react';

const fakeSettings = [
  {
    icon: <Moon className="w-5 h-5 text-blue-400 mr-2" />, label: 'Dark Mode', desc: 'Always enabled for a beautiful experience.'
  },
  {
    icon: <Bell className="w-5 h-5 text-blue-400 mr-2" />, label: 'Email Notifications', desc: 'Get notified about important updates (coming soon).'
  },
  {
    icon: <FlaskConical className="w-5 h-5 text-blue-400 mr-2" />, label: 'Beta Features', desc: 'Try out new features before anyone else (coming soon).'
  }
];

export default function SettingsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4">
      <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl shadow-2xl p-10 max-w-2xl w-full flex flex-col items-center">
        <Settings className="w-14 h-14 text-blue-400 mb-4" />
        <h1 className="text-4xl font-extrabold mb-2 text-white tracking-tight">Settings</h1>
        <p className="text-gray-300 text-center text-lg mb-8 max-w-xl">
          Here you can manage your account settings, preferences, and try out new features. (All settings are for demo only!)
        </p>
        <div className="w-full space-y-6 mb-8">
          {fakeSettings.map((setting, idx) => (
            <div key={idx} className="bg-neutral-800/80 rounded-xl p-5 shadow flex items-center gap-3 justify-between">
              <div className="flex items-center">
                {setting.icon}
                <div>
                  <h2 className="text-lg font-semibold text-blue-200 mb-1">{setting.label}</h2>
                  <p className="text-gray-400 text-sm">{setting.desc}</p>
                </div>
              </div>
              <input type="checkbox" checked disabled className="form-checkbox h-5 w-5 text-blue-500 bg-neutral-700 border-neutral-600 rounded focus:ring-0 cursor-not-allowed opacity-60" />
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm text-center">
          This is a personal project. Settings are for demonstration only.
        </p>
      </div>
    </div>
  );
} 