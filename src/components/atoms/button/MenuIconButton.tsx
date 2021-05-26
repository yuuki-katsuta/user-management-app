import { memo, VFC } from 'react';
import { IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

type Props = {
  onOpen: () => void;
  //引数、返す値がないからvoid型
};

export const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label='メニューボタン'
      size='sm'
      variant='unstyled'
      icon={<HamburgerIcon />}
      display={{ base: 'block', md: 'none' }}
      onClick={onOpen}
    />
  );
});
