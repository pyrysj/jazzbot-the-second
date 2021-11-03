import { createAudioPlayer, VoiceConnection,  } from "@discordjs/voice";
import ytdl from 'ytdl-core';
import search from 'youtube-search';
import key = require('./config.json');
// had to move to typescript, will hopefully be cleaned
// up in future revisions, right now a pain to look through

// NB: means the audio player, not "our" player!
const player = createAudioPlayer();

// need to think about where to "tidily" store these options, mabye as a .json?
// for now just something to get us going -- will eventually be made more sophisticated!
let opts = {
    maxResults: 25,
    type: 'video',
    videoDuration: 'long'
}

export class Player {
    searchArg: string;
    connection : VoiceConnection;

    constructor(searchArg: string, connection: VoiceConnection) {
        this.searchArg = searchArg;
        this.connection = connection;
    }

    // function to play songs
    play(): void {
        console.log(this.searchArg);
        const subscription = this.connection.subscribe(player);
        if (subscription) {
            // Unsubscribe after 5 seconds (stop playing audio on the voice connection)
            // this is where the initial part of playing music will be done, might just 
            // look at interacting with the youtube api directly for an extra challenge
            setTimeout(() => subscription.unsubscribe(), 5_000);
        }	
    }
    // function to eventually show currently playing song
    // NB: will need to be coded in as a command, etc etc§
    nowPlaying(): void {
        console.log('TBI');
    }
}