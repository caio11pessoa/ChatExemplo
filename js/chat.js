var usersList = document.getElementById('usersList');
var messageInput = document.getElementById('messageInput');
var addButton = document.getElementById('addButton');
var nome = registrado;
var addButton = document.getElementById('addButton');
var nameInput = document.getElementById('nameInput');

//Ao clicar no botão
addButton.addEventListener('click', function(){
    create(messageInput.value);
    messageInput.value = ''
});
function create(message){

    return firebase.database().ref().child('chat').push(nome + ': ' + message);
};

/*firebase.database().ref('chat').on('value', function (snapshot){
    usersList.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val() ));//Posso adicionar algo como mensagem bem aqui, para podermos fazer tipo um batpapo
        usersList.appendChild(li);
    });
});*/

firebase.database().ref('chat').on('value', function (snapshot){
    usersList.innerHTML = '';
    snapshot.forEach(function(item) {
        var chat = document.createElement('div');
        chat.appendChild(document.createTextNode(item.val()));
        usersList.appendChild(chat);
    });

});