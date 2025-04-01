'use client';
import { UserDetailContext } from '@/context/UserDetailContext';
import { api } from '@/convex/_generated/api';
import { useConvex } from 'convex/react';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { useSidebar } from '../ui/sidebar';
import { Loader2Icon } from 'lucide-react';

function WorkspaceHistory() {
  const { userDetail, isLoading } = useContext(UserDetailContext);
  const [workspaceList, setWorkSpaceList] = useState();
  const [isLoadingWorkspaces, setIsLoadingWorkspaces] = useState(false);
  const convex = useConvex();
  const { toggleSidebar } = useSidebar();

  useEffect(() => {
    if (userDetail?._id) {
      GetAllWorkspace();
    }
  }, [userDetail?._id]);

  const GetAllWorkspace = async () => {
    try {
      setIsLoadingWorkspaces(true);
      const result = await convex.query(api.workspace.GetAllWorkspace, {
        userId: userDetail._id,
      });
      setWorkSpaceList(result);
    } catch (error) {
      console.error('Error fetching workspaces:', error);
    } finally {
      setIsLoadingWorkspaces(false);
    }
  };

  if (isLoading || !userDetail) {
    return null;
  }

  return (
    <div>
      <h2 className="font-medium text-lg">Your Chats</h2>
      <div>
        {isLoadingWorkspaces ? (
          <div className="flex items-center gap-2 mt-4 text-gray-400">
            <Loader2Icon className="animate-spin h-4 w-4" />
            <span>Loading chats...</span>
          </div>
        ) : workspaceList && workspaceList.length > 0 ? (
          workspaceList.map((workspace, index) => (
            <Link key={index} href={'/workspace/' + workspace?._id}>
              <h2 
                onClick={toggleSidebar} 
                className="text-sm text-gray-400 mt-2 font-light hover:text-white cursor-pointer"
              >
                {workspace?.messages[0]?.content}
              </h2>
            </Link>
          ))
        ) : (
          <p className="text-sm text-gray-400 mt-2">No chats yet</p>
        )}
      </div>
    </div>
  );
}

export default WorkspaceHistory;
