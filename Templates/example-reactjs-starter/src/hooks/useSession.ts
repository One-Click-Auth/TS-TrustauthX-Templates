import { useAuthContext } from '../context/auth-context';

// TODO: TBD, disucss with team about properties to expose
export function useSession() {
  const AuthContext = useAuthContext();
  if (!AuthContext) throw Error('Missing AuthContext');
  const { user } = AuthContext;
  const isSignedIn = !!user;
  //TODO: add property isLoaded, session
  return { isSignedIn };
}
