import { VoiceConnection } from "@discordjs/voice";
// had to move to typescript, will hopefully be cleaned
// up in future revisions, right now a pain to look through
export class Player{
    searchArg: string;
    connection : VoiceConnection;
    constructor(searchArg: string, connection: VoiceConnection) {
        this.searchArg = searchArg;
        this.connection = connection;
    }
}