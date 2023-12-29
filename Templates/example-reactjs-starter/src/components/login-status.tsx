import { useUser } from '../hooks/useUser';

export function LoginStatus() {
  const { user } = useUser();
  return (
    <p>
      <span>Login Status:&nbsp;</span>
      <span>{user ? `Signed in as ${user.name}` : 'Your are Signed out'}</span>
    </p>
  );
}
