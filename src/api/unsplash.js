import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
      'Client-ID f780e12527bb84cd59fcb0884438de78ba8bc26444159745ac9b33a52fdfd1cd'
  }
});