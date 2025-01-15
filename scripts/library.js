document.addEventListener('DOMContentLoaded', () => {
    const libraryTableBody = document.getElementById('library-songs');
    const playerModal = new bootstrap.Modal(document.getElementById('playerModal'));
    const modalElement = document.getElementById('playerModal');
    const spotifyPlayer = document.getElementById('spotifyPlayer');
    
    // Добавяме слушател за затваряне на модалния прозорец
    modalElement.addEventListener('hidden.bs.modal', () => {
        // Спираме песента като изчистваме src на iframe
        spotifyPlayer.src = '';
    });
    
    async function playPreview(url) {
        try {
            // Извличаме ID на песента от URL
            const trackId = url.split('track/')[1];
            
            // Задаваме embed URL за плейъра
            const embedUrl = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`;
            spotifyPlayer.src = embedUrl;
            
            // Показваме модалния прозорец
            playerModal.show();
        } catch (error) {
            console.error('Error loading player:', error);
            alert('Error loading the player. Please try again.');
        }
    }
    
    function removeSong(mood, title, artist) {
        // Намираме индекса на песента в съответното настроение
        const songIndex = songDatabase[mood].findIndex(
            song => song.title === title && song.artist === artist
        );
        
        if (songIndex > -1) {
            // Премахваме песента от масива
            songDatabase[mood].splice(songIndex, 1);
            // Запазваме промените в localStorage
            saveSongDatabase();
            // Презареждаме таблицата
            loadSongs();
        }
    }
    
    function loadSongs() {
        const allSongs = Object.entries(songDatabase).flatMap(([mood, songs]) => 
            songs.map(song => ({...song, mood}))
        );
        
        allSongs.sort((a, b) => a.title.localeCompare(b.title));
        
        libraryTableBody.innerHTML = allSongs.map(song => `
            <tr>
                <td>${song.title}</td>
                <td>${song.artist}</td>
                <td><span class="mood-badge mood-${song.mood}">${song.mood}</span></td>
                <td>
                    <div class="btn-group btn-group-sm">
                        <button class="btn btn-primary btn-sm" 
                                onclick="playPreview('${song.url}')">
                            <i class="fa-solid fa-play"></i>
                        </button>
                        <a href="${song.url}" 
                           target="_blank" 
                           class="btn btn-outline-success btn-sm">
                            <i class="fa-brands fa-spotify"></i>
                        </a>
                        <button class="btn btn-danger btn-sm" 
                                onclick="removeSong('${song.mood}', '${song.title.replace(/'/g, "\\'")}', '${song.artist.replace(/'/g, "\\'")}')">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }
    
    // Правим функциите глобално достъпни
    window.playPreview = playPreview;
    window.removeSong = removeSong;
    
    // Зареждаме песните първоначално
    loadSongs();
});