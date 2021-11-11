import { createAudioPlayer, VoiceConnection, createAudioResource } from "@discordjs/voice";
import ytdl from 'ytdl-core';
import youtubeSearch from "youtube-search";
import config = require('./config.json');
import { Search } from "./search";
// had to move to typescript, will hopefully be cleaned
// up in future revisions, right now a pain to look through

// NB: means the audio player, not "our" player!
// will eventually be moved to another file? mabye? with customisations and 
// everything
const player = createAudioPlayer();

// need to think about where to "tidily" store these options, mabye as a .json?
// for now just something to get us going -- will eventually be made more sophisticated!
var opts: youtubeSearch.YouTubeSearchOptions = {
    maxResults: 10,
    key: config.key
}

// tidy function to search and return the url of a result


export class Player {
    searchArg: string;
    connection : VoiceConnection;
    songURL: string;

    constructor(searchArg: string, connection: VoiceConnection) {
        this.searchArg = searchArg;
        this.connection = connection;
        this.songURL = ""
    }

    // function to play songs
    play(): void {
        // just a basic player for now, does as described really
        const search = new Search();
        const res = search.yt_search('jazz');
        
        res.then(function (result) {
            console.log(result)
        })
        
        //onst subscription = this.connection.subscribe(player);
        //const stream = ytdl(this.songURL, { filter: 'audioonly', dlChunkSize: 0 });
        //const dispatcher = player.play(createAudioResource(stream));
    }
    // function to eventually show currently playing song
    // NB: will need to be coded in as a command, etc etc§
    nowPlaying(): void {
        console.log('TBI');
    }
}

