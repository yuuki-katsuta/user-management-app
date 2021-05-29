import axios from 'axios';
import { useState } from 'react';
import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { User } from '../types/api/user';
import { useMessgae } from './useMessage';

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessgae();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      //getで取得するデータの型を定義する
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: 'ログインしました', status: 'success' });
            history.push('/home');
          } else {
            showMessage({ title: 'ユーザーが見つかりません', status: 'error' });
          }
        })
        .catch(() => {
          showMessage({ title: 'ログインできません', status: 'error' });
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [history, showMessage]
  );
  return { login, loading };
};
