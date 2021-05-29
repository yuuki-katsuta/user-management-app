import { useContext } from 'react';
import {
  LoginUserContext,
  LoginUserContextType,
} from '../providers/LoginUserProvider';

// useLoginUserを呼ぶだけでコンテキストの値を参照できる
export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
