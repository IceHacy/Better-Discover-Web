document.addEventListener("DOMContentLoaded", function() {
    const musicdir = [
        'assets/music/Waterworld - Map.mp3',
        'assets/music/Waterworld - Shop.mp3'
    ];
    const randomIndex = Math.floor(Math.random() * musicdir.length);
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = musicdir[randomIndex];
    audioPlayer.play();
});
