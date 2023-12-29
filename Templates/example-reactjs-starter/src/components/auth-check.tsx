import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function AuthCheck({ children }: { children: React.ReactNode }) {
  const { isSignedIn, loginURL } = useAuth();
  const location = useLocation();
  const to = location.state?.from ?? '/';
  if (!isSignedIn) {
    window.location.replace(loginURL);
  }
  return isSignedIn ? <Navigate to={to} replace /> : children;
}
