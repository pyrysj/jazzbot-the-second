import axios from 'axios';
import config = require('./config.json');

// a very rudamentary search api
// there are probably better ways & ways that increase modularity
// but for a simple discord bot, even this is kinda overkill haha
export class Search {
    constructor(){

    }
    public async yt_search(searchArg: string): Promise<string>{
        return new Promise<string>((resolve) => {
            axios.get('https://www.googleapis.com/youtube/v3/search?', {
                params: {
                    key: config.key,
                    part: 'snippet',
                    maxResults: 25,
                    q: searchArg,
                }
                })
                // for now just returns the first video id 
                .then(function (response) {
                    resolve(response.data.items[1].id.videoId);
                  })
                .catch(function (error) {
                    console.log(error);
                })
        });
    }
}