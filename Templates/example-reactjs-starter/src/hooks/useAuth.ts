import Cookies from 'js-cookie';
import { useAuthContext } from '../context/auth-context';

export function useAuth() {
  const AuthContext = useAuthContext();
  if (!AuthContext) throw Error('Missing AuthContext');
  const { user, signout, signin, loginURL } = AuthContext;
  const userId = user?.uid;
  const isSignedIn = !!userId;
  const orgId = user?.orgId;
  const getToken = () => {
    const accessToken = Cookies.get('access_token');
    if (!accessToken) {
      throw Error('Missing Access Token');
    }
    return accessToken;
  };
  // TODO: add property isLoaded, sessionId, orgRole, orgPermissions, orgSlug, has,
  return { isSignedIn, userId, orgId, loginURL, signout, signin, getToken };
}
