import React from "react";
import LoginForm from "./LoginForm";
import { Button } from "@/components/ui/button";

interface LoginHeroProps {
  onLogin?: (email: string, password: string) => void;
  onRegister?: () => void;
  isLoading?: boolean;
  error?: string;
}

const LoginHero = ({
  onLogin = () => {},
  onRegister = () => {},
  isLoading = false,
  error = "",
}: LoginHeroProps) => {
  return (
    <div className="relative w-full h-[600px] bg-blue-50">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/40" />
      </div>

      {/* Content container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Left side - Welcome text */}
        <div className="w-1/2 text-white pr-8">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Your Health Portal
          </h1>
          <p className="text-xl mb-6">
            Access your medical records, schedule appointments, and manage your
            healthcare journey all in one place.
          </p>
          <Button
            onClick={onRegister}
            variant="secondary"
            size="lg"
            className="text-blue-900 bg-white hover:bg-blue-50"
          >
            New Patient Registration
          </Button>
        </div>

        {/* Right side - Login form */}
        <div className="w-1/2 flex justify-center">
          <LoginForm onSubmit={onLogin} isLoading={isLoading} error={error} />
        </div>
      </div>
    </div>
  );
};

export default LoginHero;
