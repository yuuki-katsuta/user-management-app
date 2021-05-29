import axios from 'axios';
import { useCallback, useState } from 'react';
import { User } from '../types/api/user';
import { useMessgae } from './useMessage';

export const useAllUsers = () => {
  const { showMessage } = useMessgae();
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<User>>([]); //stateに型を付与

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch(() => {
        showMessage({
          title: 'ユーザー取得に失敗しました',
          status: 'error',
        });
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line
  }, []);
  return { getUsers, loading, users };
};
