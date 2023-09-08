let progress1 = document.getElementById("progress");
let song1 = document.getElementById("song");
let dimage = document.getElementById("ctrlIcon");
let nextbutton = document.getElementById("nextbtn");
let prevbutton = document.getElementById("prevbtn");
let songName = document.getElementById("tittle");
let artistName2 =document.getElementById("artist");

let currentSongIndex = 0;
let currentSongNameIndex = 0
let playlist = [
    "./assets/audio/Laila Laila_320(Ghantalele.com).mp3",
    "./assets/audio/Daku_320(PagalWorld.cm).mp3",
    "./assets/audio/Maan Meri Jaan_320(PagalWorld.cm).mp3",
    "./assets/audio/What Jhumka_320(PagalWorld.cm).mp3",
    "./assets/audio/Routine.mp3",
    "./assets/audio/Check Kar - 320Kbps-(Pagalworld.network).mp3",

    // Add more songs as needed
];
let Song_name=[
{
songName: "Laila Laila_320(Ghantalele.com).mp3",
artistName: "Amit tirvedi"
},
{
songName: "Daku_320(PagalWorld.cm).mp3",
artistName: "Indrapal Mongal"
},
{
songName: "Maan Meri Jaan_320(PagalWorld.cm).mp3",
artistName: "King"

},
{
songName: "What Jhumka_320(PagalWorld.cm).mp3",
artistName: "Arjit Singh , Jonita Gandhi"
}
,
{
songName: "Routine.mp3",
artistName: "Jasmine Sandal"
},
{
songName: "Check Kar-320kbps-(pagalworld.network).mp3",
artistName: "Paradox"
}
]
console.log(playlist);
console.log(Song_name)
function playCurrentSong() {
    song1.src = playlist[currentSongIndex];
    songName.textContent = Song_name[currentSongNameIndex].songName
    artistName2.textContent =Song_name[currentSongNameIndex].artistName
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
    if (currentSongIndex > 0) {
        currentSongIndex--;
       currentSongNameIndex--;

    } else {
        // Wrap around to the last song if at the beginning
        currentSongIndex = playlist.length - 1;
        currentSongNameIndex = song_.length - 1;
    }
    playCurrentSong();
}
function nextButton() {

    if (currentSongIndex < playlist.length - 1) {
        currentSongIndex++;
        currentSongNameIndex++;
    } else {
        // Wrap around to the first song if at the end
        currentSongIndex = 0;
        songName.textContent = currentSongNameIndex = 0;
    }
    playCurrentSong();
}
function player() {
    song1.currentTime = 0;
    currentSongIndex++;
   currentSongNameIndex++;
    playCurrentSong();


}