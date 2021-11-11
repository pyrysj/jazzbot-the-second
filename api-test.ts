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
        // iterates through the response we got and prints out video id
        for (let i = 0; i<response.data.items.length; i++) {
            console.log(response.data.items[i].id.videoId);
        }
      })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
    // always executed
    });  
