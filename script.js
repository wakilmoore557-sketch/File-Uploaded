let songs = JSON.parse(localStorage.getItem("songs")) || [];

function displaySongs() {
    let container = document.getElementById("songsContainer");
    container.innerHTML = "";

    if (songs.length === 0) {
        container.innerHTML = "<p style='text-align:center;'>No songs available.</p>";
        return;
    }

    songs.forEach((song, index) => {
        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${song.cover}" alt="cover">
            <h3>${song.artist}</h3>

            <audio id="audio${index}" src="${song.music}"></audio>

            <div class="controls">
                <button onclick="playSong(${index})">▶ Play</button>
                <button onclick="pauseSong(${index})">⏸ Pause</button>

                <br>

                <label>Speed:</label>
                <select onchange="changeSpeed(${index}, this.value)">
                    <option value="1">1x</option>
                    <option value="1.5">1.5x</option>
                    <option value="2">2x</option>
                </select>

                <br>

                <a href="${song.music}" download>
                    <button>⬇ Download</button>
                </a>
            </div>
        `;

        container.appendChild(card);
    });
}

function playSong(index) {
    document.getElementById("audio" + index).play();
}

function pauseSong(index) {
    document.getElementById("audio" + index).pause();
}

function changeSpeed(index, speed) {
    document.getElementById("audio" + index).playbackRate = speed;
}

displaySongs();
