import React from 'react';
import { AuthLiteClient } from 'trustauthx';
import Cookies from 'js-cookie';
import { AuthContext, AuthState } from './auth-context';

interface Props {
  apiKey: string;
  apiSecret: string;
  orgId: string;
  children: React.ReactNode;
}

export const AuthContextProvider = (props: Props) => {
  const [state, setState] = React.useState({});
  const authLiteClient = new AuthLiteClient(
    props.apiKey,
    props.apiSecret,
    props.orgId
  );
  const loginURL = authLiteClient.generateUrl();

  const setToken = (access_token: string) => {
    Cookies.set('access_token', access_token, {
      expires: 3600 * 24,
    });
  };

  const updateState = (newState: Partial<AuthState>) => {
    setState({ ...state, ...newState });
  };

  const signout = async () => {
    const accessToken = Cookies.get('access_token');
    if (!accessToken) {
      throw Error('Missing AccessToken');
    }
    await authLiteClient.revokeToken(accessToken, null, true);
    Cookies.remove('access_token');
    updateState({ user: {} });
  };

  const signin = async (code: string) => {
    const user = await authLiteClient.getUser(code);
    updateState({ user });
    setToken(user.access_token);
  };

  /**
   * Info:
   * Even if user access_token exists,
   * cannot use it get to user.
   * No Method Available for this.
   */

  return (
    <AuthContext.Provider
      value={{ ...state, updateState, signout, signin, loginURL }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
