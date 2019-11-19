var regButton = document.getElementById('regButton');
var nameInput = document.getElementById('nameInput');
var name;
regButton.addEventListener('click', function(){
    name = nameInput.value;
    window.location.href = 'chat.html';
});