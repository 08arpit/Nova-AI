'use client';
import Image from 'next/image';
import React, { useContext } from 'react';
import { Button } from '../ui/button';
import Colors from '@/data/Colors';
import { UserDetailContext } from '@/context/UserDetailContext';
import Link from 'next/link';
import { Download, Menu, Rocket } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { ActionContext } from '@/context/ActionContext';
import SignInDialog from './SignInDialog';

function Header({ onMenuClick }) {
  const { userDetail, setUserDetail, isLoading } = useContext(UserDetailContext);
  const { action, setAction } = useContext(ActionContext);
  const pathname = usePathname();
  const [openDialog, setOpenDialog] = React.useState(false);
  
  const onActionBtn = (actn) => {
    setAction({
      actionType: actn,
      timeStamp: Date.now()
    })
  }

  return (
    <div className="p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>
        <Link href={'/'}>
          <Image src={'/logo1.png'} alt="Nova AI" width={80} height={80} />
        </Link>
      </div>
      {isLoading ? null : !userDetail?.name ? (
        <div className="flex gap-5">
          <Button variant="ghost" onClick={() => setOpenDialog(true)}>Sign In</Button>
          <Button
            className="text-white bg-blue-500/80 backdrop-blur-sm"
            onClick={() => setOpenDialog(true)}
          >
            Get Started
          </Button>
          <SignInDialog openDialog={openDialog} closeDialog={setOpenDialog} />
        </div>
      ) : (
        <div className="flex gap-5 items-center">
          {pathname.includes('/workspace/') && (
            <>
              <Button variant="ghost" onClick={() => onActionBtn('export')}>
                <Download /> Export
              </Button>
              <Button
                onClick={() => onActionBtn('deploy')}
                className="text-white bg-blue-500/80 backdrop-blur-sm"
              >
                <Rocket /> Deploy
              </Button>
            </>
          )}
          {userDetail && (
            <Image
              src={userDetail?.picture}
              alt="userImage"
              width={40}
              height={40}
              className="rounded-full cursor-pointer object-cover"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
