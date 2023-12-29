import { UserContract, useAuthContext } from '../context/auth-context';

export function useUser() {
  const AuthContext = useAuthContext();
  if (!AuthContext) throw Error('Missing AuthContext');
  const { user, getEditProfileURL, updateState } = AuthContext;
  const update = (newState: Partial<UserContract>) => {
    updateState({ user: { ...user, ...newState } });
  };
  const isSignedIn = !!user?.uid;
  // TODO: add property isLoaded
  return { isSignedIn, user, update, getEditProfileURL };
}
