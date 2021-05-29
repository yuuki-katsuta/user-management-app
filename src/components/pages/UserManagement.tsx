import { Center, Wrap, WrapItem } from '@chakra-ui/layout';
import { useDisclosure } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/spinner';
import React, { memo, useCallback, useEffect, VFC } from 'react';
import { useAllUsers } from '../../hooks/useAllUsers';
import { UserCard } from '../organisms/user/UserCard';
import { UserDetailModal } from '../organisms/user/UserDetailModal';

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();

  // eslint-disable-next-line
  useEffect(() => getUsers(), []);
  // eslint-disable-next-line
  const onClickUser = useCallback(() => onOpen(), []);

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
                imageUrl='https://source.unsplash.com/random'
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
