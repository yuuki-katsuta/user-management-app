import { Center, Wrap, WrapItem } from '@chakra-ui/layout';
import { useDisclosure } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/spinner';
import { memo, useCallback, useEffect, VFC } from 'react';
import { useAllUsers } from '../../hooks/useAllUsers';
import { useSelectUser } from '../../hooks/useSelectUser';
import { UserCard } from '../organisms/user/UserCard';
import { UserDetailModal } from '../organisms/user/UserDetailModal';

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();

  // eslint-disable-next-line
  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(
    (id: number) => {
      onOpen();
      onSelectUser({ id, users });
    },
    [users, onOpen, onSelectUser]
  );

  return (
    <>
      {loading ? (
        <Center h='100vh'>
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx='auto'>
              <UserCard
                id={user.id}
                imageUrl='https://source.unsplash.com/random'
                userName={user.username}
                fullName={user.name}
                onClick={() => onClickUser(user.id)}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} />
    </>
  );
});
