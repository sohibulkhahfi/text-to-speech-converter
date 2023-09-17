let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  // Hapus opsi yang ada sebelum menambahkan yang baru
  voiceSelect.innerHTML = "";

  for (let i = 0; i < voices.length; i++) {
    let option = new Option(voices[i].name, i);
    voiceSelect.appendChild(option);
  }
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
