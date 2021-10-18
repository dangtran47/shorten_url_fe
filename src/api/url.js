import { map } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import get from 'lodash/get'

const BASE_URL = 'http://localhost:8000'

const getShortenUrlSelector = response => ({
  shortenUrl: get(response, 'data.shorten_url'),
})

const getShortenUrl = ({ originalUrl, shortenName = '' }) => {
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
    map(response => getShortenUrlSelector(response.response)),
  )
}

export default {
  getShortenUrl,
}
