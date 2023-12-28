import { useAuthContext } from '../context/auth-context';

export function useProfile() {
  const AuthContext = useAuthContext();
  if (!AuthContext) throw Error('Missing AuthContext');
  // TODO: add missing properties
  return {};
}
