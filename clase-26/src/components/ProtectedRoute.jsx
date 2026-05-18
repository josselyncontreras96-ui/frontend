import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState, useEffect } from "react";
import { getProfile } from "../services/AuthService";

function ProtectedRouter({ children }) {
  const { user, authLoading, logout } = useAuth();
  const [checking, setChecking] = useState(true);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const verifyAccess = async () => {
      try {
        await getProfile();
        setIsValid(true);
      } catch {
        logout();
        setIsValid(false);
      } finally {
        setChecking(false);
      }
    };

    verifyAccess();
  }, [children]);

  if (authLoading || checking) {
    return <p>Verificando usuario...</p>;
  }

  if (!user || !isValid) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRouter;