function startListening() {
    var recognition = new webkitSpeechRecognition();
    console.log("recog", recognition);
    recognition.lang = 'en-US';
    recognition.continuous = true; // Enable continuous speech recognition
    recognition.start();
    recognition.continuous = true;
    document.getElementById('record-status').innerText = 'Listening...';

    recognition.onresult = function(event) {
        var result = event.results[event.results.length - 1][0].transcript; // Get the latest recognized speech
        console.log('Speech recognized:', result);
        displayResponse(result); // Display recognized speech text
        textToSpeech(result)
        animateAvatar(); 
    };

    recognition.onend = function() {
        document.getElementById('quote').innerText = 'Stopped';
        stopAnimatingAvatar();
    };
    function displayResponse(response) {
        document.getElementById('quote').innerText = response; // Display recognized speech text in the 'quote' element
    }
}

function textToSpeech(text) {
    // Use the Web Speech API for basic text-to-speech functionality
    var synth = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}

function animateAvatar() {
    document.getElementById('avatar').classList.add('speaking');
}

function stopAnimatingAvatar() {
    document.getElementById('avatar').classList.remove('speaking');
}



