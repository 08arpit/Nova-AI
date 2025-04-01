import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import { Button } from '../ui/button';
import { MessageCircleCodeIcon } from 'lucide-react';
import WorkspaceHistory from './WorkspaceHistory';
import SideBarFooter from './SideBarFooter';

function AppSideBar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-5">
        <Image src={'/logo-mini.png'} alt="logo" width={30} height={30} />
        <Button className="mt-5"><MessageCircleCodeIcon /> Start New Chat</Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <WorkspaceHistory />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SideBarFooter />
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSideBar;
