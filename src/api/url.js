import { map } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import get from 'lodash/get';
import _map from 'lodash/map';

import { BASE_URL } from '../constants';
import { authHeader } from '../helper/auth-header';

const createShortenUrlSelector = (response) => ({
  shortenUrl: get(response, 'data.shorten_url'),
});

const featchOriginalUrlSelector = (response) => ({
  originalUrl: get(response, 'data.original_url'),
});

const urlSelector = (url) => ({
  id: get(url, 'id'),
  shortenUrl: get(url, 'shorten_url'),
  originalUrl: get(url, 'original_url'),
  createdAt: get(url, 'created_at'),
  updatedAt: get(url, 'updated_at'),
});

const featchAllUrlsSelector = (response) => ({
  userUrls: _map(get(response, 'data'), urlSelector),
});

const createShortenUrl = ({ originalUrl, shortenName = '' }) => {
  return ajax({
    url: `${BASE_URL}/map_urls`,
    method: 'POST',
    body: {
      original_url: originalUrl,
      shorten_name: shortenName,
    },
    headers: authHeader(),
    crossDomain: true,
    responseType: 'json',
  }).pipe(map((response) => createShortenUrlSelector(response.response)));
};

const fetchOriginalUrl = ({ shortenUrl }) => {
  return ajax({
    url: `${BASE_URL}/map_urls/${encodeURIComponent(shortenUrl)}`,
    method: 'GET',
    crossDomain: true,
  }).pipe(map((response) => featchOriginalUrlSelector(response.response)));
};

const fetchAllUrls = () => {
  return ajax({
    url: `${BASE_URL}/map_urls`,
    method: 'GET',
    crossDomain: true,
    headers: authHeader(),
  }).pipe(map((response) => featchAllUrlsSelector(response.response)));
};

export default {
  createShortenUrl,
  fetchOriginalUrl,
  fetchAllUrls,
};
