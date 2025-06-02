'use client';
import React from 'react';
import SideBarFooter from './SideBarFooter';
import WorkspaceHistory from './WorkspaceHistory';
import Image from 'next/image';

const AppSideBar = ({ visible }) => {
  return (
    <div className={`fixed left-0 top-0 h-full bg-neutral-900/95 backdrop-blur-sm text-white border-r border-neutral-800/50 transition-all duration-300 ease-in-out shadow-xl ${
      visible ? 'w-[280px] translate-x-0' : 'w-[280px] -translate-x-full'
    }`}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center p-6 border-b border-neutral-800/50 bg-neutral-900/50">
          <Image
            src="/logo-mini.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <WorkspaceHistory />
        </div>
        <div className="border-t border-neutral-800/50 bg-neutral-900/50">
          <SideBarFooter />
        </div>
      </div>
    </div>
  );
};

export default AppSideBar; 