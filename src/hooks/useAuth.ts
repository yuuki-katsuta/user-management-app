import axios from 'axios';
import { useState } from 'react';
import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { User } from '../types/api/user';
import { useLoginUser } from './useLoginUser';
import { useMessgae } from './useMessage';

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessgae();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      //getで取得するデータの型を定義する
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin }); // res.dataを一度展開してからisAdminを追加する
            showMessage({ title: 'ログインしました', status: 'success' });
            history.push('/home');
          } else {
            showMessage({ title: 'ユーザーが見つかりません', status: 'error' });
            setLoading(false);
          }
        })
        .catch(() => {
          showMessage({ title: 'ログインできません', status: 'error' });
          setLoading(false);
        });
    },
    [history, showMessage, setLoginUser]
  );
  return { login, loading };
};
