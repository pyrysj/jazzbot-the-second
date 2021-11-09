import axios, { AxiosInstance } from 'axios';
import config = require('./config.json');

axios.get('https://www.googleapis.com/youtube/v3/search?', {
    params: {
        key: config.key,
        part: 'snippet',
        maxResults: 25,
        q: 'jazz'
    }
    })
    .then(function (response) {
        for (var i in response.items){

        }
        #console.log(response);
      })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
    // always executed
    });  
