import { useSearchParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useUser } from '../hooks/useUser';
import { useEffect } from 'react';

export function UserPage() {
  const { signin, isSignedIn } = useAuth();
  const { user } = useUser();
  const [searchParams] = useSearchParams();

  // TODO: comparse useEffect with normal runOnlyOnce
  useEffect(() => {
    if (user) return;
    const code = searchParams.get('code');
    if (!code) {
      throw Error('Missing Code.');
    }
    signin(code);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isSignedIn) {
    return null;
  }

  return (
    <div className="user-info-container">
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
