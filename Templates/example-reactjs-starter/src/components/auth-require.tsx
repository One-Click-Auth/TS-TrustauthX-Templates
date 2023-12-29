import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function AuthRequire({ children }: { children: React.ReactNode }) {
  const { isSignedIn } = useAuth();
  const location = useLocation();
  const { pathname } = location;

  return isSignedIn ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: pathname }} />
  );
}
