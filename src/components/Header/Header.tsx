import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../share/hooks.toolkit';
import { logout } from '../../share/reducers/auth.reducer';

export default function Header() {
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();
  return (
    <header>
      <div className='container d-flex gap-5 justify-space'>
        <Link to='/'>Home</Link>
        {token === '' && <Link to='/auth'>Auth</Link>}
        {token !== '' && <Button onClick={()=>dispatch(logout()) }>Logout</Button>}
      </div>
    </header>
  );
}
