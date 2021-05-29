import { Image } from '@chakra-ui/image';
import { Box, Stack, Text } from '@chakra-ui/layout';
import { memo, VFC } from 'react';

type Props = {
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: () => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, userName, fullName, onClick } = props;
  return (
    <Box
      w='260px'
      h='260px'
      bg='white'
      borderRadius='10px'
      shadow='md'
      p={4}
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
      onClick={onClick}
    >
      <Stack textAlign='center'>
        <Image
          boxSize='160px'
          borderRadius='full'
          alt={userName}
          m='auto'
          src={imageUrl}
        />
        <Text fontSize='lg' fontWeight='bold'>
          {userName}
        </Text>
        <Text fontSize='sm' fontWeight='gray'>
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
