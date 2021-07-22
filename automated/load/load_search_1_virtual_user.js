import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://www.bunnings.com.au/search/products?q=hammer&sort=BoostOrder&page=1');
  sleep(1);
}