import Lookup from '@/data/Lookup';
import React, { useContext } from 'react';
import { Button } from '../ui/button';
import { UserDetailContext } from '@/context/UserDetailContext';

function PricingModel() {
  const { userDetail } = useContext(UserDetailContext);

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
      {Lookup.PRICING_OPTIONS.map((pricing, index) => (
        <div
          className="flex flex-col gap-6 border rounded-xl p-10 justify-between"
          key={index}
        >
          <h2 className="font-bold text-4xl">{pricing.name}</h2>
          <h2 className="font-medium text-lg">{pricing.tokens} Tokens</h2>
          <p className="text-gray-400">{pricing.desc}</p>
          <h2 className="font-bold text-4xl text-center mt-6">
            ₹{pricing.price}
          </h2>
          {userDetail && (
            <div className="text-center">
              <Button variant="outline" disabled>
                Coming Soon
              </Button>
              <p className="text-sm text-gray-400 mt-2">Payment integration coming soon</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default PricingModel;
