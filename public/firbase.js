var firebaseConfig = {
    apiKey: "AIzaSyBXA3XUbu2bVj5qUXIbbxo5Zgwwlj0Oqnk",
    authDomain: "deber1-c1092.firebaseapp.com",
    databaseURL: "https://deber1-c1092.firebaseio.com",
    projectId: "deber1-c1092",
    storageBucket: "",
    messagingSenderId: "462971611989",
    appId: "1:462971611989:web:45937e1acb22b5c2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var database = firebase.database();


var txtNombre = document.getElementById("nombre");
var txtMensaje = document.getElementById("mensaje");
var btnEnviar = document.getElementById("btnEnviar");
var chatUl = document.getElementById("chatUL");


btnEnviar.addEventListener("click", function () {
    var nombre = txtNombre.value;
    var mensaje = txtMensaje.value;
    var d = new Date();
    var hora = d.getHours();
    var minutos = d.getMinutes();



    firebase.database().ref('chat').push({
        name: nombre,
        message: mensaje,
        hour:hora,
        minutes:minutos
    });
});


var referencia = database.ref("chat");
var tabla = document.getElementById('tbLeer');
var chat = {};

referencia.on("value", function (datos) {
    chat = datos.val();
    tabla.innerHTML="";
    var html ="";
    $.each(chat, function (indice, valor) {
        var nombre = valor.name;
        var mensaje = valor.message;
        var hora = valor.hour;
        var minutos = valor.minutes;

        html = nombre + " " + mensaje+" ";
        

        if(nombre == undefined){
            
        }else{
            tabla.innerHTML += ` 
        <tr>
            <td><span style="color: #0b1f96;">${nombre}&nbsp&nbsp&nbsp</span></td>
            <td><span >${mensaje}&nbsp&nbsp&nbsp</span></td>
            <td><span style="float: right;">${hora}</span></td>
            <td><span >:${minutos}</span></td>
        </tr>
        `
        document.getElementById("nombre").value="";
        document.getElementById("mensaje").value="";
        }

    });

});



