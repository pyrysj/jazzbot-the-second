import { createAudioPlayer, AudioPlayer, VoiceConnection  } from "@discordjs/voice";
// had to move to typescript, will hopefully be cleaned
// up in future revisions, right now a pain to look through


// Will eventually be tweaked
const player = createAudioPlayer();

export class Player {
    searchArg: string;
    connection : VoiceConnection;

    constructor(searchArg: string, connection: VoiceConnection) {
        this.searchArg = searchArg;
        this.connection = connection;
    }

    play(): void {
        const subscription = this.connection.subscribe(player);

        if (subscription) {
            // Unsubscribe after 5 seconds (stop playing audio on the voice connection)
            // this is where the initial part of playing music will be done, might just 
            // look at interacting with the youtube api directly for an extra challenge
            setTimeout(() => subscription.unsubscribe(), 5_000);
        }	
    }
}