let progress1 = document.getElementById("progress");
        let song1 = document.getElementById("song");
        let dimage = document.getElementById("ctrlIcon");
        let nextbutton = document.getElementById("nextbtn");
        let prevbutton = document.getElementById("prevbtn");
        let songName = document.getElementById("tittle");
        let artistName2 = document.getElementById("artist");
        let sound = document.getElementById("volume")
        let thumbnail = document.getElementById("animat")
        const playlist1=document.getElementById("playlist")

        let currentSongIndex = 0;
        let currentSongNameIndex = 0
        let Song_name = [
            {
                songName: "Laila Laila_320(Ghantalele.com).mp3",
                artistName: "Amit tirvedi",
                src: "./assets/thubnail/laila laila.png",
                path: "./assets/audio/Laila Laila_320(Ghantalele.com).mp3",


            },
            {
                songName: "Daku_320(PagalWorld.cm).mp3",
                artistName: "Indrapal Mongal",
                src: "./assets/thubnail/daku.png",
                path:"./assets/audio/Daku_320(PagalWorld.cm).mp3",

            },
            {
                songName: "Maan Meri Jaan_320(PagalWorld.cm).mp3",
                artistName: "King",
                src: "./assets/thubnail/maan meri jaan.png",
                path: "./assets/audio/Maan Meri Jaan_320(PagalWorld.cm).mp3",


            },
            {
                songName: "What Jhumka_320(PagalWorld.cm).mp3",
                artistName: "Arjit Singh , Jonita Gandhi",
                src: "./assets/thubnail/jhumka.png",
                path: "./assets/audio/What Jhumka_320(PagalWorld.cm).mp3",

            }
            ,
            {
                songName: "Routine.mp3",
                artistName: "Jasmine Sandal",
                src: "./assets/thubnail/routine.png",
                path: "./assets/audio/Routine.mp3",

            },
            {
                songName: "Check Kar-320kbps-(pagalworld.network).mp3",
                artistName: "Paradox",
                src: "./assets/thubnail/check_kar.png",
                path:"./assets/audio/Check Kar - 320Kbps-(Pagalworld.network).mp3",

            }
              // Add more songs as needed
        ]
    
        console.log(Song_name)
        function playCurrentSong() {
            song1.src = Song_name[currentSongNameIndex].path;
            songName.textContent = Song_name[currentSongNameIndex].songName
            artistName2.textContent = Song_name[currentSongNameIndex].artistName
            animat.src = Song_name[currentSongNameIndex].src

            song1.play();
        }

        song1.onloadeddata = function () {
            progress1.max = song1.duration;
            progress1.value = song1.currentTime;
        }

        function changeImg() {


            if (dimage.src.match('./assets/images/play-solid.svg')) {
                dimage.src = './assets/images/pause-solid.svg';
                song1.play();
                let animat1 = document.getElementById("animat").style.animationPlayState = "running";
            }
            else if (dimage.src.match('./assets/images/pause-solid.svg')) {
                dimage.src = './assets/images/play-solid.svg';
                animat1 = document.getElementById("animat").style.animationPlayState = "paused";

                song1.pause();
            }
        }
        if (song1.play()) {
            setInterval(() => {
                progress1.value = song1.currentTime;
            }, 500);
        }
        progress1.onchange = function () {
            song1.play();
            song1.currentTime = progress1.value;
            dimage.src = './assets/images/pause-solid.svg';
        }
        function previoustrack() {
            if (currentSongNameIndex > 0) {
                // currentSongIndex--;
                currentSongNameIndex--;

            } else {
                // Wrap around to the last song if at the beginning
                // currentSongIndex = playlist.length - 1;
                currentSongNameIndex = Song_name.length - 1;
            }
            playCurrentSong();
        }
        function nextButton() {

            if (currentSongNameIndex < Song_name.length - 1) {
                // currentSongIndex++;
                currentSongNameIndex++;
            } else {
                // Wrap around to the first song if at the end
                // currentSongIndex = 0;
                currentSongNameIndex = 0;
            }
            playCurrentSong();
        }
        function player() {
            song1.currentTime = 0;
            currentSongNameIndex++;
            playCurrentSong();


        }
        function setVolume() {
    song.volume = volume.value;
}

volume.addEventListener("input", () => {
    setVolume();
});
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        event.preventDefault(); // Prevent scrolling on spacebar press
        if (song1.pause) {
           song1.play();
        } else {
            song1.paused();
        }
    }
});

  
