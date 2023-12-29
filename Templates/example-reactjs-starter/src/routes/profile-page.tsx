import { useAuth } from '../hooks/useAuth';
import { useUser } from '../hooks/useUser';

export function ProfilePage() {
  const { getToken } = useAuth();
  const { getEditProfileURL } = useUser();

  async function redirectToEditProfileURL() {
    const accessToken = getToken();
    const editProfileURL = await getEditProfileURL(accessToken);
    window.location.replace(editProfileURL);
  }

  redirectToEditProfileURL();

  return <div>Redirecting to Profile...</div>;
}
