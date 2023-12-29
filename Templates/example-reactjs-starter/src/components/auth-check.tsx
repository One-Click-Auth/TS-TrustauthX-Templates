import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function AuthCheck() {
  const { isSignedIn, loginURL } = useAuth();
  if (!isSignedIn) {
    window.location.replace(loginURL);
  }
  return <Navigate to={'/'} replace />;
}
