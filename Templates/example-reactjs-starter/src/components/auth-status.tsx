import { useAuth } from '../hooks/useAuth';
import { useUser } from '../hooks/useUser';

export function LoginStatus() {
  const { signout } = useAuth();
  const { user } = useUser();
  if (!user?.uid) {
    return <p>Your are not logged in.</p>;
  }
  return (
    <p>
      Welcome <strong className="username">{user.name}</strong>&nbsp;
      <button onClick={() => signout()} type="button">
        Sign out
      </button>
    </p>
  );
}
