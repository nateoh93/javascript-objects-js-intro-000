///var playlist = {artistName: 'songTitle'}

//function createPlaylist (playlist, artistName, songTitle) {
  //playlist[artistName] = songTitle
  //return playlist
//}
var playlist = {1:1}

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist
}
