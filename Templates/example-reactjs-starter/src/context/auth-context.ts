import React from 'react';

export interface UserContract {
  name?: string;
  uid?: string;
  orgId?: string;
  scope?: string;
  img?: string;
  email?: string;
}

export interface AuthState {
  user?: UserContract;
  loginURL: string;
  updateState: (newState: Partial<AuthState>) => void;
  signin: (code: string) => void;
  signout: () => void;
}

const defaultState: AuthState = {
  user: {},
  loginURL: '',
  updateState: (newState?: Partial<AuthState>) => {},
  signin: (code?: string) => {},
  signout: () => {},
};

export const AuthContext = React.createContext<AuthState>(defaultState);

export function useAuthContext() {
  return React.useContext(AuthContext);
}
