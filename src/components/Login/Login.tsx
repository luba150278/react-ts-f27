import { FormEvent, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

import { fetchAuth } from '../../share/api/auth.api';
import { useAppDispatch, useAppSelector } from '../../share/hooks.toolkit';

interface IForm {
  email: string;
  password: string;
}
const initialState: IForm = {
  email: '',
  password: '',
};
export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState<IForm>(initialState);
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();
  const handlerSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(fetchAuth({ body: form, path: '/users/login' }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  useEffect(() => {
    if (token !== '') {
      navigate('/');
    }
  }, [navigate, token]);
  return (
    <Form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        handlerSubmit(e);
      }}
    >
      <Form.Group className='mb-3'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          name='email'
          placeholder='name@example.com'
          value={form.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          name='password'
          value={form.password}
          onChange={handleChange}
        />
      </Form.Group>
      <Button type='submit'>Login</Button>
    </Form>
  );
}
