//La API getUserMedia debe ser ejecutada en un entorno servidor para su funcionamiento

var video = document.querySelector('#video');

navigator.webcam = (
    navigator.msGetUserMedia || //Para IE
    navigator.mosGetUserMedia ||   //Para FireFox
    navigator.webkitGetUserMedia ||
    navigator.getUserMedia
);

//navigator.webcam({options}. success, error) --> Éstos son los 3 parámetros necesarios

function success(stream)  //stream -> transmisión
{
    video.src = window.URL.createObjectURL(stream);
    video.play();
}

function error(error)
{
    alert('Error al acceder a la webcam');
    console.log(error);
}

navigator.webcam({ video: true, audio:true }, success, error);