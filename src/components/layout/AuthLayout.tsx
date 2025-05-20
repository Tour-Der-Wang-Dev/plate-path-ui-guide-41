
import React from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  type: "customer" | "vendor" | "driver" | "admin";
  authType: "login" | "signup";
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ 
  children, 
  title, 
  subtitle, 
  type, 
  authType 
}) => {
  const getAlternateLink = () => {
    if (authType === "login") {
      return type === "admin" 
        ? null 
        : <Link to={`/${type}/signup`} className="text-food-primary font-medium hover:underline">Sign up</Link>;
    } else {
      return <Link to={`/${type}/login`} className="text-food-primary font-medium hover:underline">Log in</Link>;
    }
  };

  const getAlternateText = () => {
    if (authType === "login") {
      return type === "admin" 
        ? null 
        : "Don't have an account?";
    } else {
      return "Already have an account?";
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 md:p-6 bg-muted/30">
      <div className="w-full max-w-md space-y-8 p-8 bg-background rounded-2xl shadow-soft">
        <div className="text-center">
          <Link to="/" className="inline-block mb-6">
            <div className="h-12 w-12 rounded-md bg-food-primary flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-2xl">F</span>
            </div>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight mb-2">{title}</h1>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        
        <div>
          {children}
        </div>
        
        {(getAlternateText() && getAlternateLink()) && (
          <div className="text-center text-sm">
            <span className="text-muted-foreground">{getAlternateText()}</span>{" "}
            {getAlternateLink()}
          </div>
        )}
        
        <div className="text-center text-sm text-muted-foreground">
          <Link to="/" className="hover:underline">Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
