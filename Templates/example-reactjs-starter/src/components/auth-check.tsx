import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function AuthCheck() {
  const { isSignedIn, loginURL } = useAuth();
  const location = useLocation();
  const to = location.state?.from ?? '/';
  if (!isSignedIn) {
    window.location.replace(loginURL);
  }
  return <Navigate to={to} state={{ from: to }} replace />;
}
