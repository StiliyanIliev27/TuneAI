// Първоначални песни за зареждане
const initialSongs = {
    happy: [
        { title: "Happy", artist: "Pharrell Williams", url: "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH" },
        { title: "I Gotta Feeling", artist: "The Black Eyed Peas", url: "https://open.spotify.com/track/2H1047e0oMSj10dgp7p2VG" },
        { title: "Don't Stop Believin'", artist: "Journey", url: "https://open.spotify.com/track/4bHsxqR3GMrXTxEPLuK5ue" },
        { title: "Walking on Sunshine", artist: "Katrina & The Waves", url: "https://open.spotify.com/track/05wIrZSwuaVWhcv5FfqeH0" },
        { title: "Uptown Funk", artist: "Mark Ronson, Bruno Mars", url: "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS" },
        { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", url: "https://open.spotify.com/track/1WkMMavIMc4JZ8cfMmxHkI" },
        { title: "Good as Hell", artist: "Lizzo", url: "https://open.spotify.com/track/3Yh9lZcWyKrK9GjbhuS0hR" },
        { title: "Best Day of My Life", artist: "American Authors", url: "https://open.spotify.com/track/2wqaekenSQZm4kbL82sugb" },
        { title: "Shake It Off", artist: "Taylor Swift", url: "https://open.spotify.com/track/0cqRj7pUJDkTCEsJkx8snD" },
        { title: "September", artist: "Earth, Wind & Fire", url: "https://open.spotify.com/track/2grjqo0Frpf2okIBiifQKs" }
    ],
    sad: [
        { title: "Someone Like You", artist: "Adele", url: "https://open.spotify.com/track/4kflIGfjdZJW4ot2ioixTB" },
        { title: "All By Myself", artist: "Celine Dion", url: "https://open.spotify.com/track/0gsl92EMIScPGV1AU35nuD" },
        { title: "Yesterday", artist: "The Beatles", url: "https://open.spotify.com/track/3BQHpFgAp4l80e1XslIjNI" },
        { title: "Say Something", artist: "A Great Big World, Christina Aguilera", url: "https://open.spotify.com/track/6Vc5wAMmXdKIAM7WUoEb7N" },
        { title: "Mad World", artist: "Gary Jules", url: "https://open.spotify.com/track/3JOVTQ5h8HGFnDdp4VT3MP" },
        { title: "The Sound of Silence", artist: "Simon & Garfunkel", url: "https://open.spotify.com/track/3YRCqOhFifThpSRFJ1VWFM" },
        { title: "Hurt", artist: "Johnny Cash", url: "https://open.spotify.com/track/28cnXtME493VX9NOw9cIUh" },
        { title: "Fix You", artist: "Coldplay", url: "https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q" },
        { title: "Skinny Love", artist: "Bon Iver", url: "https://open.spotify.com/track/4EyPadLFhtWoVYIr3qBmKs" },
        { title: "Hallelujah", artist: "Jeff Buckley", url: "https://open.spotify.com/track/74X1epeRufHckhuX1KFD04" }
    ],
    angry: [
        { title: "Break Stuff", artist: "Limp Bizkit", url: "https://open.spotify.com/track/5cZqsjVs6MevCnAkasbEOX" },
        { title: "Bulls On Parade", artist: "Rage Against The Machine", url: "https://open.spotify.com/track/1zQEJNqNe3zFLwGNNvbnKt" },
        { title: "Given Up", artist: "Linkin Park", url: "https://open.spotify.com/track/3t3aTd2Gf9jYkYwn8EISk1" },
        { title: "Down With The Sickness", artist: "Disturbed", url: "https://open.spotify.com/track/40rvBMQizxkIqnjPdEWY1v" },
        { title: "I Hate Everything About You", artist: "Three Days Grace", url: "https://open.spotify.com/track/0M955bMOoilikPXwKLYpoi" },
        { title: "Killing In The Name", artist: "Rage Against The Machine", url: "https://open.spotify.com/track/59WN2psjkt1tyaxjspN8fp" },
        { title: "Bodies", artist: "Drowning Pool", url: "https://open.spotify.com/track/2ZvrvbQNrHKwjT7qfGFFUW" },
        { title: "Last Resort", artist: "Papa Roach", url: "https://open.spotify.com/track/5W8YXBz9MTIDyrpYaCg2Ky" },
        { title: "One Step Closer", artist: "Linkin Park", url: "https://open.spotify.com/track/4wTMBYRE6qKXtZvGf8x7SP" },
        { title: "Click Click Boom", artist: "Saliva", url: "https://open.spotify.com/track/7LygtNjQ65PSdzVjUnHXAz" }
    ],
    chill: [
        { title: "Weightless", artist: "Marconi Union", url: "https://open.spotify.com/track/1ZqHjApl3pfzwjwxMxIyoG" },
        { title: "Gymnopédie No.1", artist: "Erik Satie", url: "https://open.spotify.com/track/5NGtFXVpXSvwunEIGeviY3" },
        { title: "The Girl I Haven't Met", artist: "kudasai", url: "https://open.spotify.com/track/7eJMfftS33KTjuF7lTsMCx" },
        { title: "Midnight City", artist: "M83", url: "https://open.spotify.com/track/1eyzqe2QqGZUmfcPZtrIyt" },
        { title: "Flightless Bird, American Mouth", artist: "Iron & Wine", url: "https://open.spotify.com/track/0tC9IhOCi9Y6nrJiJDwAvi" },
        { title: "Porcelain", artist: "Moby", url: "https://open.spotify.com/track/2UKYMN7VnsQo40n0qCt6Sa" },
        { title: "Fade Into You", artist: "Mazzy Star", url: "https://open.spotify.com/track/1LzNfuep1bnAUR9skqdHCK" },
        { title: "Intro", artist: "The xx", url: "https://open.spotify.com/track/0LHqNFxbGKk6Y7ByxXBUhD" },
        { title: "Avril 14th", artist: "Aphex Twin", url: "https://open.spotify.com/track/43ddJFnP8m3PzNJXiHuiyJ" },
        { title: "Coffee", artist: "beabadoobee", url: "https://open.spotify.com/track/2NBQmPrOEEjA8VbeWOQGxO" }
    ],
    energetic: [
        { title: "Eye of the Tiger", artist: "Survivor", url: "https://open.spotify.com/track/2KH16WveTQWT6KOG9Rg6e2" },
        { title: "Stronger", artist: "Kanye West", url: "https://open.spotify.com/track/4fzsfWzRhPawzqhX8Qt9F3" },
        { title: "Titanium", artist: "David Guetta, Sia", url: "https://open.spotify.com/track/0lHAMNU8RGiIObScrsRgmP" },
        { title: "Levels", artist: "Avicii", url: "https://open.spotify.com/track/5UqCQaDshqbIk3pkhy4Pjg" },
        { title: "Don't Stop Me Now", artist: "Queen", url: "https://open.spotify.com/track/5T8EDUDqKcs6OSOwEsfqG7" },
        { title: "Pump It", artist: "The Black Eyed Peas", url: "https://open.spotify.com/track/3ffaUxvW7K6ng8wY2qDwEe" },
        { title: "Sandstorm", artist: "Darude", url: "https://open.spotify.com/track/24CXuh2WNpgeSYUOvz14jk" },
        { title: "Till I Collapse", artist: "Eminem", url: "https://open.spotify.com/track/4xkOaSrkexMciUUogZKVTS" },
        { title: "All Star", artist: "Smash Mouth", url: "https://open.spotify.com/track/3cfOd4CMv2snFaKAnMdnvK" },
        { title: "Can't Hold Us", artist: "Macklemore & Ryan Lewis", url: "https://open.spotify.com/track/3bidbhpOYeV4knp8AIu8Xn" }
    ],
    romantic: [
        { title: "All of Me", artist: "John Legend", url: "https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a" },
        { title: "Perfect", artist: "Ed Sheeran", url: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v" },
        { title: "At Last", artist: "Etta James", url: "https://open.spotify.com/track/7HGNYPmbDrMkylWqeFCOIQ" },
        { title: "Make You Feel My Love", artist: "Adele", url: "https://open.spotify.com/track/0084SdvRFf9MxVHrvDJuP6" },
        { title: "Thinking Out Loud", artist: "Ed Sheeran", url: "https://open.spotify.com/track/1TKYPzH66GwsqyJFKFkBHQ" },
        { title: "Just the Way You Are", artist: "Bruno Mars", url: "https://open.spotify.com/track/7BqBn9nzAq8spo5e7cZ0dJ" },
        { title: "Can't Help Falling in Love", artist: "Elvis Presley", url: "https://open.spotify.com/track/44AyOl4qVkzS48vBsbNXaC" },
        { title: "Your Song", artist: "Elton John", url: "https://open.spotify.com/track/38zsOOcu31XbbYj9BIPACA" },
        { title: "The Way You Look Tonight", artist: "Frank Sinatra", url: "https://open.spotify.com/track/4W2qHUUDxRS4QiZvqoCbAO" },
        { title: "Endless Love", artist: "Diana Ross & Lionel Richie", url: "https://open.spotify.com/track/5anCkDvJ17aznvK5TED5uo" }
    ]
};

// Проверяваме дали има запазени песни в localStorage
let songDatabase = JSON.parse(localStorage.getItem('songDatabase'));

// Ако няма песни или базата данни е празна, зареждаме първоначалните песни
if (!songDatabase || Object.keys(songDatabase).length === 0 || 
    Object.values(songDatabase).every(arr => arr.length === 0)) {
    songDatabase = JSON.parse(JSON.stringify(initialSongs)); // Дълбоко копиране
    localStorage.setItem('songDatabase', JSON.stringify(songDatabase));
}

// Функция за запазване на базата данни в localStorage
function saveSongDatabase() {
    localStorage.setItem('songDatabase', JSON.stringify(songDatabase));
}

// Функция за връщане към първоначалните песни
function resetToInitialSongs() {
    songDatabase = JSON.parse(JSON.stringify(initialSongs));
    saveSongDatabase();
    window.location.reload(); // Презареждаме страницата
}

// Правим функцията глобално достъпна
window.resetToInitialSongs = resetToInitialSongs;

function getRandomSongs(mood, count = 3) {
    const moodSongs = songDatabase[mood];
    const shuffled = [...moodSongs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

document.addEventListener('DOMContentLoaded', () => {
    const moodSelect = document.querySelector('select');
    const searchButton = document.querySelector('button[type="submit"]');
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'results-container mt-4';
    
    document.querySelector('form').after(resultsContainer);

    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedMood = moodSelect.value;
        
        if (selectedMood === 'Select mood') {
            resultsContainer.innerHTML = `
                <div class="alert alert-warning" role="alert">
                    Please select a mood
                </div>`;
            return;
        }

        const songs = getRandomSongs(selectedMood);
        
        resultsContainer.innerHTML = `
            <h5 class="mb-3">Recommended Songs for ${selectedMood} mood:</h5>
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead class="table-light">
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Artist</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${songs.map(song => `
                            <tr>
                                <td>${song.title}</td>
                                <td>${song.artist}</td>
                                <td>
                                    <div class="btn-group btn-group-sm">
                                        <button class="btn btn-primary btn-sm player-button" 
                                                onclick="playPreview('${song.url}')">
                                            <i class="fa-solid fa-play"></i>
                                        </button>
                                        <a href="${song.url}" 
                                           target="_blank" 
                                           class="btn btn-outline-success btn-sm">
                                            <i class="fa-brands fa-spotify"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    });
});

function playPreview(url) {
    const playerContainer = document.getElementById('player-container');
    const player = document.getElementById('spotify-player');
    
    // Конвертиране на нормален Spotify URL към embed URL
    const embedUrl = url.replace('track/', 'embed/track/');
    
    player.src = embedUrl;
    player.style.display = 'block'; // Показваме iframe-а
} 