import { map } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import get from 'lodash/get'

const BASE_URL = 'http://localhost:8000'

const createShortenUrlSelector = response => ({
  shortenUrl: get(response, 'data.shorten_url'),
})

const featchOriginalUrlSelector = response => ({
  originalUrl: get(response, 'data.original_url')
})

const createShortenUrl = ({ originalUrl, shortenName = '' }) => {
  return ajax({
    url: `${BASE_URL}/map_urls`,
    method: 'POST',
    body: {
      original_url: originalUrl,
      shorten_name: shortenName,
    },
    crossDomain: true,
    responseType: 'json',
  }).pipe(
    map(response => createShortenUrlSelector(response.response)),
  )
}

const fetchOriginalUrl = ({ shortenUrl }) => {
  return ajax({
    url: `${BASE_URL}/map_urls/${encodeURIComponent(shortenUrl)}`,
    method: 'GET',
    crossDomain: true,
  }).pipe(
    map(response => featchOriginalUrlSelector(response.response)),
  )
}

export default {
  createShortenUrl,
  fetchOriginalUrl,
}
