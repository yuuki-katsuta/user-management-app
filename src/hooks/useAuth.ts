import axios from 'axios';
import { useState } from 'react';
import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { User } from '../types/api/user';

export const useAuth = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      //getで取得するデータの型を定義する
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            history.push('/home');
          } else {
            alert('ユーザーが見つかりません');
          }
        })
        .catch(() => {
          alert('ログインできません');
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [history]
  );
  return { login, loading };
};
