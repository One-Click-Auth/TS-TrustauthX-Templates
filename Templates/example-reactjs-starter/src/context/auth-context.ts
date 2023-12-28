import React from 'react';

export interface UserContract {
  id?: number;
  orgId?: string;
}

export interface AuthState {
  user?: UserContract;
  updateState: (newState: Partial<AuthState>) => void;
}

const defaultState: AuthState = {
  user: {},
  updateState: (newState?: Partial<AuthState>) => {},
};

export const AuthContext = React.createContext<AuthState>(defaultState);

export function useAuthContext() {
  return React.useContext(AuthContext);
}
