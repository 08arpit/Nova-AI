'use client';
import React from 'react';
import { UserPlus } from 'lucide-react';
import PricingModel from '@/components/custom/PricingModel';
import { UserDetailContext } from '@/context/UserDetailContext';
import Lookup from '@/data/Lookup';

export default function Pricing() {
  const { userDetail } = React.useContext(UserDetailContext);
  return (
    <div className="mt-20 flex flex-col items-center p-6 md:px-32 lg:px-48 w-full ">
      <UserPlus className="w-14 h-14 text-blue-400 mb-4" />
      <h1 className="text-4xl font-extrabold mb-2 text-white tracking-tight">My Subscription</h1>
      <p className="text-gray-300 max-w-2xl text-center mb-8 text-lg">
        {Lookup.PRICING_DESC}
      </p>
      <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl shadow-2xl p-8 w-full max-w-3xl flex flex-col md:flex-row items-center justify-between mb-10">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <span className="text-2xl font-bold text-white">{userDetail?.token?.toLocaleString() ?? 0}</span>
          <span className="text-gray-400 text-sm">Tokens Left</span>
        </div>
        <div className="text-right">
          <h2 className="text-2xl font-semibold text-white mb-1">Need more tokens?</h2>
          <p className="text-gray-400">Upgrade your plan below</p>
        </div>
      </div>
      <div className="w-full max-w-5xl">
        <PricingModel />
      </div>
      <p className="text-gray-500 text-sm text-center mt-10">
        This is a demo project. Payments are not enabled.
      </p>
    </div>
  );
}
