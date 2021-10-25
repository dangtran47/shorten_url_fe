import { useEffect } from 'react';
import { get, isEmpty } from 'lodash';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import validUrl from 'valid-url';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {
  createShortenUrlRequest,
  fetchAllUrlsRequest,
  alertSuccess,
} from '../../actions';
import { getCurrentOrigin } from '../../utils';

import UserUrlTable from './UserUrlTable';
import './index.css';

const shortenNamePattern = /^([A-Za-z0-9]{6,})?$/;

const HomePage = ({
  loggedIn,
  fetchAllUrls,
  shortenUrl,
  createShortenUrlRequest,
  userUrls,
  alertSuccess,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createShortenUrlRequest(data);
  };

  const onCopy = () => {
    alertSuccess({ message: 'Copy URL to clipboard.' });
  };

  useEffect(() => {
    if (loggedIn) fetchAllUrls();
  }, [loggedIn, shortenUrl]);

  return (
    <div className='homepage'>
      <div className='container'>
        <h1>Shorten URL page</h1>
        <div className='shorten-section'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='original-url-block'>
              <input
                type='text'
                className='original-url-input'
                placeholder='Your URL'
                {...register('originalUrl', {
                  validate: (value) => !!validUrl.isWebUri(value),
                })}
              />
              {errors.originalUrl && (
                <div className='error'>Input URL is invalid</div>
              )}
            </div>
            <div className='shorten-name-block'>
              <div className='shorten-name'>
                <label className='origin'>{getCurrentOrigin()}/</label>
                <input
                  type='text'
                  className='shorten-name-input'
                  placeholder='Name'
                  {...register('shortenName', { pattern: shortenNamePattern })}
                />
              </div>
              {errors.shortenName && (
                <div className='error'>
                  Shorten must includes minimum 6 characters and numbers or
                  empty.
                </div>
              )}
            </div>

            <button className='shorten-button' type='submit'>
              Get URL
            </button>
          </form>
          {shortenUrl && (
            <CopyToClipboard text={shortenUrl} onCopy={onCopy}>
              <div className='shorten-url'>{shortenUrl}</div>
            </CopyToClipboard>
          )}
        </div>
        {!isEmpty(userUrls) && <UserUrlTable userUrls={userUrls} />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  shortenUrl: get(state, 'url.shortenUrl'),
  userUrls: get(state, 'url.userUrls'),
  loggedIn: get(state, 'authentication.loggedIn'),
});

const mapDispatchToProps = (dispatch) => ({
  createShortenUrlRequest: (payload) =>
    dispatch(createShortenUrlRequest(payload)),
  fetchAllUrls: (payload) => dispatch(fetchAllUrlsRequest(payload)),
  alertSuccess: (payload) => dispatch(alertSuccess(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
