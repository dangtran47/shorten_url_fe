import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import get from 'lodash/get';

import { registerUserRequest } from '../../actions';
import { history } from '../../helper/history';

import './index.css';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Invalid email.'),
  password: Yup.string()
    .required('Name is required')
    .min(8, 'Password must be at least 8 characters.'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Password do not match'
  ),
});

const RegisterPage = ({ success, registering, registerUser, loggedIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    registerUser(data);
  };

  useEffect(() => {
    if (success) history.push('/login');
  }, [success]);

  if (loggedIn) return <Redirect to='/' />;

  return (
    <div className='register-page'>
      <div className='container'>
        <div className='register-form-wrapper'>
          <form>
            <div className='title'>Register</div>

            <div className='form-field'>
              <label className='field-label'>email</label>
              <input
                type='text'
                className='field-input'
                placeholder='your email'
                {...register('email')}
              />
              {errors.email && (
                <div className='field-error'>Email is invalid.</div>
              )}
            </div>

            <div className='form-field'>
              <label className='field-label'>password</label>
              <input
                type='password'
                className='field-input'
                placeholder='your password'
                {...register('password')}
              />
              {errors.password && (
                <div className='field-error'>Password is invalid.</div>
              )}
            </div>

            <div className='form-field'>
              <label className='field-label'>confirm password</label>
              <input
                type='password'
                className='field-input'
                placeholder='your confirm password'
                {...register('confirmPassword')}
              />
              {errors.confirmPassword && (
                <div className='field-error'>Confirm password invalid.</div>
              )}
            </div>

            <button
              type='button'
              disabled={registering}
              className='register-button'
              onClick={handleSubmit(onSubmit)}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  registering: get(state, 'registration.registering'),
  success: get(state, 'registration.success'),
  loggedIn: get(state, 'authentication.loggedIn'),
});

const mapDispatchToProps = (dispatch) => ({
  registerUser: (payload) => dispatch(registerUserRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
