import React from 'react';
import { AuthContext, AuthState } from './auth-context';
import { AuthLiteClient } from 'trustauthx';

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
  const updateState = (newState: Partial<AuthState>) => {
    setState({ ...state, ...newState });
  };
  return (
    <AuthContext.Provider value={{ ...state, updateState }}>
      {props.children}
    </AuthContext.Provider>
  );
};
