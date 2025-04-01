'use client';
import { HelpCircle, LogOut, Settings, Wallet } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

function SideBarFooter() {
  const router = useRouter();
  const options = [
    {
      name: 'Settings',
      icon: Settings,
      path: '/settings'
    },
    {
      name: 'Help Center',
      icon: HelpCircle,
      path: '/help'
    },
    {
      name: 'My Subscription',
      icon: Wallet,
      path: '/pricing',
    },
    {
      name: 'Sign Out',
      icon: LogOut,
      path: '/'
    },
  ];
  const onOptionClock = (option) => {
    console.log(option);
    if (option.path) {
      router.push(option.path);
    }
    // Handle sign out if needed
    if (option.name === 'Sign Out') {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user');
        window.location.reload();
      }
    }
  };

  return (
    <div className="p-2 mb-10">
      {options.map((option, index) => (
        <Button
          onClick={() => onOptionClock(option)}
          key={index}
          variant="ghost"
          className="w-full flex justify-start my-3"
        >
          <option.icon />
          {option.name}
        </Button>
      ))}
    </div>
  );
}

export default SideBarFooter;
