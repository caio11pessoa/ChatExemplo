var usersList = document.getElementById('usersList');
var nameInput = document.getElementById('nameInput');
var ageInput = document.getElementById('ageInput');
var addButton = document.getElementById('addButton');

//Ao clicar no botão
addButton.addEventListener('click', function(){
    create(nameInput.value, ageInput.value);
});

function create(name, age){
    var data = {
        name: name,
        age: age
    };
    return firebase.database().ref().child('users').push(data);
};
firebase.database().ref('users').on('value', function (snapshot){
    usersList.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().name + ': ' + item.val().age));//Posso adicionar algo como mensagem bem aqui, para podermos fazer tipo um batpapo
        usersList.appendChild(li);
    });
});