"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const voice_1 = require("@discordjs/voice");
const youtube_search_1 = __importDefault(require("youtube-search"));
const config = require("./config.json");
// had to move to typescript, will hopefully be cleaned
// up in future revisions, right now a pain to look through
// NB: means the audio player, not "our" player!
// will eventually be moved to another file? mabye? with customisations and 
// everything
const player = (0, voice_1.createAudioPlayer)();
// need to think about where to "tidily" store these options, mabye as a .json?
// for now just something to get us going -- will eventually be made more sophisticated!
var opts = {
    maxResults: 10,
    key: config.key
};
// tidy function to search and return the url of a result
class Player {
    constructor(searchArg, connection) {
        this.searchArg = searchArg;
        this.connection = connection;
        this.songURL = "";
    }
    // function to play songs
    play() {
        // just a basic player for now, does as described really
        this.search("jazz");
        //onst subscription = this.connection.subscribe(player);
        //const stream = ytdl(this.songURL, { filter: 'audioonly', dlChunkSize: 0 });
        //const dispatcher = player.play(createAudioResource(stream));
    }
    search(searchArg) {
        let url = (0, youtube_search_1.default)(searchArg, opts, (err, results) => {
            if (err)
                return console.log(err);
            if (results) {
                return results[0].link;
            }
        });
        console.log(url);
    }
    // function to eventually show currently playing song
    // NB: will need to be coded in as a command, etc etc§
    nowPlaying() {
        console.log('TBI');
    }
}
exports.Player = Player;
