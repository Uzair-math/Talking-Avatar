// IMOPORTED!
let playSound = true;
let currentAudio = null;
let alreadyPlayed = false;


const synth = new Animalese('animalese/animalese.wav', function() {
  // document.getElementById('preview').disabled = false;
  // document.getElementById('download').disabled = false;
});

document.onfocus = function() {
  playSound = true;
};

document.onblur = function() {
  playSound = false;
  currentAudio.pause();
  currentAudio.currentTime = 0;
};

function toggleAudio() {
  playSound = !playSound;

  if (!playSound) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}

export function playAudioWav(wavUrl) {
  if (!playSound) { return; }
  const audio = new Audio(wavUrl);
  audio.volume = 1;
  currentAudio = audio;
  audio.play();
}

export function playAudio(text, shorten = false, pitch = 0.7) {
  if (!playSound) { return; }
  var audio = new Audio();
  audio.src = generateWav(text, shorten, pitch);
  audio.volume = 0.3;
  currentAudio = audio;
  audio.play();
}

function generateWav(text, shorten = false, pitch = 0.7) {
  return synth.Animalese(`${ text }`,
  shorten,
  pitch).dataURI;
}