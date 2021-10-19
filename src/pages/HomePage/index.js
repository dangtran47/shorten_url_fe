import { get } from "lodash"
import { useForm } from "react-hook-form"
import { connect } from "react-redux"
import validUrl from "valid-url"

import { createShortenUrlRequest } from '../../actions'
import {getCurrentOrigin} from '../../utils'

const shortenNamePattern = /(?:[A-Za-z0-9]{6,}|)/

const HomePage = ({ shortenUrl, createShortenUrlRequest }) => {
  const { register, handleSubmit, formState: { errors }, } = useForm()

  const onSubmit = (data) => {
    createShortenUrlRequest(data)
  }

  return (
    <div>
      <h1>Shorten URL page</h1>
      <div className='shorten-section'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='shorten-url'>
            <div className='original-url-block'>
              <input
                type='text'
                className='original-url-input'
                placeholder='Your URL'
                {...register('originalUrl', { validate: value => !!validUrl.isWebUri(value) })}
              />
              {errors.originalUrl && <div>Input URL is invalid</div>}
            </div>
            <div className='shorten-name-block'>
              <label>{getCurrentOrigin()}/</label>
              <input
                type='text'
                className='shorten-name-input'
                placeholder='YourURL'
                {...register('shortenName', { pattern: shortenNamePattern })}
              />
              {errors.shortenName && <div>Shorten must includes minimum 6 characters and numbers or empty.</div>}
            </div>
          </div>
          <button className='shorten-button' type='submit'>Get shorten URL</button>
        </form>
        {shortenUrl && <div>{shortenUrl}</div>}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  shortenUrl: get(state, 'url.shortenUrl'),
})

const mapDispatchToProps = dispatch => ({
  createShortenUrlRequest: payload => dispatch(createShortenUrlRequest(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage)

