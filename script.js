// Grab all the drum pads and the display element
const pads = document.querySelectorAll('.drum-pad');
const display = document.getElementById('display');

// Map the keyboard keys to the respective drum pads
const keyMap = {
  'Q': 'Heater-1',
  'W': 'Heater-2',
  'E': 'Heater-3',
  'A': 'Heater-4',
  'S': 'Clap',
  'D': 'Open-HH',
  'Z': 'Kick_n_Hat',
  'X': 'Kick',
  'C': 'Closed-HH'
};

// Add event listeners to each drum pad
pads.forEach(pad => {
  pad.addEventListener('click', () => {
    playAudio(pad.id);
  });
});

// Play audio when a drum pad is clicked or key is pressed
function playAudio(id) {
  const audio = document.getElementById(id + '-audio');
  if (audio) {
    audio.currentTime = 0; // Rewind to the start
    audio.play();
    display.innerText = keyMap[id]; // Update the display with the pad's sound name
  }
}

// Add event listeners for key press (Q, W, E, A, S, D, Z, X, C)
document.addEventListener('keydown', (e) => {
  const key = e.key.toUpperCase(); // Make the key uppercase to match the pad ids
  if (keyMap[key]) {
    playAudio(key);
  }
});
