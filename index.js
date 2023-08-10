let speech = new SpeechSynthesisUtterance();


let voices = [];

let voiceSelect = documebnt.querySelector("select");
window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voices = voices[0];


    voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name,i)));
};

voiceSelect.addEventListner("change", () =>{
    speech.voice = voices[voiceSelect.value]
})


document.querySelector("button").addEventListner("click",()=>{
    speech.text = document.querySelector("textarea").value;
    console.log('speech')
    window.speechSynthesis.speak(speech);
}) 