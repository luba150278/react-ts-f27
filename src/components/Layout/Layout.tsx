import { ReactNode, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../share/hooks.toolkit';
import { checkAuth } from '../../share/reducers/auth.reducer';
import Error from '../Error/Error';
import Header from '../Header/Header';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.loader.isLoading);
  useEffect(() => { dispatch(checkAuth()) }, [dispatch])
  return (
    <div className='wrap'>
      <Header />
      <div className='main'>
        {isLoading && <div className="container my-5">
          <Spinner animation="grow" variant="info" />
        </div>}
        <Error />
        {children}
      </div>
      <footer><div className="container"><p>footer</p></div></footer>
    </div>
  );
}

export const withLayout =  <Props extends object>(Component: React.ComponentType<Props>) =>
  function wLC(props: Props) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };