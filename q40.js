// making album function
function make_Album(artist_Name, album_Title, tracks) {
    let album = {
        artist: artist_Name,
        title: album_Title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions with different values
let new_album1 = make_Album("Atif Aslam", "album title no 1");
let new_album2 = make_Album("Asim Azher", "album title no2");
let new_album3 = make_Album("Hadika Kiyani", "album title 3", 10);
console.log(new_album1);
console.log(new_album2);
console.log(new_album3);
export {};
