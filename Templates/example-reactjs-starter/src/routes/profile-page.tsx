import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useUser } from '../hooks/useUser';

export function ProfilePage() {
  const location = useLocation();
  const to = location.state?.from ?? '/';
  const { getToken } = useAuth();
  const { getEditProfileURL } = useUser();
  const accessToken = getToken();

  async function redirectToEditProfileULR() {
    const editProfileURL = await getEditProfileURL(accessToken);
    window.location.replace(editProfileURL);
  }

  redirectToEditProfileULR();

  return <Navigate to={to} state={{ from: to }} replace />;
}
