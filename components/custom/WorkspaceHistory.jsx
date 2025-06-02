'use client';
import { UserDetailContext } from '@/context/UserDetailContext';
import { api } from '@/convex/_generated/api';
import { useConvex, useMutation } from 'convex/react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { Loader2Icon, Trash } from 'lucide-react';

function WorkspaceHistory() {
  const { userDetail, isLoading } = useContext(UserDetailContext);
  const [workspaceList, setWorkSpaceList] = useState();
  const [isLoadingWorkspaces, setIsLoadingWorkspaces] = useState(false);
  const convex = useConvex();
  const deleteWorkspace = useMutation(api.workspace.DeleteWorkspace);
  const { id } = useParams();

  useEffect(() => {
    if (userDetail?._id) {
      GetAllWorkspace();
    }
  }, [userDetail?._id, id]);

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

  const handleDelete = async (workspaceId) => {
    try {
      await deleteWorkspace({ workspaceId });
      setWorkSpaceList((prev) => prev.filter(w => w._id !== workspaceId));
    } catch (error) {
      console.error('Error deleting workspace:', error);
      // Even if deletion fails on server, remove from local state if it was already gone
      setWorkSpaceList((prev) => prev.filter(w => w._id !== workspaceId));
    }
  };

  if (isLoading || !userDetail) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Your Chats</h2>
      <div className="space-y-2">
        {isLoadingWorkspaces ? (
          <div className="flex items-center gap-2 text-neutral-400">
            <Loader2Icon className="animate-spin h-4 w-4" />
            <span className="text-sm">Loading chats...</span>
          </div>
        ) : workspaceList && workspaceList.length > 0 ? (
          workspaceList.map((workspace) => (
            <div key={workspace._id} className="group relative">
              <Link
                href={'/workspace/' + workspace?._id}
                className={`block p-2 rounded-lg transition-colors duration-200 ${
                  workspace._id === id 
                    ? 'bg-neutral-800/80 hover:bg-neutral-800' 
                    : 'hover:bg-neutral-800/50'
                }`}
              >
                <h2
                  className={`text-sm truncate pr-8 ${
                    workspace._id === id 
                      ? 'text-white' 
                      : 'text-neutral-300 hover:text-white'
                  }`}
                  title={workspace?.messages[0]?.content}
                >
                  {workspace?.messages[0]?.content?.split('\n')[0] || 'Untitled'}
                </h2>
              </Link>
              <button
                onClick={() => handleDelete(workspace._id)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1"
                title="Delete chat"
              >
                <Trash className="w-4 h-4" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-sm text-neutral-400">No chats yet</p>
        )}
      </div>
    </div>
  );
}

export default React.memo(WorkspaceHistory);
