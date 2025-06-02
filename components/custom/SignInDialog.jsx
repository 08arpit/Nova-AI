"use client";
import React, { useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Lookup from "@/data/Lookup";
import { Button } from "../ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { UserDetailContext } from "@/context/UserDetailContext";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import uuid4 from "uuid4";

function SignInDialog({ openDialog, closeDialog }) {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const CreateUser = useMutation(api.users.CreateUser);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          { headers: { Authorization: "Bearer " + tokenResponse?.access_token } }
        );

        const user = userInfo.data;
        const userId = await CreateUser({
          name: user?.name,
          email: user?.email,
          picture: user?.picture,
          uid: uuid4(),
        });

        const userData = {
          ...user,
          _id: userId,
          token: 50000
        };

        if (typeof window !== undefined) {
          localStorage.setItem("user", JSON.stringify(userData));
        }
        setUserDetail(userData);
        closeDialog(false);
      } catch (error) {
        console.error('Error during sign in:', error);
      }
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <Dialog open={openDialog} onOpenChange={closeDialog}>
      <DialogContent className="sm:max-w-[425px] bg-[#181818] border border-gray-800">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Welcome to Nova AI
          </DialogTitle>
          <DialogDescription className="text-center text-gray-400">
            Your AI-powered development companion. Sign in to start building amazing applications.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-6 py-4">
          <Button
            onClick={() => googleLogin()}
            className="w-full flex items-center justify-center gap-3 py-6 bg-white hover:bg-gray-100 text-gray-900 font-medium transition-all duration-200"
          >
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </Button>
          <div className="space-y-2">
            <p className="text-xs text-center text-gray-400">
              By continuing, you agree to Nova AI's Terms of Service and Privacy Policy.
            </p>
            <p className="text-xs text-center text-gray-500">
              Your data is encrypted and secure.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SignInDialog;
