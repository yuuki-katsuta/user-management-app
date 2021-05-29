import { useToast } from '@chakra-ui/toast';
import { useCallback } from 'react';

type Props = {
  title: string;
  status: 'info' | 'warning' | 'success' | 'error';
  //特定の文字列しか受け取れないようになった
};

export const useMessgae = () => {
  const toast = useToast();
  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props;
      toast({
        title,
        status,
        position: 'top',
        duration: 2000,
        isClosable: true,
      });
    },
    [toast]
  );
  return { showMessage };
};
