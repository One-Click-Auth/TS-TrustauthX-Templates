import { useAuthContext } from '../context/auth-context';

export function useAuth() {
  const AuthContext = useAuthContext();
  if (!AuthContext) throw Error('Missing AuthContext');
  const { user } = AuthContext;
  const isSignedIn = !!user;
  const userId = user?.uid;
  const orgId = user?.orgId;
  const signOut = () => {};
  // TODO: return token
  const getToken = () => void 0;
  // TODO: add property isLoaded, sessionId, orgRole, orgPermissions, orgSlug, has,
  return { isSignedIn, userId, orgId, signOut, getToken };
}
