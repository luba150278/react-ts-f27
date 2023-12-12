import { Alert } from 'react-bootstrap';
import { useAppSelector } from '../../share/hooks.toolkit';

export default function Error() {
  const error = useAppSelector((state) => state.error);
  return error.message !== '' || error.errors ? (
    <section>
      <div className='container'>
        <div className='errors-wrap'>
          {error.message && <Alert variant='danger'>{error.message}</Alert>}
          {error.errors &&
            error.errors.length > 0 &&
            error.errors.map((error) => (
              <Alert variant='danger' key={error}>
                {error}
              </Alert>
            ))}
        </div>
      </div>
    </section>
  ) : null;
}
