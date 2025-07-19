'use client';
import React, { useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Header from '@/components/custom/Header';
import { MessagesContext } from '@/context/MessagesContext';
import { UserDetailContext } from '@/context/UserDetailContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { ActionContext } from '@/context/ActionContext';
import { useRouter } from 'next/navigation';
import { WavyBackground } from '@/components/ui/wavy-background';
import Lookup from '@/data/Lookup';
import AppSideBar from '@/components/custom/AppSideBar';

function Provider({ children }) {
  const [messages, setMessages] = useState();
  const [userDetail, setUserDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [action, setAction] = useState();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const router = useRouter();
  const convex = useConvex();

  useEffect(() => {
    IsAuthenticated();
  }, []);

  const IsAuthenticated = async () => {
    try {
      if (typeof window !== 'undefined') {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
          setIsLoading(false);
          router.push('/');
          return;
        }

        // Fetch latest data from database
        const result = await convex.query(api.users.GetUser, {
          email: user?.email,
        });

        if (result) {
          // Ensure we have the user ID from the database
          const updatedUser = {
            ...user,
            _id: result._id, // Add the database ID
            token: result.token,
          };
          setUserDetail(updatedUser);
          // Update localStorage with the latest data
          localStorage.setItem('user', JSON.stringify(updatedUser));
        } else {
          console.error('User not found in database');
          setIsLoading(false);
          router.push('/');
        }
      }
    } catch (error) {
      console.error('Authentication error:', error);
      setIsLoading(false);
      router.push('/');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <WavyBackground
        containerClassName="absolute inset-0 -z-10 pointer-events-none"
        colors={[Lookup.COLORS.BLUE, Lookup.COLORS.LABEL, Lookup.COLORS.SUBHEADING, Lookup.COLORS.BACKGROUND, Lookup.COLORS.CHAT_BACKGROUND]}
        backgroundFill={Lookup.COLORS.BACKGROUND}
        waveOpacity={0.4}
        blur={12}
        speed="very-fast"
      />
      <GoogleOAuthProvider
        clientId={process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID_KEY}
      >
        <UserDetailContext.Provider value={{ userDetail, setUserDetail, isLoading }}>
          <MessagesContext.Provider value={{ messages, setMessages }}>
            <ActionContext.Provider value={{action, setAction}}>
              <NextThemesProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
              >
                <div className="relative h-screen w-full">
                  <AppSideBar visible={sidebarVisible} />
                  <main className={`h-full transition-all duration-300 ease-in-out ${
                    sidebarVisible ? 'ml-[280px]' : 'ml-0'
                  }`}>
                    <Header onMenuClick={() => setSidebarVisible(!sidebarVisible)} />
                    <div className="overflow-y-auto h-[calc(100vh-80px)]">
                      {children}
                    </div>
                  </main>
                </div>
              </NextThemesProvider>
            </ActionContext.Provider>
          </MessagesContext.Provider>
        </UserDetailContext.Provider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default Provider;