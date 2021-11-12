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
const search = new Search();

export class Player {
    searchArg: string;
    connection : VoiceConnection;
    songURL: Promise<string>;

    constructor(searchArg: string, connection: VoiceConnection) {
        this.searchArg = searchArg;
        this.connection = connection;
        this.songURL = new Promise<string>((value)=>{
            console.log(value)
        })
    }

    // function to play songs
    play(): void {
        // just a basic player for now, does as described really

        const res = search.yt_search('jazz');

        res.then(function (result) {
            return result
        })
        
        //const subscription = this.connection.subscribe(player);
        //const stream = ytdl(this.songURL, { filter: 'audioonly', dlChunkSize: 0 });
        //const dispatcher = player.play(createAudioResource(stream));
    }
    // function to eventually show currently playing song
    // NB: will need to be coded in as a command, etc etc§
    nowPlaying(): void {
        console.log('TBI');
    }

}

