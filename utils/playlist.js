const playlist = [];

export default function createPlaylist(data, actual_playlist){

    const playlist = [];

    if(actual_playlist !== null){
        olaylist = acutla_playlist;
    }

    if(data.length !== 0){
        let song = data[getRandom(data.length)];

        playlist.push(song);
        data.remove(song);

        return createPlaylist(data, playlist); 
    }
}
/*import getRandom from "./utils.js"

const playlist = [];

export default function createPlaylist(max){

    console.log(playlist)
a
    if(playlist.length !== max){

        let song = getRandom(max);

        if(playlist.includes(song)){
            createPlaylist(max);
        }else{
            playlist.push(song);
            createPlaylist(max)
        }
    }

    return playlist;
}*/