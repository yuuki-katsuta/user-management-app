import { memo, VFC, ReactNode } from 'react';
import { Header } from '../organisms/layout/Header';

type Props = {
  children: ReactNode;
};

//<Props>でpropsの型を定義  childrenの型は,ReactNodeでOK
export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
