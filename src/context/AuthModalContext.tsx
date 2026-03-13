import React, { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import AuthModal from "../Components/AuthModal";

type AuthModalContextType = {
  openAuthModal: (redirectTo?: string, prevPath?: string) => void;
  closeAuthModal: () => void;
  handleLoginSuccess: () => void;
};

type ProviderProps = {
  children: ReactNode;
};

const AuthModalContext = createContext<AuthModalContextType | undefined>(
  undefined
);

export const AuthModalProvider: React.FC<ProviderProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [redirectPath, setRedirectPath] = useState<string | null>(null);
  const [previousPath, setPreviousPath] = useState<string | null>(null);

  const navigate = useNavigate();

  const openAuthModal = (redirectTo?: string, prevPath?: string) => {
    if (redirectTo) setRedirectPath(redirectTo);
    if (prevPath) setPreviousPath(prevPath);
    setOpen(true);
  };

  const closeAuthModal = () => {
    setOpen(false);

    if (previousPath) {
      navigate(previousPath);
    }
  };

  const handleLoginSuccess = () => {
    setOpen(false);

    if (redirectPath) {
      navigate(redirectPath);
    }
  };

  return (
    <AuthModalContext.Provider
      value={{
        openAuthModal,
        closeAuthModal,
        handleLoginSuccess,
      }}
    >
      {children}

      {/* Global Auth Modal */}
      <AuthModal open={open} onClose={closeAuthModal} defaultView="login" />
    </AuthModalContext.Provider>
  );
};

export const useAuthModal = (): AuthModalContextType => {
  const context = useContext(AuthModalContext);

  if (!context) {
    throw new Error("useAuthModal must be used inside AuthModalProvider");
  }

  return context;
};