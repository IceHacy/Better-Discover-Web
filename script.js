document.addEventListener("DOMContentLoaded", function() {
    const musicDir = 'assets/music/';
    fetch(musicDir)
        .then(response => response.text())
        .then(text => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/html');
            const files = [...doc.querySelectorAll('a')]
                .map(link => link.getAttribute('href'))
                .filter(href => href.endsWith('.mp3'));
            if (files.length > 0) {
                const randomIndex = Math.floor(Math.random() * files.length);
                const randomFile = files[randomIndex];
                const audioPlayer = document.getElementById('audioPlayer');
                audioPlayer.src = musicDir + randomFile;
                audioPlayer.play();
            } else {
                console.error('No music files found.');
            }
        })
        .catch(error => console.error('Error fetching music files:', error));
});
