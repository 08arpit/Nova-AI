'use client';
import { HelpCircle, LogOut, Settings, Wallet } from 'lucide-react';
import React, { useContext } from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { UserDetailContext } from '@/context/UserDetailContext';

function SideBarFooter() {
  const router = useRouter();
  const { userDetail } = useContext(UserDetailContext);

  const publicOptions = [
    {
      name: 'Help Center',
      icon: HelpCircle,
      path: '/help'
    }
  ];

  const privateOptions = [
    {
      name: 'Settings',
      icon: Settings,
      path: '/settings'
    },
    {
      name: 'My Subscription',
      icon: Wallet,
      path: '/pricing'
    },
    {
      name: 'Sign Out',
      icon: LogOut,
      path: '/'
    }
  ];

  const options = userDetail ? [...publicOptions, ...privateOptions] : publicOptions;

  const onOptionClick = (option) => {
    if (option.path) {
      router.push(option.path);
    }
    // Handle sign out if needed
    if (option.name === 'Sign Out') {
      if (typeof window !== 'undefined') {
        if (userDetail?.isDemo) {
          localStorage.removeItem('user');
          localStorage.removeItem('messages');
        } else {
          localStorage.removeItem('user');
        }
        window.location.reload();
      }
    }
  };

  return (
    <div className="p-4 space-y-2 mb-10">
      {options.map((option, index) => (
        <Button
          onClick={() => onOptionClick(option)}
          key={index}
          variant="ghost"
          className={`w-full flex items-center justify-start gap-3 px-4 py-2.5 text-neutral-300 hover:text-white hover:bg-neutral-800/50 transition-all duration-200 rounded-lg group ${
            option.name === 'Sign Out' ? 'mt-4 border-t border-neutral-800/50 pt-4 pb-5' : ''
          }`}
        >
          <option.icon className="h-4.5 w-4.5 text-neutral-400 group-hover:text-white transition-colors" />
          <span className="text-sm font-medium">{option.name}</span>
        </Button>
      ))}
    </div>
  );
}

export default SideBarFooter;
