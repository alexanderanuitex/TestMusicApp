import axios from 'axios';
import promise from 'promise';
import { AsyncStorage } from 'react-native';

const axiosInstance = axios.create({
  headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer BQAvB7PNUG6zvQm_gKOazHvUNwIGijEAyBCh9HKogHt4LNaUw-BRQmAmLRHZ1g58ssypv4phXrjvoq63VCEpDbJtg659D_2LF6glR_9U4fFOTVc14-g2zVTGUN-ip85qyq3DkPEeq4u_4ub6nLN85mSCtTVku4-w1shYd0WhTeHE1s9WsDNEHBhe1ekrpO_FaeVaPQQhu49d63M8A135JGxkPNE0-J-lDfJBSTUdbDig8FNo4MTYzuL_feh80eYqKfnIYFGAitVBMICTTQLxARsuNd5aaQYV'
    }
});

axiosInstance.interceptors.request.use(async (config) => {

    if (config.method !== 'OPTIONS') {
      config.headers.Authorization = 'Bearer BQAvB7PNUG6zvQm_gKOazHvUNwIGijEAyBCh9HKogHt4LNaUw-BRQmAmLRHZ1g58ssypv4phXrjvoq63VCEpDbJtg659D_2LF6glR_9U4fFOTVc14-g2zVTGUN-ip85qyq3DkPEeq4u_4ub6nLN85mSCtTVku4-w1shYd0WhTeHE1s9WsDNEHBhe1ekrpO_FaeVaPQQhu49d63M8A135JGxkPNE0-J-lDfJBSTUdbDig8FNo4MTYzuL_feh80eYqKfnIYFGAitVBMICTTQLxARsuNd5aaQYV';
    }
  
    return config;
}, (error) => {

  return promise.reject(error);
});

export default axiosInstance;