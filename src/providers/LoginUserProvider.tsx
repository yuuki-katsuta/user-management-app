import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { User } from '../types/api/user';

type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  loginUser: LoginUser | null; // Userをベースににisadminという型を追加
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
  // stateの更新関数に対する型定義は,Dispatch<SetStateAction>
  // 更新関数の引数には、user情報を更新するので userの型である User | null を指定する
};

// コンテキストにどんな値を保持するかの型を定義
export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType //初期値の型を as で強制的に定義した
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
