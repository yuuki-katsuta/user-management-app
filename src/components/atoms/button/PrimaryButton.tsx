import { memo, VFC, ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  //disabled, loading はオプショナルな値なので初期値を定める
  const { children, onClick, disabled = false, loading = false } = props;
  return (
    <Button
      bg='teal.400'
      color='white'
      isFullWidth
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
      isLoading={loading}
      disabled={disabled || loading}
    >
      {children}
    </Button>
  );
});
