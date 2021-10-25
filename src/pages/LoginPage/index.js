import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import get from 'lodash/get';
import { Redirect } from 'react-router-dom';

import { signInRequest } from '../../actions';
import { history } from '../../helper/history';

import './index.css';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Invalid email.'),
  password: Yup.string()
    .required('Name is required')
    .length(8, 'Password must be at least 8 characters.'),
});

const LoginPage = ({ success, signIn, loggingIn, loggedIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    signIn(data);
  };

  useEffect(() => {
    if (success) history.push('/');
  }, [success]);

  if (loggedIn) return <Redirect to='/' />;

  return (
    <div className='login-page'>
      <div className='container'>
        <div className='login-form-wrapper'>
          <form>
            <div className='title'>Login</div>

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

            <button
              type='button'
              disabled={loggingIn}
              className='register-button'
              onClick={handleSubmit(onSubmit)}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggingIn: get(state, 'authentication.loggingIn'),
  loggedIn: get(state, 'authentication.loggedIn'),
  success: get(state, 'authentication.success'),
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (payload) => dispatch(signInRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
