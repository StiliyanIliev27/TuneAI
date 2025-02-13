document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('addSongForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const titleInput = document.getElementById('songTitle');
        const artistInput = document.getElementById('artistName');
        const urlInput = document.getElementById('spotifyUrl');
        const moodInput = document.getElementById('mood');

        if (!titleInput.value || !artistInput.value || !urlInput.value || !moodInput.value) {
            alert('Please fill in all fields');
            return;
        }

        if (!urlInput.value.includes('spotify.com/track/')) {
            alert('Please enter a valid Spotify track URL');
            return;
        }

        const newSong = {
            title: titleInput.value.trim(),
            artist: artistInput.value.trim(),
            url: urlInput.value.trim()
        };

        try {
            if (songDatabase[moodInput.value]) {
                songDatabase[moodInput.value].push(newSong);
                saveSongDatabase();
                alert('Song added successfully!');
                form.reset();
                window.location.href = 'library.html';
            } else {
                alert('Invalid mood selected');
            }
        } catch (error) {
            console.error('Error adding song:', error);
            alert('Error adding song. Please try again.');
        }
    });
});
