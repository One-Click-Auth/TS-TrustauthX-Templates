import { useAuthContext } from '../context/auth-context';

// TODO: TBD, disucss with team about properties to expose
export function useProfile() {
  const AuthContext = useAuthContext();
  if (!AuthContext) throw Error('Missing AuthContext');
  // TODO: add missing properties
  return {};
}
